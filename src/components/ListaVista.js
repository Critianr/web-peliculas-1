import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const ListaVista = () => {
  const { listPeliculas  } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Pelicula Vista</h1>

          <span className="count-pill">
            {listPeliculas.length} {listPeliculas.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {listPeliculas.length > 0 ? (
          <div className="movie-grid">
            {listPeliculas.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No has visto ninguna pelicula</h2>
        )}
      </div>
    </div>
  );
};