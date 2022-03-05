import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { ProductValidationSchema } from "./AddNewProduct";
import { useFormik } from "formik";

export function EditProduct() {
  const { id } = useParams();
  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    fetch(`${API}/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
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
    fetch(`${API}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/home"));
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
  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";

  return (
    <div className="edit-movie">
      <h3 className="edittext">Edit Movie</h3>
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
