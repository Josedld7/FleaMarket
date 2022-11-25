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
          <>
            <Link to="/register">
              <button className={styles.header_btns}>
              <img className={styles.logo_register} src={register} />
              </button>
            </Link>

            <Link to="/login">
              <button className={styles.header_btns}>
              <img className={styles.logo_profile} src={login} /> </button>
            </Link>
          </>
        )
      }
    </>
  );
};

export default LinkJwt;
