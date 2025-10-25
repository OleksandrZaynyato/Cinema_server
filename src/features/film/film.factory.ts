import Film from './film.model.js';
import { FilmInput } from './film.types.js';

export function filmFactory(data: FilmInput) {
    return new Film({
        title: data.title,
        imageUrl: data.imageUrl,
        trailerUrl: data.trailerUrl,
        isShown: data.isShown ?? true,
    });
}
