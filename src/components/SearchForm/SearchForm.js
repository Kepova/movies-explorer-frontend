import React, { useState, useCallback, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ isFilterCheckbox, onChangeFilterCheckbox, onSearshStringChange, onMoviesSearch, searchStringStorage }) {
    const [searchString, setSearchString] = useState('');
    const [searchStringValid, setSearchStringValid] = useState(false);

    useEffect(() => {
        if (searchStringStorage) {
            setSearchString(searchStringStorage);
        }
    },
        [searchStringStorage]
    );

    const handleInputChange = useCallback(
        (e) => {
            const { value } = e.target;
            setSearchString(value);
        },
        [searchString, searchStringStorage]
    );

    useEffect(
        function validateInputs() {
            const isSearchStringFilled = searchString.length > 1;
            const isSearchStringValid = isSearchStringFilled;

            setSearchStringValid(isSearchStringValid);
        }, [searchString, searchStringValid]
    )

    const buttonDisabled = !searchStringValid;

    function handleSubmit(e) {
        e.preventDefault();
        onSearshStringChange(searchString);
        onMoviesSearch(searchString);
    }

    return (
        <section className='search-form'>
            <form className='search-form__container-search' onSubmit={handleSubmit}>
                <input type='search' required className='search-form__input' name='searchString' value={searchString} onChange={handleInputChange} placeholder='Фильм' />
                <span className='search-form__input-decoration'></span>
                <div className={`message-error search-form__message-error ${!searchStringValid && 'message-error-visible'}`}>Нужно ввести ключевое слово</div>
                <button type='submit' className='link search-form__button' disabled={buttonDisabled}>Найти</button>
            </form>
            <FilterCheckbox onChangeFilterCheckbox={onChangeFilterCheckbox} isFilterCheckbox={isFilterCheckbox} />
        </section>
    )
};

export default SearchForm;