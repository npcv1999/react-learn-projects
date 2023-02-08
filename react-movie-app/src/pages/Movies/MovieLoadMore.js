import { BASE_URL } from "@apis";
import { Button, Loading, MovieCard } from "@components";
import { fetcher } from "config";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";
const PAGE_SIZE = 20;
const MovieLoadMore = () => {
  const [query, setQuery] = useState("");

  const [url, setUrl] = useState(`${BASE_URL.UP_COMING}`);

  const { data, size, setSize, isLoading } = useSWRInfinite(
    (index) => `${url}&page=${index + 1}`,
    fetcher
  );

  const handleSearch = () => {
    setUrl(`${BASE_URL.SEARCH}${query}`);
  };

  const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < PAGE_SIZE);

  return (
    <div className="px-10">
      <div className="search flex gap-2 py-5 ">
        <input
          className="w-full p-2 rounded-md border outline-none focus:border-primary"
          type="text"
          defaultValue={query}
          onChange={(e) => {
            if (e.target.value.length == 0) {
              setUrl(`${BASE_URL.UP_COMING}&page=${1}`);
            }
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          onClick={handleSearch}
          className="bg-primary px-5 py-2 rounded-md text-white"
        >
          Search
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : movies.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-5">
            {movies.map((movie) => (
              <MovieCard key={movie.id} item={movie} />
            ))}
          </div>
          {!isReachingEnd && (
            <div className="text-center my-4">
              {isLoadingMore ? (
                <Loading />
              ) : (
                <Button onClick={() => setSize(size + 1)}>Load more</Button>
              )}
            </div>
          )}
        </>
      ) : (
        <h2 className="text-white text-2xl text-center w-full">
          Can not find any movie match this keyword, please try again ...
        </h2>
      )}
    </div>
  );
};

export default MovieLoadMore;
