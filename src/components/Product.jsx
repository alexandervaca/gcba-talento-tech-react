import React, { useState } from 'react'
import './styleProductos.css'
import { Link } from 'react-router-dom'

const Product = ({ product, addToCart }) => {

  const [cantidad, setCantidad] = useState(product.cantidad)
  // const [stock, setStock] = useState(5)

  const increase = () => {
    if (cantidad + product.cantidad <= product.stock) {
      setCantidad(prev => prev + 1);
    }
  };

  const decrease = () => {
    setCantidad(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <section className="card">
      <div className='imganContainer'>
        <img src={product.imagen} alt="" className='imagen'/>
      </div>

      <h3 className='nombre'>{product.nombre}</h3>
      <p className='precio'>${product.precio}</p>
      <p className='stock'>{product.stock}</p>

      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase}>+</button>
      </div>

      <button style={{display: cantidad == 0 ? 'none' : 'block'}}
        onClick={() => addToCart({...product, cantidad:cantidad})}>Agregar</button>

      <Link to={`/productos/${product.id}`}> Ver mas</Link>
    </section>
  )
}

export default Product;
