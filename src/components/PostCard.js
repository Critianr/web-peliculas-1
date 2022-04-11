import React from "react";
import { MoveControls } from "./MoveControls";

export const PostCard = ({ pelicula, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
        alt={`${pelicula.title} Poster`}
      />

      <MoveControls type={type} pelicula={pelicula} />
    </div>
  );
};
