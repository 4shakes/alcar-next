"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { NavLink } from "../nav-link";

import { SidebarCart } from "./sidebar-cart";
import Drawer from "../drawer/drawer";
import { ModeToggle } from "../mode-toggle";

import { useToggle } from "@/hooks/useToggle";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const { isOpen, onClose, onOpen } = useToggle();

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">();

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
        setToggle(false);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);
  return (
    <>
      <header>
        <nav
          className={`${scrollDirection === "down" ? "-top-20" : "top-0"
            } shadow-lg  transition-all duration-500 bg-white px-2 sm:px-4 py-[10px] lg:py-[7px] dark:bg-gray-900 fixed  w-full z-20 left-0 border-b border-gray-200 dark:border-gray-600`}
        >
          <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl px-2 md:px-5">
            <Link href={"/"} className="flex items-center ">
              <Image
                src="/imgs/alcar-logo.png"
                alt="dashboard image"
                width={150}
                height={49}
              />
            </Link>
            <div className="flex gap-x-1 items-center lg:order-2">
              {/* <button
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                onClick={onOpen}
              >
                <span className="sr-only">Open main menu</span>
                <ShoppingCart size={20} />
              </button> */}

              <ModeToggle />
              <button
                onClick={() => setToggle((e) => !e)}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className={` ${toggle ? "block" : "hidden"
                } items-center justify-between  w-full lg:flex lg:w-auto lg:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 border border-transparent rounded-lg bg-transparent lg:flex-row lg:gap-x-4 lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-transparent dark:bg-transparent lg:dark:bg-transparent dark:border-transparent list-none">
                <li>
                  <NavLink
                    href={"/"}
                    text="Inicio"
                    onClick={() => setToggle(false)}
                  />
                </li>
                <li>
                  <NavLink
                    href={"/nosotros"}
                    text="Nosotros"
                    onClick={() => setToggle(false)}
                  />
                </li>
                <li>

                  <NavLink
                    href={"/servicios"}
                    text="Servicios"
                    onClick={() => setToggle(false)}

                    subMenuItems={[
                      { href: '/servicios/impresion-offset', text: 'Impresión Offset', onClick: () => setToggle(false) },
                      { href: '/servicios/impresion-digital', text: 'Impresión Digital', onClick: () => setToggle(false) },
                      { href: '/servicios/venta-de-foil', text: 'Venta de Foil', onClick: () => setToggle(false) },
                      { href: '/servicios/elaboracion-de-clise', text: 'Elaboración de Clise', onClick: () => setToggle(false) },
                      { href: '/servicios/venta-de-foil', text: 'Acabados Gráficos', onClick: () => setToggle(false) },
                    ]}
                  />



                </li>
                {/* <li>


                  <NavLink
                    href={"/productos"}
                    text="Productos"
                    onClick={() => setToggle(false)}
                  />


                </li> */}
                <li>
                  <NavLink
                    href={"/contacto"}
                    text="Contacto"
                    onClick={() => setToggle(false)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header >
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        backgroundColor="rgba(0,0,0,0.5)" // Cambia el color del fondo oscuro aquí
        width={400}
      >
        <SidebarCart onClose={onClose} />
      </Drawer>
    </>
  );
};
export default NavBar;
