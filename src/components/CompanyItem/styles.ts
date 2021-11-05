import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 8px;
  border-radius: 8px;
  & + div  {
    margin-top: 16px;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  margin-bottom: 8px;
  h2 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 8px;
  }
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  p + p {
    margin-top:8px;
  }
`;