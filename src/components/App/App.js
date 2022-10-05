import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { getAllMovies } from '../../utils/MoviesApi';
import { addMovie, register, login, outLogin, getUser, updateUser, getSavedMovies, deleteSavedMovies } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [searchStringStorage, setSearchStringStorage] = useState('');
  const [isFilterCheckbox, setIsFilterCheckbox] = useState(false);
  const [notFirstSearch, setNotFirstSearch] = useState(false);
  const [isErrorSearchMovies, setIsErrorSearchMovies] = useState(false);
  const [isErrorRespose, setIsErrorResponse] = useState(null);
  const [isErrorResposeRegister, setIsErrorResponseRegister] = useState(null);
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [isUpdateDone, setIsUpdateDone] = useState(false);

  const history = useHistory();

  // Проверка авторизации
  useEffect(() => {
    getUser()
      .then((userData) => {
        if (userData) {
          setLoggedIn(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [loggedIn, currentUser]);

  // получить данные пользователя и сохраненные фильмы
  useEffect(() => {
    if (loggedIn) {
      Promise.all([getUser(), getSavedMovies()])
        .then(([userData, dataSavedMovies]) => {
          console.log(loggedIn, currentUser)
          if (userData) {
            setCurrentUser(userData);
            setMoviesSaved(dataSavedMovies.filter(m => m.owner === userData._id));
            // history.push('/movies');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  // отрисовка страницы фильмы
  useEffect(() => {
    if (!localStorage.searchMoviesData) {
      setNotFirstSearch(true);
      setAllMovies([]);
    } else {
      setAllMovies(JSON.parse(localStorage.searchMoviesData));
      setSearchStringStorage(JSON.parse(localStorage.searchString));
      setIsFilterCheckbox(JSON.parse(localStorage.searchFilterCheckbox));
    }
  }, []);

  // обновить значение фильтра короткометражек
  const handleFilterCheckbox = (isChecked) => {
    setIsFilterCheckbox(isChecked);
    localStorage.setItem('searchFilterCheckbox', JSON.stringify(isChecked));
  };

  // обновить значение строки поиска
  const handleSearshStringChange = (searchString) => {
    setSearchStringStorage(searchString);
    localStorage.setItem('searchString', JSON.stringify(searchString));
  };

  // загрузка всех фильмов в хранилище
  const handleSaveAllMovies = () => {
    getAllMovies()
      .then((preMoviesData) => {
        const moviesData = preMoviesData.map((movie) => {
          return {
            nameRU: movie.nameRU,
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailerLink: movie.trailerLink,
            duration: movie.duration,
            movieId: movie.id,
            country: movie.country,
            director: movie.director,
            year: movie.year,
            description: movie.description,
            nameEN: movie.nameEN,
            thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
          };
        })
        localStorage.setItem('searchMoviesData', JSON.stringify(moviesData));
        setAllMovies(moviesData);
        setNotFirstSearch(false);
      })
      .catch(err => {
        console.log(err);
        localStorage.removeItem('searchMoviesData');
        setIsErrorSearchMovies(true);
      });
  };

  // добавить фильм в сохраненные фильмы
  const handleSaveMovieClick = (movie) => {
    if (!moviesSaved.some(i => i.movieId === movie.movieId)) {
      addMovie(movie)
        .then((movieCard) => {
          setMoviesSaved([movieCard, ...moviesSaved])
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  // удалить фильм из сохраненных
  const handleDeleteSavedMovie = (movie) => {
    const movieDeleted = moviesSaved.find((m) => m.movieId === movie.movieId);
    deleteSavedMovies(movieDeleted._id)
      .then(() => {
        setMoviesSaved((state) => state.filter((m) => m._id !== movieDeleted._id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Регистрация
  const handleRegister = ({ name, email, password }) => {
    register({ name, email, password })
      .then((dataUser) => {
        if (dataUser) {
          console.log(dataUser)
          handleLogin({ email, password });
        }
      })
      .catch((err => {
        console.log(err);
        setIsErrorResponseRegister(err);
      }))
  };

  //Авторизация
  const handleLogin = ({ email, password }) => {
    login({ email, password })
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err => {
        console.log(err);
        setIsErrorResponse(err);
      }))
  };

  // Выход из аккаунта
  const handleSignOut = () => {
    outLogin()
      .then((message) => {
        console.log(message);
        setLoggedIn(false);
        setCurrentUser({});
        setMoviesSaved([]);
        localStorage.removeItem('searchMoviesData');
        localStorage.removeItem('searchString');
        localStorage.removeItem('searchFilterCheckbox');
        history.push('/');
      })
      .catch((err => {
        console.log(err);
      }))
  };

  // обновление данных профиля
  const handleProfileUpdate = ({ name, email }) => {
    updateUser({ name, email })
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setIsUpdateDone(true);
      })
      .catch((err => {
        console.log(err);
        setIsUpdateDone(false);
      }))
      .finally(setTimeout(() => {
        setIsUpdateDone(false);
      }, 8000))
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            movies={allMovies}
            notFirstSearch={notFirstSearch}
            handleSaveAllMovies={handleSaveAllMovies}
            moviesSaved={moviesSaved}
            onSaveMovieClick={handleSaveMovieClick}
            onChangeFilterCheckbox={handleFilterCheckbox}
            onSearshStringChange={handleSearshStringChange}
            searchStringStorage={searchStringStorage}
            isFilterCheckbox={isFilterCheckbox}
            isErrorSearchMovies={isErrorSearchMovies}
            onDeleteClick={handleDeleteSavedMovie}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            movies={moviesSaved}
            moviesSaved={moviesSaved}
            onSearshStringChange={handleSearshStringChange}
            onDeleteClick={handleDeleteSavedMovie}
            isErrorSearchMovies={isErrorSearchMovies}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onOutLogin={handleSignOut}
            onProfileUpdate={handleProfileUpdate}
            isUpdateDone={isUpdateDone}
          />
          <Route path="/signin">
            <Login onLogin={handleLogin} isErrorRespose={isErrorRespose} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} isErrorRespose={isErrorResposeRegister} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
