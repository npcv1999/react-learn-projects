import { Main } from "@components";
import { HomePage, MovieDetailPage, MoviePage } from "@pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetailPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
