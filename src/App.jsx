import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './layout/Inicio';
import Contacto from './layout/Contacto';
import Nosotros from './layout/Nosotros';
import NotFound from './layout/NotFound';
import GaleriaProductos from './layout/GaleriaProductos';
import Login from './layout/Login';
import Admin from './layout/Admin'
import DetalleProducto from './components/DetalleProducto';
import RutaProtegida from './auth/RutaProtegida';

import { CartContext } from './context/CartContext';

function App() {
  const { isAuthenticated } = useContext(CartContext)

  return (
    <>
      <Routes>

        <Route path='/' element={<Inicio/>}/>

        <Route path='/productos' element={<GaleriaProductos />} />

        <Route path='/productos/:id' element={<DetalleProducto />} />

        <Route path='/nosotros' element={<Nosotros />} />

        <Route path='/contacto' element={<Contacto />} />

        <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida> } />

        <Route path='/ingreso' element={<Login />} />

        <Route path='*' element={<NotFound/>} />

      </Routes>
    </>
  );
}

export default App;
