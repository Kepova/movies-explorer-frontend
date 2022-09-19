import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';

function SearchForm() {

    return (
        <section className='search-form'>
            <div className='search-form__container-search'>
                <input type='search' className='search-form__input' placeholder='Фильм'></input>
                <button type='submit' className='link search-form__button'>Найти</button>
            </div>
            <FilterCheckbox />
        </section>
    )
};

export default SearchForm;