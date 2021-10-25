import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrarVenta from "./RegistrarVenta";
import ListaVentas from "./ListaVentas";
import './Ventas.css';

export default function RegistroProducto() {
  return (
    <div>
      <Router>
        <Link className={"botonVenta"} to="/venta/create-venta">
          <b>Registrar Venta</b>
        </Link>
        <Link className={"botonVenta"} to="/venta/read-venta">
          <b>Ver ventas</b>
        </Link>
        <Switch>
          <Route path="/venta/create-venta">
            <RegistrarVenta />
          </Route>
          <Route path="/venta/read-venta">
            <ListaVentas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
