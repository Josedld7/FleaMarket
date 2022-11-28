import React from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import styles from './Table.module.css'


const Table = ({products, deleteProduct}) => {

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
      grow: 0,
    },
    {
      name: "NOMBRE",
      selector: (row) => row.title,
      sortable: true,
      grow: 0.5,
    },
    {
      name: "IMAGEN",
      selector: (row) => row.image,
      grow: 0,
      cell: (row) => (
        <img height="60px" width="56px" alt={row.name} src={row.image} />
      ),
    },
    {
      name: "PRECIO",
      selector: (row) => row.price,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "RATING",
      selector: (row) => row.rating,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "CATEGORIA",
      selector: (row) => row.category.name,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "STOCK",
      selector: (row) => row.stock,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "CONDICION",
      selector: (row) => row.condition,
      sortable: true,
      grow: 0,
    },
  
    {
      name: "BRAND",
      selector: (row) => row.brand,
      sortable: true,
      grow: 0,
    },
    {
      name: "DESCRIPCION",
      selector: (row) => row.description,
      grow: 0,
      sortable: true,
    },

    {
      name: "UPDATE",
      grow: 0,
      cell: (row) => <button onClick={()=>alert(row._id)} >UPDATE</button>
    },

    {
      name: "DELETE",
      grow: 0,
      cell: (row) => <button onClick={()=>deleteProduct(row._id)} >DELETE</button>
    },
  ];


  return (
    <>
      <DataTable
        columns={columns}
        data={products}
        title="Lista de productos en FleaMarket"
        pagination
      />
    </>
  );
};

export default Table;
