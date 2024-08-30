import Button from "@/components/ui/buttons/Button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

import React from "react";

export const Parallax = () => {
  const data = [
    {
      id: 1,
      name: "producto 1",
      service: "service 1",
    },
    {
      id: 1,
      name: "producto 2",
      service: "service 1",
    },
    {
      id: 2,
      name: "producto 2",
      service: "service 2",
    },
  ];




  return (
    <section className="bg-[url('/imgs/banner.jpg')]   h-96 m-auto  bg-fixed bg-center bg-cover">
      <div className="banner">
        <div className="relative flex flex-col items-center justify-center  h-full mx-auto max-w-screen-xl z-10 md:gap-4  sm:py-16 md:px-36 lg:px-44">
          <h3 className="my-4 text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-200 text-center px-4">
            Impresiones de calidad para negocios de calidad
          </h3>
          <p className=" mb-3 font-light text-gray-200 md:text-lg dark:text-gray-300 text-center px-10 md:px-24">
            Desde pequeños trabajos hasta grandes proyectos, estamos aquí para
            ayudarte a hacer que tus ideas cobren vida
          </p>
          <div className="w-full flex gap-x-8 items-center justify-center">

            <Button variant="secondary">
              <Link href='/servicios'>
                Servicios
              </Link>
              <MoveRight className="ml-2" />
            </Button>
            <Button>
              <Link href='/contacto'>
                Contáctenos
              </Link>
              <MoveRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
