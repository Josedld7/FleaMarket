import { Redirect, Route } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import AuthContext from "../../context/authProvider";
import { useContext } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userStorage } = useContext(AuthContext);
  const { user } = useAuth0();

  function modal() {
    let resp = window.confirm("Antes de continuar debe iniciar sesion. Quiere iniciar sesion ?")
    if (resp === true) {
      return window.location.replace("http://localhost:3000/login")
    }
  }

  return (
    <Route {...rest}>
      {userStorage || user ? <Component /> : <Redirect to="/access" />}
    </Route>
  );
};

export default PrivateRoute;
