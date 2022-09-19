import React from 'react';

function AboutProject() {

    return (
        <section className='about-project' id='project'>
            <h2 className='title about-project__title'>О проекте</h2>
            <div className='about-project__container'>
                <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about-project__tasks'>
                <p className='about-project__task-time about-project__task-time-first-stage'>1 неделя</p>
                <p className='about-project__task-time about-project__task-time-second-stage'>4 недели</p>
                <p className='about-project__task'>Back-end</p>
                <p className='about-project__task'>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;