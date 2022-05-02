import "./App.css";
import { Login } from "./Login";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { ForgotPassword } from "./ForgotPassword";
import { Signup } from "./Signup";
import { NewPassword } from "./NewPassword";
import { ActivateAccount } from "./ActivateAccount";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/reset-password/:userid/:token">
          <NewPassword />
        </Route>

        <Route path="/activate-account/:userid">
          <ActivateAccount />
        </Route>

        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
