import { Container, Brand, Form } from './styles'
import Logo from '../../assets/explorerLogo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
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
        />

        <Input  
          type="email"
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />

        <Input  
          type="password"
          title="Senha"
          placeholder="No mínimo 6 caracteres"
        />

        <Button 
          type="submit" 
          title="Criar conta"
        />

        <a href="/"> Já tenho uma conta </a>
    
      </Form>

    </Container>
  )
}