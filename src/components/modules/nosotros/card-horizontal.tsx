import Image from "next/image";
import React from "react";

export const CardHorizontal = () => {
    const data = [
        {
            title: "Tenemos una visión",
            subTitle:
                "En nuestra imprenta, estamos comprometidos con la calidad y la excelencia en cada uno de nuestros servicios. Trabajamos para satisfacer las necesidades de nuestros clientes, ofreciendo soluciones innovadoras y personalizadas que superen sus expectativas. Nuestro objetivo es ser líderes en el mercado de la impresión, manteniendo siempre nuestros valores de integridad, eficiencia y compromiso social.",
            image: "/imgs/nosotros/nosotros-mision.jpg",
        },
        {
            title: "Tenemos una misión",
            subTitle:
                "Nuestra visión es convertirnos en la imprenta de referencia en el mercado, reconocidos por nuestra calidad, innovación y atención al cliente. Nos esforzamos por ser un referente en la industria de la impresión, siempre comprometidos con el desarrollo sostenible y la responsabilidad social. Queremos ser la primera opción de nuestros clientes para satisfacer todas sus necesidades de impresión y acabados, ofreciendo un servicio excepcional y soluciones personalizadas que les ayuden a destacar en su mercado.",
            image: "/imgs/nosotros/nosotros-vision.jpg",
        },
    ];

    return (
        <>
            <div className="">
                {data.map((item, index) => (
                    <section
                        key={item.title}
                        className={`${index % 2 === 0
                            ? "bg-white dark:bg-gray-900"
                            : "bg-gray-100 dark:bg-gray-800"
                            } `}
                    >
                        <div
                            className={`gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 sm:flex ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}    sm:py-16 lg:px-6`}
                        >
                            <div className={`w-full sm:w-1/2  mt-4 md:mt-0`}>
                                <h2 className="typography-h2">
                                    {item.title}
                                </h2>
                                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                                    {item.subTitle}
                                </p>
                            </div>
                            <div className={` relative w-full sm:w-1/2 h-64 sm:h-96`}>
                                <Image
                                    src={item.image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="dasd"
                                />
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
};
