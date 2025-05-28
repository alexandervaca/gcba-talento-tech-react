import React, { useState } from 'react';


export default function Formulario() {


  const [nombre, setNombre] = useState('');

  function manejarEnvio(evento) {
      evento.preventDefault();
      alert(`Formulario enviado por: ${nombre}`);
  }

  return (
      <form style={{marginLeft:'60px'}} onSubmit={manejarEnvio}>
          <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
          />
          <button type="submit">Enviar</button>
      </form>
  );
}