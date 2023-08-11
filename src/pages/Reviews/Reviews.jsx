import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BarChart from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RewievsList } from 'components/RewievsList/RewievsList';
import css from 'pages/Reviews/Reviews.module.css';
import { fetcherrw } from 'helpers/fetcherrw';

const Reviews = () => {
  const [responseMovsRew, setResponseMovsRew] = useState([]);
  let [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetcherrw(id)
      .then(resp => {
        setResponseMovsRew(resp.data.results);
        console.log(resp.data.results, 77777);
      })
      .catch(error => {
        toast.warn(`🐒Sorry ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return responseMovsRew.length === 0 ? (
    <p className={css.sorry}>Sorry, there are no reviews for this movie</p>
  ) : (
    <section>
      {loading && <BarChart />}
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
