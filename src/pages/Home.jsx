import { fetcher } from '../helpers/fetcher.js';
import React, { useEffect, useState } from 'react';
import HomeList from 'components/HomeList/HomeList.jsx';
// import {H3}  from "./App.styled";

// *************************************************************************
const Home = () => {
      const [respMovs, setResponseMovs] = useState([]);

    useEffect(() => {
        // if (!inputsearch) {
        //   return;
        // }
        //  лодер +...
        // setLoading(true);
        fetcher()
          .then(resp => {
           setResponseMovs(resp.data.results);
            // для сповіщення 3
            // setStatus(200);
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
 
    return (<div>
        <>
🏰 <h3> 🧛‍♂️Welcome to the palace of trending movies</h3>
        </>
        <ul>
      {respMovs &&
              respMovs.map(
          ({ id, title }) => (
            <HomeList
              key={id}
              title = {title}
            />
          )
        )}{' '}
    </ul>

</div>)
}


export default Home