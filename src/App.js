import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ListaVista } from "./components/ListaVista";
import { Busqueda } from "./components/Busqueda";
import "./App.css";
// import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/statesGlobales";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
        <Route exact path="/" component={Busqueda}>
          
            {/* <ListaVista /> */}
          </Route> 
          <Route exact path="/Vistas" component={ListaVista}>
            {/* <Busqueda /> */}
          </Route>

        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
