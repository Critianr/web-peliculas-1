import React, { useContext } from "react";
import { GlobContext } from "../context/statesGlobales";

export const MoveControls = ({ type, movie }) => {
  const {
    eliminarPelicula,
    addListPelicula,
  } = useContext(GlobContext);

  return (
    <div className="inner-card-controls">
      {type === "listaPelicula" && (
        <>
          <button className="ctrl-btn" onClick={() => addListPelicula(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => eliminarPelicula(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

    </div>
  );
};
