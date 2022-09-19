import React from "react";

function MoviesCard({ movie }) {
    const isLiked = false;
    const isDelete = false;
    return (
        <div className="movie-card">
            <div className="movie-card__info">
                <h2 className="movie-card__title">{movie.nameRU}</h2>
                <p className="movie-card__duration">{movie.duration} минут</p>
            </div>
            <img className="movie-card__image" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
            <button className={`link movie-card__button-save ${isLiked && 'movie-card__button-save_active'} ${isDelete && 'movie-card__button-save_delete'}`}>{isDelete ? '' : 'Сохранить'}</button>
        </div>
    )
}

export default MoviesCard;