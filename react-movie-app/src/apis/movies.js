import { fetcher } from "config";

import useSWR from "swr";

export const getDetailMovie = (movie_id) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`,
    fetcher
  );

  return { data, error };
};
