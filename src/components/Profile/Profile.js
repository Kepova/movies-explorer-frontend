import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {

    return (
        <div className='content profile'>
            <h1 className='title__form profile__title'>Привет, Виталий!</h1> {/* имя подставить из переменной */}
            <ul className='profile__info'>
                <li className='profile__info-item profile__info-name'><span className='profile__info-description'>Имя</span>Виталий</li>
                <li className='profile__info-item profile__info-email'><span className='profile__info-description'>E-mail</span>pochta@yandex.ru</li>
            </ul>
            <button type="button" className='link profile__button-edit'>Редактировать</button>
            <Link to='/signin' className='link profile__link-out-login'>Выйти из аккаунта</Link>
        </div>
    )
};

export default Profile;