import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// **************************
import css from './movList.module.css'

const MovieList = ({ title }) => {
  // const [showMod, setShowMod] = useState(false);
  // const [modalURL, setModalURL] = useState('');

  

  return (
    <>
      {/* галерея умова */}
    
      <li className={css.moviesItem}>
            {title}   
      </li>
  
    </>
  );
};

// протайпи
// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };

export default MovieList;
