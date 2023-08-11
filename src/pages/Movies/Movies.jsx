import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchenr } from 'helpers/fetchenr';
import { toast } from 'react-toastify';
import { Suspense } from 'react';
import { UsecustomCont } from 'components/Context/Context';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MoveList/MovieList';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
// const context = UsecustomCont();
const {responseMovsName, setResponseMovsName} = UsecustomCont();

  const [searchMovies, setSearchMovies] = useSearchParams();

  const query = searchMovies.get('query') ?? '';




 const updateQueryString = (query) => { 
    const nextMovies = query !== "" ? { query } : {}; 
    setSearchMovies(nextMovies); 
  };



// для поверення
  const location = useLocation();


  useEffect(() => {
    if (!searchMovies) {
      return;
    }
    // if(srchFilm.length !==0 ) {  
    fetchenr(searchMovies)
      .then(resp => {
        setResponseMovsName(resp.data.results);
                // обнуляція
 
   
        

      })
      .catch(error => {
        toast.warn(`🐒Sorry ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        return searchMovies
      }
      
      );
      

}, [searchMovies, setResponseMovsName]);



  

  return (
    <main>
  
      <p>📺</p>
      <Searchbar updateQueryString={updateQueryString} 
      setSearchMovies = {setSearchMovies}
      query = {query}
      
      />
     
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
