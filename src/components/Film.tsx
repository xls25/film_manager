import "./Film.css";
import type {MovieType} from "../types/movie-type.ts";


const Film: React.FC<MovieType> = ({ id, title, year, genre, description, rating }) => {
    return (
        <article id={id.toString()}>
            <h3>{title}</h3>
            <p>{genre} * {year}</p>
            <p>Értékelése: {rating}</p>
            <p>{description}</p>
        </article>
    );
};

export default Film;