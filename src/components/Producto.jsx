import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './styleProductos.css'
import { CartContext } from '../context/CartContext'

const Producto = ({ producto }) => {

  const { handleAddToCart } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(producto.cantidad)

  const increase = () => {
    if (cantidad + producto.cantidad <= producto.stock) {
      setCantidad(prev => prev + 1);
    }
  };

  const decrease = () => {
    setCantidad(prev => (prev >= 1 ? prev - 1 : prev));
  };

  return (
    <section className="card">
      <div className='imganContainer'>
        <img src={producto.imagen} alt="" className='imagen'/>
      </div>

      <h3 className='nombre'>{producto.nombre}</h3>
      <p className='precio'>${producto.precio}</p>
      <p className='stock'>{producto.stock}</p>

      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase}>+</button>
      </div>

      <button style={{display: cantidad == 0 ? 'none' : 'block'}}
        onClick={() => handleAddToCart({...producto, cantidad:cantidad})}>Agregar</button>

      <Link to={`/productos/${producto.id}`}> Ver mas</Link>
    </section>
  )
}

export default Producto;
