import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ListaProducto from '../components/ListaProducto'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'

const GaleriaProductos = () => {
  const { cargando } = useContext(CartContext)
   
  return (
    <>
      <Header />

      <main className="container col-xxl-8 px-4 ">{/* py-5 */}
        <div className="flex-lg-row-reverse align-items-center g-5 py-5">{/* row */}
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Nuestras Cervezas</h1>
        {
          cargando ? <img src={loading} alt='loading' /> : <ListaProducto />
        }
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default GaleriaProductos
