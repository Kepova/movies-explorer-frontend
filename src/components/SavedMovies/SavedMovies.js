import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filteredMovies } from '../../utils/filteredMovies';

function SavedMovies({
    movies,
    moviesSaved,
    onDeleteClick,
    isErrorSearchMovies,
}) {

    const [isNotFoundMovies, setIsNotFoundMovies] = useState(false);
    const [moviesElements, setMoviesElemenets] = useState(movies);
    const [isFilterCheckbox, setIsFilterCheckbox] = useState(false);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        setMoviesElemenets(movies);
    }, []);

    useEffect(() => {
        handleMoviesSearch(searchString);
    }, [isFilterCheckbox, movies])

    const onChangeFilterCheckbox = (isChecked) => {
        setIsFilterCheckbox(isChecked);
    };

    const onSearshStringChange = (searchStringInput) => {
        setSearchString(searchStringInput);
    };

    const handleMoviesSearch = (searchString) => {
        setSearchString(searchString);
        const moviesFiltered = filteredMovies({ searchString, movies, isFilterCheckbox });
        setIsNotFoundMovies(moviesFiltered.length < 1);
        setMoviesElemenets(moviesFiltered);
    };

    return (
        <section className='content saved-movies'>
            <SearchForm
                onSearshStringChange={onSearshStringChange}
                onMoviesSearch={handleMoviesSearch}
                onChangeFilterCheckbox={onChangeFilterCheckbox} />
            <MoviesCardList
                movies={moviesElements}
                moviesSaved={moviesSaved}
                keyMovie={'_id'}
                isDelete={true}
                onDeleteClick={onDeleteClick}
                isNotFoundMovies={isNotFoundMovies}
                isErrorSearchMovies={isErrorSearchMovies} />
        </section>
    )
};

export default SavedMovies;