import styles from "./login.module.css";
import axios from "axios";
import { useState } from "react";
import { Link} from "react-router-dom";
import "./login.module.css";
import { validateLogin } from "../../Helpers/Validations";
import HeadPage from "../../components/HeadPage/HeadPage";
import { useAuth0 } from "@auth0/auth0-react";
import { BACK_DOMINIO } from "../../config.js"

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setErrors(validateLogin({ ...data, [input.name]: input.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${BACK_DOMINIO}/api/login`;
      const res = await axios.post(url, data);
      localStorage.setItem("user", JSON.stringify(res.data));
      window.location = "/";
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className={styles.container}>
      <HeadPage />
      <section className={styles.container_position}>
        <div className={styles.login_container}>
          <div className={styles.login_container_title}>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <h2 className={styles.title}>New Here?</h2>
            </Link>

            <Link to="/register" style={{ textDecoration: "none" }}>
              <p className={styles.subtitle}>Sing up</p>
            </Link>
          </div>

          <div className={styles.container_form}>
            <h1 className={styles.form_title}>Login to Your Account</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                Sing In
              </button>
            </form>
            <button onClick={loginWithRedirect} className={styles.green_btn} >
              Sing In with Auth0 and Google
            </button>

            {error && (
              <div>
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
