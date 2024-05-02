import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const apiKey = 'ea9ed408';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`);
      const data = await response.json();
      setMovieDetails(data);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails.Title) {
    return <div>Loading...</div>;
  }

  const textStyle = { color: 'white' };

  return (
    <div className="container d-flex flex-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <div className="movie-details__img-container"> 
        <img src={movieDetails.Poster} alt={movieDetails.Title} className="img-fluid mb-3" />
      </div>
      <div className="movie-details__info">
        <h2>Movie Details: {movieDetails.Title}</h2>
        <p style={textStyle}>Plot: {movieDetails.Plot}</p>
        <p style={textStyle}>Genre: {movieDetails.Genre}</p>
        <p style={textStyle}>Released: {movieDetails.Released}</p>
        <p style={textStyle}>Actors: {movieDetails.Actors}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
