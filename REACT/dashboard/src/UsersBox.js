import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext } from "react";
import { context } from "./App";

export function UsersBox() {
  const [open, user, setCurrentUser] = [
    useContext(context)[4],
    useContext(context)[2],
    useContext(context)[1],
  ];

  const usernames = [];

  if (user !== null) {
    for (let i = 0; i < user.length; i++) {
      usernames.push(user[i].name);
    }
  }
  return user ? (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={usernames}
      defaultValue={usernames[0]}
      onChange={(event, value) => {
        if (user !== null) {
          const newUser = user.filter((item) => item.name === value);
          if (newUser[0] !== undefined) {
            setCurrentUser(newUser[0]);
          }
        }
      }}
      sx={{
        width: 300,
        margin: "12px",
        marginLeft: open ? "0px" : "80px",
        color: "black",
      }}
      renderInput={(params) => <TextField {...params} label="Users" />}
    />
  ) : (
    ""
  );
}
