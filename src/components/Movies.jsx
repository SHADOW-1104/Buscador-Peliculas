function ListOfMovies({ movies }) { // Prop recivida desde RenderMovies

    return (

        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.Title} />
                    </li>
                ))
            }
        </ul>
    )

}

function NoResult({ noMovies }) { //Prop recivida desde RenderMovies
    return (
        <h4>{noMovies}</h4>
    )
}

export function RenderMovies({ movies, noMovies }) { //Recivimos las props desde el componente padre App.jsx
    const hasMovies = movies?.length > 0

    return (
        hasMovies ? 
        <ListOfMovies movies={movies} /> //Lamada function components pasando las props de App.jsx
        : 
        <NoResult noMovies={noMovies} /> //Lamada function components pasando las props de App.jsx
    )

}