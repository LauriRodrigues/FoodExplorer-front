import { DEVICE } from '../../styles/device'
import styled from 'styled-components'

export const Container = styled.div`
  width: 21rem;
  height: 29rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  position: relative;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: .8rem;
  transition: all .2s;

  &:hover {
    transform: translateY(3px);
    filter: brightness(1.2);
  }

  > .favButton {
    background: none;
    border: none;
    width: 2.4rem;
    height: 2.4rem;
    margin: 1.6rem;
    position: absolute;
    z-index: 999;
    top: 0;
    right: 0;
    transition: transform .1s;

    &:hover {
      transform: scale(1.1);
    }

    > svg path {
    transition: stroke 1s;
    }

    &:hover svg path {
      stroke: ${({ theme }) => theme.COLORS.RED_300};
    }

  }

  .mealPreview {
    width: 8.8rem;
  }

  .mealTitle {
    width: 100%;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .mealDescription {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;
    text-align: center;
    color:  ${({ theme }) => theme.COLORS.LIGHT_400};
    display: none;
  }

  .mealPrice {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    text-align: center;
    color:  ${({ theme }) => theme.COLORS.BLUE_100};
  }
`
