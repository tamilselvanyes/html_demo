import "./App.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { ShowProducts } from "./ShowProducts";

export default function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const API = "https://6209ed5992946600171c55b6.mockapi.io/products";
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(0);

  const getProducts = () => {
    fetch(API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => {
        setProducts(final_data);
        let cart_count = 0;
        final_data.map((item) => {
          if (item.cart === false) {
            cart_count = cart_count + 1;
          }
          return true;
        });
        setCount(cart_count);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Shopper's Point</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={() => handleNavCollapse()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
            <Button style={{ marginLeft: "auto" }}>
              <AddShoppingCartIcon />
              Cart
              <div className="round-count">{`${count}`}</div>
            </Button>
          </div>
        </div>
      </nav>
      <div className="first-div">
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop what you love❤</h1>
              <p className="lead fw-normal text-white-50 mb-0">
                Products made from different parts of the world
              </p>
            </div>
          </div>
        </header>
        <section>
          <div className="product-list-container">
            {products !== null ? (
              products.map((product, index) => (
                <ShowProducts
                  key={index}
                  product={product}
                  setCount={setCount}
                  count={count}
                />
              ))
            ) : (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}
          </div>
        </section>
        <header className="bg-dark py-1">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <span>Connect us @shopperspoint@gmail.com</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
