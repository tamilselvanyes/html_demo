import "./App.css";
import { Route, Switch } from "react-router-dom";
import { LogIn } from "./Login";
import { Signup } from "./Signup";
import { ForgotPassword } from "./ForgotPassword";
import { NewPassword } from "./NewPassword";
import { ActivateAccount } from "./ActivateAccount";
import Paper from "@mui/material/Paper";

import { UrlShortener } from "./UrlShortener";
import { NavigationBar } from "./NavigationBar";
import { UrlDetails } from "./UrlDetails";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { Welcome } from "./Welcome";

export const theme = createTheme();

export default function App() {
  const [user, setUser] = useState("Login");

  return (
    <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={3}>
      <div className="App">
        <NavigationBar user={user} />

        <Switch>
          <Route path="/login">
            <LogIn setUser={setUser} user={user} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/urlshortener">
            <UrlShortener user={user} />
          </Route>
          <Route path="/urldetails">
            <UrlDetails />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/reset-password/:userid/:token">
            <NewPassword />
          </Route>
          <Route path="/activate-account/:userid">
            <ActivateAccount />
          </Route>

          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Paper>
  );
}
