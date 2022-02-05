import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { ShowMovieList } from './ShowMovieList';

export function FavoriteMovies() {
  const INITIAL_MOVIES = [
    {
      name: "The Shawshank Redemption",
      image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      summary: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
      rating: "9.3",
      director: "Frank Darabont",
      cast: "	Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler"
    },
    {
      name: "Hacksaw Ridge",
      image: "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_.jpg",
      summary: "The true story of Pfc. Desmond T. Doss (Andrew Garfield), who won the Congressional Medal of Honor despite refusing to bear arms during WWII on religious grounds. Doss was drafted and ostracized by fellow soldiers for his pacifist stance but went on to earn respect and adoration for his bravery,",
      rating: "8.1",
      director: " Mel Gibson",
      cast: "	Andrew Garfield, Richard Pyros, Jacob Warner, 	Darcy Bryce, 	Roman Guerriero"
    },
    {
      name: "Schindler's List",
      image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      summary: "Oskar Schindler, a German industrialist and member of the Nazi party, tries to save his Jewish employees after witnessing the persecution of Jews in Poland.",
      rating: "8.9",
      director: "Steven Spielberg",
      cast: "Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall, Jonathan Sagall"
    },
    {
      name: "The Social Network",
      image: "https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2021/05/19143504/social-network-592x840.jpg",
      summary: "Mark Zuckerberg creates a social networking site, Facebook, with his friend Eduardo's help. Though it turns out to be a successful venture, he severs ties with several people along the way.",
      rating: "7.7",
      director: "David Fincher",
      cast: "Jesse Eisenberg, Andrew Garfield, Armie Hammer,Justin Timberlake, Max Minghella"
    },

    {
      name: "The Big Short",
      image: "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg",
      summary: "In the mid-2000s, a few finance experts observe the instability in the US housing market and predict its collapse. Through their research, they discover the flaws and corruption in the system.",
      rating: "7.8",
      director: "Adam McKay",
      cast: "	Ryan Gosling, Rudy Eisenzopf, 		Casey Groves, 	Charlie Talbert, Harold Gervais"
    }
  ];
  const [value, setvalue] = useState(INITIAL_MOVIES);

  // useStates for name,image,summary,rating, director,cast...
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [director, setdirector] = useState("");
  const [cast, setcast] = useState("");
  return (
    <div>
      <h1>Favorite Movies</h1>
      <div className="addnew-movie">

        <h3 className="addtext">Add your favorite movie</h3>
        <form>
          <TextField id="name" label="Enter Movie name" onChange={(event) => setName(event.target.value)} variant="standard" />
          <TextField id="image" label="Enter poster link" onChange={(event) => setImage(event.target.value)} variant="standard" />
          <TextField id="summary" label="Enter summary" onChange={(event) => setSummary(event.target.value)} variant="standard" />
          <TextField id="rating" label="Enter rating" onChange={(event) => setRating(event.target.value)} variant="standard" />
          <TextField id="director" label="Enter director name" onChange={(event) => setdirector(event.target.value)} variant="standard" />
          <TextField id="cast" label="Enter cast details" onChange={(event) => setcast(event.target.value)} variant="standard" />

          <Button variant="outlined" id="addbutton" color="success"
            onClick={() => {
              const newmovie = {
                name: name,
                image: image,
                summary: summary,
                rating: rating,
                director: director,
                cast: cast
              };

              // Rejecting the movie if it already exists...
              for (let i = 0; i < value.length; i++) {
                if (document.getElementById('name') != null)
                  if (value[i].name === document.getElementById('name').value) {
                    alert("Movie already exist");
                    return;
                  }
              }
              //Movie name should be given else alert
              if (newmovie.name === "") {
                alert("Movie cannot be empty");
                return;
              }

              setvalue([...value, newmovie]);
              <Alert severity="success">Added successfully</Alert>;


              if (document.getElementById('name') != null)
                document.getElementById('name').value = "";
              if (document.getElementById('image') != null)
                document.getElementById('image').value = "";
              if (document.getElementById('summary') != null)
                document.getElementById('summary').value = "";
              if (document.getElementById('rating') != null)
                document.getElementById('rating').value = "";
              if (document.getElementById('director') != null)
                document.getElementById('director').value = "";
              if (document.getElementById('cast') != null)
                document.getElementById('cast').value = "";

              setName("");
              setImage("");
              setSummary("");
              setRating("");
              setdirector("");
              setcast("");

            }}>Add Movie to the list</Button>

        </form>
      </div>
      <div className="container">
        <div className="row">
          {value.map((nm) => (

            <ShowMovieList key={nm.name} name={nm.name} image={nm.image} summary={nm.summary} rating={nm.rating} director={nm.director} cast={nm.cast} />
          ))}
        </div>
      </div>
    </div>
  );
}
