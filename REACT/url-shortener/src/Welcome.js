import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import { API } from "./global";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./App";

export function Welcome() {
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
          <CircularProgress className="urlinfo" />
        )}
      </Grid>
    </ThemeProvider>
  );
}
