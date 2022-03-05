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

  const addToWishlist = (product, wishlist) => {
    // 1. method must be PUT & pass id
    // 2. body - JSON data
    // 3. headers - JSON data
    // After PUT is complete ->  movie to /home
    const API = "https://6209ed5992946600171c55b6.mockapi.io/products";
    console.log("wishlist" + wishlist);
    product.wishlist = !wishlist;
    console.log(product);

    fetch(`${API}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";
  useEffect(() => {
    fetch(`${API}/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((product) => {
        setProduct(product);
        setWishlist(product.wishlist);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const [wishlist, setWishlist] = useState(product.wishlist);

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
                    addToWishlist(product, wishlist);
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
  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";
  const [recommendedproducts, setRecommendedProducts] = useState(null);

  const getRecommendedProducts = () => {
    let category_products = {};
    fetch(`${API}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((products) => {
        products.map((products) =>
          console.log(product.category + products.category)
        );
        category_products = products.filter(
          (products) =>
            products.category === product.category &&
            products.title !== product.title
        );

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
