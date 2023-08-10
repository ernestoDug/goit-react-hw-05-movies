// import PropTypes from 'prop-types';
// import { useState, } from 'react';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// npm i react-toastify
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

import { useSearchParams } from "react-router-dom";

 

const Searchbar = ({setSrchFilm}) => {


// заміна в рядку запита
  const [searchMovies, setSearchMovies] = useSearchParams();
  const query = searchMovies.get("query") ?? "";
  

  // поки не розумію як використати
  // **********************************
  // const updateQueryString = (name) => {
  //   const nextMovies = query !== "" ? { query } : {};
  //   setSearchMovies(nextMovies);
  // };
  

  // відпрвник
  const submiter = event => {
    event.preventDefault();
    setSrchFilm(query);
    // *********************
    // event.target.reset()/
    // setSearchMovies("");
    
    // очищувач форми
    // input.reset();
  };
  
  return (
    <>
      <header className={css.searchbar}>
        <form onSubmit={submiter} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLab}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
         placeholder="Start your search..."
            value={query}
            onChange={event => setSearchMovies({ query: event.target.value })}
          />
        </form>
      </header>
    </>
  );
};

// проптайпи
// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Searchbar;
