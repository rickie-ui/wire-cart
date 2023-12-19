export interface Currency {
  code: string;
  name: string;
}

export interface Iimages {
  id: number;
  src: string;
  title: string;
}

export type Product = {
  id: number;
  title: string;
  amount: string;
  rating: number;
  images: {
    src1: string;
    src2: string;
  };
};
