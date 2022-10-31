
export const filteredMovies = ({ movies, searchString, isFilterCheckbox }) => {
    const moviesFound = movies.filter(movie => {
        if (movie.nameRU.toLowerCase().includes(searchString.toLowerCase())
            || movie.nameEN.toLowerCase().includes(searchString.toLowerCase())
            || movie.description.toLowerCase().includes(searchString.toLowerCase()))
            return true;
        else
            return false;
    })
        .filter(movie => {
            if (!isFilterCheckbox)
                return true;
            else if (movie.duration < 40)
                return true;
            else
                return false;
        });

    return moviesFound;
};

export const shortFilteredMovies = (movies) => {
    const moviesShortFound = movies.filter(movie => {
        if (movie.duration < 40)
            return true;
        else
            return false;
    });

    return moviesShortFound;
};