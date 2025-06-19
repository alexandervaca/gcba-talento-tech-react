import React, { useState } from "react";

function FormularioProducto({ onAgregar }) {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    stock: "",
    imagen: "",
    categoria: "",
  });
  const [errores, setErrores] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    onAgregar(producto); // Llamada a la función para agregar el producto
    setProducto({
      nombre: "",
      precio: "",
      stock: "",
      imagen: "",
      categoria: "",
    }); // Limpiar el formulario
  };

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <fieldset>
      <h2>Agregar Producto</h2>
      <div className="form-group">
        <label for="nombre" className="col-lg-2 control-label">Nombre:</label>
        <div class="col-lg-10">
          <input type="text" name="nombre" className="form-control"
            value={producto.nombre} onChange={handleChange} required />
          {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
        </div>
      </div>
      <div className="form-group">
        <label for="precio" className="col-lg-2 control-label">Precio:</label>
        <div class="col-lg-10">
          <input type="number" name="precio" className="form-control"
            value={producto.precio} onChange={handleChange} required min="0" />
          {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
        </div>
      </div>

      <div className="form-group">
        <label for="stock" className="col-lg-2 control-label">Stock:</label>
        <div class="col-lg-10">
          <input type="number" name="stock" className="form-control"
            value={producto.stock || ""} onChange={handleChange} required />
          {errores.stock && <p style={{ color: "red" }}>{errores.stock}</p>}
        </div>
      </div>

      <div className="form-group">
        <label for="imagen" className="col-lg-2 control-label">Imagen URL:</label>
        <div className="col-lg-10">
          <input type="text" name="imagen" className="form-control"
            value={producto.imagen || ""} onChange={handleChange} required />
          {errores.imagen && <p style={{ color: "red" }}>{errores.imagen}</p>}
        </div>
      </div>

      <div className="form-group">
        <label for="categoria" className="col-lg-2 control-label">Categoría:</label>
        <div className="col-lg-10">
          <input type="text" name="categoria" className="form-control"
            value={producto.categoria || ""} onChange={handleChange} required />
          {errores.categoria && (<p style={{ color: "red" }}>{errores.categoria}</p>)}
        </div>
      </div>

      <div className="form-group">
        <div className="col-lg-10 col-lg-offset-2">
          <button type="submit" className="editButton">Guardar Producto</button>
        </div>
      </div>

      </fieldset>
    </form>
  );
}

export default FormularioProducto;
