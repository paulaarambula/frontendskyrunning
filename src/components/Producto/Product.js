import PropTypes from "prop-types";
import { httpDelete } from "../../utils/fetch";
import React from "react";

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
      <div>
        <tr>
          <td>
            <h4>id</h4>
          </td>
          <td>
            <p>{props.id}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Descripción</h4>
          </td>
          <td>
            <p>{props.descripcion}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Valor Unitario</h4>
          </td>
          <td>
            <p>{props.valorUnitario}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Estado del Producto</h4>
          </td>
          <td>
            <p>{props.estadoProducto}</p>
          </td>
        </tr>
      </div>
      <a href={`/edit/${props.id}`}>Editar producto</a>
      <button onClick={deleteTask}>Eliminar producto</button>
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
