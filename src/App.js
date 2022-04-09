import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ListaVista } from "./components/ListaVista";
// import { Watched } from "./components/Watched";
import { Busqueda } from "./components/Busqueda";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/Vistas" >
            <ListaVista />
          </Route> 
          <Route exact path="/" >
            <Busqueda />
          </Route>

        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
