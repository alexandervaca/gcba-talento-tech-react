import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth] = useState(false);
  const [busqueda, setBusqueda] = useState("")

  const [isCartOpen, setCartOpen] = useState(false);

  const apiUrl = 'https://6812b215129f6313e20f49e2.mockapi.io/productos-ecommerce/api/v1/productos'

  useEffect(() => {
    //fetch('/data/data.json')
    fetch(apiUrl)
      .then(respuesta => respuesta.json())
      .then(datos => {
          setTimeout(() => {
            setProductos(datos)
            setCargando(false)
          }, 2000)
      })
      .catch(error => {
        console.log('Error', error)
        setCargando(false)
        setError(true)
      })
  }, []);
  

  const productosFiltrados = productos.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()))

  const handleAddToCart = (producto) => {
    const productoExiste = cart.find((item) => item.id === producto.id);

    if (productoExiste) {
      // alert('El producto ya esta en el carrito')
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: producto.cantidad }
            : item
        )
      );
    } else {
      toast.success(`El producto ${producto.nombre} se ha agregado al carrito`)
      setCart([...cart, { ...producto, cantidad: producto.cantidad }]);
    }
  };

  const handleDeleteFromCart = (producto) => {
    toast.error(`El producto ${producto.nombre} se ha eliminado al carrito`)
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === producto.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            } else {
              return null; // Si cantidad es 1, marcamos para eliminar
            }
          } else {
            return item; // Si no es el producto, lo dejamos igual
          }
        })
        .filter((item) => item !== null); // Quitamos los productos nulos
    });
  };

  const vaciarCarrito = () => {
    toast.error('Se ha vaciado al carrito')
    setCart([])
  };

  return (
    <CartContext.Provider
      value={
        { cart,
        productos,
        cargando,
        error,
        vaciarCarrito,
        handleDeleteFromCart,
        handleAddToCart,
        isAuthenticated,
        setIsAuth,
        productosFiltrados, busqueda, setBusqueda }
      }>
      {children}
    </CartContext.Provider>
  );
};
