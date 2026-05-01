import "./heroslider.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Banner_Hero1 from "../../img/banner_Hero1.jpg";
import Banner_Hero2 from "../../img/banner_Hero2.jpg";
import Banner_Hero3 from "../../img/banner_Hero3.jpg";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroSlider: React.FC = (): React.ReactNode => {
  return (
    <section className="mt-12">
      <div className="container mx-auto aaa">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 3000, // Time between slides in ms
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="content text-left">
              <h4 className="italic text-sm uppercase mb-1.5">
                Introducing the new
              </h4>
              <h3 className="text-3xl font-bold mb-4.5 text-(--main-color)!">
                Microsoft Xbox <br /> 360 Controller
              </h3>
              <p className="mb-5">Windows xp/10/7/8 Ps3, Tv Box</p>
              <Link
                to="/"
                className="inline-block bg-(--main-color) text-white! py-2 px-4 rounded-full hover:scale-110 transition-transform"
              >
                Shop now
              </Link>
            </div>

            <img src={Banner_Hero1} alt="Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="content text-left">
              <h4 className="italic text-sm uppercase mb-1.5">
                Introducing the new
              </h4>
              <h3 className="text-3xl font-bold mb-4.5 text-(--main-color)!">
                Microsoft Xbox <br /> 360 Controller
              </h3>
              <p className="mb-5">Windows xp/10/7/8 Ps3, Tv Box</p>
              <Link
                to="/"
                className="inline-block bg-(--main-color) text-white! py-2 px-4 rounded-full hover:scale-110 transition-transform"
              >
                Shop now
              </Link>
            </div>

            <img src={Banner_Hero2} alt="Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="content text-left">
              <h4 className="italic text-sm uppercase mb-1.5">
                Introducing the new
              </h4>
              <h3 className="text-3xl font-bold mb-4.5 text-(--main-color)!">
                Microsoft Xbox <br /> 360 Controller
              </h3>
              <p className="mb-5">Windows xp/10/7/8 Ps3, Tv Box</p>
              <Link
                to="/"
                className="inline-block bg-(--main-color) text-white! py-2 px-4 rounded-full hover:scale-110 transition-transform"
              >
                Shop now
              </Link>
            </div>

            <img src={Banner_Hero3} alt="Logo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
