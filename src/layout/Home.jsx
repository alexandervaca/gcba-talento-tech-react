import React,{useEffect,useState} from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Main from '../components/Main'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import NotFound from '../components/NotFound'

const Home = ({cart, handleAddToCart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito }) => {

  const [productos, setProductos] = useState([])
  const [carga, setCarga] = useState(true)
  const [error, setError] = useState(false)


  useEffect(()=>{
    fetch('https://6812b215129f6313e20f49e2.mockapi.io/productos-ecommerce/api/v1/productos')
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      setProductos(datos)
      setCarga(false)
    })
    .catch((error) => {
      console.error('Error:', error)
      setCarga(false)
      setError(true)
    });

  },[])

  if (error) {
    return <NotFound/>
  }
   
  return (
    <>
      <Header cartItems={cart} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />
      <Main />
      <Footer/>
    </>
  )
}

export default Home
