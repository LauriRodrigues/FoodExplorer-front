import styled from 'styled-components'
import { DEVICE } from '../../styles/device'

export const Container = styled.section`
  margin: 6.2rem 0 4.8rem 2.4rem;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.5rem;
    margin-bottom: 2.3rem;
  }

  ${DEVICE.lg} {
    margin: 6rem;

    > h2 {
      font-size: 3.2rem;
      line-height: 4.5rem;
    }
  }
  
`