import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import './styleEstatico.css'
import logo from '../../assets/beer-svgrepo-com.svg'
import Carrito from '../Carrito'
import { CartContext } from '../../context/CartContext'
//import { FaShoppingCart }from 'react-icons/fa'

const Header = () => {
  const { cart } = useContext(CartContext)
  const cartCount = cart.length
  const [isCartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <img src={logo} width='3%' />
              <li className="nav-item"><NavLink to='/' className='link'>INICIO</NavLink></li>
              <li className="nav-item"><NavLink to='/productos' className='link'>PRODUCTOS</NavLink></li>
              <li className="nav-item"><NavLink to='/nosotros' className='link'>NOSOTROS</NavLink></li>
              <li className="nav-item"><NavLink to='/contacto' className='link'>CONTACTO</NavLink></li>
              <li className='nav-item'>CARRITO: {cartCount} 
                <button className='btnCart link' onClick={() => setCartOpen(true)} style={{background: 'none', border: 'none'}}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                {/*<FaShoppingCart color='red'/>*/}
                <Carrito isOpen={isCartOpen} onClose={()=> setCartOpen(false)} />
              </li>
              <li className='nav-item'>
                  <NavLink to='/ingreso' className='link'><i className="fa-solid fa-right-to-bracket"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/admin' className='link'><i className="fa-solid fa-user-tie"></i></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

