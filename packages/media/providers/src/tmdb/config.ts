/** Dependencies */
import dotenv from 'dotenv';

/** Query the environment configuration */
dotenv.config();

/** Export the configuration of the TMDB client */
export const TMDB_API_KEY = process.env.TMDB_API_KEY || '';
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_MEDIA_BASE_URL = 'https://media.themoviedb.org/t/p';
