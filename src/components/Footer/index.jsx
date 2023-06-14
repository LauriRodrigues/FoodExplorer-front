import { Container, Brand } from './styles';

import logo from '../../assets/explorerLogoGray.svg';

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={logo} alt="logo do explorer" />
        <span>food explorer</span>
      </Brand>
      <p> &copy; 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}