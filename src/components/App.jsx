// import { ToastContainer } from 'react-toastify';
import { Routes, Route, NavLink } from 'react-router-dom';


// npm i react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Loader from './Loader/Loader';

import Searchbar from './Searchbar';
// import Home from './Home';
import { fetcher } from '../helpers/fetcher.js';
import React, { useState, useEffect } from 'react';

export const Context = React.createContext();


// f56a897a3a6f379d289b4251d1cb1dbb

const App = () => {
  // const [inputsearch, setInputSearch] = useState('');
  const [respMovs, setResponseMovs] = useState([]);
  // const [loading, setLoading] = useState(false);

  // для умов сповіщенням 1
  const [status, setStatus] = useState('');


  // отримувач з форми скидач сторінки та галереї
  // const submiterFromForm = inputSearch => {
  //   setInputSearch(inputSearch);
  //   setResponseIMG([]);
  //   // console.log(inputSearch, "Є");
  // };


  // запитувач

  useEffect(() => {
    // if (!inputsearch) {
    //   return;
    // }
    //  лодер +...
    // setLoading(true);
    fetcher()
      .then(resp => {
       setResponseMovs(resp.data);
        // для сповіщення 3
        setStatus(200);
        console.log(resp.data)

      })
      .catch(error => {
        toast.warn(`🐒Отакої! ${error} 🐒`);
      })
      // лодер -
      .finally(() => {
        // setLoading(false);
      });
  }, [status]);
  // --------------------------------------------------------------------
  // скільки знайшли
 
  // // нічого не знайшли
  // useEffect(() => {
  //   if (respMovs.length === 0 && status === 200) {
  //     toast.warn(`🐒 Ми нічого не знайшли 🐒`);
  //   }
  // }, [respHits.length, status]);

  return (
    <Context.Provider
      value={{
        movsForList: respMovs,
        fetcher: fetcher
        // onSubmit: submiterFromForm,
      }}
    >
      <div>
<nav>
<NavLink to='/'> Home </NavLink>
<NavLink to='/Movies'> Movies </NavLink>

</nav>
        <Routes> 
<Route path = '/' element={<div> Home </div>} />
<Route path = '/Movies' element={<div> Movies </div>} />

 
      
                     
      
       </Routes>
        <Searchbar/>
      </div>
    </Context.Provider>
  );
};

export default App;
