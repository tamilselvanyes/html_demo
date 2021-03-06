import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";

export function Cart() {
  const message = "Your cart Details";
  const [products, setProducts] = useState(null);

  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";

  const getProducts = () => {
    let cart_products = {};
    fetch(API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((products) => {
        cart_products = products.filter((products) => products.cart === true);

        return setProducts(cart_products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <span>
        <b>{message}</b>
      </span>
      <div className="product-list-container">
        {console.log(products)}
        {products !== null ? (
          products.length === 0 ? (
            <ShowEmptyCart />
          ) : (
            products.map((product, index) => (
              <ShowProducts key={index} product={product} />
            ))
          )
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </div>
    </div>
  );
}
function ShowProducts({ product }) {
  const history = useHistory();
  const [wishlist, setWishlist] = useState(false);

  function OnProductClicked(product) {
    console.log(product);
    history.push(`description/${product.id}`);
  }

  return (
    <div className="product-container">
      <div className="product-picture-div">
        <img
          src={product.image}
          alt={product.title}
          className="product-picture"
          onClick={() => OnProductClicked(product)}
        ></img>
      </div>
      <div
        className="product-name-div"
        onClick={() => OnProductClicked(product)}
      >
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
          color="success"
          onClick={() => history.push(`/checkout/${product.id}`)}
        >
          Check Out
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push(`/edit/${product.id}`)}
        >
          <EditIcon />
        </Button>
        <Button variant="contained" color="error">
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}

function ShowEmptyCart() {
  return (
    <div>
      <p className="empty-text">Your Cart is empty</p>
    </div>
  );
}
