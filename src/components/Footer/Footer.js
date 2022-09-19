import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Footer() {
    return (
        <Switch>
            <Route exact path={['/', '/movies', '/saved-movies']}>
                <footer className="footer">
                    <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__container">
                        <p className="footer__copyright">© {(new Date()).getFullYear()}</p>
                        <nav className='footer__nav'>
                            <a href='https://practicum.yandex.ru/' target="_blank" rel="noopener noreferrer" className='link footer__link'>Яндекс.Практикум</a>
                            <a href='https://github.com/' target="_blank" rel="noopener noreferrer" className='link footer__link'>Github</a>
                        </nav>
                    </div>
                </footer>
            </Route>
        </Switch>
    );
}

export default Footer;