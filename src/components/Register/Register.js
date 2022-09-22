import React from 'react';
import { Link } from 'react-router-dom';
import FormAuth from '../FormAuth/FormAuth';

function Register() {

    return (
        <>
            {<FormAuth />}
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