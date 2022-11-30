import React from "react";
import { useState, useEffect } from "react";
import styles from "./FormEditProduct.module.css"

const initialForm = {
  id: null,
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

const FormEditProduct = ({ productEdit,updateProduct }) => {

  const [dataEdit, setDataEdit] = useState(initialForm);
  
  const handleChange = ({ currentTarget: input }) => {
    setDataEdit({ ...dataEdit, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   updateProduct(dataEdit._id,dataEdit)
   setDataEdit(initialForm)
  };

  //mapear productedit

  useEffect(() => {
    if (productEdit) {
      setDataEdit(productEdit);
    } else {
      setDataEdit(initialForm);
    }
  }, [productEdit]);

  return (
    <>
  
      <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.form_title}>Update Product</h1>
          
        <label className={styles.labels} htmlFor="title">Name</label>
        <div>
          <input
            type="title"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={dataEdit.title || ""}
            // required
             className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="price">Price</label>
        <div>
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={dataEdit.price || ""}
            // required
            className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="image">Add image url </label>
        <div>
          <input
            type="text"
            placeholder="image"
            name="image"
            onChange={handleChange}
            value={dataEdit.image || ""}
            // required
            className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="rating">Rating</label>
        <div>
          <input
            type="text"
            placeholder="rating"
            name="rating"
            onChange={handleChange}
            value={dataEdit.rating || ""}
            // required
            className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="stock">Stock</label>
        <div>
          <input
            type="text"
            placeholder="stock"
            name="stock"
            onChange={handleChange}
            value={dataEdit.stock || ""}
            // required
            className={styles.input}
          />
        </div>

        {/* <div>
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            placeholder="categoria"
            name="category"
            onChange={handleChange}
            value={dataEdit.category || ""}
            // required
            // className={styles.input}
          />
        </div> */}

        {/* <div>
          <label htmlFor="user">User email:</label>
          <input
            type="text"
            placeholder="Email"
            name="user"
            onChange={handleChange}
            value={dataEdit.user || ""}
            // required
            // className={styles.input}
          />
        </div> */}

        <label className={styles.labels} htmlFor="condition">Condition</label>
        <div>
          <input
            type="text"
            placeholder="condition"
            name="condition"
            onChange={handleChange}
            value={dataEdit.condition || ""}
            // required
            className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="bluetooth">Bluetooth</label>
        <div>
          <input
            type="text"
            placeholder="bluetooth"
            name="bluetooth"
            onChange={handleChange}
            value={dataEdit.bluetooth || ""}
            // required
            className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="marca">Brand</label>
        <div>
          <input
            type="text"
            placeholder="brand"
            name="brand"
            onChange={handleChange}
            value={dataEdit.brand || ""}
            // required
            className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="ram">Memory Ram</label>
        <div>
          <input
            type="text"
            placeholder="ram"
            name="ram"
            onChange={handleChange}
            value={dataEdit.ram || ""}
            // required
            className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="processor">Processor</label>
        <div>
          <input
            type="text"
            placeholder="processor"
            name="processor"
            onChange={handleChange}
            value={dataEdit.processor || ""}
            // required
            className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="battery">Battery</label>
        <div>
          <input
            type="text"
            placeholder="battery"
            name="battery"
            onChange={handleChange}
            value={dataEdit.battery || ""}
            // required
            className={styles.input}
          />
        </div>

        <label className={styles.labels} htmlFor="description">Description</label>
        <div>
          <textarea
            name="description"
            rows="5"
            cols="33"
            onChange={handleChange}
            value={dataEdit.description || ""}
            className={styles.text_area}
          ></textarea>
        </div>

        <div>{<img src={dataEdit.image} width='150px' height='150' alt="imagen" />}</div>
        <button className={styles.green_btn} type="submit">Update</button>
      </form>
    </>
  );
};

export default FormEditProduct;
