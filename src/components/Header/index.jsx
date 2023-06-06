import { useState } from 'react'
import { Container, Brand, SearchBox } from './styles'
import { Input } from '../Input'
import { FiSearch } from 'react-icons/fi'

import openMenuIcon from '../../assets/openMenu.svg'
import closeMenuIcon from '../../assets/closeMenu.svg'
import receiptIcon from '../../assets/receipt.svg'
import Logo from '../../assets/explorerLogo.svg'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenu() {
    if (menuOpen) {
      document.getElementById('menuIcon').src = openMenuIcon
      setMenuOpen(false)
    } else {
      document.getElementById('menuIcon').src = closeMenuIcon
      setMenuOpen(true)
    }
  }

  function toggleNavbar(e) {
    console.log('toggleNavbar', e.target);
    navRef.current.classList.toggle('mobile-menu');
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
        <nav>
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
      </div>

      <button>
      <img src={receiptIcon} alt="botão para ver itens do pedido" />
      </button>
    </Container>
  )
}