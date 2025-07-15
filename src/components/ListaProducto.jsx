import React, { useContext, useState } from "react";
import Producto from "./Producto";
import { CartContext } from "../context/CartContext";

const ListaProducto = () => {
  const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);

  //console.log(busqueda);

  return (
    <>
      <input type="text" placeholder="Buscar productos..." value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)}/>
      <div className="py-5" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly",}}>
      {
        productosFiltrados.map((producto) => (<Producto key={producto.id} producto={producto} />))
      }
      </div>
    </>
  );
};

export default ListaProducto;
