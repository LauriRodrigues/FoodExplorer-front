import styled from 'styled-components';
import { DEVICE } from '../../styles/device';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  min-height: 7.7rem;
  padding-inline: 2rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > p {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: right;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  ${DEVICE.lg} {
    padding-inline: 12.3rem;

    > p {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  img {
    height: 1.8rem;
  }

  span {
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  ${DEVICE.lg} {
    img {
      height: 3rem;
    }

    span {
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
  }
`