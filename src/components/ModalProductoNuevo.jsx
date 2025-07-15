import React from 'react';
import { Modal } from 'react-bootstrap';
import FormularioProducto from './FormularioProducto';

const ModalProductoNuevo = ({ show, onClose, onAgregar }) => {
  return (
    <Modal show={show} onHide={onClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormularioProducto
          onAgregar={(producto) => {
            onAgregar(producto);
            onClose();
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalProductoNuevo;