import "./App.css";
import { Route, Switch } from "react-router-dom";
import { LogIn } from "./Login";
import { Signup } from "./Signup";

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

        <Route exact path="/">
          <div>
            <h1>Welcome to home page</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
