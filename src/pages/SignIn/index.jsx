import { Container, Brand, Form } from './styles'
import Logo from '../../assets/explorerLogo.svg'
import { Input } from '../../components/Input'

export function SignIn() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="Logo Explorer"/>
        <h1>food explorer</h1>
      </Brand>

      <Form>
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
      </Form>

    </Container>
  )
}