import { Routes, Route } from 'react-router-dom';
import React from 'react';
// import React, { useState, useEffect } from 'react';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';

import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Layout from './Layout/Layout';
// import NotFound from 'pages/notFound';
import Reviews from '../pages/Reviews/Reviews';
import { Cast } from 'pages/Cast/Cast';
 

const App = () => {
    return (
           <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="/movies/:id/cast" element={< Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews />} />
            </Route>
          <Route path="*" element={<Home/>} />
            </Route>


    </Routes>
  );


  
};

export default App;
