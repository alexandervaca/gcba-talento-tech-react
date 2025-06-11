import React, { useContext } from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext'

const Carrito = ({ isOpen, onClose }) => {

  const { cart, handleDeleteFromCart, vaciarCarrito  } = useContext(CartContext)

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
        <button style={{ color: "black"}} onClick={onClose} className="close-button">X</button>
      </div>
      <div className="cart-content" style={{ textAlign: 'center' }}>
        {cart.length === 0 ? (
          <p style={{ color: 'red', textAlign: 'center' }}>El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-item">
              {cart.map((item, index) => (
                <li key={item.id} style={{ color: "black" }}>
                  {item.nombre} - $ {item.precio} - cant: {item.cantidad}
                  <button onClick={() => handleDeleteFromCart(item)} style={{ color: 'black', backgroundColor: 'white' }}><i className="fa-solid fa-trash"></i></button>
                </li>
              ))}
            </ul>
            <button onClick={() => vaciarCarrito()} className='btnCheckout'>Vaciar Carrito</button>
            <div className='cart-footer'>
              <p style={{ color: 'blue' }}>Total: $ {cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}</p>
              <button className='btnCheckout' onClick={onClose}>Finalizar Compra</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
