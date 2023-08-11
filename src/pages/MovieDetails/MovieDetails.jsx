import { useParams } from 'react-router-dom';
import { fetchedr } from 'helpers/fetchedr';
import { useEffect, useState } from 'react';
import { GenreList } from 'components/GenresList/GenresList';
import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [responseMovsId, setResponseMovsId] = useState('');
  const [genres, setGenres] = useState([]);
  const [data, setData] = useState('');

  const { id } = useParams();

  const { original_title, vote_average, overview, poster_path } =
    responseMovsId;


    // для поверення
      const location = useLocation();
      const back = location.state?.from ?? "/";


  useEffect(() => {
    fetchedr(id)
      .then(resp => {
        // console.log(resp.data, 45);
        // console.dir(poster_path, 78);
        setResponseMovsId(resp.data);
        setGenres(resp.data.genres);
        setData(resp.data.release_date.slice(0, 4));
      })
      .catch(error => {
        // toast.warn(`🐒Отакої! ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        // setLoading(false);
      });
  }, [id, poster_path]);

  // console.log(typeof genres, '71');
  // console.dir(poster_path, '78');

  return (
    <main className="contMD">
      <div className="wrapBtnImgMovDet">
        {/* <Link to="/">
          <button className="btnBackHome"> go to 🏰 </button>
        </Link> */}
              <BackLink className="btnBackHome" to={back} >Go back 🏄 </BackLink>

      </div>
<div className='detalWrapp'> 
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt="title of film"
      />
      <div className='detalTxt'>
      <h3>
        {original_title}
        <span>({data})</span>
      </h3>
      <p>User Score: {Math.ceil(vote_average * 10)}%</p>
      <h4>Overview</h4>
      <p>{overview} </p>
      </div>
      <div  className='janrAddWrap' > 
      <h5>Genres 📼</h5>

      <ul className="listGanreItem">
        {genres.map(({ name, id }) => (
          <GenreList name={name} key={id} />
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
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
</Suspense>

    </main>
  );
};

export default MovieDetails;
