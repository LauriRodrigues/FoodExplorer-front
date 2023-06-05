import styled from "styled-components"
import { MEDIA } from '../../styles/brakepoints.js'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15.8rem;

  ${MEDIA.DESKTOP} {
    padding: 1rem;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
  }
`

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 7.3rem;

  > img {
    width: 4.3rem;
    height: 4.3rem;
  }
  
  > h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 4.4rem;
    font-size: clamp(1.8rem, 10vw, 3.2rem);
  }

  ${MEDIA.DESKTOP} {
    width: auto;
    gap: 1.9rem;

    > img {
      height: 4.9rem;
      width: 4.9rem;
    }

    > h1 {
      font-size: clamp(3.2rem, 4vw, 4.2rem);
    }
  }
`

export const Form = styled.form`
  width: min(90%, 31.6rem);
  display: flex;
  flex-direction: column;

  > h2, input, button {
    margin-bottom: 3.2rem;
  }

  > h2 {
    display: none;
    text-align: center;
    font-size: 3.2rem;
    font-weight: 500;
  }

  > a {
    text-decoration: none;
    text-align: center;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  ${MEDIA.DESKTOP} {
    min-width: 47.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    border-radius: 1.6rem;
    padding: 6.4rem;

    > h2 {
      display: block;
    }
  }
`