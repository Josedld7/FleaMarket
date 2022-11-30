import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { useContext } from "react";
import AuthContext from "../../context/authProvider";
import HeadPage from "../../components/HeadPage/HeadPage";
import styles from './Profile.module.css'
import person from "../../img/person.png"
import Modal from "./Modal";
import ProfileForm from "./ProfileForm";

const Profile = () => {
  const { user } = useAuth0();
  const { userStorage } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div >
      <HeadPage />
      <div className={styles.block__profile}>
        <div className={styles.block__profile_contendor}>
          <div className={styles.block__profile_contendoruno}>
            <img className={styles.block__profile_contendoruno_person} src={person} alt="" />
            {userStorage && <h1>Username: {userStorage.username}</h1>}
            {user && <h1>Username: {user.nickname}</h1>}
          </div>

          <div className={styles.block__profile_contendordos}>
            {/* <JSONPretty data={user} /> */}

            {userStorage && <h1>Name: {userStorage.name}</h1>}
            {user && <h1>Name: {user.given_name}</h1>}
            <div className={styles.block__profile_contendordosdiv}  ></div>
            {user && <h1>Lastname: {user.family_name}</h1>}
            <div className={styles.block__profile_contendordosdiv}  ></div>
            {userStorage && <h1>Email: {userStorage.email}</h1>}
            {user && <h1>Email: {user.email}</h1>}
            <div className={styles.block__profile_contendordosdiv}  ></div>
            {userStorage && <h1>Country: {userStorage.country}</h1>}
            <div className={styles.block__profile_contendordosdiv}  ></div>
            {userStorage && <h1>City: {userStorage.city}</h1>}
            <div className={styles.block__profile_contendordosdiv}  ></div>
            {userStorage && <h1>Role: {userStorage.role}</h1>}

          </div>

          <br />

          {/* { userStorage && <Link to="/profile/update"><button>Edit profile</button></Link> } */}

          {
            userStorage &&
            <div>
              <button onClick={openModal}>Edit profile</button>

              <Modal isOpen={isOpen} closeModal={closeModal}>
                <ProfileForm />
              </Modal>
            </div>
          }

        </div>

      </div>
    </div>
  );
};

export default Profile;
