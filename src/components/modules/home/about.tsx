import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <div className="hidden md:block">
            <Image
              src="/imgs/alcar-logo.png"
              alt="dashboard image"
              width={150}
              height={80}
            /*  quality={50}
                       layout="responsive"
                       placeholder='blur' */
            />
          </div>

          <h2 className="typography-h2">
            Diseño, impresión y acabados de alta calidad: Todo en uno con Alcar
            Impresores.
          </h2>

          <p className="text-center text-sm sm:text-base md:text-left mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            &ldquo;Con más de 10 años de experiencia en el sector gráfico en Lima, Perú, contamos con un equipo de profesionales altamente capacitados en los sistemas de Impresión Digital y Offset de Alta Calidad. Nos enorgullece ofrecer una atención personalizada desde el diseño hasta los acabados, incluyendo Hot Stamping y Acabados Especiales, para garantizar que cada proyecto cumpla con los más altos estándares de calidad. Trabajamos de cerca con nuestros clientes para comprender sus necesidades y objetivos, ofreciendo soluciones de impresión a medida. Ya sea que necesites tarjetas de presentación, folletos, carteles publicitarios, libros, revistas u otros materiales impresos, podemos ayudarte a dar vida a tus proyectos y hacer que tu marca se destaque&rdquo;
          </p>
        </div>
        <div className="max-w-full">
          <Image
            src="/imgs/maquinista.jpg"
            alt="dashboard image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};
