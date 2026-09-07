import * as axios from "axios";

/*
export async function getFilms(): Promise<MovieType[]> {
    try {
        const res = await fetch("/movies.json");
        if (!res.ok) throw new Error("Failed to get films");
        return await res.json();

    } catch (e) {
        console.error(e);
        return [];
    }
}*/

const app = axios.create({
    baseURL: "/",
    timeout: 3000,
})

export async function getFilms() {
    const res = await app.get("movies.json");
    return res.data;
}