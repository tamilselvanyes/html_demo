import { ShowMovieList } from "./ShowMovieList";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import React from "react";
import { API } from "./global.js";

export function FavoriteMovies({ value, setvalue }) {
  const getMovies = () => {
    fetch(API, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setvalue(mvs));
  };
  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" }).then(() => getMovies());
  };

  return (
    <div>
      <h1>Favorite Movies</h1>

      <div className="container">
        <div className="row">
          {value.map((nm, index) => {
            return (
              <ShowMovieList
                value={value}
                setvalue={setvalue}
                id={nm.id}
                key={index}
                name={nm.name}
                image={nm.poster}
                summary={nm.summary}
                rating={nm.rating}
                deleteButton={
                  <IconButton
                    aria-label="delete"
                    className="delete-button"
                    color="error"
                    onClick={() => deleteMovie(nm.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
