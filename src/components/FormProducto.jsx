import React, { useState } from 'react';

const FormProducto = ({ onAgregar }) => {
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {};

  return <div></div>;
};

export default FormProducto;
