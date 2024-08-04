import responseMovies from '../mocks/movie-results.json'

export function useMovies() { //Aqui va el Fetching de datos en lugar de movie-results.json
    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster

    }))

    return (
        { movies: mappedMovies }
    )
}