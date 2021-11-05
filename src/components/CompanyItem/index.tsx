import React from "react";
import { Company } from "../../@types";

import { Container, TitleSection, Address } from "./styles";

interface CompanyItemProps {
  company: Company;
}

const CompanyItem: React.FC<CompanyItemProps> = ({ company }) => {
  return (
    <Container>
      <TitleSection>
        <h2>{company.name}</h2>
        <p>{company.description}</p>
      </TitleSection>
      <Address>
        <p>{`${company.address.address1}${
          company.address.address2 ? `, ${company.address.address2}` : ""
        }`}</p>
        <p>{`${company.address.city}, ${company.address.state}, zip code  ${company.address.postalCode}`}</p>
      </Address>
    </Container>
  );
};

export default CompanyItem;
