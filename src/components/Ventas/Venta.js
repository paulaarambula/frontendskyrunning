import React from 'react';
import PropTypes from "prop-types";
import './Venta.css';

const Venta = (props) => {

    return (
        <div className='sale'>
          <h4>Número de venta</h4>
          <p>{props._id}</p>
          <h4>Id Vendedor</h4>
          <p>{props.idVendedor}</p>
          <h4>Nombre del Vendedor</h4>
          <p>{props.nombreVendedor}</p>
          <h4>Documento del Identidad del Cliente</h4>
          <p>{props.idCliente}</p>
          <h4>id del Producto</h4>
          <p>{props.valorIdProducto}</p>
          <h4>Cantidad</h4>
          <p>{props.cantidadProducto}</p>
          <h4>Valor Unitario</h4>
          <p>{props.valorUnitarioProducto}</p>
          <h4>Valor Total</h4>
          <p>{props.valorVenta}</p>  
          <a className='editar' href={`/producto/read-product/edit/${props._id}`}>Editar producto</a>
      <button className='eliminar'>Eliminar producto</button>         
        </div>
    )
};
Venta.propTypes ={
   // idVenta: PropTypes.string,
    valorVenta: PropTypes.string,
    valorIdProducto: PropTypes.string,
    valorUnitarioProducto: PropTypes.string,
    cantidadProducto: PropTypes.string,
    fechaVenta: PropTypes.string,
    idCliente: PropTypes.string,
    nombreCliente: PropTypes.string,
    idVendedor: PropTypes.string,
    nombreVendedor: PropTypes.string,
}

export default Venta
