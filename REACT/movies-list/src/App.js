import { AddColor } from "./AddColor";
import { Switch, Route, Redirect } from "react-router-dom";
import { FavoriteMovies } from "./FavoriteMovies";
import { TicTacToe } from "./TicTacToe";
import { AddNewMovie } from "./AddNewMovie";
import { useState } from "react";
import { MovieDescription } from "./MovieDescription";
import { EditMovie } from "./EditMovie";
import { NotFound } from "./NotFound";
import { ThemeSetting } from "./ThemeSetting";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import SvgIcon from "@mui/material/SvgIcon";

export default function App() {
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const INITIAL_MOVIES = [];
  const [value, setvalue] = useState(INITIAL_MOVIES);

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  function SvgIconsColor() {
    return (
      <Box
        sx={{
          "& > :not(style)": {
            m: 2,
          },
        }}
      >
        <HomeIcon />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={3}>
        <div className="App">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" onClick={() => history.push("/")}>
                  {SvgIconsColor()}
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/FavoriteMovies")}
                >
                  Favorite Movies
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/Addmovie")}
                >
                  Add Movie
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/AddColor")}
                >
                  Color Game
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/TicTacToe")}
                >
                  XO Gaming
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/ThemeSetting")}
                >
                  ThemeSetting
                </Button>
                <Button
                  color="inherit"
                  style={{ marginLeft: "auto" }}
                  startIcon={
                    mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                  }
                  onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                >
                  {mode === "light" ? "dark" : "light"} mode{" "}
                </Button>
              </Toolbar>
            </AppBar>
          </Box>

          <Switch>
            <Route path="/movies">
              {" "}
              <Redirect to="/FavoriteMovies"></Redirect>
            </Route>
            <Route path="/FavoriteMovies/edit/:id">
              <EditMovie value={value} setvalue={setvalue} />
            </Route>
            <Route path="/FavoriteMovies/:id">
              <MovieDescription />
            </Route>
            <Route path="/FavoriteMovies">
              <FavoriteMovies value={value} setvalue={setvalue} />
            </Route>
            <Route path="/Addmovie">
              <AddNewMovie value={value} setvalue={setvalue} />
            </Route>
            <Route path="/TicTacToe">
              <TicTacToe />
            </Route>
            <Route path="/AddColor">
              <AddColor />
            </Route>
            <Route path="/ThemeSetting">
              <ThemeSetting />
            </Route>
            <Route exact path="/">
              <WelcomeMsg />
            </Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function WelcomeMsg() {
  return (
    <div>Welcome to My app, Navigate through other tabs and have fun.</div>
  );
}
