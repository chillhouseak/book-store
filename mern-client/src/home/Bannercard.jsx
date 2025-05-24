import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // ✅ MUST import both
import { EffectCards } from "swiper/modules"; // ✅ Only EffectCards used

import "swiper/css";
import "swiper/css/effect-cards";
import './Bannercard.css'; // Optional: if you have extra styles

const Bannercard = () => {
  return (
    <div className="banner">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]} // ✅ square brackets
        className="mySwiper"    // ✅ className, not classname
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Bannercard;
