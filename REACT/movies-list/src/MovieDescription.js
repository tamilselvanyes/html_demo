import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import React from "react";
import { API } from "./global.js";

export function MovieDescription() {
  // const API =
  //   "https://6209ed5992946600171c55b6.mockapi.io/movies";
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const history = useHistory();
  useEffect(() => {
    fetch(`${API}/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovie(mv))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <iframe
        width="100%"
        height="409"
        className="movie-video"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="movie-description">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          variant="outlined"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
