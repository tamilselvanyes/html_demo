import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";

export function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [wishlist, setWishlist] = useState(false);

  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";
  useEffect(() => {
    fetch(`${API}/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div>
      {product !== null ? (
        <div className="description-container">
          <div className="product-description">
            <div>
              <h2>{product.title}</h2>
              <img
                className="product-description-picture"
                src={product.image}
                alt={product.title}
              ></img>
            </div>
            <div className="product-description-details">
              <p>Category: {product.category}</p>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <div className="product-buttons-description">
                <Button
                  sx={{ mt: "5px" }}
                  variant="contained"
                  color={wishlist ? "error" : "info"}
                  onClick={() => {
                    wishlist ? setWishlist(false) : setWishlist(true);
                  }}
                >
                  <FavoriteIcon />
                  {wishlist ? (
                    <span>Remove from Wishlist</span>
                  ) : (
                    <span>Add to Wishlist</span>
                  )}
                </Button>
                <Button sx={{ mt: "5px" }} color="warning" variant="contained">
                  <AddShoppingCartIcon />
                  Add to Cart
                </Button>
                <Button sx={{ mt: "5px" }} color="success" variant="contained">
                  Check Out/Buy Now
                </Button>
              </div>
            </div>
          </div>
          <Divider />

          <div className="recommendation">
            <h2>Recommended For you</h2>
            <RecommendedProducts product={product} />
          </div>
        </div>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
function RecommendedProducts({ product }) {
  const API = "https://fakestoreapi.com/products";
  const [recommendedproducts, setRecommendedProducts] = useState(null);

  const getRecommendedProducts = () => {
    let category_products = {};
    fetch(`${API}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((products) => {
        category_products = products.filter(
          (products) =>
            products.category === product.category &&
            products.title !== product.title
        );
        console.log(product.category + category_products);
        return setRecommendedProducts(category_products);
      });
  };

  useEffect(() => {
    getRecommendedProducts();
  }, [product]);
  return (
    <div className="recommended-products-container">
      {recommendedproducts !== null ? (
        recommendedproducts.map((product, index) => (
          <ShowRecommendProduct key={index} product={product} />
        ))
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
function ShowRecommendProduct({ product }) {
  const history = useHistory();

  function OnProductClicked(product) {
    console.log(product);
    history.push(`${product.id}`);
  }

  return (
    <div className="recom-container">
      <div className="recom-product-picture-div">
        <img
          src={product.image}
          alt={product.title}
          className="recom-product-picture"
          onClick={() => OnProductClicked(product)}
        ></img>
      </div>
      <div
        className="recom-product-name-div"
        onClick={() => OnProductClicked(product)}
      >
        <p className="recom-product-name">{product.title}</p>
      </div>
    </div>
  );
}
