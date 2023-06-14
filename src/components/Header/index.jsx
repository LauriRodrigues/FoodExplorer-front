import { useRef, useState } from 'react'
import { Container, Brand } from './styles'
import { Input } from '../Input'

import openMenuIcon from '../../assets/openMenu.svg'
import closeMenuIcon from '../../assets/closeMenu.svg'
import receiptIcon from '../../assets/receipt.svg'
import exitIcon from '../../assets/exit.svg'
import Logo from '../../assets/explorerLogo.svg'

export function Header() {
  const [menuExpanded, setMenuExpanded] = useState(false)

  const navRef = useRef()

  function handleMenu() {
    if (menuExpanded) {
      document.getElementById('menuIcon').src = openMenuIcon
      setMenuExpanded(false)
    } else {
      document.getElementById('menuIcon').src = closeMenuIcon
      setMenuExpanded(true)
    }
  }

  function toggleNavbar(e) {
    console.log('toggleNavbar', e.target)
    navRef.current.classList.toggle('mobile-menu')
  }

  return (
    <Container>
      <button 
        className="menu" 
        onClick={toggleNavbar}
        aria-label="Abrir o Menu" 
      >
        <img 
          id="menuIcon"
          src={openMenuIcon} 
          alt="botão de abrir o menu"
        />
      </button>

      <div className="logoContainer">
        <Brand>
          <img src={Logo} alt="Logo Explorer"/>
          <h1>food explorer</h1>
        </Brand>
      </div>

      <div className="navBar">
        <nav ref={navRef}>
          <button 
            className="menu" 
            onClick={toggleNavbar} 
            aria-label="Fechar o Menu" 
          >
            <img 
              src={closeMenuIcon} 
              alt="botão de fechar o menu"
            />
            Menu
          </button>

          <Input
            placeholder="Busque por pratos ou ingredientes"
          />

          <button className="mobile-button">
            <span>Sair</span>
          </button>
        </nav>

        <button id="receiptButton" aria-label="pedido">
          <img src={receiptIcon} alt="botão de pedidos" />
          <span>Pedidos (0)</span>
        </button>

        <button id="exitIcon">
          <img src={exitIcon} alt="Botão para sair da aplicação" />
        </button>
      </div>

    </Container>
  )
}