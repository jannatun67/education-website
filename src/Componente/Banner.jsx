import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards,Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import { FaArrowRightLong } from "react-icons/fa6";
import paginationActiveIcon from "../assets/icons/Active.svg"

import banner1 from "../assets/Banner/Item_06.png"
import banner2 from "../assets/Banner/Item_04.png"
import banner3 from "../assets/Banner/Item_01.png"

const Banner = () => {
  return (
    <div className="bg-purple-100 py-16 px-3 ">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:w-[1200px] mx-auto">
        <div className="md:col-span-2 col-span-1  md:w-[599px] md:mt-[160px]">
            <p className="text-[#5F2DED] py-1  bg-[#DED4F7] rounded-[20px]  w-[257px] text-center md:mb-7 mb-4" >The Leader in Online Learning</p>
          <h1 className="md:text-6xl text-2xl font-bold">Grow Your Learning Skills With Us</h1>
          <p className="md:pt-10 pt-5 text-[#4D4E50] text-[18px]">
          Unlock your full potential and achieve your personal and professional goals through our diverse range of courses and expert-led programs. 
          </p>
          <button className="btn btn-primary mt-8 md:mt-12">View Course <FaArrowRightLong /></button>
        </div>
       

        <div className="md:my-[100px] my-[50px]" >
          <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards, Pagination]}
      className="mySwiper"
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `
            <span class="${className} custom-bullet">
              <span class="default-dot"></span>
              <img class="active-icon" src="${paginationActiveIcon}" alt="active icon" />
            </span>
          `;
        },
      }}
    >

            <SwiperSlide><img className="md:w-[384px] w-[300px]  object-cover" src={banner1} alt="" /></SwiperSlide>
            <SwiperSlide><img className="md:w-[384px] w-[300px]  object-cover"  src={banner2} alt="" /></SwiperSlide>
            <SwiperSlide><img className="md:w-[384px] w-[300px]  object-cover"  src={banner3} alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
