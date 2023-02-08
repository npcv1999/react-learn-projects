import { Main } from "@components";
import { MovieLoadMore } from "@pages";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../pages/Home"));
const MovieDetailPage = lazy(() => import("../pages/Movies/MovieDetail"));
const MoviePage = lazy(() => import("../pages/Movies"));
export const MainRouter = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviePage />}></Route>
        <Route path="/movies2" element={<MovieLoadMore />}></Route>
      </Route>
      <Route path="/movie/:movieId" element={<MovieDetailPage />}></Route>
    </Routes>
  );
};
