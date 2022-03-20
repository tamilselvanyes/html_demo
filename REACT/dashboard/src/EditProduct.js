import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { ProductValidationSchema } from "./AddNewProduct";
import { useFormik } from "formik";
import { PRODUCT_API } from "./global";
import { context } from "./App";
import { useContext } from "react";

export function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [open] = [useContext(context)[4]];

  useEffect(() => {
    console.log("useEffect");
    fetch(`${PRODUCT_API}/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        marginLeft: open ? "240px" : "70px",
        marginTop: "40px",
        padding: "10px",
      }}
    >
      {product ? <EditProductForm product={product} /> : <h2>Loading</h2>}
    </div>
  );
}

function EditProductForm({ product }) {
  const editProduct = (updatedProduct) => {
    // 1. method must be PUT & pass id
    // 2. body - JSON data
    // 3. headers - JSON data
    // After PUT is complete ->  movie to /home
    fetch(`${PRODUCT_API}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/showproducts"));
  };

  const formik = useFormik({
    initialValues: {
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
      category: product.category,
    },
    validationSchema: ProductValidationSchema,
    onSubmit: (updatedProduct) => {
      editProduct(updatedProduct);
    },
  });

  const history = useHistory();

  return (
    <div className="edit-movie">
      <h3 className="edittext">Edit Product</h3>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          type="text"
          label="Title"
          id="title"
          name="title"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.title}
          onBlur={formik.handleBlur}
          error={formik.touched.title && formik.errors.title}
          helperText={
            formik.touched.title && formik.errors.title
              ? formik.errors.title
              : ""
          }
        />
        <TextField
          type="text"
          label="Image"
          id="image"
          name="image"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.image}
          onBlur={formik.handleBlur}
          error={formik.touched.image && formik.errors.image}
          helperText={
            formik.touched.image && formik.errors.image
              ? formik.errors.image
              : ""
          }
        />

        <TextField
          type="text"
          label="Description"
          id="description"
          name="description"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.description}
          onBlur={formik.handleBlur}
          error={formik.touched.description && formik.errors.description}
          helperText={
            formik.touched.description && formik.errors.description
              ? formik.errors.description
              : ""
          }
        />

        <TextField
          type="number"
          label="Price"
          id="price"
          name="price"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.price}
          onBlur={formik.handleBlur}
          error={formik.touched.price && formik.errors.price}
          helperText={
            formik.touched.price && formik.errors.price
              ? formik.errors.price
              : ""
          }
        />

        <TextField
          type="text"
          label="Category"
          id="category"
          name="category"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.category}
          onBlur={formik.handleBlur}
          error={formik.touched.category && formik.errors.category}
          helperText={
            formik.touched.category && formik.errors.category
              ? formik.errors.category
              : ""
          }
        />

        <Button type="Submit" variant="outlined" id="addbutton" color="success">
          Save
        </Button>
      </form>
    </div>
  );
}
