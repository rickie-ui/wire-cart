import Hero from "@/assets/hero.png";
import HeroTwo from "@/assets/hero2.png";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
    >
      <section className="flex overflow-x-auto">
        {/* hero slider */}

        <SwiperSlide className="grid min-h-[575px] min-w-full grid-cols-2 items-center justify-center gap-4 bg-secondary px-32">
          <div className="w-3/4">
            <h2 className="text-2xl uppercase text-primary">
              Sale up to 30% off
            </h2>
            <h2 className="my-6 whitespace-nowrap text-5xl font-medium">
              Apple Watch Series
            </h2>
            <p className="leading-related mb-6 opacity-60">
              Feature packed at a better value tha ever Powerful sensors to
              monitor your fitness.
            </p>

            <Link
              to=""
              className="flex w-1/3 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-white transition-all hover:bg-black "
            >
              Shop Now <IoMdArrowForward />
            </Link>
          </div>
          <img src={Hero} alt="hero-image" className=" h-[500px] -rotate-90" />
        </SwiperSlide>
        <SwiperSlide className="grid min-h-[575px] min-w-full grid-cols-2 items-center justify-center gap-4 bg-secondary px-32">
          <div className="w-3/4">
            <h2 className="text-2xl uppercase text-primary">
              New Arrivals Collection
            </h2>
            <h2 className="my-6 whitespace-nowrap text-5xl font-medium">
              iPhone Accessories
            </h2>
            <p className="leading-related mb-6 opacity-60">
              Snap on a case, wallet, wireless charger, battery pack and all the
              accessories you are looking for.
            </p>

            <Link
              to=""
              className="flex w-1/3 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-white transition-all hover:bg-black "
            >
              Shop Now <IoMdArrowForward />
            </Link>
          </div>
          <img src={HeroTwo} alt="hero-image" className=" h-[400px]" />
        </SwiperSlide>
      </section>
    </Swiper>
  );
};

export default Home;
