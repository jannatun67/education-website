import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards,Pagination } from "swiper/modules";
import 'swiper/css/pagination';

import banner1 from "../assets/Banner/Item_06.png"
import banner2 from "../assets/Banner/Item_04.png"

const Banner = () => {
  return (
    <div className="bg-purple-100 py-10">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:w-[1200px] mx-auto">
        <div className="md:col-span-2 col-span-1">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards,Pagination]}
            className="mySwiper"
            pagination={{
                clickable: true,
              }}
             
          >
            
            <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
