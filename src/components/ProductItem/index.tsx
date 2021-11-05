import React from "react";
import { Product } from "../../@types";
import { Container, DescriptionContainer, PreviewText } from "./styles";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Container>
      {product.image && <img src={product.image} alt="" />}
      <DescriptionContainer>
        <p>
          <b>Name</b>: {product.name}
        </p>
        <p>
          <b>Category</b>: {product.productCategory}
        </p>
        <PreviewText>
          <b>Description</b>: {product.previewText}
        </PreviewText>
      </DescriptionContainer>
    </Container>
  );
};

export default ProductItem;
