import "./App.css";
import * as React from "react";
import { MiniDrawer } from "./MiniDrawer";
import { DashboardFirstPart } from "./DashboardFirstPart";
import { NotFound } from "./NotFound";
import { Switch, Route } from "react-router-dom";
import { AddNewUser } from "./AddNewUser";
import { AddNewProduct } from "./AddNewProduct";
import { Welcome } from "./Welcome";
import { EditUser } from "./EditUser";
import { EditProduct } from "./EditProduct";
import { API } from "./global";
import { useEffect, useState } from "react";
import { createContext } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const context = createContext(null);

export default function App() {
  const [open, setOpen] = React.useState(true);
  const [user, setUser] = useState(null);
  const [currentuser, setCurrentUser] = useState(null);
  const [listupdated, setListupdated] = useState(false);

  const getUsers = () => {
    console.log("This is my msg");
    console.log(currentuser);
    fetch(API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => {
        setUser(final_data);
        if (final_data != null) {
          if (currentuser === null) {
            setCurrentUser(final_data[0]);
          } else {
            setCurrentUser(final_data[currentuser.id] - 1);
          }
        }
      });
  };

  useEffect(() => {
    getUsers();
  }, [listupdated]);

  return (
    <context.Provider
      value={[
        currentuser,
        setCurrentUser,
        user,
        setUser,
        open,
        setOpen,
        listupdated,
        setListupdated,
      ]}
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
            <MiniDrawer />
            {user !== null && currentuser != null ? (
              <AddNewUser />
            ) : (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress size={100} sx={{ margin: "40px" }} />
              </Box>
            )}
          </Route>
          {currentuser !== null ? (
            <Route path="/edituser">
              <MiniDrawer />
              {user !== null && currentuser != null ? (
                <EditUser />
              ) : (
                <Box sx={{ textAlign: "center" }}>
                  <CircularProgress size={100} sx={{ margin: "40px" }} />
                </Box>
              )}
            </Route>
          ) : (
            ""
          )}

          <Route path="/showproducts">
            <MiniDrawer />
            <Welcome />
          </Route>

          <Route path="/addnewproduct">
            <MiniDrawer />
            <AddNewProduct />
          </Route>

          <Route path="/edit/:id">
            <MiniDrawer />
            <EditProduct />
          </Route>

          <Route path="**">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </context.Provider>
  );
}
