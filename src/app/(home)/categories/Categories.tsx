"use client";
import Container from "@/components/container/Container";
import React from "react";
import Category from "./category/Category";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";

const categories = [
  {
    id: 1,
    category: "Wrist watches",
    img: "https://youngking-mikeshop.onrender.com/assets/cat-watch-20e964a5.jpg",
  },
  {
    id: 2,
    category: "Phones",
    img: "https://youngking-mikeshop.onrender.com/assets/cat-phone-59be5b83.png",
  },
  {
    id: 3,
    category: "Laptops",
    img: "https://youngking-mikeshop.onrender.com/assets/cat-laptop-b52fffe2.jpg",
  },
  {
    id: 4,
    category: "Headphones",
    img: "https://youngking-mikeshop.onrender.com/assets/cat-headphone-0f969809.jpg",
  },
];
const Categories = () => {
  return (
    <section className="py-5">
      <Container>
        <div>
          <h2 className="text-3xl mb-2 capitalize">categories</h2>
          <div className="relative">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-cat",
                prevEl: ".swiper-button-prev-cat",
              }}
              pagination={{ el: ".swiper-pagination-cat", type: "bullets" }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },

                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <Category category={cat.category} img={cat.img} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center">
              <div className="swiper-pagination-cat"></div>
            </div>
            <div className=" absolute top-0 left-0 z-20 w-full h-full flex items-center justify-between ">
              <div className="swiper-button-prev-cat cursor-pointer">
                <IoIosArrowBack size={20} />
              </div>

              <div className="swiper-button-next-cat cursor-pointer">
                <MdOutlineNavigateNext size={25} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
