import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function EditMovie() {
  // useStates for name,image,summary,rating...
  const { id } = useParams();
  const API = "https://6209ed5992946600171c55b6.mockapi.io/movies";
  useEffect((id) =>{
    fetch(`${API}/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((movie) => setMovie(movie));
  });
  const [movie, setMovie ] = useState(null);
  

  return (
        <div>{movie ? <EditMovieForm movie={movie} /> : <h2>Loading</h2>}</div>
  );

  
}


function EditMovieForm ({movie}) {

    const [name, setName] = useState(movie.name);
    const [image, setImage] = useState(movie.poster);
    const [summary, setSummary] = useState(movie.summary);
    const [rating, setRating] = useState(movie.rating);
    const [trailer, setTrailer] = useState(movie.trailer);
    const history = useHistory();
    const API = "https://6209ed5992946600171c55b6.mockapi.io/movies";

      return (      
      <div className="edit-movie">
      <h3 className="edittext">Edit Movie</h3>
      <form>
        <TextField
          id="name"
          label="Enter Movie name"
          value={name}
          variant="standard"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="image"
          label="Enter poster link"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          variant="standard"
        />
        <TextField
          id="summary"
          label="Enter summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          variant="standard"
        />
        <TextField
          id="rating"
          label="Enter rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          variant="standard"
        />
        <TextField
          id="trailer"
          label="Enter trailer link"
          value={trailer}
          onChange={(event) => setTrailer(event.target.value)}
          variant="standard"
        />

        <Button
          variant="outlined"
          id="addbutton"
          color="success"
          onClick={() => {
            console.log(name, image, summary, rating, trailer);
            const editedmovie = {
              name: name,
              poster: image,
              summary: summary,
              rating: rating,
              trailer: trailer,
            };

             // 1. method must be PUT & pass id
    // 2. body - JSON data
    // 3. headers - JSON data
    // After PUT is complete ->  movie to /movies
    fetch(`${API}/${movie.id}`, {
        method: "PUT",
        body: JSON.stringify(editedmovie),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => history.push("/movies"));
  
            history.push("/FavoriteMovies");

            if (document.getElementById("name") != null)
              document.getElementById("name").value = "";
            if (document.getElementById("image") != null)
              document.getElementById("image").value = "";
            if (document.getElementById("summary") != null)
              document.getElementById("summary").value = "";
            if (document.getElementById("rating") != null)
              document.getElementById("rating").value = "";
          }}
        >
          Save
        </Button>
      </form>
    </div>
    );

        }
