import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import { IItem } from "@/types";

interface ProductProps {
  item: IItem;
  showButton?: boolean;
  objectCover?: boolean;
}
const Product = ({ item, showButton, objectCover }: ProductProps) => {
  return (
    <div className=" flex-1  shadow-lg bg-secondary-200">
      <div className=" w-full h-52 relative">
        <Image
          fill
          src={item.img}
          alt="Product image"
          className={objectCover ? "object-contain" : "object-contain"}
        />
      </div>
      <div className="w-full py-5">
        <div className="flex justify-between gap-2">
          <span className="font-bold line-clamp-1 px-3">{item.title}</span>
          <span className="font-bold text-accent-500 px-3">{item.price}</span>
        </div>
        <span className="opacity-90 line-clamp-1 px-3">{item.desc}</span>
        <div className="flex justify-between gap-2 mt-2 px-3">
          <Button type="primary" size="small">
            More Details
          </Button>
          {showButton && (
            <Button type="neutral" size="small">
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
