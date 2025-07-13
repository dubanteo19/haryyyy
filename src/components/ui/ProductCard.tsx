import type { Product } from "@/type/product";
import type { FC } from "react";
import { ImageContainer } from "../common/ImageContainer";

export const ProductCard: FC<Product> = ({ link, image, title }) => {
  return (
    <a href={link} target="_blank" className="rounded-3xl overflow-hidden">
      <div
        className="relative border  bg-primary  grid grid-cols-5 
    hover:scale-105 transition-all "
      >
        <ImageContainer
          className="absolute right-0 top-0 size-10"
          src="/favicon.png"
        />
        <ImageContainer className="col-span-3  " src={image} />
        <div className="flex justify-center items-center  text-center px-2 col-span-2">
          {title}
        </div>
      </div>
    </a>
  );
};
