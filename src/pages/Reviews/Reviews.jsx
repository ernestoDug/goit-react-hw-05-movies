// import PropTypes from 'prop-types';

import css from 'pages/Reviews/Reviews.module.css';

import { useParams } from 'react-router-dom';
import { fetcherrw } from 'helpers/fetcherrw';
import { useEffect, useState } from 'react';

import { RewievsList } from 'components/RewievsList/RewievsList';

 const Reviews = () => {
  const [responseMovsRew, setResponseMovsRew] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetcherrw(id)
      .then(resp => {
        setResponseMovsRew(resp.data.results);
        console.log(resp.data.results, 77777);
      })
      .catch(error => {
        // toast.warn(`🐒Отакої! ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        // setLoading(false);
      });
  }, [id]);

  return responseMovsRew.length === 0 ? (
    <p className={css.sorry}>Sorry, there are no reviews for this movie</p>
  ) : (
    <section>
      <ul className="rewieList">
        {responseMovsRew.map(({ author, content, id }) => (
          <RewievsList key={id} author={author} content={content} id={id} />
        ))}
      </ul>
    </section>
  );
};

// Modal.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   modalCloser: PropTypes.func.isRequired,
// };

export default Reviews;
