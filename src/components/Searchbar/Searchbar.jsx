import PropTypes from 'prop-types';
import { useState } from 'react';

import css from './Searchbar.module.css';

const Searchbar = ({ setSearchMovies, updateQueryString, query }) => {
  const [query2, setQuery] = useState('');

  // змінник
  const changer = event => setQuery(event.target.value);
  query = query2;

  // відпрвник
  const submiter = event => {
    event.preventDefault();
    updateQueryString(query);
    setQuery('');
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
  // updateQueryString: PropTypes.func.isRequired,
  setSearchMovies: PropTypes.func.isRequired,
  // query: PropTypes.string.isRequired,
};

export default Searchbar;
