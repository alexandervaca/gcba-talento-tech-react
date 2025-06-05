import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth] = useState(false);
  //const [busqueda, setBusqueda] = useState([])

  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch('/data/data.json')
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
  




  const handleAddToCart = (product) => {
    const productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      // alert('El producto ya esta en el carrito')
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, cantidad: product.cantidad }]);
      toast("Wow so easy!");
    }
  };

  const handleDeleteFromCart = (product) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === product.id) {
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
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        productos,
        cargando,
        error,
        vaciarCarrito,
        handleDeleteFromCart,
        handleAddToCart,
        isAuthenticated,
        setIsAuth
      }}>
      {children}
    </CartContext.Provider>
  );
};
