import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React from "react";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export function Welcome() {
  const message = "Welcome to my shop";
  const [products, setProducts] = useState(null);

  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";

  const getProducts = () => {
    fetch(API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => setProducts(final_data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <span>
        <b>{message}</b>
      </span>
      <h1>About Us</h1>
      <p>This shop is opened as an Assignment in Class</p>
      <div className="product-list-container">
        {console.log(products)}
        {products !== null ? (
          products.map((product, index) => (
            <ShowProducts key={index} product={product} />
          ))
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
          variant="outlined"
          onClick={() => {
            wishlist ? setWishlist(false) : setWishlist(true);
          }}
        >
          <FavoriteIcon color={wishlist ? "error" : ""} />
        </Button>
        <Button variant="contained" color="warning">
          <AddShoppingCartIcon />
        </Button>
        <Button variant="contained" color="success">
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
