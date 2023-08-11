import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import css from './Searchbar.module.css';

const Searchbar = ({ setSrchFilm }) => {
  // заміна в рядку запита
  const [searchMovies, setSearchMovies] = useSearchParams();
  const [ff, setFF] = useSearchParams();
  
  const query = searchMovies.get('query') ?? '';
 
  // відпрвник
  const submiter = event => {
    event.preventDefault();
    // передатчик в мувис
    setSrchFilm(query);
 
    // очищувач форми
    // reset();
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
            onChange={event => setSearchMovies({ query: event.target.value })}
          />
        </form>
      </header>
    </>
  );
};

// проптайпи
Searchbar.propTypes = {
  setSrchFilm: PropTypes.func.isRequired,
};

export default Searchbar;



 