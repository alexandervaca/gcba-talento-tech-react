import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import './styleEstatico.css'
import logo from '../../assets/beer-svgrepo-com.svg'
import Carrito from '../Carrito'
import { CartContext } from '../../context/CartContext'

const Header = () => {

  let estilos = {backgroundColor: "#333", padding: "10px", textAlign: "center", color: "white"}

  const { cart } = useContext(CartContext)
  const cartCount = cart.length
  const [isCartOpen, setCartOpen] = useState(false)

  return (
    <header style={estilos}>
      <nav style={{ backgroundColor: '#333', color: "white", padding: "10px" }}>
        <ul>
          <img src={logo} width='3%' />
          <li><NavLink to='/' className='link'>INICIO</NavLink></li>
          <li><NavLink to='/productos' className='link'>PRODUCTOS</NavLink></li>
          <li><NavLink to='/nosotros' className='link'>NOSOTROS</NavLink></li>
          <li><NavLink to='/contacto' className='link'>CONTACTO</NavLink></li>
          <li className='cartNav'>CARRITO: {cartCount} 
            <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
            <Carrito isOpen={isCartOpen} onClose={()=> setCartOpen(false)} />
          </li>
          <li className='btnLogin'>
              <NavLink to='/ingreso' className='link'><i className="fa-solid fa-right-to-bracket"></i></NavLink>
            </li>
            <li className='btnAdmin'>
              <NavLink to='/admin' className='link'><i className="fa-solid fa-user-tie"></i></NavLink>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

