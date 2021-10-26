import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { httpGet } from '../../utils/fetch';
import Venta from "./Venta";
import "./ListaVentas.css";

export default function ListaVentas() {
  const [ventas, setVentas] = useState([]);

  useEffect(()=>{

      const getVenta = async () =>{
        const ventas = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/venta/read-venta`);
        setVentas(ventas);
      }
      getVenta();
  }, []);
  return (
    <div>
      <section>
        <div id={"container"}>
          <form id={"form"}>
            <label className={"element"} for={"search"}>
              Buscar
            </label>
            <br />
            <input
              className={"element"}
              type={"text"}
              name={"search"}
            />
            <input
              className={"element"}
              type={"button"}
              name={"btnSearch"}
              value={"Ir"}
            />
          </form>
        </div>
      </section>
      {(ventas || []).map((item, index)=>{
        return (
          <Venta 
          key={index}
          _id={item._id}
          valorVenta={item.valorVenta}
          valorIdProducto={item.valorIdProducto}
          valorUnitarioProducto={item.valorUnitarioProducto}
          cantidadProducto={item.cantidadProducto}
          fechaVenta={item.fechaVenta}
          idCliente={item.idCliente}
          nombreCliente={item.nombreCliente}
          idVendedor={item.idVendedor}
          nombreVendedor={item.nombreVendedor}
          />
        )
      })}
      <Link
        className={"volver"}
        style={{ textDecoration: "none", color: "white" }}
        to="/venta"
      >
        <b>Volver</b>
      </Link>

      
      <Link to={"/venta/create-venta"}>Registrar Venta</Link>
    </div>
  );
}
