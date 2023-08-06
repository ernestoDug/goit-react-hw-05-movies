import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './HomeList.module.css';


const Home = ({ largeImageURL, webformatURL, tags }) => {
  // const [showMod, setShowMod] = useState(false);
  // const [modalURL, setModalURL] = useState('');

  

  return (
    <>
      {/* галерея умова */}

      <li className={css.galleryItem}>
        <img
          // адреса великого urla
          onClick={() => {
        
          }}
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
       
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

export default Home;
