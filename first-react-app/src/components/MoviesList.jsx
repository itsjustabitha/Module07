import { useState } from 'react';

function MoviesList() {
// collection of objects representing movies
const movies = [
{
    id: 1,
title: "The Shawshank Redemption",
year: 1994,
synopsis: "Two imprisoned men find redemption.",
},
{
    id: 2,
title: "The Dark Knight",
year: 2008,
synopsis: "Batman fights the menace known as the Joker.",
},
{
    id: 3,
title: "Interstellar",
year: 2014,
synopsis: "Explorers travel through a wormhole in space.",
},
];


// const movieItems = movies.map(movie => (
// <li key={movie.id}>{movie.title}</li> // key prop is required for lists
// ))

const [currentMovies, setCurrentMovies] =
useState(movies);

const movieItems = currentMovies.map(movie => (
<Movie key={movie.id} title={movie.title}
year={movie.year} synopsis={movie.synopsis}/>

))
const handleReverseMovies = () => {
// first clone the original, so we don’t mutate it
let newMovies = [...currentMovies];
newMovies.reverse(); // 2. modify the clone
setCurrentMovies(newMovies); // 3. set updated clone in state
}

// const movieItems = movies.map(movie => (
// <Movie
// key={movie.id} // key prop is required for lists
// title={movie.title}
// year={movie.year}
// synopsis={movie.synopsis}/>
// // can also destructure movie into individual props
// // <Movie key={movie.id} {...movie}/>
// )
// );


function Movie({title, year, synopsis}) {
return (
//  no key prop here - only at top level inside .map

<li>
<h3>{title}</h3> <span>({year})</span>
<div>{synopsis}</div>
</li>
)
}


function AddMovieForm({onAddMovie}) {
const [title, setTitle] = useState('')
const [year, setYear] = useState('')
// ++ add support for the synopsis field as well, here and below
const handleSubmit = (e) => {
e.preventDefault();
onAddMovie({title, year})
}
return (
<div className="AddMovieForm componentBox">
<form onSubmit={handleSubmit}>
<label>Movie Title:
<input name="title" value={title}
onChange={(e) => setTitle(e.target.value)} />
</label>
<label>Year Released:
<input name="year" type="number" value={year}
onChange={(e) => setYear(e.target.value)} />
</label>
<button>Add Movie</button>
</form>
</div>
)
}
// add this in MoviesList component
const handleAddMovie = (newMovie) => {
newMovie.id = currentMovies.length + 1; // unreliable but
succinct
setCurrentMovies([...currentMovies, newMovie])
}


return (
<div className="MoviesList FancyBox">
    <AddMovieForm onAddMovie={handleAddMovie}/>
<ul> 

{/* { movies.map(movie => (
<li>{movie.title}</li>
)) } */}

{movieItems} 

</ul>
<button onClick={handleReverseMovies}>Reverse List</button>
</div>

)
}


export default MoviesList;