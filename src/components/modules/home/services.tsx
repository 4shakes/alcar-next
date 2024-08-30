import Button from "@/components/ui/buttons/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Services = () => {
  return (
    <section className="bg-slate-100 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 typography-h2">
            Nuestros servicios de impresión harán que tu marca se destaque
          </h2>

          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            La impresión es nuestra pasión y estamos comprometidos a hacer que
            tu marca brille en cada proyecto que realizamos.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold ">Impresion Digital</h3>
            <div className="place-self-center">
              <Image
                src="/imgs/digital.png"
                width={250}
                height={250}
                alt="asdas"
              />
            </div>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4 flex-1">
              Es el formato ideal para impresión inmediata. Altamente rentable
              en proyectos de bajo volumen. Contamos con un proceso integral que
              nos permite encuadernar un catálogo, manual o libro con todas las
              opciones Hotmelt, Grapa, Pasta Dura, Arillo metálico.
            </p>

            <Link href='/servicios/impresion-digital'>
              <Button className="w-full">Mas Información</Button>
            </Link>
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold ">Impresion Offset</h3>
            <div className="place-self-center">
              <Image
                src="/imgs/offset.png"
                width={250}
                height={250}
                alt="asdas"
              />
            </div>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4  flex-1">
              Diseñado para proyectos de alto volumen. Catálogos, Manuales,
              Posters, Calendarios Se obtienen los resultados mas exactos de
              colores. Utilización de tintas directas pantones. Sólo se imprime
              papel y cartulinas hasta 16 untos.
            </p>
            {/*   <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">$29</span>
                            <span className="text-gray-500 dark:text-gray-400">/month</span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Team size: <span className="font-semibold">1 developer</span></span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Premium support: <span className="font-semibold">6 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Free updates: <span className="font-semibold">6 months</span></span>
                            </li>
                        </ul> */}
            <Link href='/servicios/impresion-offset'>
              <Button className="w-full">Mas Información</Button>
            </Link>
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold ">
              Impresion en Gran Formato
            </h3>
            <div className="place-self-center">
              <Image
                src="/imgs/granformato.png"
                width={250}
                height={250}
                alt="asdas"
              />
            </div>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4 flex-1">
              El formato perfecto para impresión de posters, vinil auto
              adherible,floor graphic, canvas publicidadad para exteriores,
              puertas, ventanas. Impresión e instalación de banners Rollup, X.
              Carteles o murales para exposiciones.
            </p>
            {/*   <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">$29</span>
                            <span className="text-gray-500 dark:text-gray-400">/month</span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Team size: <span className="font-semibold">1 developer</span></span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Premium support: <span className="font-semibold">6 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Free updates: <span className="font-semibold">6 months</span></span>
                            </li>
                        </ul> */}
            <Link href='/servicios/impresion-digital'>
              <Button className="w-full">Mas Información</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
