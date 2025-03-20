import React from 'react';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import './Movies.css';

const movies = [
  {
    id: 1,
    title: 'Outer Banks',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/eBHzItKQNfPdt2GL4LcHJy8P1sH.jpg',
    rating: 9.2,
    year: 2023
  },
  {
    id: 2,
    title: 'Oppenheimer',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3hVjnB5FE4gBrR5rqk42qiBFgGe.jpg',
    rating: 8.9,
    year: 2023
  },
  {
    id: 3,
    title: 'House of the Dragon',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/y1f2h6q5FUBN9pe0wl5iUg5bzCq.jpg',
    rating: 8.5,
    year: 2023
  }
];

const Movies = () => {
  return (
    <section className="movies-section" id="movies">
      <div className="movies-container">
        <motion.div
          className="movies-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="movies-title">Trending Now</h2>
        </motion.div>

        <motion.div 
          className="movies-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              className="movie-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-meta">
                  <div className="movie-rating">
                    <StarIcon className="rating-icon" />
                    <span>{movie.rating}</span>
                  </div>
                  <div className="movie-year">{movie.year}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Movies;
