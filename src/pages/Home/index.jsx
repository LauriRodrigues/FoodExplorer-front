import { useEffect, useState } from 'react'
import { api } from "../../services/api"
import { Container, Content, Banner } from './styles'
import { Header } from '../../components/Header'
import { MealCard } from '../../components/MealCard'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'

export function Home() {
  const [search, setSearch] = useState('')
  const [meals, setMeals] = useState([])

  let typeMeals
  
  useEffect(() => {
    async function fetchMeals() {
      const response = await api.get(
        `/meals?title=${search}&ingredients=${search}`
      )
      setMeals(response.data)
    }

    fetchMeals()
  }, [search])

  if (meals.length > 0) {
  typeMeals = meals.map((e) => e)
  }

  return (
    <Container>
      <Header  setSearch={setSearch}/>
      <Content>
        <Banner>
          <div className="bannerImg"></div>
          <div className="bannerText">
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        {
          meals.filter(meal => meal.category == "Refeições").length > 0 &&
            <Section title ="Refeições">
              {meals.filter(meals=> meals.category == "Refeições").map((item, index) =>(<MealCard key={String(index)} data={item} />))
              }            
            </Section>  
        } 

        {
          meals.filter(meal => meal.category == "Sobremesas").length > 0 &&
            <Section title ="Sobremesas">
              {meals.filter(meals=> meals.category == "Sobremesas").map((item, index) =>(<MealCard key={String(index)} data={item} />))
              }            
            </Section>  
        }

        {
          meals.filter(meal => meal.category == "Bebidas").length > 0 &&
            <Section title ="Bebidas">
              {meals.filter(meals=> meals.category == "Bebidas").map((item, index) =>(<MealCard key={String(index)} data={item} />))
              }            
            </Section>  
        }

      </Content>
      <Footer />
    </Container>
  );
}