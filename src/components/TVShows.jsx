import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MyMain.module.css';

const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const apiKey = 'ea9ed408';
  const searchTerm = 'show';

  useEffect(() => {
    const fetchTvShows = async () => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=series`);
      const data = await response.json();

      if (data.Search) {
        const limitedShows = data.Search.slice(0, 20);
        setTvShows(limitedShows);
      } else {
        console.error('Error fetching TV shows:', data.Error);
      }
    };

    fetchTvShows();
  }, []);

  return (
    <div className="container-fluid px-4">
      <h2>TV Shows</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {tvShows.map((show) => (
          <div className="col mb-2 text-center px-1" key={show.imdbID}>
            <Link to={`/movie-details/${show.imdbID}`}>
              <img className={`img-fluid ${styles.hoverEffect}`} src={show.Poster} alt={show.Title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShows;
