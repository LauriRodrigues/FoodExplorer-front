import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"
import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from "../../components/Input"
import { IngredientForm } from "../../components/IngredientForm"
import { Button } from "../../components/Button"
import { Footer } from '../../components/Footer'
import { FiChevronLeft } from "react-icons/fi"
import { MdOutlineFileUpload } from "react-icons/md"
import mealPlaceholder from '../../assets/mealPlaceholder.svg'


export function New() {

  const [imageFile, setImageFile] = useState(mealPlaceholder)

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
    setNewIngredient("")
  }

  function handleAddImage(event) {
    const file = event.target.files[0]
    setImageFile(file)
  }

  async function handleNewMeal() {

    if (!title || !description || !price) {
      alert("Favor preencha todos os campos!")
    }

    if (ingredients.length < 1) {
      alert("Adicione pelo menos um ingrediente!")
    } else {

      const formData = new FormData()
      formData.append("image", imageFile)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("category", category)
      formData.append("price", price)

      for (let i = 0; i < ingredients.length; i += 1) {
        formData.append("ingredients", ingredients[i])
      }


      await api.post("/meals", formData)

      alert("Prato criado com sucesso!")

      navigate(-1)

    } 
  }

  return (
    <Container>

      <Header/>

      <main>
        <button className="backToPage" onClick={handleBack}>
          <FiChevronLeft size={35} />
          voltar
        </button>

        <h2>Novo prato</h2>

        <Form>
          <div className="inputBox">
            <div>
              <span>Imagem do prato</span>
              <div className="fileInputBox">
                <label htmlFor="fileInput">Selecione a imagem</label>
                <Input
                  id="fileInput"
                  label="file"
                  type="file"
                  placeholder="Selecione imagem"
                  icon={MdOutlineFileUpload}
                  onChange={handleAddImage}
                />
              </div>
            </div>
          
            <Input 
              id="titleInput"
              label="name" 
              title="Nome do prato" 
              type="text" 
              placeholder="Ex.: Salada Ceasar"
              onChange={e => setTitle(e.target.value)}
            />

            <div className="selectBox">
              <label htmlFor="category">Categoria</label>
              <select id="category" onChange={e => setCategory(e.target.value)}>
                <option selected disabled value="">Selecione</option>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
          </div>
          
          <div className="inputBox">
            <div className="ingredients">
              <label htmlFor="mealIngredients">Ingredientes</label>

              <div className="ingredientsFormBox">
                {ingredients.map((ingredient, index) => (
                  <IngredientForm
                    key={String(index)}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <IngredientForm
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
              </div>
              
            </div>
            
            <div className="priceInputBox">
              <Input 
                className="priceInput"
                label="price" 
                title="Preço" 
                type="text" 
                placeholder="R$00,00"
                onChange={e => setPrice(e.target.value)}
              />
            </div>
            
          </div>

          <div className="inputBox">
            <div className="textarea">
              <label htmlFor="text-area">Descrição</label>
              <textarea
                id="text-area"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          
          <Button id="sendButton" title="Salvar alterações" onClick={handleNewMeal}/>
  
        </Form>
      </main>

      <Footer/>
    </Container>
  )
}