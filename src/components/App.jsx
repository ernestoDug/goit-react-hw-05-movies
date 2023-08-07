import { Routes, Route } from 'react-router-dom';
import React from 'react';
// import React, { useState, useEffect } from 'react';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
// import {  Link } from "./App.styled";
// import Header from './Header/Header';
// import Logo from './Logo/Logo';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import { Movie } from './Movie/Movie';
import Layout from './Layout/Layout';
// import NotFound from 'pages/notFound';
import Reviews from './Reviews/Reviews';
import { Cast } from './Cast/Credits';

export const Context = React.createContext();



const App = () => {
  // const [inputsearch, setInputSearch] = useState('');
  // const [loading, setLoading] = useState(false);
  
  // отримувач з форми скидач сторінки та галереї

    return (
    // <Context.Provider
    //     value={{
    //       responseMovs: responseMovs

    //      }}> 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path="movie/:movieId/" element={<MovieDetails />}>
            <Route path="movie/:movieId/cast" element={<Cast />} />
            <Route path="movie/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    // </Context.Provider>
  );
};

export default App;
