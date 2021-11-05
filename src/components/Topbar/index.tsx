import React from "react";
import { useItemsData } from "../../hooks/items";

import { Container } from "./styles";

const Topbar: React.FC = () => {
  const { starredItems, query, setQuery } = useItemsData();
  return (
    <Container>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>{starredItems.length} Favorites</button>
    </Container>
  );
};

export default Topbar;
