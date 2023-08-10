import { Link, Outlet } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import MovieList from 'components/MoveList/MovieList';
import { fetchenr } from 'helpers/fetchenr';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RotatingGallery from 'components/Loader/Loader';




const Movies = () => {
  const [srchFilm, setSrchFilm] = useState('');
  const [responseMovsName, setResponseMovsName] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(srchFilm, "mmm")

  // ***********************
  useEffect(() => {
    setLoading(true);
    if (!srchFilm) {
      return;
    }
    if(srchFilm.length !==0 ) {  
    fetchenr(srchFilm)
      .then(resp => {
        setResponseMovsName(resp.data.results);
        // обнуляція
        setSrchFilm('');
        // console.log(resp.data.results
        //   , "vvv")
      })
      .catch(error => {
        toast.warn(`🐒Sorry ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        setLoading(false);
      });
    return()=> (responseMovsName);
}}, [responseMovsName, srchFilm]);

  // console.log(findMovie, "************фь*********")

  return (
    <main>
      <Link to="/">
        <button className="btnBackHome"> go to 🏰 </button>
      </Link>
      <p>📺</p>
      <Searchbar setSrchFilm={setSrchFilm} />
      {loading !== true ? (<RotatingGallery/>) : 

       ( 
      <ul className="moviesList">
        {responseMovsName.map(({ original_title, id }) => (
          <Link key={id} to={`/movies/${id}`}>
            <MovieList title={original_title} />
          </Link>
        ))}
      </ul>
     )}

      <Outlet/>
    </main>
  );
};

export default Movies;
