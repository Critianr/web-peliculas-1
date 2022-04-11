import React, { useContext } from "react";
import { GlobContext } from "../context/statesGlobales";
import { PostCard } from "./PostCard";

export const ListaVista = () => {
  const { listPeliculas  } = useContext(GlobContext);

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
              <PostCard movie={movie} key={movie.id} type="listaPelicula" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No has visto ninguna pelicula</h2>
        )}
      </div>
    </div>
  );
};