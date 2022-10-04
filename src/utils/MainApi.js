export const BASE_URL = 'https://api.kepova.nomoredomains.sbs';

const CheckResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    else {
        return Promise.reject(`Ошибка: ${res.statusText}`)
    }
}

export const register = ({ name, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "access-control-request-headers": "https://kepova.nomoredomains.sbs",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(CheckResponse)
}

export const login = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "access-control-request-headers": "https://kepova.nomoredomains.sbs",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then(CheckResponse)
}

export const outLogin = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "access-control-request-headers": "https://kepova.nomoredomains.sbs",
            "Content-Type": "application/json"
        }
    })
        .then(CheckResponse)
}

export const getUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "access-control-request-headers": "https://kepova.nomoredomains.sbs",
            "Content-Type": "application/json"
        }
    })
        .then(CheckResponse)
}

export const updateUser = ({ name, email }) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            "access-control-request-headers": "https://kepova.nomoredomains.sbs",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(CheckResponse)
}

export const addMovie = (movie) => {
    const {
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
    } = movie;
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'access-control-request-headers': 'https://kepova.nomoredomains.sbs',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            nameRU,
            nameEN,
            thumbnail,
            movieId,
        })
    })
        .then(CheckResponse)
};

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "access-control-request-headers": "https://kepova.nomoredomains.sbs",
            "Content-Type": "application/json"
        }
    })
        .then(CheckResponse)
}

export const deleteSavedMovies = (movieDeleteId) => {
    return fetch(`${BASE_URL}/movies/${movieDeleteId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            "access-control-request-headers": "https://kepova.nomoredomains.sbs",
            "Content-Type": "application/json"
        }
    })
        .then(CheckResponse)
}

