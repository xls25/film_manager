import "./FilmList.css"
import {useEffect, useState} from "react";
import type {MovieType} from "../types/movie-type.ts";
import {getFilms} from "../service/film-service.ts";
import Film from "./Film.tsx";


const FilmList = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        (async () => {
            setMovies(await getFilms())
        })();

    }, []);

    return (
        <>
            <header>
                <h1>Filmek</h1>
                <input type="search" name="" id="" placeholder="Film címe"/>
                <h3>Kedvenc filmek száma: </h3>
            </header>

            <main>
                {movies.length &&
                    movies.map(movie => (
                        <Film
                            /*id={movie.id}
                            title={movie.title}
                            genre={movie.genre}
                            year={movie.year}
                            description={movie.description}
                            rating={movie.rating}
                            key={movie.id}*/
                            {...movie}
                        />
                    ))
                }
            </main>
        </>
    );
};

export default FilmList;