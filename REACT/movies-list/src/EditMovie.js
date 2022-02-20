import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { movieValidationSchema } from "./AddNewMovie";
import { useFormik } from "formik";

export function EditMovie() {
  const { id } = useParams();
  const API = "https://6209ed5992946600171c55b6.mockapi.io/movies";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    fetch(`${API}/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((movie) => setMovie(movie))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>{movie ? <EditMovieForm movie={movie} /> : <h2>Loading</h2>}</div>
  );
}

function EditMovieForm({ movie }) {
  const editMovie = (updatedMovie) => {
    // 1. method must be PUT & pass id
    // 2. body - JSON data
    // 3. headers - JSON data
    // After PUT is complete ->  movie to /movies
    fetch(`${API}/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));

    history.push("/FavoriteMovies");
  };

  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (updatedMovie) => {
      editMovie(updatedMovie);
    },
  });

  const history = useHistory();
  const API = "https://6209ed5992946600171c55b6.mockapi.io/movies";

  return (
    <div className="edit-movie">
      <h3 className="edittext">Edit Movie</h3>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          type="text"
          label="Name"
          id="name"
          name="name"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
          helperText={
            formik.touched.name && formik.errors.name ? formik.errors.name : ""
          }
        />
        <TextField
          type="text"
          label="Poster"
          id="poster"
          name="poster"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.poster}
          onBlur={formik.handleBlur}
          error={formik.touched.poster && formik.errors.poster}
          helperText={
            formik.touched.poster && formik.errors.poster
              ? formik.errors.poster
              : ""
          }
        />

        <TextField
          type="text"
          label="Summary"
          id="summary"
          name="summary"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.summary}
          onBlur={formik.handleBlur}
          error={formik.touched.summary && formik.errors.summary}
          helperText={
            formik.touched.summary && formik.errors.summary
              ? formik.errors.summary
              : ""
          }
        />

        <TextField
          type="number"
          label="Rating"
          id="rating"
          name="rating"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.rating}
          onBlur={formik.handleBlur}
          error={formik.touched.rating && formik.errors.rating}
          helperText={
            formik.touched.rating && formik.errors.rating
              ? formik.errors.rating
              : ""
          }
        />

        <TextField
          type="text"
          label="trailer"
          id="trailer"
          name="trailer"
          margin="dense"
          onChange={formik.handleChange}
          value={formik.values.trailer}
          onBlur={formik.handleBlur}
          error={formik.touched.trailer && formik.errors.trailer}
          helperText={
            formik.touched.trailer && formik.errors.trailer
              ? formik.errors.trailer
              : ""
          }
        />

        <Button type="Submit" variant="outlined" id="addbutton" color="success">
          Save
        </Button>
      </form>
    </div>
  );
}
