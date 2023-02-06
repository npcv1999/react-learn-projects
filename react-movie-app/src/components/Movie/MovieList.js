import { fetcher } from "config";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import MovieCard from "./MovieCard";

import { Autoplay } from "swiper";

const MovieList = ({ baseUrl }) => {
  const { data } = useSWR(baseUrl, fetcher);

  if (!data) return null;
  const { results } = data || {};

  return (
    <div className="movie-list ">
      <Swiper
        grabCursor={true}
        spaceBetween={30}
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {results.length > 0 &&
          results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
