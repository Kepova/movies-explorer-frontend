import React, { useState, useCallback, useEffect } from 'react';

function FilterCheckbox({ onChangeFilterCheckbox, isFilterCheckbox }) {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (isFilterCheckbox) {
            return setIsChecked(isFilterCheckbox);
        }
        onChangeFilterCheckbox(isChecked);
    }, []);

    const handleInputChange = useCallback(
        (e) => {
            const { checked } = e.target;
            setIsChecked(checked);
            onChangeFilterCheckbox(checked);
        },
        [isChecked]
    );

    return (
        <section className='filter-checkbox'>
            <p className='filter-checkbox__description'>Короткометражки</p>
            <label className='link filter-checkbox__container'>
                <input type='checkbox' checked={isChecked} name='filterCheckbox' className='filter-checkbox__checkbox' onChange={handleInputChange}></input>
                <span className='filter-checkbox__checkbox-decoration'></span>
            </label>
        </section>
    )
};

export default FilterCheckbox;