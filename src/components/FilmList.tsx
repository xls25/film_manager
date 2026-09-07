import "./FilmList.css"
import {useEffect, useMemo, useRef, useState} from "react";
import type {MovieType, OutputMovieType} from "../types/movie-type.ts";
import {getFilms} from "../service/film-service.ts";
import Film from "./Film.tsx";


const FilmList = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [search, setSearch] = useState<string>("");
    const [favourites, setFavourites] = useState<OutputMovieType[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
        (async () => {
            setMovies(await getFilms());
        })();
        inputRef.current?.focus();
    }, []);

    const filteredMovies = useMemo(() => {
        if (!search) return movies;

        return movies.filter((movie: MovieType) => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
        })
    }, [search, movies]);

    const addFavourite = (movie: OutputMovieType) => {
        if (!favourites.find(f => f.id === movie.id)) {
            setFavourites((prev) => [...prev, movie]);
        }

    }

    return (
        <div className="filmlist">
            <header>
                <input
                    onChange={e => setSearch(e.target.value)}
                    type="search"
                    value={search}
                    name="" id=""
                    ref={inputRef}
                    placeholder="Film címe"
                />
                <h3>Kedvenc filmek száma: {0}</h3>
            </header>

            <main>
                {filteredMovies.length &&
                    filteredMovies.map(movie => (
                        <Film
                            {...movie}
                            addFavourite={addFavourite}
                            key={movie.id}
                        />
                    ))
                }

            </main>

            {favourites.map(movie => (
                <div>{movie.title}</div>
            ))}
        </div>
    );
};

export default FilmList;