import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  background:  ${({ theme, isNew }) => isNew ? "transparent" : 
  theme.COLORS.LIGHT_600};
  color:  ${({ theme }) => theme.COLORS.LIGHT_500};
  border: ${({ theme, isNew }) => isNew ? `1px dashed  ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 1rem;
  padding-right: 1.6rem;
  
  > button {
    border: none;
    background: none;
    color:  ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 1.8rem;
  }

  input {
    height: 3.2rem;
    width: 11rem;
    padding: 1.4rem;
    color:  ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;  
    font-size: 1.6rem;   
  }
`