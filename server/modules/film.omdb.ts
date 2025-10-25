import axios from 'axios';
import type { OmdbFilm } from './film/film.types.ts';

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_URL = 'https://www.omdbapi.com/';

export const fetchFilmFromOmdb = async (title: string): Promise<OmdbFilm | null> => {
  try {
    const res = await axios.get(OMDB_URL, {
      params: { t: title, apikey: OMDB_API_KEY }
    });
    if (res.data.Response === 'False') return null;
    return res.data;
  } catch (err) {
    console.error('OMDb fetch error:', err);
    return null;
  }
};
