import { createContext, useEffect, useState } from 'react'

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
  
  return (
    <AdminContext.Provider value={children}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContext