// import styles from ".";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACK_DOMINIO } from "../../../config";
import styles from "./FormProducts.module.css"
import { validateCreateProduct } from "../../../Helpers/Validations.js";

const initialForm = {
  id: "",
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
};

const FormProducts = ({ products, setProducts }) => {
  // guarda todas las categorias
  const [categories, setCategories] = useState("");

  // guarda los usuuarios
  const [users, setUsers] = useState("");

  // guarda los datos de los inputs
  const [data, setData] = useState(initialForm);

  // captura los errores del axios
  const [error, setError] = useState("");

   //errores validations
   const [errors, setErrors] = useState({});

  //  trae todas las categorias
  const getCategory = async () => {
    const url = `${BACK_DOMINIO}/api/category`;
    const res = await axios.get(url, data);
    setCategories(...categories, res.data);
  };
  // trae todos los usuarios
  const getUsers = async () => {
    const url = `${BACK_DOMINIO}/api/users`;
    const res = await axios.get(url, data);
    setUsers(...users, res.data);
  };

  // carga las categorias y los usuarios 
  useEffect(() => {
    getCategory();
    getUsers();
  }, []);

  //FORMULARIO: registra los cambios en los inputs
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setErrors(validateCreateProduct({ ...data, [input.name]: input.value }));
  };

  // FORMULARIO: envia datos del form al back, actualiza y resetea estado y captura errores.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `${BACK_DOMINIO}/api/product`;
      const res = await axios.post(url, data);
      setProducts(products.concat(res.data));
      setData(initialForm);
    } catch (error) {
      setError(error.response.data.message);

  }
  };

  // FORMULARIO: las siguientes funciones registran los values de los selects
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

  // el handleImage convierte la imagen en base64
  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFileToBase(file)
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setData({
        ...data,
        image: reader.result
      })

    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data" >
      <h1 className={styles.form_title}>Add Products</h1>
        
        <label className={styles.labels} htmlFor="title">Name </label>
        <div>
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
        {errors.title && (<div className={styles.errors}>{errors.title}</div>)}

        <label className={styles.labels}  htmlFor="price">Price </label>
        <div>
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
        {errors.price && (<div className={styles.errors}>{errors.price}</div>)}

        <label className={styles.labels}  htmlFor="image">Add image url </label>
        <div>
          <input
            type="file"
            placeholder="Image"
            name="image"
            onChange={handleImage}
            required
            className={styles.input}
          />
        </div>
        {errors.image && (<div className={styles.errors}>{errors.image}</div>)}

        <label className={styles.labels}  htmlFor="rating">Rating </label>
        <div>
          <input
            type="text"
            placeholder="Rating"
            name="rating"
            onChange={handleChange}
            value={data.rating}
            required
            className={styles.input}
          />
        </div>
        {errors.rating && (<div className={styles.errors}>{errors.rating}</div>)}

       
        <label className={styles.labels}  htmlFor="stock">Stock </label>
        <div>
          <input
            type="text"
            placeholder="Stock"
            name="stock"
            onChange={handleChange}
            value={data.stock}
            required
            className={styles.input}
          />
        </div>
        {errors.stock && (<div className={styles.errors}>{errors.stock}</div>)}
      <section>   
     <div>
          <label className={styles.labels}  htmlFor="categories">Add category </label>
          {
            <select className={styles.selects} onChange={handleSelectCategories}>
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

        <div>
          <label className={styles.labels}  htmlFor="user">Created By </label>
          {
            <select className={styles.selects} onChange={handleSelectUsers}>
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

        <div>
          <label className={styles.labels}  htmlFor="condition">Condition of the product?</label>
          <select  className={styles.selects} onChange={handleSelectConditions}>
            <option value="Nuevo">New</option>
            <option value="Usado">Used</option>
          </select>
        </div> 

        <div>
          <label className={styles.labels}  htmlFor="bluetooth">Does the product have bluetooth?</label>
          <select  className={styles.selects} onChange={handleSelectBluetooth}>
            <option value="Si">Yes</option>
            <option value="No">No</option>
          </select>
        </div>  
        </section>
          
        <label className={styles.labels}  htmlFor="marca">Marca:</label>
        <div>
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            onChange={handleChange}
            value={data.brand}
            required
            className={styles.input}
          />
        </div>
        {errors.brand && (<div className={styles.errors}>{errors.brand}</div>)}

        <label className={styles.labels}  htmlFor="ram">Memory Ram </label>
        <div>
          <input
            type="text"
            placeholder="Ram"
            name="ram"
            onChange={handleChange}
            value={data.ram}
            required
            className={styles.input}
          />
        </div> {errors.ram && (<div className={styles.errors}>{errors.ram}</div>)}

        <label className={styles.labels}  htmlFor="processor">Processor </label>
        <div>
          <input
            type="text"
            placeholder="Processor"
            name="processor"
            onChange={handleChange}
            value={data.processor}
            required
            className={styles.input}
          />
        </div> {errors.processor && (<div className={styles.errors}>{errors.processor}</div>)}

        <label className={styles.labels}  htmlFor="battery">Battery</label>
        <div>
          <input
            type="text"
            placeholder="Battery"
            name="battery"
            onChange={handleChange}
            value={data.battery}
            required
            className={styles.input}
          />
        </div>
         {errors.battery && (<div className={styles.errors}>{errors.battery}</div>)}

        <label className={styles.labels}  htmlFor="description">Description</label>
        <div className={styles.description}>
          <textarea
            name="description"
            rows="5"
            cols="33"
            onChange={handleChange}
            value={data.description}
            className={styles.text_area}
          ></textarea>
        </div>
        {errors.description && (<div className={styles.errors}>{errors.description}</div>)}

        <div className={styles.image_form}>{<img src={data.image} alt="imagen" width="250px" height="250px" />}</div>
        <button type="submit" className={styles.green_btn}>Add</button>
      </form>
    </>
  );
};

export default FormProducts;
