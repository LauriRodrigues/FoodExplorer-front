import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.4rem;

  > button {
    background: none;
    border: none;
  }
  
  > input {
    width: 2.4rem;
    text-align: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;

    background-color: transparent;
    border: none;
    color: #fff;
  }
`