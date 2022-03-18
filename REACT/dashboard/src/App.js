import "./App.css";
import * as React from "react";
import { MiniDrawer } from "./MiniDrawer";
import { DashboardFirstPart } from "./DashboardFirstPart";
import { NotFound } from "./NotFound";
import { Switch, Route } from "react-router-dom";
import { AddNewUser } from "./AddNewUser";
import { API } from "./global";
import { useEffect, useState } from "react";
import { createContext } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const context = createContext(null);

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState(null);
  const [currentuser, setCurrentUser] = useState(null);
  const getUsers = () => {
    fetch(API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => {
        setUser(final_data);
        if (final_data != null) {
          setCurrentUser(final_data[0]);
        }
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <context.Provider
      value={[currentuser, setCurrentUser, user, setUser, open, setOpen]}
    >
      <div className="App">
        <Switch>
          <Route path="/dashboard">
            <MiniDrawer />
            {user !== null && currentuser != null ? (
              <DashboardFirstPart />
            ) : (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress size={100} sx={{ margin: "40px" }} />
              </Box>
            )}
          </Route>
          <Route exact path="/">
            <MiniDrawer />
            {user !== null && currentuser != null ? (
              <DashboardFirstPart />
            ) : (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress size={100} sx={{ margin: "40px" }} />
              </Box>
            )}
          </Route>
          <Route path="/createuser">
            <AddNewUser />
          </Route>

          <Route path="**">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </context.Provider>
  );
}
