import React from 'react'
import { Navigate } from 'react-router-dom'

const RutaProtegida = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to='/ingreso' replace />
  }
  
  return children
}

export default RutaProtegida