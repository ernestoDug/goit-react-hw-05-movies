import { Routes, Route } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
// import {  Link } from "./App.styled";
import Header from './Header/Header';
import Logo from './Logo/Logo';
import Details from './Details/Details';
import Layout from './Layout/Layout';

const App = () => {
  // const [inputsearch, setInputSearch] = useState('');
  // const [loading, setLoading] = useState(false);

  // для умов сповіщенням 1
  // const [status, setStatus] = useState('');


  // отримувач з форми скидач сторінки та галереї
  // const submiterFromForm = inputSearch => {
  //   setInputSearch(inputSearch);
  //   setResponseIMG([]);
  //   // console.log(inputSearch, "Є");
  // };
 
  return (
     <div className='container'>
      <Header>
      <Logo/>
      </Header>

        <Routes> 
<Route path = '/' element={<Home/>} />
<Route path = '/movies' element={<Layout/> } >
<Route index = '/movies' element={<Movies/> } />

<Route path = 'id' element={<Details/>} />
{/* <Route path = 'id' element={<div> Nazva </div>} /> */}

</Route>


{/* <Route path = '/movies/:reviews' element={<div> Nazva </div>} /> */}
{/* <Route path="*" element={<NotFound />} /> */}

  
                          
       </Routes>
        </div>
  );
};

export default App;
