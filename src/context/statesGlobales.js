import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// inicial estado
const initialState = {
  listPeliculas: localStorage.getItem("listPeliculas")
    ? JSON.parse(localStorage.getItem("listPeliculas"))
    : [],
};

// hook context
export const GlobContext = createContext(initialState);

// provider 
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("listaPelicula", JSON.stringify(state.listPeliculas));
  }, [state]);

  // acciones
  const addListPelicula = (movie) => {
    dispatch({ type: "ADD_LIST_PELICULA", payload: movie });
  };


  const eliminarPelicula = (id) => {
    dispatch({ type: "ELIMINAR_PELICULA", payload: id });
  };


  return (
    <GlobContext.Provider
      value={{
        listPeliculas: state.listPeliculas,
        addListPelicula,
        eliminarPelicula,
        // moveToWatchlist,
      }}
    >
      {props.children}
    </GlobContext.Provider>
  );
};