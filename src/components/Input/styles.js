import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: left;

  > p {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  > svg {
        margin-left: 1.8rem;
    }

  > input {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    min-width: 31.6rem;
    padding: 1.2rem 1.4rem;
    margin-top: .8rem;
    background-color: ${({theme}) => theme.COLORS.DARK_200};
    border: none;
    border-radius: .8rem;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }
`