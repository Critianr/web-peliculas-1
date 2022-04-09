import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const ListaVista = () => {
  const { peliculasVistas } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Pelicula Vista</h1>

          <span className="count-pill">
            {peliculasVistas.length} {peliculasVistas.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {peliculasVistas.length > 0 ? (
          <div className="movie-grid">
            {peliculasVistas.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="peliculasVistas" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No has visto ninguna pelicula</h2>
        )}
      </div>
    </div>
  );
};