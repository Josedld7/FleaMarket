import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Detail } from "./pages/Detail/Detail.jsx";
import Home from "./pages/Home/Home.jsx";
import Payment from "./components/Payment/Payment.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ShopingCard from "./pages/ShopingCard/ShopingCard.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Review from "./components/Reviews/Reviews.jsx";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard.jsx";
import Access from "./components/Access/Access.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/access" component={Access} />

          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/payment" component={Payment} />
          <PrivateRoute path="/shoping" component={ShopingCard} />
          <Route exact to="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
