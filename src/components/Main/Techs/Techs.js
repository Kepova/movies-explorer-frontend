import React from 'react';

function Techs() {

    return (
        <section className='techs' id='techs'>
            <h2 className='title techs__title'>Технологии</h2>
            <div className='techs__container-text'>
                <h3 className='techs__subtitle'>7 технологий</h3>
                <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className='techs__project-techs'>
                <li className='techs__project-tech'>HTML</li>
                <li className='techs__project-tech'>CSS</li>
                <li className='techs__project-tech'>JS</li>
                <li className='techs__project-tech'>React</li>
                <li className='techs__project-tech'>Git</li>
                <li className='techs__project-tech'>Express.js</li>
                <li className='techs__project-tech'>mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;