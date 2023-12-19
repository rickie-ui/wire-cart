import Hero from "@/assets/hero.png";
import HeroTwo from "@/assets/hero2.png";
import BannerOne from "@/assets/sub-banner.webp";
import BannerTwo from "@/assets/sub-banner-2.webp";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "@/constants/constants";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import Button from "@/components/Button/Button";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import ImgOne from "@/assets/iPhone.avif";
import ImgTwo from "@/assets/iPhoneTwo.png";
import ImgThree from "@/assets/iPhoneThree.png";
import ImgFour from "@/assets/iPhoneFour.png";
import ImgSix from "@/assets/headphone.avif";
import ImgSeven from "@/assets/speaker.avif";
import BannerCount from "@/assets/banner-count.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { Product } from "@/types/global";
import CountDownTimer from "@/components/CountDown/CountDownTimer";
import PopularProducts from "@/components/Products/PopularProducts";

const Home = () => {
  const [hovered, setHovered] = useState<Array<boolean>>([]);
  const [hoverActive, setHoverActive] = useState(false);
  const targetDate = new Date("2023-12-31T23:59:59");

  const products: Product[] = [
    {
      id: 1,
      title: "iPhone pro gold",
      amount: "$500.00",
      rating: 4,
      images: {
        src1: ImgOne,
        src2: ImgTwo,
      },
    },
    {
      id: 2,
      title: "iPhone pro black",
      amount: "$380.00",
      rating: 5,
      images: {
        src1: ImgThree,
        src2: ImgFour,
      },
    },
    {
      id: 3,
      title: "Homepod mini 2022",
      amount: "$240.00",
      rating: 3,
      images: {
        src1: ImgSeven,
        src2: ImgSix,
      },
    },
  ];

  const handleMouseEnter = (index: number) => {
    const updatedHovered = [...hovered];
    updatedHovered[index] = true;
    setHovered(updatedHovered);
  };

  const handleMouseLeave = (index: number) => {
    const updatedHovered = [...hovered];
    updatedHovered[index] = false;
    setHovered(updatedHovered);
  };

  // Sample product data
  const popular = [
    {
      id: 1,
      title: "Product 1",
      amount: "$100.00",
      rating: 4,
      images: {
        src1: ImgSeven,
        src2: ImgSix,
      },
      category: "accessories",
    },
    {
      id: 2,
      title: "Product 2",
      amount: "$150.00",
      rating: 5,
      images: {
        src1: ImgSeven,
        src2: ImgSix,
      },
      category: "phones",
    },
    {
      id: 3,
      title: "Product 3",
      amount: "$200.00",
      rating: 3,
      images: {
        src1: ImgSeven,
        src2: ImgSix,
      },
      category: "laptops",
    },
    {
      id: 4,
      title: "Product 2",
      amount: "$200.00",
      rating: 3,
      images: {
        src1: ImgSeven,
        src2: ImgSix,
      },
      category: "accessories",
    },
    {
      id: 5,
      title: "Product 2",
      amount: "$200.00",
      rating: 3,
      images: {
        src1: ImgSeven,
        src2: ImgSix,
      },
      category: "accessories",
    },
    {
      id: 6,
      title: "Product 2",
      amount: "$200.00",
      rating: 3,
      images: {
        src1: ImgSeven,
        src2: ImgSix,
      },
      category: "accessories",
    },
    {
      id: 7,
      title: "Product 2",
      amount: "$200.00",
      rating: 3,
      images: {
        src1: ImgSeven,
        src2: ImgSix,
      },
      category: "laptops",
    },
  ];

  // Define tabs data
  const tabs = [
    {
      tab: "accessories",
      popular: popular.filter((product) => product.category === "accessories"),
    },
    {
      tab: "phones",
      popular: popular.filter((product) => product.category === "phones"),
    },
    {
      tab: "laptops",
      popular: popular.filter((product) => product.category === "laptops"),
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

      <section className=" my-10 grid h-[400px] grid-cols-2 gap-5 border-2  border-purple-500 px-32">
        <div className="relative flex h-full  flex-col items-center border-none bg-fourth pb-2 pt-8">
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

        <div className="relative flex h-full  flex-col items-center border-none bg-fourth pb-2 pt-8">
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

      {/* products section */}

      <section className="px-32 pb-10">
        <div className="my-6 flex justify-between ">
          <h2 className="text-3xl font-semibold opacity-70">Latest Products</h2>

          <div className="flex items-center justify-center gap-4 font-semibold hover:text-primary">
            <Link to="#">View all products</Link>
            <IoMdArrowForward className="text-primary" />
          </div>
        </div>

        <div
          className="relative border-2 border-teal-500 "
          onMouseEnter={() => setHoverActive(true)}
          onMouseLeave={() => setHoverActive(false)}
        >
          <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={20}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="h-96 px-4 pt-8"
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={product.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="flex h-80 w-56 flex-col items-center justify-center rounded-md border-2 border-purple-500 p-2  shadow-lg shadow-fourth"
              >
                <div className="h-32 w-36 overflow-hidden p-1.5">
                  {hovered[index] ? (
                    <img
                      src={product.images.src2}
                      alt={`Product ${product.id}`}
                      className={`h-full w-full  cursor-pointer object-contain transition duration-1000 ${
                        hovered[index] ? " scale-110 transform" : ""
                      }`}
                    />
                  ) : (
                    <img
                      src={product.images.src1}
                      alt={`Product ${product.id}`}
                      className="h-full w-full cursor-pointer object-contain transition duration-1000 hover:scale-110 hover:transform"
                    />
                  )}
                </div>

                {/* shop icons */}
                <div
                  className={` -mt-2 flex min-w-full items-center justify-center gap-4 ${
                    hovered[index] ? "opacity-80" : "opacity-0"
                  } transition duration-300 ease-in-out`}
                >
                  <Button icon={<HiOutlineShoppingBag />}>Add To Cart</Button>
                  <Button icon={<FaRegHeart />}>Add To Wishlist</Button>
                  <Button icon={<GiNetworkBars />}>Compare</Button>
                </div>

                <div className="my-1.5 flex gap-2 text-xl text-third">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <Link to="" className="my-1 hover:text-primary">
                  {product.title}
                </Link>
                <h3 className="text-lg font-semibold text-primary">
                  {product.amount}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`custom-prev absolute -left-5 top-40 z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-secondary opacity-0 shadow-xl shadow-fourth transition duration-500 hover:text-primary ${
              hoverActive ? "opacity-100" : ""
            }`}
          >
            <MdOutlineKeyboardArrowLeft className="text-3xl opacity-60" />
          </div>

          <div
            className={`custom-next absolute -right-5 top-40 z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-secondary opacity-0 shadow-xl shadow-fourth transition duration-500 hover:text-primary ${
              hoverActive ? "opacity-100" : ""
            }`}
          >
            <MdOutlineKeyboardArrowRight className="text-3xl opacity-60" />
          </div>
        </div>
      </section>

      {/* countdown banner */}
      <section className="bg-fifth mb-10 grid h-[400px] w-full grid-cols-2  justify-center  gap-4 border-2 border-green-500 px-32">
        <div className=" border-2 border-pink-500 pt-6 text-center">
          <p className="my-4 inline-block bg-primary px-8 py-2 font-semibold text-white">
            Hurry Up!
          </p>
          <h3 className="font-montserrat text-4xl  leading-snug opacity-70">
            Up To 25% Discount <br /> Check it Out
          </h3>

          <CountDownTimer targetDate={targetDate} />

          <Link
            to="#"
            className="text-lg font-semibold opacity-70 hover:text-primary"
          >
            Shop now
          </Link>
        </div>

        <div className="bg-fifth h-[400px]  border-2 border-purple-500 ">
          <img
            src={BannerCount}
            alt="countdown-banner"
            className="h-full w-full"
          />
        </div>
      </section>

      {/* Popular products */}
      <section className="my-8 px-32">
        <PopularProducts tabs={tabs} />
      </section>
    </>
  );
};

export default Home;
