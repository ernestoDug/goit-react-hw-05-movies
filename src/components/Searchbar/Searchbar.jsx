import PropTypes from 'prop-types';

import css from './Searchbar.module.css';
import { useNavigate } from 'react-router-dom';

const Searchbar = ({ updateQueryString, query }) => {
  const navigate = useNavigate();

  // змінник
  const changer = event => updateQueryString(event.target.value);
  
  // відпрвник
  const submiter = event => {
    event.preventDefault();
    if (query) {
      navigate('/moviesList/query', { replace: false });
    }
  };
  
  

  return (
    <>
      <header className={css.searchbar}>
        <form onSubmit={submiter} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLab}> 🔎</span>
          </button>

          <input
            className={css.input}
            type="text"
            placeholder="Start your search..."
            value={query}
            onChange={changer}
          />
        </form>
      </header>
    </>
  );
};

// проптайпи
Searchbar.propTypes = {
  updateQueryString: PropTypes.func.isRequired,
  // setSearchMovies: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Searchbar;
