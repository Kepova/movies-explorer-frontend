import React from 'react';

function Profile() {

    return (
        <div className='content profile'>
            <h1 className='title__form profile__title'>Привет, Виталий!</h1> {/* имя подставить из переменной */}
            <ul className='profile__info'>
                <li className='profile__info-item profile__info-name'><span className='profile__info-description'>Имя</span>Виталий</li>
                <li className='profile__info-item profile__info-email'><span className='profile__info-description'>E-mail</span>pochta@yandex.ru</li>
            </ul>
            <button type="button" className='profile__button profile__button-edit'>Редактировать</button>
            <button type="button" className='profile__button profile__button-out-login'>Выйти из аккаунта</button>
        </div>
    )
};

export default Profile;