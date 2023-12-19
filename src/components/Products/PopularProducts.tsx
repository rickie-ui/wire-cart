import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types/global";
import Button from "@/components/Button/Button";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";

type TabData = {
  tab: string;
  popular: Product[];
};

type PopularProductsProps = {
  tabs: TabData[];
};

const PopularProducts: React.FC<PopularProductsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<TabData>(tabs[0]);

  const handleTabChange = (tab: string) => {
    const selectedTab = tabs.find((t) => t.tab === tab) || tabs[0];
    setActiveTab(selectedTab);
  };

  const [hovered, setHovered] = useState<Array<boolean>>([]);

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

  return (
    <>
      <div className="my-6 flex items-center justify-between border-2 border-purple-500 ">
        <h2 className="text-3xl font-semibold opacity-70">Popular Products</h2>

        <div>
          {tabs.map(({ tab }) => (
            <button
              key={tab}
              className={`mr-4 text-sm font-semibold focus:outline-none ${
                activeTab.tab === tab ? "text-primary" : ""
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="relative grid h-auto grid-cols-4 items-center justify-center gap-2 border-2 border-teal-500 px-2  py-4">
        {activeTab.popular.map((product, index) => (
          <div
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
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularProducts;
