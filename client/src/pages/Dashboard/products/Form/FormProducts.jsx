import styles from "./FormProducts.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_DOMINIO } from "../../../../config";

const FormProducts = ({ products, setProducts }) => {
  // estados locales
  const [categories, setCategories] = useState("");
  const [users, setUsers] = useState("");

  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    rating: "",
    stock: "",
    condition: "",
    user: "",
    category: "",
    brand: "",
    ram: "",
    processor: "",
    battery: "",
    bluetooth: "",
  });

  const [error, setError] = useState("");

  // llamados al back
  const getCategory = async () => {
    const url = `${BACK_DOMINIO}/api/category`;
    const res = await axios.get(url, data);
    setCategories(...categories, res.data);
  };

  const getUsers = async () => {
    const url = `${BACK_DOMINIO}/api/users`;
    const res = await axios.get(url, data);
    setUsers(...users, res.data);
  };

  // registra cambios en los input
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // envia datps del form al back, actualiza y resetea estado y captura errores.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${BACK_DOMINIO}/api/product`;
      await axios.post(url, data);
      setProducts(products.concat(data));
      setData({
        title: "",
        price: "",
        description: "",
        image: "",
        rating: "",
        stock: "",
        condition: "",
        user: "",
        category: "",
        brand: "",
        ram: "",
        processor: "",
        battery: "",
        bluetooth: "",
      });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  console.log(error);

  // carga los datos del back
  useEffect(() => {
    getCategory();
    getUsers();
    // getAllProducts();
  }, []);

  //captura datos de los selects y los inserta en cada propiedad
  const handleSelectCategories = (e) => {
    e.preventDefault();
    setData({
      ...data,
      category: e.target.value,
    });
  };

  const handleSelectConditions = (e) => {
    e.preventDefault();
    setData({
      ...data,
      condition: e.target.value,
    });
  };

  const handleSelectUsers = (e) => {
    e.preventDefault();
    setData({
      ...data,
      user: e.target.value,
    });
  };

  const handleSelectBluetooth = (e) => {
    e.preventDefault();
    setData({
      ...data,
      bluetooth: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container_input}>
          <label htmlFor="title">Nombre del producto</label>
          <input
            type="title"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={data.title}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.container_input}>
          <label htmlFor="price">Precio del producto</label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={data.price}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.container_input}>
          <label htmlFor="image">Iserte una url de imagen</label>
          <input
            type="text"
            placeholder="image"
            name="image"
            onChange={handleChange}
            value={data.image}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.container_input}>
          <label htmlFor="rating">Califique el producto</label>
          <input
            type="text"
            placeholder="rating"
            name="rating"
            onChange={handleChange}
            value={data.rating}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.container_input}>
          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            placeholder="stock"
            name="stock"
            onChange={handleChange}
            value={data.stock}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.container_input}>
          <label htmlFor="categories">Asigne una categoria</label>
          {
            <select onChange={handleSelectCategories}>
              {categories &&
                categories.map((item, i) => {
                  return (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          }
        </div>

        <div className={styles.container_input}>
          <label htmlFor="user">Creador por:</label>
          {
            <select onChange={handleSelectUsers}>
              {users &&
                users.map((item, i) => {
                  return (
                    <option key={item._id} value={item.email}>
                      {item.email}
                    </option>
                  );
                })}
            </select>
          }
        </div>

        <div className={styles.container_input}>
          <label htmlFor="condition">Cual es la condicion del producto?</label>
          <select onChange={handleSelectConditions}>
            <option value="Nuevo">New</option>
            <option value="Usado">Used</option>
          </select>
        </div>

        <div className={styles.container_input}>
          <label htmlFor="bluetooth">El producto tiene bluetooth?</label>
          <select onChange={handleSelectBluetooth}>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className={styles.container_input}>
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            placeholder="brand"
            name="brand"
            onChange={handleChange}
            value={data.brand}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.container_input}>
          <label htmlFor="ram">Memoria ram:</label>
          <input
            type="text"
            placeholder="ram"
            name="ram"
            onChange={handleChange}
            value={data.ram}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.container_input}>
          <label htmlFor="processor">Procesador:</label>
          <input
            type="text"
            placeholder="processor"
            name="processor"
            onChange={handleChange}
            value={data.processor}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.container_input}>
          <label htmlFor="battery">Bateria:</label>
          <input
            type="text"
            placeholder="battery"
            name="battery"
            onChange={handleChange}
            value={data.battery}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.container_input}>
          <label htmlFor="description">Descripcion:</label>
          <textarea
            name="description"
            rows="5"
            cols="33"
            onChange={handleChange}
            value={data.description}
          ></textarea>
        </div>
        <div>{<img src={data.image} alt="imagen" />}</div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default FormProducts;
