import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export const ProductValidationSchema = yup.object({
  title: yup.string().required("It will be good if the Product has a Title"),
  image: yup
    .string()
    .required("Why not fill this image with a image address ? ")
    .min(4, "Need a longer image link"),
  price: yup
    .number()
    .min(0)
    .required("You aren't giving this wonderful product free?"),
  description: yup
    .string()
    .required("why not give some description about your product?")
    .min(20, "Need a longer description"),
  category: yup.string().required("why not categorise your product?"),
});

export function AddNewProduct() {
  const history = useHistory();
  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";
  const addProduct = (newProduct) => {
    // 1. method must be POST
    // 2. body - JSON data
    // 3. headers - JSON data
    console.log(newProduct);
    fetch(API, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => history.push("/home"));
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      price: "",
      description: "",
      category: "",
    },

    validationSchema: ProductValidationSchema,
    onSubmit: (newProduct) => {
      addProduct(newProduct);
    },
  });

  return (
    <div className="addnew-movie">
      <h3 className="addtext">Add your favorite movie</h3>

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

        <Button variant="outlined" type="Submit" color="success">
          Add Product
        </Button>
      </form>
    </div>
  );
}
