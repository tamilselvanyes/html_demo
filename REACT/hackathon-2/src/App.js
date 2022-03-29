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

import { LogIn } from "./Login";
import { Signup } from "./Signup";
import { ForgotPassword } from "./ForgotPassword";
import { NewPassword } from "./NewPassword";

export default function App() {
  const history = useHistory();
  const [mode, setMode] = useState("light");
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
                <Button color="inherit" onClick={() => history.push("/login")}>
                  LogIn
                </Button>
                <Button color="inherit" onClick={() => history.push("/signup")}>
                  Sign up
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Switch>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route path="/reset-password/:userid/:token">
              <NewPassword />
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
