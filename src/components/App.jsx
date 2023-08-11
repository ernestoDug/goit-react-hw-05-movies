import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';

import Home from 'pages/Home/Home';
import Layout from './Layout/Layout';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const Cast = lazy(() => import('pages/Cast/Cast'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
