import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global.js";

export const movieValidationSchema = yup.object({
  name: yup.string().required("It will be good if the movie has a name"),
  poster: yup
    .string()
    .required("Why not fill this poster ? ")
    .min(4, "Need a longer Poster"),
  rating: yup.number().min(0).max(10).required("WHy not rate this movie?"),
  summary: yup
    .string()
    .required("why not give some summary?")
    .min(20, "Need a longer summary"),
  trailer: yup
    .string()
    .required("why not add a trailer?")
    .min(4, "Need a longer trailer"),
});

export function AddNewMovie() {
  const history = useHistory();
  // const API = "https://6209ed5992946600171c55b6.mockapi.io/movies";
  const addMovie = (newmovie) => {
    // 1. method must be POST
    // 2. body - JSON data
    // 3. headers - JSON data
    console.log(newmovie);
    fetch(API, {
      method: "POST",
      body: JSON.stringify(newmovie),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => history.push("/FavoriteMovies"));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      rating: "",
      summary: "",
      trailer: "",
    },

    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      addMovie(newMovie);
    },
  });

  return (
    <div className="addnew-movie">
      <h3 className="addtext">Add your favorite movie</h3>

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

        <Button variant="outlined" type="Submit" color="success">
          Add Movie to the list
        </Button>
      </form>
    </div>
  );
}
