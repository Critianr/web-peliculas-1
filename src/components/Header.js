import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
          <h1>Web de Peliculas</h1> 
          </div>
          

          <ul className="nav-links">
            {/* <li>
              <Link to="/Peliculas-Vistas">Lista de peliculas vistas</Link>
            </li> */}

            <li>
              <Link to="/Vistas">Peliculas Vistas <i class="fas fa-eye"></i> </Link>
            </li>

            <li>
              <Link to="/" className="btn btn-main">
                Busqueda
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
