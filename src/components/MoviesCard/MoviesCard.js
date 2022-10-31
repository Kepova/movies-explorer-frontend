import React from "react";

function MoviesCard({ movie, moviesSaved, onSaveMovieClick, isDelete, onDeleteClick }) {

    const handleSaveClick = () => {
        onSaveMovieClick(movie);
    }

    const handleDeleteClick = () => {
        onDeleteClick(movie);
    }

    const isSavedMovie = moviesSaved.some(i => i.movieId === movie.movieId);

    const movieSavedButtonClassName = `link movie-card__button-save ${isSavedMovie && 'movie-card__button-save_active'} ${isDelete && 'movie-card__button-save_delete'}`;

    return (
        <div className="movie-card">
            <div className="movie-card__info">
                <h2 className="movie-card__title">{movie.nameRU}</h2>
                <p className="movie-card__duration">{movie.duration} минут</p>
            </div>
            <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer" >
                <img className="movie-card__image" src={movie.image} alt={movie.nameRU} />
            </a>
            <button type="button" onClick={isSavedMovie ? handleDeleteClick : handleSaveClick} className={movieSavedButtonClassName}>{isSavedMovie ? '' : 'Сохранить'}</button>
        </div>
    )
}

export default MoviesCard;