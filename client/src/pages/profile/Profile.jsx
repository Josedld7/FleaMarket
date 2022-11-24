import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { useContext } from "react";
import AuthContext from "../../context/authProvider";
import HeadPage from "../../components/HeadPage/HeadPage";
import styles from './Profile.module.css'
import person from "../../img/person.png"


const Profile = () => {
  const { user } = useAuth0();
  const { userStorage } = useContext(AuthContext);

  return (
    <div >
      <HeadPage />
      <div className={styles.block__profile}>
        <div className={styles.block__profile_contendor}>
          <div className={styles.block__profile_contendoruno}> 
            <img className={styles.block__profile_contendoruno_person}src={person} alt="" />          
            {userStorage && <h1>Username: {userStorage.username}</h1>}
          </div>

          <div className={styles.block__profile_contendordos}>
            <JSONPretty data={user} />
            
            {userStorage && <h1>Name: {userStorage.name}</h1>}
            <div className={styles.block__profile_contendordosdiv}  ></div>
            {userStorage && <h1>Email: {userStorage.email}</h1>}
            <div className={styles.block__profile_contendordosdiv}  ></div>
            {userStorage && <h1>Country: {userStorage.country}</h1>}
            <div className={styles.block__profile_contendordosdiv}  ></div>
            {userStorage && <h1>City: {userStorage.city}</h1>}
            <div className={styles.block__profile_contendordosdiv}  ></div>
            {userStorage && <h1>Role: {userStorage.role}</h1>}

          </div>
          
        </div>
      
      </div>
    </div>
  );
};

export default Profile;
