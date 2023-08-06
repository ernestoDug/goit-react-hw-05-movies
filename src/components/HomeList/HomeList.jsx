import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
import css from './HomeList.module.css';

// **************************
import { Link } from 'react-router-dom';


const HomeList = ({ id, title }) => {
  // const [showMod, setShowMod] = useState(false);
  // const [modalURL, setModalURL] = useState('');

  

  return (
    <>
      {/* галерея умова */}
      <Link>
      <li className={css.galleryItem}>
            {title}   
      </li>
      </Link>
    </>
  );
};

// протайпи
// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };

export default HomeList;
