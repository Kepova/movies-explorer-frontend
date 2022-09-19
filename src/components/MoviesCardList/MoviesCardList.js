import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import movies from '../../constants/movies';

function MoviesCardList({ isNextMovie }) {
    const moviesElements = movies.map((movie) => (
        <MoviesCard movie={movie}
            // onCardClick={onCardClick}
            // onCardLike={onCardLike}
            // onCardDeletePopup={onCardDeletePopup}
            key={movie._id} />
    ));

    return (
        <section className='movie-card-list'>
            <div className='movie-card-list__movies'>
                {moviesElements}
            </div>
            <div className='movie-card-list__open-next-movies'>
                {isNextMovie &&
                    <button className='movie-card-list__open-next-movies-button'>Ещё</button>
                }
            </div>
        </section>
    )
};

export default MoviesCardList;