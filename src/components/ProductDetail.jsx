import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Header from './estaticos/Header'
import Footer from './estaticos/Footer'
import loading from '../assets/loading.gif'

const ProductDetail = ({ cartItems, borrarProducto, vaciarCarrito }) => {
  const { id } = useParams()
  const { productos} = useContext(CartContext)
  const producto = productos.find(producto => producto.id == id)

  const [error, setError] = useState(false)
  //const cartCount = cart.length
  const { cargando } = useContext(CartContext)

  if (error) {
    return <NotFound/>
  }

  return (
    <>
      <Header cartItems={cartItems} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito}/>

      <main className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{marginTop:'auto'}}>Detalle del producto: {id}</h1>
          {
            cargando ? <img src={loading} alt='loading' style={{ alignContent: 'left', width: '50%' }} /> :
            producto ? (<h2>{producto.nombre}</h2>) : (<p>Producto no encontrado</p>)
          }
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default ProductDetail