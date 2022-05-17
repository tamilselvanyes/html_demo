import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Login({ setUser }) {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [errormessage, setErrormessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const info = {
      email: data.get("email"),
      password: data.get("password"),
    };
    fetch(`${API}/user/login`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(info),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "Invalid email or password") {
          setError(true);
          setErrormessage(res.message);
        } else if (
          res.message ===
          "Account not yet Activated, Please activate by using link sent to your mail"
        ) {
          setError(true);
          setErrormessage(res.message);
        } else {
          setUser(data.get("email"));
          setError(false);
          history.push("/otpauthentication");
        }
      });
  };

  return (
    <div className="login-main">
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          {error ? <span style={{ color: "red" }}>{errormessage}</span> : ""}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="./forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item sx={{ margin: "10px" }}>
              <Link to="./signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <div className="another-login">
        <div>
          <button>
            <GitHubIcon />
          </button>
        </div>
        <div>
          <button>
            <MailOutlineIcon />
          </button>
        </div>
        <div>
          <button>
            <FacebookIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
