import styled from 'styled-components'
import { DEVICE } from '../../styles/device'

export const Container = styled.div`
  main {
    width: 100%;
    margin-inline: auto;
    margin-top: 1.1rem;
    padding-inline: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .backToPage {
      display: flex;
      flex-direction: row;
      align-items: center;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.6rem;
      font-family: 'Poppins', sans-serif;
      cursor: pointer;
    }

    h2 {
      font-size: 3.2rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 140%;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 5.5rem;

  .inputBox {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .fileInputBox {
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    height: 4.8rem;
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    border-radius: .8rem;
    cursor: pointer;

    > label {
      position: absolute;
      left: 5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem; 
    }

    #fileInput {
      display: none;
    }
  }

  .titleInput {
    p {
     margin-bottom: 0.8rem;
    }
  }

  .selectBox {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    select {
      width: 100%;
      height: 4.8rem;
      font-size: 1.6rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      min-width: 31.6rem;
      padding: 1.2rem 1.4rem;
      background-color: ${({theme}) => theme.COLORS.DARK_200};
      border: none;
      border-radius: .8rem;
    }
  }

  .ingredientsFormBox {
    height: fit-content;
    background: ${({theme}) => theme.COLORS.DARK_200};
    border-radius: .8rem;
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: .8rem;
    margin-top: .8rem;
  }

  textarea {
    width: 100%;
    height: 27.5rem;
    background: ${({theme}) => theme.COLORS.DARK_200};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border: none;
    resize: none;
    padding: 1.4rem;
    border-radius: 1rem;
    margin-top: 1rem;
  }

  #sendButton {
    background: ${({theme}) => theme.COLORS.RED_100};
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  ${DEVICE.lg} {
    .inputBox {
      display: flex;
      flex-direction: row;
      gap: 3.2rem;
      align-items: end;

      .fileInputBox {
        width: 22rem;
      }

      .selectBox {
        width: 36rem;
      }

      .ingredients {
        flex:90%
      }

      .textarea {
        flex: 100%;
      }

    }

    #sendButton {
      width: 17.2rem;
      align-self: flex-end;
    }
  }
  
`
