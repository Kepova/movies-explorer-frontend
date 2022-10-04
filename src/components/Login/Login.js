import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import FormAuth from '../FormAuth/FormAuth';

function Login({ onLogin, isErrorRespose }) {
    const [formUserData, setFormUserData] = useState({
        userEmail: '',
        userPassword: '',
    });
    const [formValidity, setFormValidity] = useState({
        userEmailValid: false,
        userPasswordValid: false,
    });

    const handleInputChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setFormUserData((prevState) => ({ ...prevState, [name]: value }));
        },
        [formUserData]
    );

    useEffect(
        function validateInputs() {
            const isUserEmailFilled = isEmail(formUserData.userEmail);
            const isUserEmailValid = isUserEmailFilled;

            const isUserPasswordFilled = formUserData.userPassword;
            const isUserPasswordValid = isUserPasswordFilled;

            setFormValidity((prevStateValidity) => ({
                userEmailValid: isUserEmailValid,
                userPasswordValid: isUserPasswordValid,
            }))

        }, [formUserData]
    );

    const { userEmail, userPassword } = formUserData;
    const { userEmailValid, userPasswordValid } = formValidity;
    const loginFormValidity = userEmailValid && userPasswordValid;

    const handleLogin = (e) => {
        e.preventDefault();
        if ( !userEmail || !userPassword) {
            return;
        }
        onLogin({ email: userEmail, password: userPassword })
    };
    return (
        <>
            {<FormAuth nameButton={'Войти'} onSubmit={handleLogin} isFormValidity={loginFormValidity} >
                <>
                    <label className='form-auth__label'>
                        E-mail
                        <input className={`form-auth__input register__input-email ${!userEmailValid && 'form-auth__input-error'}`} name='userEmail' value={userEmail} onChange={handleInputChange} required type={'text'} placeholder='Введите email' />
                    </label>
                    <label className='form-auth__label'>
                        Пароль
                        <input className={`form-auth__input register__input-password ${!userPasswordValid && 'form-auth__input-error'}`} name='userPassword' value={userPassword} onChange={handleInputChange} required type={'password'} placeholder='Введите пароль'/>
                    </label>
                    <div className={`message-error form-auth__message-error ${!loginFormValidity  && 'message-error-visible'}`}>Что-то пошло не так...</div>
                    <div className={`message-error form-auth__message-error ${isErrorRespose && 'message-error-visible'}`}>{isErrorRespose}</div>
                </>
            </FormAuth>}
            <p className='login__go-to-another'>
                Ещё не зарегистрированы?
                <span>
                    <Link to='/signup' className='link login__go-to-another__link'>
                        Регистрация
                    </Link>
                </span>
            </p>
        </>
    )
};

export default Login;