import React from "react";
import { Link, Route } from "react-router-dom";
import Users from "../users/Users";

import Admin from "../AdminDash/AdminDash";

import Products from "../products/products/Products";

import Categories from "../categories/Categories";
import Orders from "../orders/Orders";
import styles from "../Dashboard/Dashboard.module.css"
import logousers from "../../../assets/users.png"
import logoprofile from "../../../assets/profile.png"
const Dashboard = () => {
  return (
    <div className={styles.container} >
      <header className={styles.header}>
        <nav>
          <ul className={styles.ul}>
            <li>logo</li>
            <li>xxx@hotmail.com</li>
            <li>Profile</li>
            <li>back to home</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main} >
        <aside className={styles.aside}>

          <Link to='/admin'>
            <h1>Dashboard</h1>
          </Link>
          
          

          <div className={styles.asides_div}>
            <Link to="/users"><img className={styles.logo_users} src={logousers}/></Link>
            <Link to="/users"><label  className={styles.aside_labels}>users</label></Link>
          </div>
          <div className={styles.asides_div}>
          <Link to="/products"><img className={styles.logo_users} src={logoprofile}/></Link>
            <Link to="/products">
            <label className={styles.aside_labels}>products</label>

          </Link>
          </div>
          
          <Link to="/orders">
            <h1>orders</h1>
          </Link>
          <Link to="/categories">
            <h1>categories</h1>
          </Link>
        </aside>

         

        <section className={styles.section}>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/users" component={Users} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/categories" component={Categories} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
