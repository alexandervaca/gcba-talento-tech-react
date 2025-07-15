import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [open, setOpen] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditor, setOpenEditor] = useState(false);
  const apiUrl = "https://6812b215129f6313e20f49e2.mockapi.io/productos-ecommerce/api/v1/productos";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setCargando(false);
      });
  }, []);

  const cargarProductos = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.log("Error al cargar productos ", error);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(
        apiUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        }
      );
      
      if (!respuesta.ok) {
        throw new Error("Error al agregar producto");
      }
      
      const data = await respuesta.json();

      Swal.fire({
        title: ":)!",
        text: "Producto agregado correctamente!",
        icon: "success",
      });
      cargarProductos();
      setOpen(false);
      
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: ":(!",
        text: "Hubo un problema al agregar el producto!",
        icon: "error",
      });
    }
  };

  const actualizarProducto = async (producto) => {
    try {
      const respuesta = await fetch(`${apiUrl}/${producto.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      
      if (!respuesta.ok) throw Error("Error al actualizar el producto");
      const data = await respuesta.json();
      
      Swal.fire({
        title: ":)!",
        text: "Producto actualizado correctamente!",
        icon: "success",
      });

      setOpenEditor(false);
      setSeleccionado(null);
      cargarProductos();
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: ":(!",
        text: "Hubo un problema al actualizar el producto!",
        icon: "error",
      });
    }
  };

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("Estas seguro de eliminar el producto?");
    if (confirmar) {
      try {
        const respuesta = await fetch(
          `${apiUrl}/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!respuesta.ok) throw Error("Error al eliminar");

        Swal.fire({
          title: ":)!",
          text: "Producto Eliminado correctamente!",
          icon: "success",
        });
        cargarProductos();
      } catch (error) {
        console.log(error.message);
        Swal.fire({
          title: ":(!",
          text: "Hubo un problema al eliminar el producto!",
          icon: "error",
        });
      }
    }
  };

  return (
    <AdminContext.Provider value={{
      productos,
      cargando,
      open,
      setOpen,
      openEditor,
      setOpenEditor,
      seleccionado,
      setSeleccionado,
      agregarProducto,
      actualizarProducto,
      eliminarProducto,
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
