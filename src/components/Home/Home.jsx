// import PropTypes from 'prop-types';

import { useContext } from 'react';
import css from './Home.module.css';

import HomeList from '../HomeList';
import { Context } from 'components/App';

const ImageGallery = () => {
  const context = useContext(Context);
  context.fetcher()
  return (
    <ul className={css.gallery}>
      {context.imageForGalery &&
        context.imageForGalery.map(
          ({ id, webformatURL, largeImageURL, tags }) => (
            <HomeList
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          )
        )}{' '}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   imageForGalery: PropTypes.array.isRequired,
// };

export default ImageGallery;
