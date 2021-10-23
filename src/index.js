import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
<BrowserRouter>
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ubgoj4dj.us.auth0.com"
      clientId="Si6daEoMbTqF6lTs66ZpmmmAMAyMl9kB"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
