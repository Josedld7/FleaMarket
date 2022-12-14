import React from "react";
import { useState, useEffect } from "react";
import styles from "./FormEditProduct.module.css"
import { validateUpdateProduct } from "../../../Helpers/Validations";
import swal from 'sweetalert';
import { BACK_DOMINIO } from "../../../config.js";
import axios from "axios";

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

    //errores validations
  const [errors, setErrors] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    setDataEdit({ ...dataEdit, [input.name]: input.value });
    setErrors(validateUpdateProduct({ ...dataEdit, [input.name]: input.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.put(`${BACK_DOMINIO}/api/product/${dataEdit._id}`, dataEdit)
        setDataEdit(initialForm)
        setErrors(validateUpdateProduct(dataEdit));
        swal("Poof! The product has been edited!", {
          icon: "success",
        });
      } else {
        swal("The product wasn´t removed!");
      }
    });
  };

  // el handleImage convierte la imagen en base64
  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFileToBase(file)
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setDataEdit({
        ...dataEdit,
        image: reader.result
      })

    }
  };

  const handleBluetooth = (e) => {
    e.preventDefault();

    setDataEdit({
      ...dataEdit,
      bluetooth: e.target.value
    })
  }


  useEffect(() => {
    if (productEdit) {
      setDataEdit(productEdit);
    } else {
      setDataEdit(initialForm);
    }
  }, [productEdit]);

  return (
    <>
  
      <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
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
        {errors.title && (<div className={styles.errors}>{errors.title}</div>)}

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
        {errors.price && (<div className={styles.errors}>{errors.price}</div>)}

        <label className={styles.labels} htmlFor="image">Add image url </label>
        <div>
          <input
            type="file"
            placeholder="image"
            name="image"
            onChange={handleImage}
            required
            className={styles.input}
          />
        </div>
        {errors.image && (<div className={styles.errors}>{errors.image}</div>)}

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
        {errors.rating && (<div className={styles.errors}>{errors.rating}</div>)}

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
        {errors.stock && (<div className={styles.errors}>{errors.stock}</div>)}

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
        {errors.condition && (<div className={styles.errors}>{errors.condition}</div>)}

        <label className={styles.labels} htmlFor="bluetooth">Bluetooth</label>
        <div>
          <select name="bluetooth" id="bluetooth" onChange={handleBluetooth}>
          <option value="">  </option>
          <option value="No">No</option>
          <option value="Si">Si</option> 
          </select>
        </div>
        {errors.bluetooth && (<div className={styles.errors}>{errors.bluetooth}</div>)}

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
        {errors.brand && (<div className={styles.errors}>{errors.brand}</div>)}

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
     {/*    {errors.ram && (<div className={styles.errors}>{errors.ram}</div>)} */}

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
      {/*   {errors.processor && (<div className={styles.errors}>{errors.processor}</div>)} */}

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
        {errors.battery && (<div className={styles.errors}>{errors.battery}</div>)}

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
        {errors.description && (<div className={styles.errors}>{errors.description}</div>)}

        <div>{<img src={dataEdit.image} width='150px' height='150' alt="imagen" />}</div>
        <button className={styles.green_btn} type="submit">Update</button>
      </form>
    </>
  );
};

export default FormEditProduct;
