import React from "react";
import { Link } from "react-router-dom";

const access = () => {

    return(
        <div>
            <h3>¡Hola! Para ingresar al carrito, ingresa a tu cuenta</h3>
            <Link to="/register">
                <button style={{cursor: "pointer"}}>Crear cuenta</button>
            </Link>
            <Link to="/login" >
                <button style={{cursor: "pointer"}}>Ingresar</button>
            </Link>
        </div>
    )
}

export default access;