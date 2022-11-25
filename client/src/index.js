import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from './context/authProvider.jsx';
import { Auth0Provider } from "@auth0/auth0-react";
import { FRONT_DOMINIO } from "./config.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <AuthProvider>
    <Auth0Provider
      domain="dev-xflh1nhmiqkhpil1.us.auth0.com"
      clientId="ZbCJ5TcMgZ9PQZpUeDOW2fh3IlsEvknN"
      redirectUri={FRONT_DOMINIO}
      audience="our store"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
    </AuthProvider>
    
  </Provider>
  </React.StrictMode>
);