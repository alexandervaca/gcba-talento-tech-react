import React, { useState, useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import NotFound from '../components/NotFound'
import { CartContext } from '../context/CartContext'

const Products = ({cart, productos, handleAddToCart, borrarProducto, vaciarCarrito }) => {
  //const [productos,setProductos] = useState([])
  //const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const cartCount = cart.length
  const { cargando } = useContext(CartContext)

  if (error) {
    return <NotFound/>
  }
   
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito}/>

      <main className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{marginTop:'auto'}}>Nuestras Cervezas</h1>
        {
          cargando ? <img src={loading} alt='loading' /> :
          <ProductList products={productos} addToCart={handleAddToCart}/>
        }
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default Products
