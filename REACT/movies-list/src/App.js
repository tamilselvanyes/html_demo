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
import SvgIcon from '@mui/material/SvgIcon';

export default function App() {
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const INITIAL_MOVIES = [
    {
      id: "100",
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    },
    {
      id: "102",
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      id: "103",
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },
    {
      id: "104",
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
    },
    {
      id: "105",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      id: "106",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: "107",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
  ];
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
          '& > :not(style)': {
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
              <MovieDescription value={value} />
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
