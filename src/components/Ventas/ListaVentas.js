import React from "react";
import { Link } from "react-router-dom";
import "./ListaVentas.css";

export default function ListaVentas() {
  return (
    <div>
      <Link
        className={"volver"}
        style={{ textDecoration: "none", color: "white" }}
        to="/venta"
      >
        <b>Volver</b>
      </Link>

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
      <Link to={"/venta/create-venta"}>Registrar Venta</Link>
    </div>
  );
}
