import React from 'react';
import MyNavbar from './MyNavbar';
import { Routes, Route } from 'react-router-dom';
import MyMain from './MyMain';
import TVShows from './TVShows';
import MovieDetails from './MovieDetails'

const Layout = () => {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MyMain />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default Layout;