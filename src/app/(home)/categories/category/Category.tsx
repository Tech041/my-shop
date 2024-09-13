import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
interface CategoryProp {
  category: string;
  img: string;
}
const Category = ({ category, img }: CategoryProp) => {
  return (
    <div className=" flex-1 p-5 shadow-lg bg-white">
      <h3 className="mb-2 text-xl opacity-90">{category}</h3>
      <div className="w-full h-60 relative">
        <Image fill src={img} alt="" className="object-cover" />
      </div>
      <Link href="/">
        <button className="flex items-center font-bold mt-2 text-accent-500 underline">
          {" "}
          Shop now
          <MdKeyboardDoubleArrowRight size={25} />
        </button>
      </Link>
    </div>
  );
};

export default Category;
