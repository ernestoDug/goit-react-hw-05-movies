import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UniversList } from 'components/UniversList/UniversList';
import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { toast } from 'react-toastify';
import BarChart from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink/BackLink';
import { fetchedr } from 'helpers/fetchedr';
import 'react-toastify/dist/ReactToastify.css';

const MovieDetails = () => {
  const [responseMovsId, setResponseMovsId] = useState('');

  const [genres, setGenres] = useState([]);
  const [data, setData] = useState('');
  let [loading, setLoading] = useState(false);


  const { id } = useParams();

  const { original_title, vote_average, overview, poster_path } =
    responseMovsId;

  // для поверення
  const location = useLocation();
  const back = location.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    fetchedr(id)
      .then(resp => {
        console.log(resp.data, 45);
        setResponseMovsId(resp.data);
        setGenres(resp.data.genres);
        console.log(typeof(resp.data.genres), '71');
        console.dir(resp.data.genres, '72');

        setData(resp.data.release_date.slice(0, 4));
      })
      .catch(error => {
        toast.warn(`🐒Sorry ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        setLoading(false);
      });
  }, [id, poster_path]);


  return (
    <main className="contMD">
            {loading && <BarChart />}
      <div className="wrapBtnImgMovDet">
           <BackLink className="btnBackHome" to={back}>
          Go back 🏄{' '}
        </BackLink>
      </div>
      <div className="detalWrapp">
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="title of film"
        />
        <div className="detalTxt">
          <h3>
            {original_title}
            <span>({data})</span>
          </h3>
          <p>User Score: {Math.ceil(vote_average * 10)}%</p>
          <h4>Overview</h4>
          <p>{overview} </p>
        </div>
        <div className="janrAddWrap">
          <h5>Genres 📼</h5>

          <ul className="listGanreItem">
            {genres.map(({ name, id }) => (
              <UniversList name={name} key={id} />
            ))}
          </ul>

          <p>Additional information ⤵️ ⚓ </p>
        </div>
      </div>
      <ul className="navDet">
        <li className="castRewieItm">
          <Link className="castRewie" to="cast">
            Cast 📮
          </Link>
        </li>

        <li className="castRewieItm">
          <Link className="castRewie" to="reviews">
            Reviews ✒️
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>🚧Loading...🚛</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
