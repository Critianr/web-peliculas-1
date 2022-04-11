import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const {
    addListPelicula,
    listPeliculas,
  } = useContext(GlobalContext);

  let storedMovie = listPeliculas.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : false;


  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY-MM-DD">{movie.release_date}</Moment>
          </h4>
          <h5>{movie.runtime} </h5>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addListPelicula(movie)}
          >
            peliculas Vistas
          </button>


        </div>
      </div>
    </div>
  );
};
