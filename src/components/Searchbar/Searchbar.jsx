// import PropTypes from 'prop-types';
// import { useState, } from 'react';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// npm i react-toastify
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

import { useSearchParams } from "react-router-dom";

 

const Searchbar = ({setSrchFilm}) => {


  // const [findMovie, setFindMovie] = useState('');
// заміна в рядку
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
// *****************************************************************
  // const {search} = useParams();
  
  
  // шукач
  // const changer = event => {
  //   // console.log(findMovie);
  //    setFindMovie(event.target.value.toLowerCase());

  // };
  // відпрвник
  const submiter = event => {
    event.preventDefault();
    setSrchFilm(query)
    
    // fetchenr()
    // setFindMovie('');
    // очищувач форми
  };
  
  return (
    <>
      <header className={css.searchbar}>
        <form onSubmit={submiter} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLab}>Шукати</span>
          </button>

          <input
            className={css.input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Почніть пошук..."
            value={query}
            onChange={e => setSearchParams({ query: e.target.value })}
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
