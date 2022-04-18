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
import { useState, useEffect } from "react";
import { API } from "./global";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

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

function Welcome() {
  const [data, setData] = useState(null);
  const getdata = () => {
    fetch(`${API}/urlList`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => setData(final_data));
  };
  useEffect(() => {
    getdata();
  }, []);
  function gettodaycount() {
    if (data !== null) {
      let todaycount = 0;
      data.map((item) => {
        console.log(item);
        const then = new Date(item.createAt);
        const now = new Date();

        const msBetweenDates = Math.abs(then.getTime() - now.getTime());

        // 👇️ convert ms to hours                  min  sec   ms
        const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

        console.log(hoursBetweenDates);

        if (hoursBetweenDates < 24) {
          todaycount = todaycount + 1;
        }
        return true;
      });
      return todaycount;
    } else {
      return null;
    }
  }

  function getMonthcount() {
    if (data !== null) {
      let todaycount = 0;
      data.map((item) => {
        console.log(item);
        const then = new Date(item.createAt);
        const now = new Date();

        const msBetweenDates = Math.abs(then.getTime() - now.getTime());

        // 👇️ convert ms to days                  min  sec   ms
        const DaysBetweenDates = msBetweenDates / (60 * 60 * 1000 * 24);

        console.log(DaysBetweenDates);

        if (DaysBetweenDates < 30) {
          todaycount = todaycount + 1;
        }
        return true;
      });
      return todaycount;
    } else {
      return null;
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/6f/0a/07/6f0a07c32a16e9a4e3d49eb74bcf73c7.jpg)",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundPosition: "center",
          }}
        >
          <div className="welcome-msg">
            <h1>Welcome to URL shortener</h1>
            <p>
              URL shortening is a technique on the World Wide Web in which a
              Uniform Resource Locator (URL) may be made substantially shorter
              and still direct to the required page.
            </p>
            <p>Login and create your shortened URL</p>
          </div>
        </Grid>
        {data ? (
          <div className="urlinfo">
            <h1>App Info</h1>
            <p>
              <b>Total short URL's created: {data.length}</b>
            </p>
            <p>
              <b>No of URL's created in last 24 hours: {gettodaycount()}</b>
            </p>
            <p>
              <b>No of URL's created in last 30 days: {getMonthcount()}</b>
            </p>
          </div>
        ) : (
          ""
        )}
      </Grid>
    </ThemeProvider>
  );
}
