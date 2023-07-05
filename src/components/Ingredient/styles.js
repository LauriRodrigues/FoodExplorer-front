import styled from "styled-components"

export const Container = styled.div`
  
  .ingredientName {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    padding: .4rem .8rem;
    border-radius: .5rem;
  }
`