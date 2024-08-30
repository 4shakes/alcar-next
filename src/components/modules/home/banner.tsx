"use client";
import Image from "next/image";
import React, { CSSProperties } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
export const Banner = () => {
  const data = [
    {
      title: "Impresión Offset",
      subTitle:
        "Impresión offset de alta calidad con precisión de imagen y color",
      image: "maquina.jpg",
    },
    {
      title: "Impresión Digital",
      subTitle:
        "Impresión digital de alta resolución para tus proyectos más exigentes",
      image: "digital.jpg",
    },
    {
      title: "Acabados Gráficos",
      subTitle:
        "Transforma tus diseños en obras de arte con nuestros acabados gráficos: hot stamping, troquelados, barnizados, sectorizados y más",
      image: "acabados-graficos.jpg",
    },
  ];

  return (
    <>
      <div className="mt-[70px]">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          loop
          grabCursor={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "20px",
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-pagination-active-color": "#fff",
              "--swiper-pagination-background": "#fff",
              "--swiper-pagination-active-background": "#fff",
              "--swiper-pagination-border-color": "#fff",
              "--swiper-pagination-size": "10px",
              "--swiper-pagination-spacing": "10px",
              "--swiper-pagination-bullet-size": "10px",
            } as CSSProperties
          }
          pagination={{ type: "bullets", clickable: true }}
          modules={[Autoplay, EffectFade, Pagination]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="w-full h-[450px] md:h-[500px] lg:h-[620px] ">
                <div
                  className=" bg-cover loop-swiper  bg-center  h-full"
                  style={{ backgroundImage: `url(/imgs/home/${item.image})` }}
                >
                  <div className="banner ">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="p-1 w-2/3 max-w-screen-xl">
                        <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white text-center">
                          {item.title}{" "}
                        </h1>
                        <h2 className="text-lg md:text-2xl text-center mt-4  text-white">
                          {" "}
                          {item.subTitle}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
