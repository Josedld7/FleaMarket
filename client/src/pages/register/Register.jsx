import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { validate } from "../../Helpers/Validations.js";
import { Link, useHistory } from "react-router-dom";
import HeadPage from "../../components/HeadPage/HeadPage";
import { BACK_DOMINIO } from "../../config.js";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    country: "",
    city: "",
    addres: "",
    telephone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setErrors(validate({ ...data, [input.name]: input.value }));
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.firstname) {
      alert("Please fill in the registration details.")
   }
   else{
    try {
      const url = `${BACK_DOMINIO}/api/register`;
      await axios.post(url, data);
      history.push("/login");
      setErrors(validate(data));
      setData({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        country: "",
        city: "",
        addres: "",
        telephone: "",
        password: "",
      });
    } catch (error) {
      setError(error.response.data.message);
    }
  }
  };

  return (
    <div className={styles.container}>
      <HeadPage />
      <section className={styles.container_position}>
        <div className={styles.register_container}>

          <div className={styles.register_container_welcome}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <h2 className={styles.register_title}>Welcome Back</h2>
            </Link>

            <Link
              className={styles.register_subtitle}
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <p>Sing in</p>
            </Link>
          </div>

          <div className={styles.form_container}>

            <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.form_title}>Create Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              {errors.email && (
                <div className={styles.errors}>{errors.email}</div>
              )}

              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
                required
                className={styles.input}
              />
              {errors.firstname && (
                <div className={styles.errors}>{errors.firstname}</div>
              )}

              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
                required
                className={styles.input}
              />
              {errors.lastname && (
                <p className={styles.errors}>{errors.lastname}</p>
              )}

              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={data.username}
                required
                className={styles.input}
              />
              {errors.username && (
                <p className={styles.errors}>{errors.username}</p>
              )}

              <input
                type="country"
                placeholder="Country"
                name="country"
                onChange={handleChange}
                value={data.country}
                required
                className={styles.input}
              />
              {errors.country && (
                <p className={styles.errors}>{errors.country}</p>
              )}

              <input
                type="city"
                placeholder="City"
                name="city"
                onChange={handleChange}
                value={data.city}
                required
                className={styles.input}
              />
              {errors.city && <p className={styles.errors}>{errors.city}</p>}

              <input
                type="addres"
                placeholder="Addres"
                name="addres"
                onChange={handleChange}
                value={data.addres}
                required
                className={styles.input}
              />
              {errors.addres && (
                <p className={styles.errors}>{errors.addres}</p>
              )}

              <input
                type="telephone"
                placeholder="Telephone"
                name="telephone"
                onChange={handleChange}
                value={data.telephone}
                required
                className={styles.input}
              />
              {errors.telephone && (
                <p className={styles.errors}>{errors.telephone}</p>
              )}

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              {errors.password && (
                <p className={styles.errors}>{errors.password}</p>
              )}

              <button type="submit" className={styles.green_btn}>
                Sigin Up
              </button>
            </form>
          </div>

          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Register;
