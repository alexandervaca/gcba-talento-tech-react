import React, { useState, useEffect } from "react";

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
  const [producto, setProducto] = useState(productoSeleccionado);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    setProducto(productoSeleccionado);
  }, [productoSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!producto.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }
    if (!producto.precio || producto.precio <= 0) {
      nuevosErrores.precio = "El precio debe ser mayor a 0.";
    }
    if (!producto.categoria.trim() || producto.categoria.length < 5) {
      nuevosErrores.categoria =
        "La categoria debe tener al menos 5 caracteres.";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  return (
    <form className="form-horizontal"
      onSubmit={(e) => {
        e.preventDefault();
        if (!validarFormulario()) {
          return;
        }
        onActualizar(producto);
      }} >
      <fieldset>
      <h2>Editar Producto</h2>
      <div className="form-group">
        <label htmlFor="id" className="col-lg-2 control-label">ID:</label>
        <div class="col-lg-10">
          <input type="number" name="id" className="form-control"
            value={producto.id || ""} onChange={handleChange} readOnly />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="nombre" className="col-lg-2 control-label">Nombre:</label>
        <div class="col-lg-10">
          <input type="text" name="nombre" className="form-control"
            value={producto.nombre || ""} onChange={handleChange} required />
          {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="precio" className="col-lg-2 control-label">Precio:</label>
        <div class="col-lg-10">
          <input type="number" name="precio" className="form-control"
            value={producto.precio || ""} onChange={handleChange} required min="0" />
          {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="stock" className="col-lg-2 control-label">Stock:</label>
        <div class="col-lg-10">
          <input type="number" name="stock" className="form-control"
            value={producto.stock || ""} onChange={handleChange} required />
          {errores.stock && <p style={{ color: "red" }}>{errores.stock}</p>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="imagen" className="col-lg-2 control-label">Imagen URL:</label>
        <div className="col-lg-10">
          <input type="text" name="imagen" className="form-control"
            value={producto.imagen || ""} onChange={handleChange} required />
          {errores.imagen && <p style={{ color: "red" }}>{errores.imagen}</p>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="categoria" className="col-lg-2 control-label">Categoria:</label>
        <div className="col-lg-10">
          <input type="text" name="categoria" className="form-control"
            value={producto.categoria || ""} onChange={handleChange} required />
          {errores.categoria && (<p style={{ color: "red" }}>{errores.categoria}</p>)}
        </div>
      </div>

      <div className="form-group">
        <div className="col-lg-10 col-lg-offset-2">
          <button type="submit">Actualizar Producto</button>
        </div>
      </div>
      </fieldset>
    </form>
  );
}
export default FormularioEdicion;
