import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logout from "../Login/Logout";
import Profile from "../Perfil/Perfil";
import Producto from "../Producto/Producto";
import Ventas from "../Ventas/Ventas"
import Login from "../Login/Login";
import AppContextComponent from "../AppContext/AppContext";
import "./Inicio.css";

export default function Inicio() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <div className="profile-section">
            <Profile />
            <br />
            <Logout />
          </div>
          <Router>
            <div>
              <section className="option-section">
                <Link
                  className="options"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/producto"
                >
                  <b> Productos </b>
                </Link>
                <br /><br />
                <Link
                  className="options"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/venta"
                >
                  <b> Ventas </b>
                </Link>
              </section>
            </div>
            <Switch>
              <AppContextComponent>
              <Route path="/producto">
                <Producto />
              </Route> 
              <Route path="/venta">
                <Ventas />
              </Route>
              </AppContextComponent>
            </Switch>
          </Router>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
