import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ loggedIn }) {
    const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false);
    const handleMenuBurger = () => {
        if (isMenuBurgerOpen === false) {
            setIsMenuBurgerOpen(true);
            return isMenuBurgerOpen;
        }
        setIsMenuBurgerOpen(false);
    }

    loggedIn = true;
    return (
        <nav className='navigation'>
            {loggedIn ?
                <>
                    <div className={`${isMenuBurgerOpen ? 'navigation__container-menu-burger' : 'navigation__container'}`} >
                        <NavLink exact to='/' className='link navigation__link navigation__link-main' activeClassName='navigation__link_active'>Главная</NavLink>
                        <NavLink to='/movies' className='link navigation__link navigation__link-auth' activeClassName='navigation__link_active'>Фильмы</NavLink>
                        <NavLink to='/saved-movies' className='link navigation__link navigation__link-auth' activeClassName='navigation__link_active'>Сохранённые фильмы</NavLink>
                        <Link to='/profile' className='link navigation__link navigation__link-account'>Аккаунт</Link>
                    </div>
                    <button className={`link navigation__menu-burger-button ${isMenuBurgerOpen ? 'navigation__menu-burger-button-close' : 'navigation__menu-burger-button-open'}`} onClick={handleMenuBurger} ></button>
                </>
                :
                <>
                    <Link to='/signup' className='link navigation__link-register'>Регистрация</Link>
                    <Link to='/signin' className='link navigation__link-login'>Войти</Link>
                </>
            }
        </nav >
    )
}

export default Navigation;