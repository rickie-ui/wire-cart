import Hero from "@/assets/hero.png";
import HeroTwo from "@/assets/hero2.png";
import BannerOne from "@/assets/sub-banner.webp";
import BannerTwo from "@/assets/sub-banner-2.webp";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "@/constants/constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
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
            <img
              src={Hero}
              alt="hero-image"
              className=" h-[500px] -rotate-90"
            />
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
                Snap on a case, wallet, wireless charger, battery pack and all
                the accessories you are looking for.
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

      {/* trending categories */}
      <div className="border-2 border-green-500 px-32 py-10">
        <h2 className="my-4 text-3xl font-semibold opacity-70 ">
          Trending Categories
        </h2>
        <div className=" mt-12 flex gap-2">
          {images.map(({ id, title, src }) => (
            <div
              className=" flex h-64 w-52 flex-col items-center justify-center overflow-hidden border border-secondary p-10"
              key={id}
            >
              <Link to="#">
                <img
                  src={src}
                  alt={src}
                  className="h-full w-full transition-all duration-1000 hover:scale-110 hover:transform"
                />
              </Link>
              <Link
                to="#"
                className="mt-6 font-semibold opacity-60 transition-all hover:text-primary"
              >
                {title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <section className=" my-10 grid h-[400px] grid-cols-2 gap-5 px-32">
        <div className="bg-fourth relative flex  h-full flex-col items-center border-none pb-2 pt-8">
          <div className="z-10">
            <h2 className="my-3">SECURITY SMART CAMERA</h2>
            <p className="mb-2 text-2xl">Just Starting At $850</p>
            <Link
              to="#"
              className="inline-block rounded-full bg-primary px-4 py-2.5  font-semibold text-white transition-all hover:bg-black"
            >
              Shop Now
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 top-0  min-h-full overflow-hidden">
            <img
              src={BannerOne}
              alt=""
              className="cursor-pointer transition-all duration-1000 hover:scale-110 hover:transform"
            />
          </div>
        </div>

        <div className="bg-fourth relative flex  h-full flex-col items-center border-none pb-2 pt-8">
          <div className="z-10">
            <h2 className="my-3">ENTERTAINMENT & GAMES</h2>
            <p className="mb-2 text-2xl">Just Starting at $280 Hurry up!</p>
            <Link
              to="#"
              className="inline-block rounded-full bg-primary px-4 py-2.5  font-semibold text-white transition-all hover:bg-black"
            >
              Shop Now
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 top-0  min-h-full overflow-hidden">
            <img
              src={BannerTwo}
              alt=""
              className="cursor-pointer transition-all duration-1000 hover:scale-110 hover:transform"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
