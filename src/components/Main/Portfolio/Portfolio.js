import React from 'react';
import linkIcon from '../../../images/portfolio__link-icon.svg';

function Portfolio() {

    return (
        <section className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__links'>
                <li className='link portfolio__links-item'>
                    <a href='https://github.com/Kepova' target="_blank" rel="noopener noreferrer" className='portfolio__link'>Статичный сайт</a>
                    <span className='portfolio__link-span-icon'>
                        <img src={linkIcon} alt='Иконка для ссылки' className='portfolio__link-icon' />
                    </span>
                </li>
                <li className='link portfolio__links-item'>
                    <a href='https://github.com/Kepova' target="_blank" rel="noopener noreferrer" className='portfolio__link'>Адаптивный сайт</a>
                    <span className='portfolio__link-span-icon'>
                        <img src={linkIcon} alt='Иконка для ссылки' className='portfolio__link-icon' />
                    </span>
                </li>
                <li className='link portfolio__links-item'>
                    <a href='https://github.com/Kepova' target="_blank" rel="noopener noreferrer" className='portfolio__link'>Одностраничное приложение</a>
                    <span className='portfolio__link-span-icon'>
                        <img src={linkIcon} alt='Иконка для ссылки' className='portfolio__link-icon' />
                    </span>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;