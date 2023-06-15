import { useState, useRef } from 'react'
import { Container, Brand, Form } from './styles'
import Logo from '../../assets/explorerLogo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')

  const loginButton = useRef(null)

  async function handleSignIn(event) {
    event.preventDefault();
    if (!email || !password) return alert('Por favor, informe email e senha!')
    loginButton.current.disabled = true
    await signIn({ email, password })
    loginButton.current.disabled = false
  }

  return (
    <Container>
      <Brand>
        <img src={Logo} alt="Logo Explorer"/>
        <h1>food explorer</h1>
      </Brand>

      <Form>
        <h2>Faça login</h2>

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
          title="Entrar"
          ref={loginButton}
          onClick={handleSignIn}
        />

        <a href="/register"> Criar uma conta </a>
    
      </Form>

    </Container>
  )
}