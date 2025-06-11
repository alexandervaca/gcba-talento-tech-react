import React, { useState, useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import NotFound from './NotFound'
import inicioImg from './../assets/home4.jpg';
import loading from './../assets/loading.gif'
import { CartContext } from '../context/CartContext'

const Inicio = () => {
  
  const { cargando } = useContext(CartContext)
  const [error, setError] = useState(false)

  if (error) {
    return <NotFound/>
  }
   
  return (
    <>
      <Header />
      
      <main className="container col-xxl-8 px-4 py-5">
        { cargando ? <img src={loading} alt='loading' /> :
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={ inicioImg } className="d-block mx-lg-auto img-fluid" alt="Cervezas artesanales" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Nuestras Cervezas</h1>
            <p className="lead">Bienvenidos a L&uacute;pulo Salvaje, donde la pasi&oacute;n por la cerveza artesanal se convierte en sabor. Elaboramos variedades &uacute;nicas con ingredientes seleccionados y esp&iacute;ritu independiente. Somos el punto de encuentro para quienes disfrutan una buena birra, ya sea en casa, en el bar o con amigos.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            <p className="lead">Descubr&iacute; nuestra selecci&oacute;n de cervezas artesanales: desde IPAs intensas hasta lagers suaves, 
              pasando por cervezas de estaci&oacute;n y ediciones limitadas. 
              En formato mayorista o minorista, ten&eacute;s siempre una opci&oacute;n fresca, de calidad y lista para compartir.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
          </div>
        </div>
        }
      </main>

      <Footer/>
    </>
  )
}

export default Inicio
