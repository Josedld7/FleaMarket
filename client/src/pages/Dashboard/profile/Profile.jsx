import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../../context/authProvider";
import styles from "./profile.module.css"
import { validateProfileUpdate } from "../../../Helpers/Validations";
const Profile = () => {

  const { userStorage } = useContext(AuthContext);
  if (userStorage) {
    var id = userStorage.id
  }

  const [user, setUser] = useState("");
  const [changes, setChanges] = useState({});
  const [errors, setErrors] = useState({});

  const getUser = () => {
    axios.get(`http://localhost:3001/api/user/${id}`)
      .then((data) => { setUser(data.data) })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => getUser(), console.log("yo", user), [])

  function handleChanges(e) {
    e.preventDefault()
    setChanges({
      ...changes,
      [e.target.name]: e.target.value
    })
    setErrors(validateProfileUpdate({ ...changes, [e.target.name]: e.target.value }));
  }

  async function update() {
    try {
      let resp = window.confirm("Do you want update your profile?")
    if (resp === true) {
      const resp = await axios.put(`http://localhost:3001/api/user/${id}`, changes);
      console.log("respuesta", resp.data)
    }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.form_container}>
      <form className={styles.form}>
        <h1 className={styles.form_title}>Update Data User</h1>
        <label className={styles.labels}>Firstname </label>
        <input className={styles.input} type="text" placeholder={user.firstname} name="firstname" onChange={handleChanges} />
        {errors.firstname && (<div className={styles.errors}>{errors.firstname}</div>)}
        <br />
        <label className={styles.labels}>Lastname </label>
        <input className={styles.input} type="text" placeholder={user.lastname} name="lastname" onChange={handleChanges} />
        {errors.lastname && (<div className={styles.errors}>{errors.lastname}</div>)}
        <br />
        <label className={styles.labels}>Username </label>
        <input className={styles.input} type="text" placeholder={user.username} name="username" onChange={handleChanges} />
        {errors.username && (<div className={styles.errors}>{errors.username}</div>)}
        <br />
        <label className={styles.labels}>Email</label>
        <input className={styles.input} type="text" placeholder={user.email} name="email" onChange={handleChanges} />
        {errors.email && (<div className={styles.errors}>{errors.email}</div>)}
        <br />
        <label className={styles.labels}>Password</label>
        <input className={styles.input} type="password" placeholder="New password" name="password" onChange={handleChanges} />
        {errors.password && (<div className={styles.errors}>{errors.password}</div>)}
        <br />
        <label className={styles.labels}>Country</label>
        <input className={styles.input} type="text" placeholder={user.country} name="country" onChange={handleChanges} />
        {errors.country && (<div className={styles.errors}>{errors.country}</div>)}
        <br />
        <label className={styles.labels}>City</label>
        <input className={styles.input} type="text" placeholder={user.city} name="city" onChange={handleChanges} />
        {errors.city && (<div className={styles.errors}>{errors.city}</div>)}
        <br />
        <label className={styles.labels}>Addres</label>
        <input className={styles.input} type="text" placeholder={user.addres} name="addres" onChange={handleChanges} />
        {errors.addres && (<div className={styles.errors}>{errors.addres}</div>)}
        <br />
        <label className={styles.labels}>Telephone</label>
        <input className={styles.input} type="text" placeholder={user.telephone} name="telephone" onChange={handleChanges} />
        {errors.telephone && (<div className={styles.errors}>{errors.telephone}</div>)}
        <br />
      
      <button className={styles.green_btn} onClick={update}>Update</button>
      </form>


    </div>
  )
}

export default Profile;



 