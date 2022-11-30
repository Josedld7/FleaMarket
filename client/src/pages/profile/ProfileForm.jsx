import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../context/authProvider";


const ProfileForm = () => {

  const { userStorage } = useContext(AuthContext);
  if (userStorage) {
    var id = userStorage.id
  }

  const [user, setUser] = useState("");
  const [changes, setChanges] = useState({});
  console.log("cambios", changes)
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
    <div>
      <form >
        <label>firstname </label>
        <input type="text" placeholder={user.firstname} name="firstname" onChange={handleChanges} />
        <br />
        <label>lastname </label>
        <input type="text" placeholder={user.lastname} name="lastname" onChange={handleChanges} />
        <br />
        <label>username </label>
        <input type="text" placeholder={user.username} name="username" onChange={handleChanges} />
        <br />
        <label>email</label>
        <input type="text" placeholder={user.email} name="email" onChange={handleChanges} />
        <br />
        <label>password</label>
        <input type="text" placeholder="new password" name="password" onChage={handleChanges} />
        <br />
        <label>country</label>
        <input type="text" placeholder={user.country} name="country" onChange={handleChanges} />
        <br />
        <label>city</label>
        <input type="text" placeholder={user.city} name="city" onChange={handleChanges} />
        <br />
        <label>addres</label>
        <input type="text" placeholder={user.addres} name="addres" onChange={handleChanges} />
        <br />
        <label>telephone</label>
        <input type="text" placeholder={user.telephone} name="telephone" onChange={handleChanges} />
        <br />
      </form>

      <button onClick={update}>Update</button>

    </div>
  )
}

export default ProfileForm;