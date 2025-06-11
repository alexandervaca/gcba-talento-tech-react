import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Header from './estaticos/Header'
import Footer from './estaticos/Footer'
import loading from '../assets/loading.gif'

const DetalleProducto = () => {
  const { cargando, productos } = useContext(CartContext)
  const { id } = useParams()
  const producto = productos.find(producto => producto.id == id)

  return (
    <>
      <Header />

      <main className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          {
            cargando
            ?
            <div>
              <img src={loading} alt='loading' style={{ alignContent: 'left', width: '50%' }} />
            </div> 
            :
            producto ? (
            <section style={{
                maxWidth: '600px',
                margin: '32px auto',
                padding: '2rem',
                border: '1px solid #eee',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                background: '#fff',
            }}>
              <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>{producto.nombre}</h1>
              {producto.imagen && (
                <img src={producto.imagen} alt={producto.nombre}
                  style={{
                    width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem',
                  }}/>
              )}
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>{producto.descripcion}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#007b55' }}>Precio: ${producto.precio}</p>
              <details style={{ marginBottom: '1.5rem' }}>
                <summary style={{ fontWeight: 'bold', color: '#333' }}>Detalles del producto</summary>
                <ul style={{ paddingLeft: '1.5rem', color: '#555' }}>
                  <li>Marca: Acme</li>
                  <li>Categoría: {producto.categoria}</li>
                  <li>SKU: {producto.id * 1250}</li>
                  <li>Fecha de lanzamiento: {new Date().toLocaleDateString('es-ES', {day: 'numeric', month: 'long', year: 'numeric'})}</li>
                </ul>
              </details>
              <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem' }}>Stock: {producto.stock}</p>

              <Link to="/" style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  background: '#007bff',
                  color: '#fff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  marginTop: '1rem',
                }}>Volver a Home</Link>
            </section>
            ) : (<p>Producto no encontrado</p>)
          }
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default DetalleProducto