import { RenderMovies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { noResultsErrorMessage } from './hooks/noResults'
import { useFormSubmit } from './hooks/useSearch'
// import { useRef } from 'react'


export const App = () => {
  // const API_KEY = 'ebfbc60b'
  // const MOVIES_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`
  const noMovies = noResultsErrorMessage()
  const { movies: mappedMovies } = useMovies() //recive un objeto desde el customhook useMovies.js
  const { inputFields, handleSubmit } = useFormSubmit()

  //   METODO 1 USANDO => useRef()

  // const inputRef = useRef()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const value = inputRef.current.value

  //   if (value === '') return
  //   console.log(value)
  //   inputRef.current.value = ''
  // }

  // METODO 2 USANDO SOLO JAVASCRIPT

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   //Recuperamos todos los values de todos los inputs
  //   const inputFields = Object.fromEntries(new window.FormData(e.target))
  //   if (inputFields.search === '') return
  //   console.log(inputFields)
  //   e.target.reset()
  // }


  return (
    <div className="container">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="search" name="search" id="search" autoComplete="off" placeholder="Ej. Avengers, etc..." />
            {/* Para que funcione con ref tienes que poner una propiedad ref={inputRef} */}
          </label>
          <button type="submit">Search</button>
        </form>
      </header>
      {
        inputFields.search && <h4>Resultados para: {inputFields.search}</h4>
      }
      <main>
        {
          <RenderMovies movies={mappedMovies} noMovies={noMovies} /> //Mandamos las props al componente hijo Movies.jsx
        }
      </main>
    </div >
  )
}
