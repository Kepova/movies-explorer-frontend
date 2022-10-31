import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filteredMovies } from '../../utils/filteredMovies';
import { useEffect } from 'react';

function Movies({
    movies,
    notFirstSearch,
    handleSaveAllMovies,
    moviesSaved,
    onSaveMovieClick,
    onChangeFilterCheckbox,
    onSearshStringChange,
    isFilterCheckbox,
    searchString,
    searchStringStorage,
    isErrorSearchMovies,
    onDeleteClick }) {

    const [isNotFoundMovies, setIsNotFoundMovies] = useState(false);
    const [moviesElements, setMoviesElemenets] = useState(movies);
    const [isPreloader, setIsPreloader] = useState(false);

    useEffect(() => {
        if (!notFirstSearch) {
            handleMoviesSearch(searchStringStorage);
        }
    }, [isFilterCheckbox, movies]);

    const handleMoviesSearch = () => {
        setIsPreloader(true);
        if (notFirstSearch) {
            return handleSaveAllMovies();
        }
        const moviesFiltered = filteredMovies({ searchString: searchStringStorage, movies, isFilterCheckbox });
        setIsNotFoundMovies(moviesFiltered.length < 1);
        setMoviesElemenets(moviesFiltered);
        setIsPreloader(false);
    };

    return (
        <section className='content movies'>
            <SearchForm
                onMoviesSearch={handleMoviesSearch}
                onChangeFilterCheckbox={onChangeFilterCheckbox}
                onSearshStringChange={onSearshStringChange}
                isFilterCheckbox={isFilterCheckbox}
                searchString={searchString}
                searchStringStorage={searchStringStorage} />
            <MoviesCardList
                movies={moviesElements}
                moviesSaved={moviesSaved}
                keyMovie={'movieId'}
                onSaveMovieClick={onSaveMovieClick}
                isPreloader={isPreloader}
                isNotFoundMovies={isNotFoundMovies}
                isErrorSearchMovies={isErrorSearchMovies}
                onDeleteClick={onDeleteClick} />
        </section>
    )
};

export default Movies;