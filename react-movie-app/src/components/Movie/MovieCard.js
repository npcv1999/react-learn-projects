import { convertImage } from "@utils";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { title, poster_path, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-500 flex flex-col gap-3 h-full select-none">
      <img
        className="w-full h-[300px] rounded-lg object-cover"
        src={convertImage(poster_path)}
        alt=""
      />
      <div className="movie-info text-white">
        <h3 className="text-xl font-bold text-white w-full">{title}</h3>
        <div className="movie-rating flex justify-between items-center mb-3">
          <span className="opacity-50">
            {new Date(release_date).getFullYear()}
          </span>
          <div className="flex gap-2">
            <span className="opacity-50">{vote_average}</span>
            <svg
              width="20"
              height="18"
              fill="#ff9529"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate(`/movie/${id}`)}
        className="bg-primary text-white p-3 rounded-lg w-full font-bold mt-auto"
      >
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
