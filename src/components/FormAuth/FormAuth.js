import React from 'react';

function FormAuth({ isLogin }) {

    return (
        <div className='form-auth__container'>
            <form className='content form-auth'>
                <label className={`form-auth__label ${isLogin && 'form-auth__label-hidden'}`}>
                    Имя
                    <input className='form-auth__input register__input-name' type={'text'} placeholder='Введите имя'></input>
                </label>
                <label className='form-auth__label'>
                    E-mail
                    <input className='form-auth__input register__input-email' type={'text'} placeholder='Введите email'></input>
                </label>
                <label className='form-auth__label'>
                    Пароль
                    <input className='form-auth__input register__input-password' type={'password'} placeholder='Введите пароль'></input>
                </label>
                <button className='form-auth__button-submit' type='submit'>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
            </form>
        </div>
    )
};

export default FormAuth;