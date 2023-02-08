// import { HomePage, MovieDetailPage, MoviePage } from "@pages";
import { Suspense } from "react";
import { MainRouter } from "routers";

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <MainRouter />
      </Suspense>
    </>
  );
}

export default App;
