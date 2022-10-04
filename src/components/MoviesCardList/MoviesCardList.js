import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, moviesSaved, keyMovie, onSaveMovieClick, isPreloader, isNotFoundMovies, isErrorSearchMovies, isDelete, onDeleteClick }) {
    const [showMovies, setShowMovies] = useState(movies);
    const [addNextMovies, setAddNextMovies] = useState(0);
    const [isNextMovie, setIsNextMovie] = useState(false);

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, [movies]);

    function resizeWindow() {
        const windowWidth = window.innerWidth;
        showFirstMovies(windowWidth);
    };

    const showFirstMovies = (windowWidth) => {
        if (windowWidth > 768) {
            setShowMovies(movies.slice(0, 12));
            setAddNextMovies(3);
            setIsNextMovie(movies.length > 12);
        }
        else if (windowWidth < 768) {
            setShowMovies(movies.slice(0, 8));
            setAddNextMovies(2);
            setIsNextMovie(movies.length > 8);
        }
        else if (windowWidth < 480 && windowWidth > 320) {
            setShowMovies(movies.slice(0, 5));
            setAddNextMovies(5);
            setIsNextMovie(movies.length > 5);
        }
    };

    const handleNextMovies = () => {
        const nextMovieCount = showMovies.length + addNextMovies;
        setShowMovies(movies.slice(0, nextMovieCount));
        if (movies.length <= nextMovieCount) {
            setIsNextMovie(false);
        }
    };

    const moviesElements = showMovies.map((movie) => (
        <MoviesCard
            movie={movie}
            moviesSaved={moviesSaved}
            onSaveMovieClick={onSaveMovieClick}
            key={movie[keyMovie]}
            isDelete={isDelete}
            onDeleteClick={onDeleteClick} />
    ));

    return (
        <section className='movie-card-list'>
            {movies.length < 1 && isNotFoundMovies && <div className='movie-card-list__not-found-movies'>Ничего не найдено</div>}
            {isErrorSearchMovies && <div className='movie-card-list__not-found-movies'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</div>}
            {isPreloader ? <Preloader /> :
                <div className='movie-card-list__movies'>
                    {moviesElements}
                </div>
            }
            <div className='movie-card-list__open-next-movies'>
                {isNextMovie &&
                    <button type="button" className='movie-card-list__open-next-movies-button' onClick={handleNextMovies}>Ещё</button>
                }
            </div>
        </section>
    )
};

export default MoviesCardList;