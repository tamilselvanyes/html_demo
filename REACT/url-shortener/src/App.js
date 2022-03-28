import "./App.css";
import { Route, Switch } from "react-router-dom";
import { LogIn } from "./Login";
import { Signup } from "./Signup";
import { ForgotPassword } from "./ForgotPassword";
import { NewPassword } from "./NewPassword";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/urlshortener">
          <h1>Welcome to URL Shortener</h1>
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password/:userid/:token">
          <NewPassword />
        </Route>

        <Route exact path="/">
          <div>
            <h1>Welcome to home page</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
