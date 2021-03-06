import React, { useEffect, useState } from "react";
//import { AppContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";
import { httpGet } from '../../utils/fetch';
import Product from "./Product";

const ListaProducto = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{

    const getProduct = async () =>{
      const products = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/producto/read-product`);
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
            _id={item._id}
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
