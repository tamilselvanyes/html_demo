import { useState } from "react";
import Button from "@mui/material/Button";

export function ShowProducts({ product, setCount, count }) {
  const [cartlist, setCartlist] = useState(product.cart);

  const addToCart = (product, cartlist) => {
    // 1. method must be PUT & pass id
    // 2. body - JSON data
    // 3. headers - JSON data
    // After PUT is complete ->  movie to /home
    const API = "https://6209ed5992946600171c55b6.mockapi.io/products";
    product.cart = !cartlist;

    fetch(`${API}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
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
      <span
        sx={{ fontSize: "28px", color: "#212F3D" }}
        mt={-1}
        className="product-price"
        variant="h5"
        component="div"
      >
        ${product.price}
      </span>
      <br></br>
      <Button
        style={{ marginBottom: "5px" }}
        variant="contained"
        color={cartlist ? "success" : "warning"}
        onClick={() => {
          cartlist ? setCartlist(false) : setCartlist(true);
          cartlist ? setCount(count + 1) : setCount(count - 1);
          addToCart(product, cartlist);
        }}
      >
        {`${cartlist ? "Add to Cart" : "Remove from Cart"}`}
      </Button>
    </div>
  );
}
