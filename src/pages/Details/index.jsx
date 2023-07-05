import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container } from "./styles"
import mealPlaceholder from '../../assets/mealPlaceholder.svg'
import { Header } from "../../components/Header"
import { Ingredient } from "../../components/Ingredient"
import { QuantitySelector } from '../../components/QuantitySelector'
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { api } from "../../services/api"
import { FiChevronLeft } from "react-icons/fi"
import receiptIcon from '../../assets/receipt.svg'

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMeal() {
      const response = await api.get(`/meals/${params.id}`)
      setData(response.data)
    }
    fetchMeal()
  }, [])

  return (
    <Container>
      <Header />

      <main>
        
        <button className="backToPage" onClick={handleBack}>
          <FiChevronLeft size={35} />
          voltar
        </button>

        { data && (
          <div className="ingredientBox">
            <img 
              className='mealPreview' 
              src={mealPlaceholder} 
              alt="imagem do prato" 
            />

            <div className="ingredientTextContent">
              <h3 className='mealTitle'>{data.title}</h3>
              <p className='mealDescription'>{data.description}</p>

              <div className="ingredients">
                {data.ingredients.map((ingredient) => (
                  <Ingredient
                    key={String(ingredient.id)}
                    ingredient={ingredient.name}
                  />
                ))}
              </div>

              <div className="order">
                <QuantitySelector />
                <Button className="receiptButton" icon={receiptIcon}  title={`pedir ∙ ${data.price}`}/>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </Container>
  );
}