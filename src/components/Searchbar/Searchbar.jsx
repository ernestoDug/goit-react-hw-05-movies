import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

const Searchbar = ({ updateQueryString, query, setSearchMovies }) => {
  // відпрвник
  const submiter = event => {
    event.preventDefault();
    // передатчик в мувис
    setSearchMovies(query);
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
            onChange={event => updateQueryString(event.target.value)}
          />
        </form>
      </header>
    </>
  );
};

// проптайпи
Searchbar.propTypes = {
  updateQueryString: PropTypes.func.isRequired,
  setSearchMovies: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Searchbar;
