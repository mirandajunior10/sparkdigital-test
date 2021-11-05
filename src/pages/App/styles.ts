import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1366px;

`;

export const ItemsContainer = styled.div`
  margin: 0;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Item = styled.div`
  cursor: pointer;
  & + div {
    margin-top: 16px;
  }
`;
export const PaginationContainer = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  span {
    cursor: pointer;
    &.page {
      cursor: initial;
    }
  }
`;
