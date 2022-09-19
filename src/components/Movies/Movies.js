import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isNextMovie }) {
    isNextMovie = true;
    return (
        <section className='content movies'>
            <SearchForm />
            <MoviesCardList isNextMovie={isNextMovie} />
        </section>
    )
};

export default Movies;