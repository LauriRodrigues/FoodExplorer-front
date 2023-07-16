import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
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


export function Edit() {

  const [imageFile, setImageFile] = useState(mealPlaceholder)

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()
  const params = useParams()

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

  async function handleEditMeal() {

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


      await api.put(`/meals/${params.id}`, formData)

      alert("Prato editado com sucesso!")

      navigate(-1)

    } 
  }

  async function handleDeleteMeal() {
    const isConfirm = confirm("Tem certeza que deseja deletar?")

    if(isConfirm) {
      await api.delete(`/meals/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/meals/${params.id}`)

      const { title, category, description, price, ingredients } = response.data
      setTitle(title)
      setCategory(category)
      setDescription(description)
      setPrice(price)
      setIngredients(ingredients.map(item => item.name))
    }

    fetchPlate()
  }, [])

  return (
    <Container>

      <Header/>

      <main>
        <button className="backToPage" onClick={handleBack}>
          <FiChevronLeft size={35} />
          voltar
        </button>

        <h2>Editar prato</h2>

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
              value={title}
            />

            <div className="selectBox">
              <label htmlFor="category">Categoria</label>
              <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
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
                value={price}
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
                value={description}
              />
            </div>
          </div>
          
          <div className="buttonsForm">
            <Button id="deleteButton" title="Excluir prato" onClick={handleDeleteMeal}/>
            <Button id="sendButton" title="Salvar alterações" onClick={handleEditMeal}/>
          </div>
  
        </Form>
      </main>

      <Footer/>
    </Container>
  )
}