import { useState } from 'react'
import { Container, Brand, Form } from './styles'
import Logo from '../../assets/explorerLogo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()
    
    function handleSignIn() {
      signIn({email, password})
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
          title="Entrar"
          onClick={handleSignIn}
        />

        <a href="/register"> Criar uma conta </a>
    
      </Form>
    </Container>
  )
}