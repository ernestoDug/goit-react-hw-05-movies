// import { ToastContainer } from 'react-toastify';
// npm i react-toastify
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Loader from './Loader/Loader';
// import Searchbar from './Searchbar';
// ---------------------------------------------------------------------------------
import { Routes, Route } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
// import styled from 'styled-components';
// npm i styled-components
import { Container, Header, Logo, Link } from "./App.styled";




// export const Context = React.createContext();


// f56a897a3a6f379d289b4251d1cb1dbb

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


  // запитувач

  
  // --------------------------------------------------------------------
  // скільки знайшли
 
  // // нічого не знайшли
  // useEffect(() => {
  //   if (respMovs.length === 0 && status === 200) {
  //     toast.warn(`🐒 Ми нічого не знайшли 🐒`);
  //   }
  // }, [respHits.length, status]);

  return (

     <Container>
      <Header>
        <Logo>
        <span role="img" aria-label="icon heat">
        🎩 film dimension
          </span>{" "}
        </Logo>   
	    <nav className="menuItem">
                  <Link  to='/'> Home </Link> </nav>
    <nav>  <Link  to='/Movies'> Movies </Link> </nav>
          
      </Header>

        <Routes> 
<Route path = '/' element={<Home/>} />
<Route path = '/movies' element={<Movies/> } />
<Route path = '/movies/:moviesDetal' element={<div> Nazva </div>} />
  
                          
       </Routes>
        {/* <Searchbar/> */}
        </Container>
  );
};

export default App;
