import Hero from "@/assets/hero.png";
import HeroTwo from "@/assets/hero2.png";
import ImgOne from "@/assets/iPhone.avif";
import ImgTwo from "@/assets/speaker.avif";
import ImgThree from "@/assets/tablet.avif";
import ImgFour from "@/assets/headphone.avif";
import ImgFive from "@/assets/laptop.avif";
import ImgSix from "@/assets/accessories.avif";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const images = [
    {
      id: 1,
      src: ImgOne,
      title: "iPhone",
    },
  ];
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
        <div className="mt-14 flex gap-2">
          <div className=" flex h-64 w-52 flex-col items-center justify-center overflow-hidden border p-10">
            <Link to="#">
              <img
                src={ImgOne}
                alt="iphone"
                className="h-full w-full transition-all duration-1000 hover:scale-110 hover:transform"
              />
            </Link>
            <Link
              to="#"
              className="mt-6 font-semibold opacity-60 transition-all hover:text-primary"
            >
              iPhone
            </Link>
          </div>
          <div className=" flex h-64 w-52 flex-col items-center justify-center overflow-hidden border p-10">
            <Link to="#">
              <img
                src={ImgTwo}
                alt="iphone"
                className="h-full w-full transition-all duration-1000 hover:scale-110 hover:transform"
              />
            </Link>
            <Link
              to="#"
              className="mt-6 font-semibold opacity-60 transition-all hover:text-primary"
            >
              iPhone
            </Link>
          </div>
          <div className=" flex h-64 w-52 flex-col items-center justify-center overflow-hidden border p-10">
            <Link to="#">
              <img
                src={ImgThree}
                alt="iphone"
                className="h-full w-full transition-all duration-1000 hover:scale-110 hover:transform"
              />
            </Link>
            <Link
              to="#"
              className="mt-6 font-semibold opacity-60 transition-all hover:text-primary"
            >
              iPhone
            </Link>
          </div>
          <div className=" flex h-64 w-52 flex-col items-center justify-center overflow-hidden border p-10">
            <Link to="#">
              <img
                src={ImgFour}
                alt="iphone"
                className="h-full w-full transition-all duration-1000 hover:scale-110 hover:transform"
              />
            </Link>
            <Link
              to="#"
              className="mt-6 font-semibold opacity-60 transition-all hover:text-primary"
            >
              iPhone
            </Link>
          </div>
          <div className=" flex h-64 w-52 flex-col items-center justify-center overflow-hidden border p-10">
            <Link to="#">
              <img
                src={ImgFive}
                alt="iphone"
                className="h-full w-full transition-all duration-1000 hover:scale-110 hover:transform"
              />
            </Link>
            <Link
              to="#"
              className="mt-6 font-semibold opacity-60 transition-all hover:text-primary"
            >
              iPhone
            </Link>
          </div>
          <div className=" flex h-64 w-52 flex-col items-center justify-center overflow-hidden border p-10">
            <Link to="#">
              <img
                src={ImgSix}
                alt="iphone"
                className="h-full w-full transition-all duration-1000 hover:scale-110 hover:transform"
              />
            </Link>
            <Link
              to="#"
              className="mt-6 font-semibold opacity-60 transition-all hover:text-primary"
            >
              iPhone
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
