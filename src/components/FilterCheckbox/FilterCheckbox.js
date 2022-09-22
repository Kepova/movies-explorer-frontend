import React from 'react';

function FilterCheckbox() {

    return (
        <section className='filter-checkbox'>
            <p className='filter-checkbox__description'>Короткометражки</p>
            <label className='link filter-checkbox__container'>
                <input type='checkbox' className='filter-checkbox__checkbox'></input>
                <span className='filter-checkbox__checkbox-decoration'></span>
            </label>
        </section>
    )
};

export default FilterCheckbox;