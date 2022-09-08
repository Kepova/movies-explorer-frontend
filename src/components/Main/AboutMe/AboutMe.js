import React from 'react';
import photoStudent from '../../../images/about-me__image.png';

function AboutMe() {

    return (
        <section className='about-me'>
            <h2 className='title about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about-me__container-text'>
                    <h3 className='about-me__subtitle'>Виталий</h3>
                    <p className='about-me__description'>Фронтенд-разработчик, 30 лет</p>
                    <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href='https://github.com/Kepova' target="_blank" rel="noopener noreferrer" className='about-me__link'>Github</a>
                </div>
                <img src={photoStudent} alt='Фото студента' className='about-me__image' />
            </div>
        </section>
    )
}

export default AboutMe;