import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BarChart from 'components/Loader/Loader';
import { fetcher } from '../../helpers/fetcher.js';
import MovieList from 'components/MoveList/MovieList.jsx';

const Home = () => {
  const [respMovs, setResponseMovs] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetcher()
      .then(resp => {
        setResponseMovs(resp.data.results);
        // console.log(resp.data.results, 6555555555555555);
      })
      .catch(error => {
        toast.warn(`🐒Sorry ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <main>
      {loading && <BarChart />}
      🏰 <h1 className="h1"> 🧛‍♂️Welcome to the palace of trending movies</h1>
      <div>
        <img
          width={300}
          src="https://2day.kh.ua/sites/default/files/wp-content/uploads/2017/06/4ui4l1.jpg"
          alt=""
        />
      </div>
      <ul className="moviesList">
        {respMovs &&
          respMovs.map(({ id, title }) => (
            <Link key={id} to={`movies/${id}`}>
              <MovieList title={title} />
            </Link>
          ))}{' '}
      </ul>
    </main>
  );
};

export default Home;
