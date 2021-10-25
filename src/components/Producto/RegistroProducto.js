import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//import { AppContext } from "../AppContext/AppContext";
import "./RegistroProducto.css";
import { httpPost } from "../../utils/fetch";
//import { useContext } from "react";

const RegistroProducto = (props) => {
  // const datos = useContext(AppContext);
  const [valorIdProducto, cambiarValorIdProducto] = useState("");
  const [descripcionProducto, cambiarDescripcionProducto] = useState("");
  const [valorUnitarioProducto, cambiarValorUnitarioProducto] = useState("");
  const [estadoProducto, cambiarEstadoProducto] = useState("");
  const [productoCreado, setProductoCreado] = useState(false);

  const buttonClick = async () => {
    const newProduct = {
      id: valorIdProducto,
      descripcion: descripcionProducto,
      valorUnitario: valorIdProducto,
      estado: estadoProducto,
      done: false,
    };
    //  datos.setProducts([...datos.products, newProduct]);
    const createdProduct = await httpPost(
      `${process.env.REACT_APP_BACKEND_URL}/producto/create-product`,
      {
        body: JSON.stringify(newProduct),
      }
    );
    if (createdProduct._id) {
      setProductoCreado(true);
      setTimeout(() => {
        setProductoCreado(false);
      }, 3000);
    }
  };

  return (
    <form>
      <table>
        <caption>
          <div>
            <b>Formulario de Registro de Producto</b>
          </div>
        </caption>
        <tbody>
          <tr>
            <th colSpan="2">
              <b>Ingrese la Información del Producto</b>
            </th>
          </tr>
          <tr>
            <td id={"col1"}>
              <label for={"productId"}>
                <h4>Id del Producto</h4>
              </label>
            </td>
            <td>
              <input
                type={"text"}
                name={"productId"}
                value={valorIdProducto}
                onChange={(event) => {
                  cambiarValorIdProducto(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td id={"col1"}>
              <label for={"descripcion"}>
                <h4>Descripción del Producto</h4>
              </label>
            </td>
            <td>
              <textarea
                type={"text"}
                name={"descripcion"}
                value={descripcionProducto}
                onChange={(event) => {
                  cambiarDescripcionProducto(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td id={"col1"}>
              <label for={"valor unitario"}>
                <h4>Valor Unitario ($)</h4>
              </label>
            </td>
            <td>
              <input
                type={"text"}
                name={"valor unitario"}
                value={valorUnitarioProducto}
                onChange={(event) => {
                  cambiarValorUnitarioProducto(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td id={"col1"}>
              <label for={"estado"}>
                <h4>Estado del Producto</h4>
              </label>
            </td>
            <td>
              <input
                type={"text"}
                name={"estado"}
                value={estadoProducto}
                onChange={(event) => {
                  cambiarEstadoProducto(event.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className={"boton"} type={"button"} onClick={buttonClick}>
        Registrar Producto
      </button>

      <Link className={"volver"} to="/producto">
        <b>Volver</b>
      </Link>
      <br />
      <br />
      <Link className={"button"} to={"/producto/read-product"}>
        Ver productos
      </Link>
      {productoCreado && <p>Producto creado exitosamente</p>}
    </form>
  );
};
RegistroProducto.propTypes = {
  createProduct: PropTypes.func,
};
export default RegistroProducto;
