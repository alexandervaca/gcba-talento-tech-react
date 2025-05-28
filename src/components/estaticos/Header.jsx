import React, { useState } from 'react'
import './styleEstatico.css'
import logo from '../../assets/beer-svgrepo-com.svg'
import { NavLink } from 'react-router-dom'
import Cart from '../Cart'

const Header = ({ cartItems, vaciarCarrito, borrarProducto }) => {

  let estilos = {backgroundColor: "#333", padding: "10px", textAlign: "center", color: "white"}

  const cartCount = cartItems.length
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
            <Cart vaciarCarrito={vaciarCarrito} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setCartOpen(false)} 
              borrarProducto={borrarProducto} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

