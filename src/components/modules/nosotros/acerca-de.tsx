import { Section } from "@/components/ui/section/Section";
import React from "react";

export const AcercaDe = () => {
  return (
    <Section>
      <div className="gap-8 items-center py-8 px-4  xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="typography-h2">
            Diseño, impresión y acabados de alta calidad: Todo en uno con Alcar
            Impresores.
          </h2>
        </div>
        <div className="">
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            {" "}
            En Alcar Impresores nos dedicamos a ofrecer soluciones de impresión
            de alta calidad para todo tipo de proyectos y negocios.Con más de 10
            años de experiencia en el sector gráfico, contamos con un equipo de
            profesionales altamente capacitados en el sistema de impresión
            digital y offset.
          </p>

          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            {" "}
            Nos enorgullece ofrecer una atención personalizada desde el diseño
            hasta los acabados, para garantizar que cada proyecto cumpla con los
            más altos estándares de calidad.
          </p>
        </div>
      </div>

      <div className="pb-8 px-4  sm:pb-20 lg:px-6">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/QYvSQxqDxxc?controls=0&showinfo=0&modestbranding=1&rel=0&autoplay=1&mute=1&enablejsapi=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </Section>
  );
};
