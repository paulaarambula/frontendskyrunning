import PropTypes from "prop-types";
import { httpDelete } from "../../utils/fetch";
import React from "react";
import './Product.css';

const Product = (props) => {
  const deleteTask = async () =>{
    httpDelete(`${process.env.REACT_APP_BACKEND_URL}/delete/${props.id}`)
    .then(()=>{
      window.location.reload(false);
    })
    .catch((e) =>{
      console.error(e);
    });
  };

  return (
    <div className="product">
      <h4>ID:</h4>
      <p>{props._id}</p>
      <h4>Descripción:</h4>
      <p>{props.descripcion}</p>
      <h4>Valor Unitario ($):</h4>
      <p>{props.valorUnitario}</p>
      <h4>Estado del Producto:</h4>
      <p>{props.estadoProducto}</p>
      <a className='editar' href={`/edit/${props.id}`}>Editar producto</a>
      <button className='eliminar' onClick={deleteTask}>Eliminar producto</button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string,
  descripcion: PropTypes.string,
  valorUnitario: PropTypes.string,
  estadoProducto: PropTypes.string,
  done: PropTypes.bool,
};

export default Product;
