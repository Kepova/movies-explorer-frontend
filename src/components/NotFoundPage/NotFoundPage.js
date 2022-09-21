import React from "react";
import { useHistory } from "react-router-dom";

function NotFoundPage() {
    const history = useHistory();

    return (
        <div className="content not-found-page">
            <h1 className="not-found-page__title">404</h1>
            <p className="not-found-page__description">Страница не найдена</p>
            <button type="button" onClick={history.goBack} className="link not-found-page__link-to-back">Назад</button>
        </div>
    )
}

export default NotFoundPage;