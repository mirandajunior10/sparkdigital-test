import React from "react";
import { Animal } from "../../@types";

import { Container, DescriptionContainer } from "./styles";

interface AnimalItemProps {
  animal: Animal;
}

const AnimalItem: React.FC<AnimalItemProps> = ({ animal }) => {
  return (
    <Container>
      {animal.image && <img src={animal.image} alt="" />}
      <DescriptionContainer>
        <p>
          <b>Name</b>: {animal.name}
        </p>
        <p>
          <b>Scientific Name</b>: {animal.taxonomy.scientificName}
        </p>
      </DescriptionContainer>
    </Container>
  );
};

export default AnimalItem;
