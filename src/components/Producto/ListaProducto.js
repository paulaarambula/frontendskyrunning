import React, { useEffect, useState } from "react";
//import { AppContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";
import { httpGet } from '../../utils/fetch';
import { getToken } from '../../utils/getToken';
import Product from "./Product";

const ListaProducto = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const token = getToken();
    if (!token) {
      window.location.href = '/'; // redirecciona a la página principal
      return;
    }
    const getProduct = async () =>{
      const products = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/producto/read-poduct`);
      setProducts(products);
    }
    getProduct();
  }, []);

  return (
    <div>
      {(products || []).map((item, index) => {
        return (
          <Product
            key={index}
            id={item.id}
            descripcion={item.descripcion}
            valorUnitario={item.valorUnitario}
            estadoProducto={item.estadoProducto}
            done={item.done}
          />
        );
      })}
      <br />
      <Link to={"/producto/create-product"}>Registrar Producto</Link>
    </div>
  );
};

export default ListaProducto;
