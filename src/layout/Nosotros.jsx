import React, { useState } from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import NotFound from './NotFound';
import aboutImg from './../assets/home4.jpg';

const Nosotros = () => {

  const [error, setError] = useState(false)

  if (error) {
    return <NotFound/>
  }

  return (
    <>
      <Header />

      <main className='container col-xxl-8 px-4 py-5'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img src={ aboutImg } className='d-block mx-lg-auto img-fluid' alt='Cervezas artesanales' loading='lazy'/>
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>Sobre Nosotros</h1>
            <p className='lead'>En L&uacute;pulo Salvaje creemos que cada cerveza cuenta una historia. La nuestra empez&oacute; entre amigos, ollas caseras y mucha curiosidad por los sabores reales. Hoy, como parte de Cervezas El Barril, elaboramos cada lote con respeto por los procesos artesanales y el deseo de ofrecer algo distinto.
Somos m&aacute;s que productores: somos amantes de la buena birra, de los brindis largos, y de las charlas que empiezan con un “salud”.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Nosotros;
