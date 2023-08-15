import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, Suspense, useState } from 'react';
import { toast } from 'react-toastify';
import { UsecustomCont } from 'components/Context/Context';
import BarChart from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import MovieList from 'components/MoveList/MovieList';
import { fetchenr } from 'helpers/fetchenr';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const { responseMovsName, setResponseMovsName } = UsecustomCont();
  const [searchMovies, setSearchMovies] = useSearchParams();
  let [loading, setLoading] = useState(false);
  // отримання параметра
  const query = searchMovies.get('query') ?? '';

  // або є або пусто для інпуту
  const updateQueryString = query => {
    const nextMovies = query !== '' ? { query } : '';
    setSearchMovies(nextMovies);
    // console.log(nextMovies, 78);
  };

  // для поверення
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);
    fetchenr(query)
      .then(resp => {
        setResponseMovsName(resp.data.results);
        // console.log(resp.data.results, 555);
        // console.log(searchMovies, 556);
      })
      .catch(error => {
        toast.warn(`🐒Sorry ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        setLoading(false);
      });
  }, [query, searchMovies, setResponseMovsName]);

  return (
    <main>
      {loading && <BarChart />}
      <p>📺</p>
      <Searchbar
        updateQueryString={updateQueryString}
        query={query}
        setSearchMovies={setSearchMovies}
      />
      {searchMovies && (
        <ul className="moviesList">
          {responseMovsName.map(({ original_title, id }) => (
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              <MovieList title={original_title} />
            </Link>
          ))}
        </ul>
      )}
      <Suspense fallback={<div>🚧Loading...🚛</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
