import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header({ loggedIn }) {
    // loggedIn = true;
    return (
        <header className="header">
            <Link to='/'><img src={logo} alt="Логотип" className="logo" /></Link>
            <Switch>
                <Route exact path="/">
                    <nav className="header__nav">
                        {loggedIn ?
                            <>
                                <Link to='/movies' className='header__link header__link-auth'>Фильмы</Link>
                                <Link to='/saved-moviesn' className='header__link header__link-auth'>Сохраненные фильмы</Link>
                                <Link to='/profile' className='header__link header__link-account'>Аккаунт</Link>
                            </>
                            :
                            <>
                                <Link to='/sign-up' className='header__link header__link-register'>Регистрация</Link>
                                <Link to='/sign-in' className='header__link header__link-login'>Войти</Link>
                            </>
                        }
                    </nav>
                </Route>
            </Switch>
        </header>
    )
};

export default Header;
