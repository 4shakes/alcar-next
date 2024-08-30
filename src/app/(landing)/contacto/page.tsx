import React from "react";


import { PhoneCall, Clock, Mail, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb /breadcrumb";

const Contacto = () => {
    return (
        <>
            {/* <Banner image="/imgs/contacto/contact.jpg" title="Contacto" /> */}
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
                                    Contacto
                                </h1>
                            </div>
                            <Breadcrumb capitalizeLinks />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-12 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0 col-span-7">
                        <h2 className="typography-h2">
                            Comunícate con nosotros para solicitar cotizaciones personalizadas
                        </h2>
                        {/* En Alcar Impresores nos dedicamos a ofrecer soluciones de impresión de alta calidad para todo tipo de proyectos y negocios.  */}
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                            Te brindaremos una cotización detallada y transparente que se
                            ajuste a tus necesidades
                        </p>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex gap-x-4 ">
                                <div className="p-4  bg-gray-100 dark:bg-gray-800 rounded h-max">
                                    <MapPin width={30} height={30} className="text-green-500" />
                                </div>
                                <div className=" ">
                                    <span className="text-lg tracking-tight font-semibold text-gray-900 dark:text-white ">
                                        Dirección
                                    </span>
                                    <p className="font-light text-gray-500 md:text-base dark:text-gray-400 pt-2 pb-2">
                                        Jr. Restauración 1231 – Breña
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-4 ">
                                <div className="p-4  bg-gray-100 dark:bg-gray-800 rounded h-max">
                                    <Clock width={30} height={30} className="text-green-500" />
                                </div>
                                <div className=" ">
                                    <span
                                        className="text-lg
                                     tracking-tight font-semibold text-gray-900 dark:text-white "
                                    >
                                        Horario
                                    </span>
                                    <p className="font-light text-gray-500 md:text-base dark:text-gray-400 pt-2 ">
                                        Lunes – Sabado: 8AM – 5PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="flex gap-x-4 ">
                                <div className="p-4  bg-gray-100 dark:bg-gray-800 rounded h-max">
                                    <PhoneCall
                                        width={30}
                                        height={30}
                                        className="text-green-500"
                                    />
                                </div>
                                <div className=" ">
                                    <span className="text-lg tracking-tight font-semibold text-gray-900 dark:text-white ">
                                        Teléfono
                                    </span>
                                    <p className="font-light text-gray-500 md:text-base dark:text-gray-400 pt-3 pb-2">
                                        9755586800
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-4 ">
                                <div className="p-4  bg-gray-100 dark:bg-gray-800 rounded h-max">
                                    <Mail width={30} height={30} className="text-green-500" />
                                </div>
                                <div className=" ">
                                    <span
                                        className="text-lg
                                     tracking-tight font-semibold text-gray-900 dark:text-white "
                                    >
                                        Email
                                    </span>
                                    <p className="font-light  text-gray-500 md:text-base dark:text-gray-400 pt-3 pb-2 break-all">
                                        ventas@alcarimpresores.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-0 p-5 sm:p-10 border border-gray-100 dark:border-gray-800 grid items-end gap-5 shadow col-span-5">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="name"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                            >
                                Nombre
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                id="email"
                                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                id="subject"
                                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="subject"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                            >
                                Asunto
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                placeholder=" "
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                            >
                                Mensaje
                            </label>
                        </div>
                        <div className="">
                            <button
                                type="button"
                                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-10 py-3  text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <iframe
                className="grayscale hover:grayscale-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7834423130785!2d-77.05825448536476!3d-12.058415891459536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8d8ae98a141%3A0xda314f946cdbea6a!2sALCAR%20IMPRESORES!5e0!3m2!1ses!2spe!4v1678290403245!5m2!1ses!2spe"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
};

export default Contacto;
