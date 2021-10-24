import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrarVenta from "./RegistrarVenta";
import ListaVentas from "./ListaVentas";
import './Ventas.css';

export default function RegistroProducto() {
  return (
    <div>
      <Router>
        <Link className={"botonVenta"} to="/registro-venta">
          <b>Registrar Venta</b>
        </Link>
        <Link className={"botonVenta"} to="/lista-ventas">
          <b>Ver ventas</b>
        </Link>
        <Switch>
          <Route path="/registro-venta">
            <RegistrarVenta />
          </Route>
          <Route path="/lista-ventas">
            <ListaVentas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
