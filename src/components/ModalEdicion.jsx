import React from 'react'
import { Modal } from 'react-bootstrap';
import FormularioEdicion from './FormularioEdicion';

const ModalEdicion = ({ show, onClose, producto, onActualizar }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Editar producto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormularioEdicion
        productoSeleccionado={producto}
        onActualizar={(p) => {
          onActualizar(p);
          onClose();
        }}
      />
    </Modal.Body>
  </Modal>
);


export default ModalEdicion