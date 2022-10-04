import React from 'react';

function FormAuth({ nameButton, onSubmit, children, isFormValidity }) {

    return (
        <div className='form-auth__container'>
            <form className='content form-auth' onSubmit={onSubmit}>
                {children}
                <button className='link form-auth__button-submit' type='submit' disabled={!isFormValidity}>{nameButton}</button>
            </form>
        </div>
    )
};

export default FormAuth;