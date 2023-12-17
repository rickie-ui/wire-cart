import { Currency } from "@/types/global";
import { Iimages } from "@/types/global";
import ImgOne from "@/assets/iPhone.avif";
import ImgTwo from "@/assets/speaker.avif";
import ImgThree from "@/assets/tablet.avif";
import ImgFour from "@/assets/headphone.avif";
import ImgFive from "@/assets/laptop.avif";
import ImgSix from "@/assets/accessories.avif";

export const currencies: Currency[] = [
  { code: "USD", name: "USD - US Dollar" },
  { code: "EUR", name: "EUR - Euro" },
  { code: "GBP", name: "GBP - British Pound" },
  { code: "JPY", name: "JPY - Japan Yen" },
  { code: "CAD", name: "CAD - Canadian Dollar" },
  { code: "KES", name: "KES - Kenyan Shilling" },
];

export const images: Iimages[] = [
  {
    id: 1,
    src: ImgOne,
    title: "iPhone",
  },
  {
    id: 2,
    src: ImgTwo,
    title: "Mini speaekers",
  },
  {
    id: 3,
    src: ImgThree,
    title: "Tablets",
  },
  {
    id: 4,
    src: ImgFour,
    title: "Headphones",
  },
  {
    id: 5,
    src: ImgFive,
    title: "Laptops",
  },
  {
    id: 6,
    src: ImgSix,
    title: "Accessories",
  },
];
