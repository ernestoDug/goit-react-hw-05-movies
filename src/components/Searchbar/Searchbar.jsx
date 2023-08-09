// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// npm i react-toastify
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';
import { fetchenr } from 'helpers/fetchenr'; 
 

const Searchbar = ({setSrchFilm}) => {


  const [findMovie, setFindMovie] = useState('');
  // const [responseMovsName, setResponseMovsName] = useState(''); 

  // const {search} = useParams();
  
  
  // шукач
  const changer = event => {
    console.log(findMovie);
    setFindMovie(event.target.value.toLowerCase());
  };
  // відпрвник
  const submiter = event => {
    event.preventDefault();
    
    fetchenr()
    // setFindMovie('')
          // очищувач форми
  };

// ***********************
useEffect(() => {
  fetchenr(findMovie)
  .then(resp => {
    // setResponseMovsName(resp.data);
    setSrchFilm(resp.data.results);
    console.log(resp.data.results
      , "vvv")
   
 })
.catch(error => {
// toast.warn(`🐒Отакої! ${error} 🐒`);
})
// лодер -
.finally(() => {
// setLoading(false);
});
}, [findMovie, setSrchFilm]);

console.log(findMovie, "************фь*********")




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
            value={findMovie}
            onChange={changer}
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
