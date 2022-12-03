import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { searchMovie } from "js/movieApi";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query') ?? '';
    const location = useLocation();

    useEffect(() => {
        if (!query) {
            return;
        }

        const getMovies = async () => {
            try {
                setError(null);

                const results = await searchMovie(query);
                setMovies(results);
                console.log(results);

            } catch (error) {
                setError(error);
            }
        }
        getMovies();
    }, [query]);

    const updateQuery = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
        console.log(nextParams);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setMovies('');
        updateQuery(query);
    }

    return (
        <>
            {error && Notiflix.Notify.warning('Sorry, there are no movies matching your search query. Please try again.')}
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={handleSubmit}>
                    <input
                        onChange={updateQuery}
                        value={query}
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />

                    <button type="submit" className="SearchForm-button">
                        <span>Search</span>
                    </button>
                </form>
            </header>

            {movies.length > 0 && movies.map(({ id, title }) => (
                <ul>
                    <li key={id}>
                        <Link
                            to={`/movies/${id}`} state={{ from: location }}
                        >
                            <p>{title}</p>
                        </Link>
                    </li>
                </ul>
            ))}
        </>
    );
}

export default Movies;