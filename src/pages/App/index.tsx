import React from "react";
import { Animal, Company, Product, TypesEnum } from "../../@types";
import CompanyItem from "../../components/CompanyItem";
import AnimalItem from "../../components/AnimalItem";
import ProductItem from "../../components/ProductItem";
import Topbar from "../../components/Topbar";
import { useItemsData } from "../../hooks/items";
import { Container, ItemsContainer, Item, PaginationContainer } from "./styles";

const App: React.VFC = () => {
  const { items, toggleFavorite, page, setPage } = useItemsData();
  return (
    <Container>
      <Topbar />
      <ItemsContainer>
        {items.map((item) => (
          <Item key={item.id} onClick={() => toggleFavorite(item)}>
            {item.type === TypesEnum.animal && (
              <AnimalItem animal={item as Animal} />
            )}
            {item.type === TypesEnum.company && (
              <CompanyItem company={item as Company} />
            )}
            {item.type === TypesEnum.product && (
              <ProductItem product={item as Product} />
            )}
          </Item>
        ))}
      </ItemsContainer>
      <PaginationContainer>
        {page > 1 && <span onClick={() => setPage(page - 1)}>previous</span>}
        <span className="page">{page}</span>
        {items.length === 10 && (
          <span onClick={() => setPage(page + 1)}>Next</span>
        )}
      </PaginationContainer>
    </Container>
  );
};

export default App;
