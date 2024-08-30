import { Breadcrumb } from "@/components/ui/breadcrumb /breadcrumb";
import Button from "@/components/ui/buttons/Button";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Impresión Offset",
    subTitle:
      "Contamos con tecnología avanzada en impresión offset, garantizando resultados nítidos y colores vibrantes para tus proyectos, con calidad superior y tiempos de entrega óptimos",
    position: "l",
    img: "maquina.jpg",
    icon: "",
    url: "impresion-offset",
  },
  {
    title: "Impresión Digital",
    subTitle:
      "Contamos con impresión digital rápida y precisa, ideal para tiradas cortas y resultados excepcionales.",
    position: "r",
    img: "impresion-digital-1.jpg",
    icon: "",
    url: "impresion-digital",
  },
  {
    title: "Venta de Foil",
    subTitle:
      "Contamos con venta de foil de alta calidad, ideal para acabados brillantes y elegantes en tus proyectos.",
    position: "l",
    img: "venta-de-foil.jpg",
    icon: "",
    url: "venta-de-foil",
  },
  {
    title: "Elaboración de Clise",
    subTitle:
      "Contamos con elaboración de clise en zinc y bronce, ofreciendo resultados de alta calidad y resistencia.",
    position: "r",
    img: "elaboracion-de-clise.jpg",
    icon: "",
    url: "elaboracion-de-clise",
  },
  {
    title: "Acabados Gráficos",
    subTitle:
      "Contamos con acabados gráficos de alta calidad, especializados en Hot Stamping, Repujado, UV Sectorizado, barnizado, troquelado y más, ofreciendo resultados elegantes y detallados en cada proyecto.",
    position: "r",
    img: "acabados-graficos.jpg",
    icon: "",
    url: "acabados-graficos",
  },
];
export default function ServicePage() {

  return (
    <section className="bg-white dark:bg-gray-900 ">
      <section
        style={{
          backgroundImage: `url("/imgs/servicios/printing.jpeg")`,
        }}
        className={` mt-16  h-[300px] m-auto bg-no-repeat   bg-center bg-cover`}
      >
        <div className={`banner h-40`}>
          <div className="w-full h-full flex flex-col justify-center items-center text-white relative z-10 ">
            <div className=" text-xl sm:text-2xl md:text-3xl 2xl:text-5xl font-bold text-white w-full lg:w-1/2 text-center px-4 font-garden_bold">
              <div className="mt-4 ">
                <h1
                  style={{
                    color: "#fff",
                  }}
                  className="my-4 typography-h1"
                >
                  Servicios
                </h1>
              </div>
              <Breadcrumb capitalizeLinks />
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-xl pb-10 mt-3">
        <h1 className="hidden text-center text-5xl text-primary-300 font-bold">
          Servicios
        </h1>
        <div className="pt-10 ">
          {services.map((item, index) => (
            <div
              key={item.img}
              className={`flex flex-auto flex-col py-7 md:py-0 md:flex-row gap-8 md:gap-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* <div className='w-full lg:w-1/2'>
              <div
                style={{
                  backgroundImage: `url('/imgs/servicios/${item.img}')`
                }}
                className={`flex-auto  bg-cover bg-no-repeat w-full h-[500px] lg:h-[512px] `}
              ></div>
            </div> */}
              <div className="relative flex h-[320px] md:h-[430px] lg:h-[512px] md:w-1/2 bg-primary-800">
                <img
                  loading="lazy"
                  width={1024}
                  height={512}
                  src={`/imgs/servicios/${item.img}`}
                  alt="imagen proyecto"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="md:w-1/2 flex-auto px-10 xl:px-28 flex flex-col justify-center items-center gap-10">
                <div className="">
                  <h2 className="text-center typography-h2">
                    {item.title}
                  </h2>
                  <hr className="text-black my-4 mx-auto w-5 h-1 bg-black" />

                  <p className="text-center mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                    {item.subTitle}
                  </p>

                  <div className="flex justify-center">
                    <Link href={`/servicios/${item.url}`}>
                      <Button
                        className="uppercase"
                      >
                        ver más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
