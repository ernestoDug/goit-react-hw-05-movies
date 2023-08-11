import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import css from './movList.module.css';

// список фільмів
const MovieList = ({ title }) => {
  return (
    <>
      <li className={css.moviesItem}>{title}</li>
    </>
  );
};

// протайпи
MovieList.propTypes = {
  title: PropTypes.string,
  // isRequired
};

export default MovieList;
