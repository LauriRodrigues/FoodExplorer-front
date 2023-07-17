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
import { useAuth } from '../../hooks/auth'
import { FiChevronLeft } from "react-icons/fi"
import receiptIcon from '../../assets/receipt.svg'

export function Details() {
  const [data, setData] = useState(null)

  const { user } = useAuth()
  const params = useParams()
  const navigate = useNavigate()

  let imageURL = data && `${api.defaults.baseURL}/files/${data.image}`

  function handleBack() {
    navigate(-1)
  }

  function handleEditMeal(id) {
    navigate(`/edit/${id}`);
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
              src={imageURL} 
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

            {user.is_admin === 0 && (
              <div className="order">
                <QuantitySelector />
                <Button className="receiptButton" icon={receiptIcon}  title={`pedir ∙ ${data.price}`}/>
              </div>
            )}

            {user.is_admin === 1 && (
              <Button className="editButton" title="Editar prato" onClick={() => handleEditMeal(data.id)}/>
            )}

            </div>
          </div>
        )}
      </main>

      <Footer />
    </Container>
  );
}