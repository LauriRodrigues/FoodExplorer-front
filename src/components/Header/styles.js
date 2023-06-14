import styled from 'styled-components'
import { DEVICE } from '../../styles/device'

export const Container = styled.header`
  width: 100vw;
  min-height: 7.7rem;
  padding: 2.5rem 2.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0.8rem 0.8rem 0;
    gap: 1.6rem;
    border: none;
    border-radius: 2px;
    background: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', sans-serif;
    font-size: 2.1rem;

    img {
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }
  }

  nav {
    z-index: 9999;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 5.6rem 2.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: linear-gradient(#001119 114px, #000a0f 114px);

    opacity: 0;
    transform: translateY(-100%);
    transition: all 1s;

    .input {
      margin-top: 6.5rem;
      margin-bottom: 3.6rem;
      width: 100%;
    }
  }

  nav.mobile-menu {
    opacity: 1;
    transform: translateY(0);
  }

  .mobile-button {
    display: block;
    width: 100%;
    height: 5.4rem;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    font-weight: 300;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_100};
  }

  #receiptButton span {
    display: none;
  }

  #exitIcon {
    display: none;
  }

  ${DEVICE.lg} {
    padding-inline: clamp(1rem, 9vw, 12rem);
    gap: 1rem;

    .menu {
      display: none;
    }

    nav {
      background: initial;
      position: initial;
      top: initial;
      left: initial;
      width: initial;
      height: initial;
      padding: initial;
      opacity: initial;
      transform: initial;
      flex-direction: row;
      align-items: center;

      .input {
        margin: initial;
      }

      .mobile-button {
        display: none;
      }
    }

    .navBar {
      width: 100%;
      display: grid;
      grid-template-columns: auto 21.6rem 4rem;
      grid-template-areas: 'search button exit';
      gap: 3rem;

      .input {
        grid-area: search;
      }

      #receiptButton {
        max-width: 21.6rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .8rem;
        background: ${({theme}) => theme.COLORS.RED_400};
        padding: 1.2rem 3.2rem;
        border-radius: .5rem;
      }

      #receiptButton span {
        display: flex;
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
      }

      #exitIcon {
        display: initial;
        grid-area: exit;
      }
    }
  }
`

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .8rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  > h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 2.4rem;
    font-size: 2.1rem;
  }

  ${DEVICE.lg} {
    min-width: 19.7rem;

    > img {
      width: 3rem;
      height: 3rem;
    }

    > h1 {
      font-size: 2.4rem;
    }
  }
`