import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 8px;
  border-radius: 8px;
  align-items: center;
  gap: 200px;

  & + div {
    margin-top: 16px;
  }

  img {
    width: 150px;
  }
`;
export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around
`;