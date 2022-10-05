import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import FormAuth from '../FormAuth/FormAuth';

function Register({ onRegister, isErrorResponse }) {
    const [formUserData, setFormUserData] = useState({
        userName: '',
        userEmail: '',
        userPassword: '',
    });
    const [formValidity, setFormValidity] = useState({
        userNameValid: true,
        userEmailValid: true,
        userPasswordValid: true,
    });

    const handleInputChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setFormUserData((prevState) => ({ ...prevState, [name]: value }));
        },
        [setFormUserData]
    );

    useEffect(
        function validateInputs() {
            const isUserNameFilled = formUserData.userName.length > 2 && formUserData.userName.length < 30;
            const isUserNameValid = isUserNameFilled;

            const isUserEmailFilled = isEmail(formUserData.userEmail);
            const isUserEmailValid = isUserEmailFilled;

            const isUserPasswordFilled = formUserData.userPassword;
            const isUserPasswordValid = isUserPasswordFilled;

            setFormValidity((prevStateValidity) => ({
                userNameValid: isUserNameValid,
                userEmailValid: isUserEmailValid,
                userPasswordValid: isUserPasswordValid,
            }))

        }, [formUserData]
    );

    const { userName, userEmail, userPassword } = formUserData;
    const { userNameValid, userEmailValid, userPasswordValid } = formValidity;
    const registerFormValidity = userNameValid && userEmailValid && userPasswordValid;

    const handleRegister = (e) => {
        e.preventDefault();
        if (!userName || !userEmail || !userPassword) {
            return;
        }
        onRegister({ name: userName, email: userEmail, password: userPassword })
    };

    return (
        <>
            {<FormAuth nameButton={'Зарегистрироваться'} onSubmit={handleRegister} isFormValidity={registerFormValidity} >
                <>
                    <label className='form-auth__label'>
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
                    <div className={`message-error form-auth__message-error ${!registerFormValidity && 'message-error-visible'}`}>Что-то пошло не так...</div>
                    <div className={`message-error form-auth__message-error ${isErrorResponse && 'message-error-visible'}`}>{isErrorResponse}</div>
                </>
            </FormAuth>}
            <p className='register__go-to-another'>
                Уже зарегистрированы?
                <span>
                    <Link to='/signin' className='link register__go-to-another__link'>
                        Войти
                    </Link>
                </span>
            </p>
        </>
    )
};

export default Register;