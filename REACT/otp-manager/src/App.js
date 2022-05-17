import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { ForgotPassword } from "./ForgotPassword";
import { NewPassword } from "./NewPassword";
import { ActivateAccount } from "./ActivateAccount";
import { createTheme } from "@mui/material/styles";
import { AuthenticationPage } from "./AuthenticationPage";
import { useState } from "react";
import { createContext } from "react";

export const context = createContext(null);

export const theme = createTheme();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <context.Provider value={[user, setUser]}>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login setUser={setUser} />
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
          <Route path="/activate-account/:userid">
            <ActivateAccount />
          </Route>
          <Route path="/otpauthentication">
            <AuthenticationPage user={user} />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </context.Provider>
  );
}
