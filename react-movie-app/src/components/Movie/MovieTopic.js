import { BASE_URL } from "@apis";
import React from "react";
import MovieList from "./MovieList";
const dataHome = [
  { id: 1, title: "Now Playing", url: BASE_URL.NOW_PLAYING },
  { id: 2, title: "Top Rated", url: BASE_URL.TOP_RATED },
  { id: 3, title: "Top Popular", url: BASE_URL.TOP_POPULAR },
];
const MovieTopic = () => {
  return dataHome.map((item) => (
    <section key={item.id} className="movie-layout page-container mb-20">
      <h2 className="font-bold text-3xl text-white my-4">{item.title}</h2>
      <MovieList baseUrl={item.url} />
    </section>
  ));
};

export default MovieTopic;
