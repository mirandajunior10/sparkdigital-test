import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { Item } from "../@types";
import api from "../services/api";

interface ItemsContextData {
  items: Item[];
  page: number;
  starredItems: Item[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  toggleFavorite: (item: Item) => Promise<void>;
}

const ItemsDataContext = createContext<ItemsContextData>(
  {} as ItemsContextData
);

const ItemsProvider: React.FC = ({ children }) => {
  const [starredItems, setStarredItems] = useState<Item[]>([]);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);

  const fetchItems = useCallback(async () => {
    const response = await api.get<Item[]>("search", {
      params: {
        _page: page,
        _limit: 10,
        q: query,
      },
    });
    let fetchedStarredItems = response.data.filter((item) => item.starred);

    setStarredItems((oldStarredItems) => {
      fetchedStarredItems = fetchedStarredItems.filter(
        (item) => !oldStarredItems.includes(item)
      );

      return [...oldStarredItems, ...fetchedStarredItems];
    });
    setItems(response.data);
  }, [page, query]);

  const toggleFavorite = useCallback(
    async (item: Item) => {
      let newItem = {
        ...item,
        starred: !item.starred,
      };
      if (newItem.starred) {
        setStarredItems((oldItems) => [...oldItems, newItem]);
      } else {
        setStarredItems((oldItems) =>
          oldItems.filter((oldItem) => item.id !== oldItem.id)
        );
      }
      await api.patch(`search/${item.id}`, newItem);
      const foundItem = items.findIndex((item) => item.id === newItem.id);
      if (foundItem > -1) {
        let newItems = [...items];
        newItems[foundItem] = newItem;
        setItems(newItems);
      }
    },
    [items]
  );

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <ItemsDataContext.Provider
      value={{
        items,
        starredItems,
        setPage,
        page,
        query,
        setQuery,
        toggleFavorite,
      }}
    >
      {children}
    </ItemsDataContext.Provider>
  );
};

function useItemsData(): ItemsContextData {
  const context = useContext(ItemsDataContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { ItemsProvider, useItemsData };
