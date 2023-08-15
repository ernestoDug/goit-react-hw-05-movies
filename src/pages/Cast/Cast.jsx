import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BarChart from 'components/Loader/Loader';
import { fetchecr } from 'helpers/fetchecr';
import CastList from 'components/CastList/CastList';
import css from './Cast.module.css';

// актори
const Cast = () => {
  const [responseMovsCast, setResponseMovsCast] = useState([]);
  let [loading, setLoading] = useState(false);

  const { id } = useParams();

  // для поверенн,
  useEffect(() => {
    setLoading(true);
    fetchecr(id)
      .then(resp => {
        setResponseMovsCast(resp.data.cast);
        // console.log(resp.data.cast, 77777);
      })
      .catch(error => {
        toast.warn(`🐒Sorry ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return responseMovsCast.length === 0 ? (
    <p className={css.sorryCast}>Sorry, there are no casts for this movie</p>
  ) : (
    <section>
      {loading && <BarChart />}

      <ul className={css.listActor}>
        {responseMovsCast.map(({ character, id, profile_path, name }) => (
          <CastList
            key={id}
            character={character}
            id={id}
            profile_path={profile_path}
            name={name}
          />
        ))}
      </ul>
    </section>
  );
};
export default Cast;
