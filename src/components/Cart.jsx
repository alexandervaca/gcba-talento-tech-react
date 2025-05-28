import React from 'react'
import './styleCart.css'

const Cart = ({ vaciarCarrito, cartItems, isOpen, onClose, borrarProducto }) => {
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button style={{ color: "black"}} onClick={onClose} className="close-button">X</button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-item">
              {cartItems.map((item, index) => (
                <li key={item.id} style={{ color: "black" }}>
                  {item.nombre} - $ {item.precio} - cant: {item.cantidad}
                  <button onClick={() => borrarProducto(item)} style={{ color: "black" }}><i className="fa-solid fa-trash"></i></button>
                </li>
              ))}
            </ul>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <div className='cart-footer'>
              <p style={{ color: 'blue' }}>Total: $ {cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0)}</p>
              <button className='btnCheckout' onClick={onClose}>Finalizar Compra</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
