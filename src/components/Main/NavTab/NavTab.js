import React from 'react';
import { Link } from 'react-router-dom';

function NavTab() {

    return (
            <nav className='navtab__nav'>
                <Link to='/sign-in' className='navtab__nav-link'>О проекте</Link>
                <Link to='/sign-in' className='navtab__nav-link'>Технологии</Link>
                <Link to='/sign-in' className='navtab__nav-link'>Студент</Link>
            </nav>
    )
};

export default NavTab;