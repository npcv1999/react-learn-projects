import { BASE_URL } from "@apis";
import { MovieList } from "@components";
import { convertImage } from "@utils";
import { fetcher } from "config";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(BASE_URL.MOVIE_DETAIL(movieId), fetcher);

  const { backdrop_path, poster_path, title, genres, overview } = data || {};

  return (
    data && (
      <>
        <div className="w-full h-[600px] relative">
          <div className="absolute  inset-0 bg-black bg-opacity-70"></div>
          <div
            className="w-full h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${convertImage(backdrop_path)})`,
            }}
          ></div>
          <div className="absolute bottom-0 p-5 flex items-center gap-10 w-full ">
            <img
              className="w-[200px] object-contain rounded-xl"
              src={convertImage(poster_path)}
              alt={title}
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-white text-2xl font-bold  block">{title}</h2>
              {genres.length > 0 && (
                <div className="category flex flex-wrap gap-3 ">
                  {genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="flex justify-center border text-center text-white border-white p-2 rounded-md items-center"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-white">{overview}</p>
            </div>
          </div>
        </div>
        <MovieCredits movie_id={movieId} />
        <MovieVideos movie_id={movieId} />
        <MovieSimilar movie_id={movieId} />
      </>
    )
  );
};

export default MovieDetailPage;

function MovieCredits({ movie_id }) {
  const { data } = useSWR(
    BASE_URL.MOVIE_METADATA(movie_id, "credits"),
    fetcher
  );

  const { cast } = data || {};

  return (
    <div className="my-5 mx-auto">
      <h2 className="text-white font-bold text-2xl text-center ">Casts</h2>
      <div className="grid grid-cols-10 gap-5 mt-5">
        {cast?.splice(0, 5).map((item) => (
          <div
            key={item.id}
            className={
              "flex flex-col items-center border border-primary rounded-md p-2 hover:scale-110 transition-all"
            }
          >
            <img
              className="w-full h-[150px] object-cover rounded-md "
              src={convertImage(item.profile_path)}
              alt=""
            />
            <span className="text-white text-center">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos({ movie_id }) {
  const { data } = useSWR(BASE_URL.MOVIE_METADATA(movie_id, "videos"), fetcher);
  if (!data) return null;
  const { results } = data || {};
  if (results && results.length < 1) return null;
  return (
    <div>
      <h2 className="text-white text-center text-2xl font-bold">Videos</h2>
      {results?.splice(0, 4)?.map((result) => {
        return (
          <div className="mt-10 w-full aspect-video" key={result.id}>
            <h3 className="text-white inline-block font-bold my-5  bg-secondary p-2">
              {result.name}
            </h3>
            <iframe
              width="873"
              height="491"
              src={`https://www.youtube.com/embed/${result.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}

function MovieSimilar({ movie_id }) {
  return (
    <div className="my-5">
      <h2 className="text-white text-2xl font-bold my-3">Similar Movies</h2>
      <MovieList baseUrl={BASE_URL.MOVIE_METADATA(movie_id, "similar")} />
    </div>
  );
}
