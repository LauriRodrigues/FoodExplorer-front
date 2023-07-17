import { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Brand } from './styles'
import { Input } from '../Input'

import openMenuIcon from '../../assets/openMenu.svg'
import closeMenuIcon from '../../assets/closeMenu.svg'
import receiptIcon from '../../assets/receipt.svg'
import exitIcon from '../../assets/exit.svg'
import Logo from '../../assets/explorerLogo.svg'
import { useAuth } from '../../hooks/auth'

export function Header({ setSearch }) {

  const { user } = useAuth()
  const navRef = useRef()
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function toggleNavbar(e) {
    console.log('toggleNavbar', e.target)
    navRef.current.classList.toggle('mobile-menu')
  }

  function handleNewMeal(id) {
    navigate(`/New`)
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
            <div className="logoText">
              <h1>food explorer</h1>
              {user.is_admin === 1 && (
                <span>admin</span>
              )}
            </div>
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
            onChange={e => setSearch(e.target.value)}
          />

          {user.is_admin === 1 && (
            <button className="mobile-button" onClick={handleNewMeal}>
              <span>Novo prato</span>
            </button>
          )}

          <button className="mobile-button" onClick={signOut}>
            <span>Sair</span>
          </button>
        </nav>

        {user.is_admin === 0 && (
          <button id="receiptButton" aria-label="pedido">
            <img src={receiptIcon} alt="botão de pedidos" />
            <span>Pedidos (0)</span>
          </button>
        )}

        {user.is_admin === 1 && (
          <button id="newButton" onClick={handleNewMeal}>
            Novo prato
          </button>
        )}

        <button id="exitIcon" onClick={signOut}>
          <img src={exitIcon} alt="Botão para sair da aplicação" />
        </button>
      </div>

    </Container>
  )
}