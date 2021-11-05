import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  input {
    flex: 1;
    margin-right: 48px;
    border: 1px solid #696969;
    border-radius: 4px;
  }

  button {
    border: 1px solid black;
    border-radius: 8px;
    background: none;
    cursor: pointer;
  }
`;