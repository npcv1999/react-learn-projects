import { BASE_URL } from "@apis";
import { fetcher } from "config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { convertImage } from "@utils";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const { data } = useSWR(BASE_URL.UP_COMING, fetcher);

  const banners = data?.results || [];

  return (
    <section className="banner h-[400px] page-container overflow-hidden">
      <Swiper
        grabCursor={true}
        spaceBetween={30}
        slidesPerView="auto"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {banners.length > 0 &&
          banners.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ item }) => {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
      <div className="overplay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(255,255,255,0)]"></div>
      <img
        className="w-full h-full object-cover"
        src={convertImage(poster_path)}
        alt=""
      />
      <div className="content absolute bottom-4 left-5 text-white w-full">
        <h2 className="font-boid text-3xl">{title}</h2>
        <div className="category flex gap-x-3 my-4">
          <span className="border border-white p-2 rounded-md">Action</span>
          <span className="border border-white p-2 rounded-md">Adventure</span>
          <span className="border border-white p-2 rounded-md">Drama</span>
        </div>
        <Button
          onClick={() => navigate(`/movie/${id}`)}
          className="p-3 text-xl"
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};
