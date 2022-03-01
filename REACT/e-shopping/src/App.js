import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import SvgIcon from "@mui/material/SvgIcon";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Welcome } from "./Welcome";
import { SignIn } from "./SignIn";
import { ProductDescription } from "./ProductDescription";
import { AddNewProduct } from "./AddNewProduct";
import { EditProduct } from "./EditProduct";
import { useEffect } from "react";

export default function App() {
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  function SvgIconsColor() {
    return (
      <Box
        sx={{
          "& > :not(style)": {
            m: 2,
          },
        }}
      >
        <HomeIcon />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={3}>
        <div className="App">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" onClick={() => history.push("/")}>
                  {SvgIconsColor()}
                </Button>
                <Button color="inherit" onClick={() => history.push("/mycart")}>
                  Your Cart
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/mywishlist")}
                >
                  Wishlist
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/addnewproduct")}
                >
                  Add new Product
                </Button>
                <Button
                  color="inherit"
                  style={{ marginLeft: "auto" }}
                  startIcon={
                    mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                  }
                  onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                >
                  {mode === "light" ? "dark" : "light"} mode{" "}
                </Button>
                <Button color="inherit" onClick={() => history.push("/signin")}>
                  Sign In
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Switch>
            <Route path="/mycart">
              <Cart />
            </Route>
            <Route path="/addnewproduct">
              <AddNewProduct />
            </Route>
            <Route path="/mywishlist">
              <Cart />
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/description/:id">
              <ProductDescription />
            </Route>
            <Route path="/edit/:id">
              <EditProduct />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Cart() {
  const message = "This is your cart";
  const CART_API = "https://fakestoreapi.com/users";
  const getCart = () => {
    fetch(CART_API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((cart_data) => console.log(cart_data));
  };

  useEffect(() => {
    getCart();
  }, []);

  return <div>{message}</div>;
}
