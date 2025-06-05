import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Header from './estaticos/Header'
import Footer from './estaticos/Footer'
import loading from '../assets/loading.gif'

const DetalleProducto = () => {
  const { productos } = useContext(CartContext)
  const { cargando } = useContext(CartContext)
  const [error, setError] = useState(false)

  const { id } = useParams()
  const producto = productos.find(producto => producto.id == id)

  if (error) {
    return <NotFound/>
  }

  return (
    <>
      <Header />

      <main className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{marginTop:'auto'}}>Detalle del producto: {id}</h1>
          {
            cargando
            ?
            <div>
              <img src={loading} alt='loading' style={{ alignContent: 'left', width: '50%' }} />
            </div> 
            :
            producto ? (<h2>{producto.nombre}</h2>) : (<p>Producto no encontrado</p>)
          }
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default DetalleProducto