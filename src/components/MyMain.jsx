import React, { useState, useEffect } from 'react';
import styles from './MyMain.module.css';

const MyMain = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [watchAgainMovies, setWatchAgainMovies] = useState([]);
  const [newReleasesMovies, setNewReleasesMovies] = useState([]);

  const apiKey = 'ea9ed408';
  // Cambiare parametro per cercare diverse immagini
  const searchTerm = 'italia';

  useEffect(() => {
    const fetchMovies = async (searchType, movieList) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchType}`);
      const data = await response.json();

      if (data.Search) {
        const moviePosters = data.Search.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          poster: movie.Poster,
        }));
        movieList(moviePosters);
      } else {
        console.error('Error fetching movies:', data.Error);
      }
    };

    fetchMovies(`${searchTerm}&type=movie`, setTrendingMovies);
    fetchMovies(`${searchTerm}&type=series`, setWatchAgainMovies);
    fetchMovies(`${searchTerm}&type=movie`, setNewReleasesMovies);
  }, []);

  return (
    <div className="container-fluid px-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2>TV Shows</h2>
          <div className="btn-group ms-4 mt-1" role="group">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: '#221f1f' }}
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>

      <div className="row row-cols-1">
        <div className="col">
          <h4 className="text-start">Trending Now</h4>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {trendingMovies.map((movie) => (
              <div className="col mb-2 text-center px-1" key={movie.id}>
                <img className={`img-fluid ${styles.hoverEffect}`} src={movie.poster} alt={movie.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="col">
          <h4 className="text-start">Watch it Again</h4>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {watchAgainMovies.map((movie) => (
              <div className="col mb-2 text-center px-1" key={movie.id}>
                <img className={`img-fluid ${styles.hoverEffect}`} src={movie.poster} alt={movie.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="col">
          <h4 className="text-start">New Releases</h4>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {newReleasesMovies.map((movie) => (
              <div className="col mb-2 text-center px-1" key={movie.id}>
                <img className={`img-fluid ${styles.hoverEffect}`} src={movie.poster} alt={movie.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMain;