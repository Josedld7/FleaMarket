import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {Detail} from './pages/Detail/Detail.jsx'
import Landing from './pages/Landing/Landing.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import { FormUser } from './components/FormUser/FormUser.jsx';
import "./App.css"


// Dummy components (They should be delete later)
// const NavBar = () => <h1>NavBar</h1>;
// const Home = () => <h1>Home</h1>;
//const Detail = () => <h1>Detail</h1>;

function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/home">
            <NavBar />
            <Home />
          </Route>
          <Route path="/detail/:id">
            <NavBar />
            <Detail />
          </Route>
          <Route path="/FormUser">
            <NavBar />
            <FormUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
