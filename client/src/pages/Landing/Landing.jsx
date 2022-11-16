import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {loadProducts, loadCategories} from '../../actions/index';
import "./Landing.css";
import foto from "../../images/logodos.png";

import axios from 'axios';
const endPoint = 'http://localhost:3001';

function Landing(props) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // ---> It can be used to see what is coming from the api, don't delete please <---
    // const fetchProducts = async () => {
    //   const response = await axios.get(`${endPoint}/api/products`);
    //   console.log(response.data);
    // }
    // fetchProducts();
    dispatch(loadProducts());
    dispatch(loadCategories());
  });

  return (
    <div className='landing'>
      <header>
        <img className='logolanding' src={foto} alt="" />
        <h1 className='bienvenidos'>Bienvenidos a FleaMarket</h1>
        <h3 className='contribuye'>¡Contribuye a la economía circular y ahorrá como loco!</h3>
      </header>
      <Link to="/home">
        <button className='botonvamos'>¡Vamos!</button>
      </Link>
    </div>
  )
}

export default Landing;