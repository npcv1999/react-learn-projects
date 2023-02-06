export const BASE_URL = {
  SEARCH: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`,
  IMAGE: "https://image.tmdb.org/t/p/original",
  NOW_PLAYING: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`,
  TOP_RATED: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
  TOP_POPULAR: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
  UP_COMING: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`,
};
