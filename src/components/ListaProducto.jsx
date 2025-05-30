import React, { useContext } from 'react'
import Producto from './Producto'
import { CartContext } from '../context/CartContext'

const ListaProducto = () => {

  const { productos } = useContext(CartContext)

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
      {productos.map(producto =>(
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ListaProducto
