/** Type alias for tmdb configuration */
export type TMDBConfiguration = {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
};

/** Type alias for search options */
export type TMDBSearchMovieOptions = {
  include_adult?: boolean;
  language?: string;
  primary_release_year?: number;
  page?: number;
  region?: string;
  year?: number;
};
export type TMDBSearchPersonOptions = {};
export type TMDBSearchTVOptions = {};
export type TMDBSearchMultiOptions = {};
export type TMDBSearchKeywordOptions = {};
export type TMDBSearchCompanyOptions = {};
export type TMDBSearchCollectionOptions = {};

/** Type alias for search result */
export type TMDBSearchMovieResult = {
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    [key: string]: any;
  }[];
  total_pages: number;
  total_results: number;
};
export type TMDBSearchPersonResult = {};
export type TMDBSearchTVResult = {};
export type TMDBSearchMultiResult = {};
export type TMDBSearchKeywordResult = {};
export type TMDBSearchCompanyResult = {};
export type TMDBSearchCollectionResult = {};
