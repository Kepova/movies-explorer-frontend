import React, { useState, useCallback, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';

function FormAuth({ isLogin }) {

    const [formValues, setFormValues] = useState({
        userName: '',
        userEmail: '',
        userPassword: '',
    });

    const [formValidity, setFormValidity] = useState({
        userNameValid: false,
        userEmailValid: false,
        userPasswordValid: false,
    });

    const handleInputChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setFormValues((prevState) => ({ ...prevState, [name]: value }));
            console.log(formValues);
        },
        [formValues]
    );

    useEffect(
        function validateInputs() {
            const isUserNameFilled = formValues.userName.length > 2 && formValues.userName.length < 30;
            const isUserNameValid = isUserNameFilled;

            const isUserEmailFilled = isEmail(formValues.userEmail);
            console.log(isEmail(formValues.userEmail))
            const isUserEmailValid = isUserEmailFilled;

            const isUserPasswordFilled = formValues.userPassword;
            const isUserPasswordValid = isUserPasswordFilled;

            setFormValidity((prevStateValidity) => ({
                userNameValid: isUserNameValid,
                userEmailValid: isUserEmailValid,
                userPasswordValid: isUserPasswordValid,
            }))

        }, [formValues]
    )

    const { userName, userEmail, userPassword } = formValues;
    const { userNameValid, userEmailValid, userPasswordValid } = formValidity;
    const loginFormValidity = userEmailValid && userPasswordValid;
    const registerFormValidity = userNameValid && userEmailValid && userPasswordValid;

    return (
        <div className='form-auth__container'>
            <form className='content form-auth'>
                <label className={`form-auth__label ${isLogin && 'form-auth__label-hidden'}`}>
                    Имя
                    <input className={`form-auth__input register__input-name ${!userNameValid && 'form-auth__input-error'}`} name='userName' value={userName} onChange={handleInputChange} required type={'text'} placeholder='Введите имя'></input>
                </label>
                <label className='form-auth__label'>
                    E-mail
                    <input className={`form-auth__input register__input-email ${!userEmailValid && 'form-auth__input-error'}`} name='userEmail' value={userEmail} onChange={handleInputChange} required type={'text'} placeholder='Введите email'></input>
                </label>
                <label className='form-auth__label'>
                    Пароль
                    <input className={`form-auth__input register__input-password ${!userPasswordValid && 'form-auth__input-error'}`} name='userPassword' value={userPassword} onChange={handleInputChange} required type={'password'} placeholder='Введите пароль'></input>
                </label>
                <div className={`form-auth__message-error ${(isLogin ? !loginFormValidity : !registerFormValidity) && 'form__auth__message-error-visible'}`}>Что-то пошло не так...</div>
                <button className='form-auth__button-submit' type='submit'>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
            </form>
        </div>
    )
};

export default FormAuth;