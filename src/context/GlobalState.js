import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// inicial estado
const initialState = {
  listPeliculas: localStorage.getItem("listPeliculas")
    ? JSON.parse(localStorage.getItem("listPeliculas"))
    : [],
  // watched: localStorage.getItem("watched")
  //   ? JSON.parse(localStorage.getItem("watched"))
  //   : [],
};

// hook context
export const GlobalContext = createContext(initialState);

// provider 
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.listPeliculas));
  }, [state]);

  // accion
  const addListPelicula = (movie) => {
    dispatch({ type: "ADD_LIST_PELICULA", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const eliminarPelicula = (id) => {
    dispatch({ type: "ELIMINAR_PELICULA", payload: id });
  };


  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };



  return (
    <GlobalContext.Provider
      value={{
        listPeliculas: state.listPeliculas,
        addListPelicula,
        eliminarPelicula,
        moveToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};