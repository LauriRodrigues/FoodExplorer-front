import { Container } from "./styles"

export function Ingredient({ ingredient }) {
    return (
      <Container>
          <span className="ingredientName">{ingredient}</span>    
      </Container>
    )
  }