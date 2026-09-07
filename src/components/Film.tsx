import "./Film.css";
import type {MovieCompType} from "../types/movie-type.ts";
import * as React from "react";


const Film: React.FC<MovieCompType> = ({id, title, year, genre, description, rating, addFavourite}) => {
    return (
        <article id={id.toString()}>
            <h3>{title}</h3>
            <p>{genre} * {year}</p>
            <p>Értékelése: {rating}</p>
            <p>{description}</p>
            <button
                onClick={() => addFavourite({ id: id, title: title })}
            >
                Kedvenc
            </button>
        </article>
    );
};

export default Film;