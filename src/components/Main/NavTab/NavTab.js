import React from 'react';

function NavTab() {

    return (
            <nav className='navtab__nav'>
                <a href='#project' className='link navtab__nav-link'>О проекте</a>
                <a href='#techs' className='link navtab__nav-link'>Технологии</a>
                <a href='#aboutMe' className='link navtab__nav-link'>Студент</a>
            </nav>
    )
};

export default NavTab;