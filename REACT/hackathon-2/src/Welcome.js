import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React from "react";
import { API } from "./global";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "./Pagination";
import { AsyncSearchBox } from "./AsyncSearchBox";

export function Welcome() {
  const message =
    "Welcome, we bring you the best products and deals from Amazon, Flipkart and Snapdeal";
  const [products, setProducts] = useState(null);
  const [fullProductList, setFullProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("phone");
  let [page, setPage] = useState(1);
  const PER_PAGE = 18;

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const getProducts = () => {
    setLoading(true);
    fetch(`${API}/scrapedProducts`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => {
        setProducts(final_data);
        setFullProductList(final_data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  try {
    var _DATA = usePagination(products, PER_PAGE);
    var count = Math.ceil(products.length / PER_PAGE);
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h2 className="welcome-text">{message}</h2>

      {products !== null && loading === false ? (
        <div className="main-box">
          <p className="helper-text">
            Search for the products you require, For examples: Peanut
            butter,Hoodies etc
          </p>
          <AsyncSearchBox
            products={products}
            query={query}
            setQuery={setQuery}
            setProducts={setProducts}
            fullProductList={fullProductList}
            setLoading={setLoading}
          />
          <div className="product-list-container">
            {_DATA.currentData().map((product, index) => (
              <ShowProducts key={index} product={product} />
            ))}
          </div>
          <Box p="5">
            <Pagination
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </Box>
        </div>
      ) : (
        <Box className="loading-box">
          <CircularProgress />
          <p className="loading-text">
            Hold Tight untill we bring you the best products
          </p>
        </Box>
      )}
    </div>
  );
}

function ShowProducts({ product }) {
  function OnProductClicked(product) {}

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
        Original Price:{" "}
        {product.original_price === "₹undefined" ? "-" : product.original_price}
      </Typography>
      <Typography
        sx={{ fontSize: "28px", color: "#212F3D" }}
        mt={-1}
        className="product-price"
        variant="h5"
        gutterBottom
        component="div"
      >
        Discount Price: {product.discount_price}
      </Typography>
      <Typography
        sx={{ fontSize: "28px", color: "#212F3D" }}
        mt={-1}
        className="product-price"
        variant="h5"
        gutterBottom
        component="div"
      >
        Shop: {product.shop}
      </Typography>
    </div>
  );
}
