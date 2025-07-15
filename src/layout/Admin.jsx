import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import ModalProductoNuevo from '../components/ModalProductoNuevo';
import ModalEdicion from "../components/ModalEdicion";
import Footer from '../components/estaticos/Footer'
import loading from '../assets/loading.gif'
import logo from '../assets/beer-svgrepo-com.svg'
import '../components/estaticos/styleEstatico.css'
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  
  const { setIsAuth } = useContext(CartContext);

  const {
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
  } = useContext(AdminContext);

  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand logo" to="/">L&uacute;pulo Salvaje</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <img src={logo} width='3%' />
                <li className="navItem">
                  <button className="navButton"
                    onClick={() => {
                      setIsAuth(false);
                      navigate("/");
                      localStorage.removeItem("isAuth");
                    }}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </button>
                </li>
                <li className="navItem">
                  <a href="/admin">Admin</a>
                </li>
              </ul>
            </div>      
          </div>
        </nav>
      </header>

      <main className="container col-xxl-8 px-4 ">{/* py-5 */}
        <div className="flex-lg-row-reverse align-items-center g-5">{/* row py-5*/}
        {
          cargando ? <img src={loading} alt='loading' /> : 
          (
          <>
            <h1 className="title">Panel Administrativo</h1>
            <div className="bs-docs-section">
              <div className="row">
                <div className="well bs-component live-less-editor-hovercontainer" data-relatedvars="legend-color,legend-border-color,input-color,input-height-base,input-bg,input-border,input-border-radius,input-border-focus,input-color-placeholder,input-bg-disabled,input-height-small,input-height-large,state-success-text,state-success-bg,state-warning-text,state-warning-bg,state-danger-text,state-danger-bg,input-group-addon-bg,input-group-addon-border-color,input-border-radius-large,input-border-radius-small">
                  <button onClick={() => setOpen(true)} className="editButton">Agregar producto nuevo</button>
                  {open && (<ModalProductoNuevo show={open} onClose={() => setOpen(false)} 
                    onAgregar={agregarProducto}/>)}

                  {openEditor && (<ModalEdicion show={openEditor} onClose={() => setOpenEditor(false)}
                    producto={seleccionado} onActualizar={actualizarProducto} />)}
                </div>
              </div>
            </div>
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
                    <button className="editButton" onClick={() => {
                        setOpenEditor(true);
                        setSeleccionado(product);
                      }}>Editar</button>

                    <button className="deleteButton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
          </>
          )
        }
        </div>
      </main>

      <Footer/>
    </>
  );
};

export default Admin;
