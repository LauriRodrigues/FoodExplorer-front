import styled from 'styled-components';
import { DEVICE } from '../../styles/device';

import bannerImgSmall from '../../assets/bannerSmall.png'
import bannerImgLarge from '../../assets/bannerLarge.png'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  ${DEVICE.lg} {
    grid-template-rows: 9.6rem auto 7.7rem;
  }
`

export const Content = styled.div`

`

export const Banner = styled.div`
  width: 32.5rem;
  height: 12rem;
  margin: 4.4rem auto 6.2rem ;
  background: ${({ theme }) => theme.COLORS.GRADIENT_100};
  border-radius: 0.3rem;
  display: flex;
  justify-content: end;
  position: relative;
  
  .bannerImg {
    position: absolute;
    bottom: 0;
    left: -3rem;
    width: 19rem;
    min-height: 14.9rem;
    background: url(${bannerImgSmall});
  }

  .bannerText {
    display: flex;
    flex-direction: column;
    gap: .3rem;
    align-items: end;
    font-family: 'Poppins', sans-serif;
    text-align: left;
    max-width: 19rem;
    margin-top: 3.6rem;
    margin-left: 15rem;
    margin-right: 1rem;

    > h3 {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.5rem;
    }

    > p {
      width: 100%;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.7rem;
    }
  }

  ${DEVICE.lg} {
    width: 90rem;
    height: 26rem;
    margin: 7rem auto 6.2rem ;

    .bannerImg {
      bottom: -1rem;
      left: -7rem;
      width: 65.5rem;
      height: 41.2rem;
      background: bottom left no-repeat url(${bannerImgLarge});
    }

    .bannerText {
      max-width: 43rem;
      margin-top: 8.8rem;
      margin-right: 3rem;

      > h3 {
        width: 100%;
        font-size: 4rem;
        font-weight: 500;
        line-height: 5.6rem;
      }

      > p {
        width: 100%;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
      }
    }
  }
`