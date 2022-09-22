import React from 'react';
import { Link } from 'react-router-dom';
import FormAuth from '../FormAuth/FormAuth';

function Login() {

    return (
        <>
            {<FormAuth isLogin={true} />}
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