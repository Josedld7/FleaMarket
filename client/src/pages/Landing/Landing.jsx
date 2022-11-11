import {Link} from 'react-router-dom';
import "./Landing.css"
import foto from "../../images/logodos.png"

function Landing(props) {
  return (
    <div className='landing'>
      <header>
        <img className='logolanding' src={foto} alt="" />
        <h1 className='bienvenidos'>Bienvenidos a FleaMarkek</h1>
        <h3 className='contribuye'>¡Contribuye a la economía circular y ahorrá como loco!</h3>
      </header>
      <Link to="/home">
        <button className='botonvamos'>¡Vamos!</button>
      </Link>
    </div>
  )
}

export default Landing;