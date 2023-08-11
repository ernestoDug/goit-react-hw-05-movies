import { Link, Outlet, useLocation } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import MovieList from 'components/MoveList/MovieList';
import { fetchenr } from 'helpers/fetchenr';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { UsecustomCont } from 'components/Context/Context';

const Movies = () => {
const context = UsecustomCont();
const {responseMovsName, setResponseMovsName} = UsecustomCont();
  const [srchFilm, setSrchFilm] = useState(''); 


// для поверення
  const location = useLocation();


  useEffect(() => {
    if (!srchFilm) {
      return;
    }
    if(srchFilm.length !==0 ) {  
    fetchenr(srchFilm)
      .then(resp => {
        context.setResponseMovsName(resp.data.results);
                // обнуляція
 
        // console.log(resp.data.results
        //   , "vvv")
        

      })
      .catch(error => {
        toast.warn(`🐒Sorry ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
      }
      
      );
      
}

}, [setResponseMovsName, srchFilm]);



  

  return (
    <main>
  
      <p>📺</p>
      <Searchbar setSrchFilm={setSrchFilm} />
     
      <ul className="moviesList">
        {responseMovsName.map(({ original_title, id }) => (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
                        <MovieList title={original_title} />
          </Link>
        ))}
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
      <Outlet/>

</Suspense>

    </main>
  );
};

export default Movies;
