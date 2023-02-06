import { BASE_URL } from "@apis";
import { Loading, MovieCard } from "@components";
import { fetcher } from "config";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import ReactPaginate from "react-paginate";

const MoviePage = () => {
  const [query, setQuery] = useState("");
  const [nextPage, setNextPage] = useState(1);

  const [url, setUrl] = useState(`${BASE_URL.UP_COMING}`);

  const { data, isLoading } = useSWR(url, fetcher);

  const { total_pages } = data || {};
  const movies = data?.results || [];

  const handleSearch = () => {
    setNextPage(1);
    setUrl(`${BASE_URL.SEARCH}${query}`);
  };

  useEffect(() => {
    if (query.length > 0) {
      setUrl(`${BASE_URL.SEARCH}${query}&page=${nextPage}`);
    } else {
      setUrl(`${BASE_URL.UP_COMING}&page=${nextPage}`);
    }
  }, [nextPage]);

  console.log("====================================");
  console.log("DATA", data);
  console.log("====================================");

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
        </>
      ) : (
        <h2 className="text-white text-2xl text-center w-full">
          Can not find any movie match this keyword, please try again ...
        </h2>
      )}
      <MoviePagination
        itemsPerPage={movies.length}
        total_pages={total_pages}
        nextPage={nextPage}
        setNextPage={setNextPage}
      />
    </div>
  );
};

export default MoviePage;

function MoviePagination({ setNextPage, total_pages }) {
  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
  };
  return (
    <div className="my-5">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(total_pages) | 0}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </div>
  );
}
