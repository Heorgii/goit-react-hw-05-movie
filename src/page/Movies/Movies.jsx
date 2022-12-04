import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Notiflix from 'notiflix';
import { searchMovie } from "js/movieApi";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery] = useState(''); //setSearchQuery
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

                const result = await searchMovie(query);
                setMovies(result.results);
            } catch (e) {
                setError(e.toJSON());
            }
        };
        getMovies();
    }, [query]);

    const updateQuery = query => {
        const targ = query.target.value;
        const nextParams = query !== '' ? { targ } : {};
        setSearchParams(nextParams);
        console.log(nextParams);
    };

    const handleSubmit = e => {
        e.preventDefault();
        reset();
        updateQuery();
    }

    const reset = () => {
        setSearchParams('');
        setError(null);
    };

    return (
        <>
            {error && Notiflix.Notify.warning('Sorry, there are no movies matching your search query. Please try again.')}
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={handleSubmit}>
                    <input
                        onChange={updateQuery}
                        value={searchQuery}
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

            {movies.length > 0 && movies.map(({ id, title, poster_path }) => (
                <ul>
                    <li key={id}>
                        <Link
                            to={`/movies/${id}`} state={{ from: location }}
                        >
                            <img
                                src={
                                    poster_path
                                        ? `https://image.tmdb.org/t/p/w300${poster_path}`
                                        : 'https://bitsofco.de/content/images/2018/12/broken-1.png'
                                }
                                width="200" height="150"
                                alt={title} />
                            <p>{title}</p>
                        </Link>
                    </li>
                </ul>
            ))}
        </>
    );
}

export default Movies;