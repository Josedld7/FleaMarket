import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkJwt.module.css";
import  AuthContext  from "../../../context/authProvider";
import login from  "../../../assets/login.png"
import register from  "../../../assets/register.png"

const LinkJwt = () => {

  const { userStorage, handleLogout } = useContext(AuthContext);

  return (
    <>
      {
        // autenticacion con jwt
        userStorage ? (
          <>
            <button className={styles.header_btns} onClick={handleLogout}>
              Logout
            </button>

            <Link to="/profile">
              <button className={styles.header_btns}>
              <img className={styles.logo_profile} src={login} />
              </button>
            </Link>
          </>
        ) : (
          <div className={styles.container_register_login}>
            <div>
              <Link to="/register">
              <button className={styles.header_btns}>
              <img className={styles.logo_register}  style={{ cursor: 'pointer' }} src={register} /></button>              
            </Link>
            </div>
            <div> <Link  className={styles.labels} style={{ textDecoration: "none" }} to="/register">Register</Link> </div> 
             <div><Link to="/login">
              <button className={styles.header_btns}>
              <img className={styles.logo_profile} style={{ cursor: 'pointer' }}src={login} /> </button>
            </Link>
            </div>
            <div >
              <Link className={styles.labels} style={{ textDecoration: "none" }}  to="/login" >Login</Link>
            </div>

            
          </div>
        )
      }
    </>
  );
};

export default LinkJwt;
