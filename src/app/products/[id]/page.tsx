import Container from "@/components/container/Container";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import TopButtons from "../components/topButtons/TopButtons";
import ProductInfo from "../components/productInfo/ProductInfo";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-secondary-200">
      <Container>
        <TopButtons />
        <div className="flex flex-col md:flex-row gap-10 pb-10">
          <div className="flex-1 flex justify-center items-center ">
            <div className=" w-[450px] h-[450px] flex justify-center items-center bg-white  relative">
              <Image
                fill
                src="https://slot.ng/media/catalog/product/cache/7cc17357a06f829e544a54ed5a492e71/i/p/iphone_13_1_1_1.jpg"
                alt=""
                className="object-cover md:object-contain"
              />
            </div>
          </div>

          <ProductInfo />
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
