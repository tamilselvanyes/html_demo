import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React from "react";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { PRODUCT_API } from "./global";
import { context } from "./App";
import { useContext } from "react";

export function Welcome() {
  const message = "All Products";
  const [products, setProducts] = useState(null);
  const [listupdated, setListupdated] = useState(true);
  const [open] = [useContext(context)[4]];

  const getProducts = () => {
    fetch(PRODUCT_API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => setProducts(final_data));
  };

  useEffect(() => {
    getProducts();
  }, [listupdated]);

  return (
    <div style={{ marginTop: "60px", fontSize: "20px", fontWeight: "bold" }}>
      <span>
        <b>{message}</b>
      </span>
      <div
        className="product-list-container"
        style={{
          marginLeft: open ? "240px" : "70px",
          marginTop: "20px",
          padding: "10px",
        }}
      >
        {console.log(products)}
        {products !== null ? (
          products.map((product, index) => (
            <ShowProducts
              key={index}
              product={product}
              listupdated={listupdated}
              setListupdated={setListupdated}
            />
          ))
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
            <p>Loading is longer because of mockapi...</p>
          </Box>
        )}
      </div>
    </div>
  );
}

function ShowProducts({ product, listupdated, setListupdated }) {
  const history = useHistory();
  const deleteProduct = (id) => {
    fetch(`${PRODUCT_API}/${id}`, { method: "DELETE" }).then(() => {
      setListupdated(!listupdated);
      console.log("Product deleted");
    });
  };

  return (
    <div className="product-container">
      <div className="product-picture-div">
        <img
          src={product.image}
          alt={product.title}
          className="product-picture"
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
      <div className="product-buttons">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push(`/edit/${product.id}`)}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => deleteProduct(product.id)}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}
