import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Typography from "@mui/material/Typography";

const CheckOutValidationSchema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),

  address: yup.string().min(10).required(),
  pincode: yup.number().min(6).required(),
});

export function Checkout() {
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
      {product ? <CheckoutProductForm product={product} /> : <h2>Loading</h2>}
    </div>
  );
}

function CheckoutProductForm({ product }) {
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
      firstname: "",
      lastname: "",
      address: "",
      pincode: "",
    },
    validationSchema: CheckOutValidationSchema,
    onSubmit: (updatedProduct) => {
      editProduct(updatedProduct);
    },
  });

  const history = useHistory();
  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";

  return (
    <div>
      <h1 className="checkouttext">Check Out</h1>
      <div className="edit-checkout">
        <div className="product-container">
          <div className="product-picture-div">
            <img
              src={product.image}
              alt={product.title}
              className="product-picture-checkout"
            ></img>
          </div>
          <div className="product-name-div">
            <p className="product-name">{product.title}</p>
          </div>
          <Typography
            sx={{ fontSize: "28px", color: "#212F3D" }}
            mt={-1}
            className="product-price"
            variant="h5"
            gutterBottom
            component="div"
          >
            ${product.price}
          </Typography>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="names-checkout">
            <TextField
              type="text"
              label="First Name"
              id="firstname"
              name="firstname"
              margin="dense"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              onBlur={formik.handleBlur}
              error={formik.touched.firstname && formik.errors.firstname}
              helperText={
                formik.touched.firstname && formik.errors.firstname
                  ? formik.errors.firstname
                  : ""
              }
            />
            <TextField
              type="text"
              label="Last Name"
              id="lastname"
              name="lastname"
              margin="dense"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
              error={formik.touched.lastname && formik.errors.lastname}
              helperText={
                formik.touched.lastname && formik.errors.lastname
                  ? formik.errors.lastname
                  : ""
              }
            />
          </div>
          <TextField
            type="text"
            label="Billing Address"
            id="address"
            name="address"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.address}
            onBlur={formik.handleBlur}
            error={formik.touched.address && formik.errors.address}
            helperText={
              formik.touched.address && formik.errors.addressaddress
                ? formik.errors.address
                : ""
            }
          />

          <TextField
            type="text"
            label="Pin code"
            id="pincode"
            name="pincode"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.pincode}
            onBlur={formik.handleBlur}
            error={formik.touched.pincode && formik.errors.pincode}
            helperText={
              formik.touched.pincode && formik.errors.pincode
                ? formik.errors.pincode
                : ""
            }
          />

          <Button
            type="Submit"
            variant="outlined"
            id="addbutton"
            color="success"
          >
            {`Amount to be paid $${product.price}`}
          </Button>
        </form>
      </div>
    </div>
  );
}
