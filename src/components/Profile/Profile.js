import React, { useContext, useState, useEffect, useCallback } from 'react';
import isEmail from 'validator/lib/isEmail';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';

function Profile({ onOutLogin, onProfileUpdate, isUpdateDone }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [formValidity, setFormValidity] = useState({
        nameValid: false,
        emailValid: false,
    });

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    const changeNameProfile = useCallback((e) => {
        setName(e.target.value);
    }, [setName]);

    const changeEmailProfile = useCallback((e) => {
        setEmail(e.target.value);
    }, [setEmail]);

    useEffect(
        function validateInputs() {
            if (name || email) {
                const isUserNameFilled = name.length > 2 && name.length < 30;
                const isUserNameValid = isUserNameFilled;

                const isUserEmailFilled = isEmail(email);
                const isUserEmailValid = isUserEmailFilled;

                setFormValidity((prevState) => ({
                    nameValid: isUserNameValid,
                    emailValid: isUserEmailValid,
                }));
            }
        }, [name, email]
    );

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        console.log(name, email)
        onProfileUpdate({ name: name, email: email });
    };

    const { nameValid, emailValid } = formValidity;
    const profileFormValidity = nameValid && emailValid;
    const buttonDisabled = currentUser.name === name && currentUser.email === email;

    return (
        <form className='content profile' onSubmit={handleProfileUpdate}>
            <h1 className='title__form profile__title'>Привет, {currentUser.name}</h1>
            <div className='profile__info'>
                <label className='profile__info-label'>Имя
                    <input className={`profile__info-input profile__info-name ${!nameValid && 'profile__input-error'}`} required type={'text'} name={name} value={name} onChange={changeNameProfile} />
                    <span className='profile__info-input-decoration'></span>
                </label>
                <label className='profile__info-label'>E-mail
                    <input className={`profile__info-input profile__info-email ${!emailValid && 'profile__input-error'}`} required type={'text'} name={email} value={email} onChange={changeEmailProfile} />
                    <span className='profile__info-input-decoration'></span>
                </label>
                <div className={`message-error profile__message-error ${!profileFormValidity && 'message-error-visible'}`}>Что-то пошло не так...</div>
                <div className={`${isUpdateDone && 'profile__message-update-done-visible'} profile__message-update-done`}>профиль успешно обновлен</div>
            </div>
            <button type="submit" className='link profile__button-edit' disabled={buttonDisabled}>{buttonDisabled ? 'Редактировать' : 'Сохранить'}</button>
            <Link to='/signin' className='link profile__link-out-login' onClick={onOutLogin}>Выйти из аккаунта</Link>
        </form>
    )
};

export default Profile;