import { fetcher } from '../../helpers/fetcher.js';
import React, { useEffect, useState } from 'react';
import MovieList from 'components/MoveList/MovieList.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
      const [respMovs, setResponseMovs] = useState([]);

    useEffect(() => {
               fetcher()
          .then(resp => {
           setResponseMovs(resp.data.results);
                       console.log(resp.data.results, 6555555555555555)
                     
              })
          .catch(error => {
            // toast.warn(`🐒Отакої! ${error} 🐒`);
          })
          // лодер -
          .finally(() => {
            // setLoading(false);
          });
      }, []);
      console.log(respMovs)
    return (
        <main>
🏰 <h1 className='h1'> 🧛‍♂️Welcome to the palace of trending movies</h1>
            <div><img width={300} src="https://2day.kh.ua/sites/default/files/wp-content/uploads/2017/06/4ui4l1.jpg" alt="" /></div>       
        <ul className= 'moviesList'>
      {respMovs &&
              respMovs.map(
                  ({ id, title }) => (
                      <Link  
                      key={id}
                      to={`movies/${id}`}
                      >                        
                          <MovieList
                          title = {title}
             />
              </Link>
          )
          )}{' '}
    </ul>


    
          
          </main>)

}


export default Home