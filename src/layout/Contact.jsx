import React from 'react';
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import contactImg from "./../assets/home4.jpg";

const Contact = ({ vaciarCarrito, cartItems, isCartOpen, setCartOpen, borrarProducto }) => {

  return (
      <>
        <Header cartItems={cartItems} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito}/>

        <main className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={ contactImg } className="d-block mx-lg-auto img-fluid" alt="Cervezas artesanales" loading="lazy"/>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Cerveza Artesanal</h1>
              <p className="lead">¿Tenés un bar, almac&eacute;n o quer&eacute;s llevar L&uacute;pulo Salvaje a tu evento? <br/>
              Escribinos y te ayudamos a encontrar la mejor opci&oacute;n.<br/>
              📍Estamos en [CABA/Buenos Aires]<br/>
              📞 WhatsApp / Tel&eacute;fono<br/>
              📧 contacto@lupulosalvaje.com<br/></p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </div>
          </div>
        </main>

        <Footer/>
      </>
  );
};

export default Contact;
