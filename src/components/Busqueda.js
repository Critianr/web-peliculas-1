import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import axios from 'axios';

export const Busqueda = () => {
  const [consulta, setConsulta] = useState("");
  const [results, setResults] = useState([]);
  // "start": "react-scripts start",
  // "start": "serve -s build",
  const onChange = (e) => {
    e.preventDefault();

    setConsulta(e.target.value);
    
    
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c978912fb46ea0658038ca141f934d90&language=en-US&page=1&include_adult=false&query=${e.target.value}`,{
    header:{'Accept': 'application/json'}
    }
   )
    .then(res => {
      const data = res.data;
      setResults(data.results)
      console.log(data.results)

    })
  
    // fetch(
    //   `https://api.themoviedb.org/3/search/movie?api_key=c978912fb46ea0658038ca141f934d90&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    //   )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (!data.errors) {
    //       setResults(data.results);
    //     } else {
    //       setResults([]);
    //     }
    //     console.log(data)
    //   });
  };

  return (
    <div className="Busqueda-page">
      <div className="container">
        <div className="Busqueda-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Busqueda de Peliculas"
              value={consulta}
              onChange={onChange}
            />
          </div>


        </div>
        {results.length > 0 && (
            <div className="results">
              {results.map((movie) => (
                <div key={movie.id}>
                  <ResultCard movie={movie} />
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};
