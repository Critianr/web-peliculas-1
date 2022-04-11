import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobContext } from "../context/statesGlobales";

export const Card = ({ pelicula }) => {
  const {
    addListPelicula,
    listPeliculas,
  } = useContext(GlobContext);

  let storedMovie = listPeliculas.find((o) => o.id === pelicula.id);

  const watchlistDisabled = storedMovie
    ? true
    : false;


  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {pelicula.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
            alt={`${pelicula.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{pelicula.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY-MM-DD">{pelicula.release_date}</Moment>
          </h4>
          {/* <h5>{movie.runtime} </h5> */}
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addListPelicula(pelicula)}
          >
            peliculas Vistas
          </button>


        </div>
      </div>
    </div>
  );
};
