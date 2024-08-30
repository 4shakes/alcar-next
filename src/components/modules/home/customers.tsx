"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export const Customers = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 sm:py-16 lg:px-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-40 flex justify-center">
              <Image
                src="/imgs/logos/efameinsa.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-40 flex justify-center ">
              <Image
                src="/imgs/logos/logo-enotria.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-40 flex justify-center">
              <Image
                src="/imgs/logos/ocucaje.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-40 flex justify-center">
              <Image
                src="/imgs/logos/efameinsa.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-40 flex justify-center ">
              <Image
                src="/imgs/logos/logo-enotria.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-40 flex justify-center ">
              <Image
                src="/imgs/logos/ocucaje.png"
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
