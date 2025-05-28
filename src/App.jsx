import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './layout/Home';
import Contact from './layout/Contact';
import NotFound from './components/NotFound';
import Products from './layout/Products';
import About from './layout/About';
import ProductDetail from './components/ProductDetail';
import RutaProtegida from './auth/RutaProtegida';
import Login from './components/Login';
import { CartContext } from './context/CartContext';
import Admin from './components/Admin'

function App() {

  const { cart, productos, product, cargando, vaciarCarrito, handleAddToCart, isCartOpen, setCartOpen, handleDeleteFromCart, isAuthenticated } = useContext(CartContext);

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home
          cart={cart}
          productos={productos}
          vaciarCarrito={vaciarCarrito}
          handleAddToCart={handleAddToCart}
          isCartOpen={isCartOpen}
          setCartOpen={setCartOpen}
          borrarProducto={handleDeleteFromCart}
          cargando={cargando}
        />} />

        <Route path='/productos' element={<Products
          cart={cart}
          productos={productos}
          handleAddToCart={handleAddToCart}
          borrarProducto={handleDeleteFromCart}
          vaciarCarrito={vaciarCarrito}
          cargando={cargando}
        />} />

        <Route path='/productos/:id' element={<ProductDetail cartItems={cart} vaciarCarrito={vaciarCarrito} borrarProducto={handleDeleteFromCart}/>} />

        <Route path='/nosotros' element={<About cartItems={cart} vaciarCarrito={vaciarCarrito} 
          isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={handleDeleteFromCart}/>} />

        <Route path='/contacto' element={<Contact cartItems={cart} vaciarCarrito={vaciarCarrito} 
          isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={handleDeleteFromCart}/>} />

        <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida> } />

        <Route path='/ingreso' element={<Login />} />

        <Route path='*' element={<NotFound/>} />

      </Routes>
    </Router>
      
    </>
  );
}

export default App;
