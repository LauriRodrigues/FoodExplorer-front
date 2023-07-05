import styled from "styled-components"
import { DEVICE } from '../../styles/device'

export const Container = styled.div`
  width: 100%;
  
  main {
    width: 32rem;
    min-height: 68rem;
    margin-inline: auto;
    margin-top: 1.6rem;

    display: flex;
    flex-direction: column;

    .backToPage {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 2rem;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2.4rem;
      font-family: 'Poppins', sans-serif;
      cursor: pointer;
    }

    .ingredientBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      width:100%;

      .mealPreview {
        width: 26.4rem;
      }

      .ingredientTextContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .mealTitle {
          font-family: 'Poppins', sans-serif;
          font-size: 2.7rem;
          font-weight: 500;
          line-height: 140%;
        }

        .mealDescription {
          text-align: center;
          margin-block: 2.4rem;
        }

        .ingredients {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.4rem;
          flex-wrap: wrap;
          margin-bottom: 4.8rem;
        }
      }

      .order {
        display: flex;
        flex-direction: row;
        gap: 2rem;

        .receiptButton {
          width: 19rem;
        }
      }
    }
  }

  ${DEVICE.lg} {
    main {
      width: 100%;
      padding-inline: 10rem;
      height: calc(100vh - 20rem);

      .ingredientBox {
        display: flex;
        flex-direction: row;
        gap: 4.7rem;
        margin-top: 4.2rem;

        img {
          max-width: 39rem;
        }

        .ingredientTextContent {
          align-items: flex-start;

          .mealTitle {
            font-size: 4rem;
          }

          .mealDescription {
            font-size: 2.4rem;
            text-align: left;
          }

          .ingredients {
            justify-content: flex-start;
          }
        }
      }
    }
  }
`