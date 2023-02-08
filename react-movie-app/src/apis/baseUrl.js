const API_KEY = process.env.REACT_APP_API_KEY;
const URL_API = "https://api.themoviedb.org/3";
export const BASE_URL = {
  SEARCH: `${URL_API}/search/movie?api_key=${API_KEY}&query=`,
  IMAGE: "https://image.tmdb.org/t/p/original",
  NOW_PLAYING: `${URL_API}/movie/now_playing?api_key=${API_KEY}`,
  TOP_RATED: `${URL_API}/movie/top_rated?api_key=${API_KEY}`,
  TOP_POPULAR: `${URL_API}/movie/popular?api_key=${API_KEY}`,
  UP_COMING: `${URL_API}/movie/upcoming?api_key=${API_KEY}`,
  MOVIE_DETAIL: (movieId) => ` ${URL_API}/movie/${movieId}?api_key=${API_KEY}`,
  MOVIE_METADATA: (movie_id, type) =>
    `${URL_API}/movie/${movie_id}/${type}?api_key=${API_KEY}`,
};
