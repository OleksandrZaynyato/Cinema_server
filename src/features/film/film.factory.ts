import Film from './film.model.ts';
import type { FilmInput } from './film.types.ts';

export function filmFactory(data: FilmInput) {
    return new Film({
        title: data.title,
        imageUrl: data.imageUrl,
        trailerUrl: data.trailerUrl,
        isShown: data.isShown ?? true,
    });
}
