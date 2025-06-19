import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  
  const { setIsAuth } = useContext(CartContext);

  const {
    productos,
    loading,
    open,
    setOpen,
    openEditor,
    setOpenEditor,
    seleccionado,
    setSeleccionado,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
  } = useContext(AdminContext);

  const navigate = useNavigate();

  return (
    <div className="container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <nav>
            <ul className="nav">
              <li className="navItem">
                <button
                  className="navButton"
                  onClick={() => {
                    setIsAuth(false);
                    navigate("/");
                    localStorage.removeItem("isAuth");
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </li>
              <li className="navItem">
                <a href="/admin">Admin</a>
              </li>
            </ul>
          </nav>
          <h1 className="title">Panel Administrativo</h1>

          <ul className="list">
            {productos.map((product) => (
              <li key={product.id} className="listItem">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="listItemImage"
                />
                <span>{product.nombre}</span>
                <span>${product.precio}</span>
                <div>
                  <button
                    className="editButton"
                    onClick={() => {
                      setOpenEditor(true);
                      setSeleccionado(product);
                    }}
                  >
                    Editar
                  </button>

                  <button
                    className="deleteButton"
                    onClick={() => eliminarProducto(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="bs-docs-section">
        <div className="row">
          <div className="well bs-component live-less-editor-hovercontainer" data-relatedvars="legend-color,legend-border-color,input-color,input-height-base,input-bg,input-border,input-border-radius,input-border-focus,input-color-placeholder,input-bg-disabled,input-height-small,input-height-large,state-success-text,state-success-bg,state-warning-text,state-warning-bg,state-danger-text,state-danger-bg,input-group-addon-bg,input-group-addon-border-color,input-border-radius-large,input-border-radius-small">
              <button onClick={() => setOpen(true)} className="editButton">Agregar producto nuevo</button>
              {open && <FormularioProducto onAgregar={agregarProducto} />}
              {openEditor && (
                <FormularioEdicion
                productoSeleccionado={seleccionado}
                onActualizar={actualizarProducto}
                />
              )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Admin;
