import React from "react"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Ups... Producto no encontrado 🍷</p>
        <p className="notfound-text">
          Parece que algunos productos se perdieron entre las estanterías. Pero tenemos muchos más... aguardá unos minutos.
          <br/>
          <button><Link to='/'>Volver al inicio</Link></button>
        </p>
      </div>
    </div>
  )
}

export default NotFound