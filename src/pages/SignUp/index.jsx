import { useRef, useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { Container, Brand, Form } from './styles'
import Logo from '../../assets/explorerLogo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')

  const submitButton = useRef(null)

  const navigate = useNavigate()

  function handleSignUp(event) {
    event.preventDefault()

    if (!name || !email || !password) return alert('Preencha todos os campos!')

    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso')
        navigate('/')
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert('Não foi possível cadastrar o usuário')
        }
      })
  }

  return (
    <Container>
      <Brand>
        <img src={Logo} alt="Logo Explorer"/>
        <h1>food explorer</h1>
      </Brand>

      <Form>
        <h2>Crie sua conta</h2>

        <Input  
          type="text"
          title="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input  
          type="email"
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input  
          type="password"
          title="Senha"
          placeholder="No mínimo 6 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button 
          type="submit" 
          title="Criar conta"
          onClick={handleSignUp}
          ref={submitButton}
        />

        <a href="/"> Já tenho uma conta </a>
    
      </Form>

    </Container>
  )
}