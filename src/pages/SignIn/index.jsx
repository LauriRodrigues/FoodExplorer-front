import { Container, Brand, Form } from './styles'
import Logo from '../../assets/explorerLogo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {

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
        />

        <Input  
          type="password"
          title="Senha"
          placeholder="No mínimo 6 caracteres"
        />

        <Button 
          type="submit" 
          title="Entrar"
        />

        <a href="/"> Criar uma conta </a>
    
      </Form>

    </Container>
  )
}