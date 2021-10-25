import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistroProducto from "./RegistroProducto";
import ListaProducto from "./ListaProducto";
import './Producto.css';
import AppContextComponent from "../AppContext/AppContext";

export default function Producto(props) {
  return (
    <div>
      <Router>
        
          <Link
            className={'botonProducto'}            
            to={"/producto/create-product"}
          >
            <b>Registrar Producto</b>
          </Link>  
       
          <Link
            className={'botonProducto'}            
            to={"/producto/read-product"}
          >
            <b>Ver lista de productos</b>
          </Link>
               
        <Switch>
          <AppContextComponent>
          <Route path="/producto/create-product">
            <RegistroProducto />
          </Route>   
          <Route path="/producto/read-product">
            <ListaProducto />
            </Route>   
            </AppContextComponent>
        </Switch>
      </Router>      
    </div>
  );
};
