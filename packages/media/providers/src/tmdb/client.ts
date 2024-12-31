/** Dependencies */
import { ApiWrapper } from '../shared';
import * as config from './config';
import * as type from './types';

/** Utility class for the tmdb wrappers */
class TMDBClient {
  /** The wrappers of the api */
  private api: ApiWrapper;
  private mediaApi: ApiWrapper;

  /** Constructor of the TMDB client */
  constructor() {
    /** Create the main api wrapper */
    this.api = new ApiWrapper({
      baseUrl: config.TMDB_BASE_URL,
      apiKey: config.TMDB_API_KEY,
      apiName: 'TMDB_API',
      useBearer: true
    });
    /** Create the media api wrapper */
    this.mediaApi = new ApiWrapper({
      baseUrl: config.TMDB_MEDIA_BASE_URL,
      apiKey: config.TMDB_API_KEY,
      apiName: 'TMDB_MEDIA_API',
      useBearer: true
    });
  }

  /**
   * Get the configuration of the api
   */
  public getConfiguration() {
    return this.api.makeRequest<type.TMDBConfiguration>('configuration');
  }

  /**
   * Search for a movie in the TMDB api
   * @param query The query of the search
   * @param options The options of the search
   * @returns The data of the search
   */
  public searchMovie(query: string, options: type.TMDBSearchMovieOptions = {}) {
    return this.api.makeRequest<type.TMDBSearchMovieResult>('search/movie', { query, ...options });
  }
}

/** Create a new client and export it */
export const tmdbClient = new TMDBClient();
