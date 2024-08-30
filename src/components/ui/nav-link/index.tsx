"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SubMenuProps {
  href: string;
  text: string;
  onClick: () => void;
}

interface Props {
  href: string;
  text: string;
  onClick: () => void;
  className?: string;
  subMenuItems?: SubMenuProps[];
}

export const NavLink = ({ href, text, onClick, className, subMenuItems }: Props) => {
  const router = usePathname();
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  // Aplica el estilo "activo" si la ruta actual coincide con el NavLink
  const isActive = router === href;

  const activeClassName = isActive
    ? "text-white bg-primary lg:bg-transparent lg:text-primary"
    : "text-gray-800  hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

  const handleMouseEnter = () => {
    if (subMenuItems) {
      setSubMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (subMenuItems) {
      setSubMenuOpen(false);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col w-full">
      <div className="relative flex items-center justify-between w-full">
        <Link
          href={href}
          className={`${activeClassName} tracking-wider font-semibold text-xs uppercase py-2 pl-3 pr-4 w-full ${className}`}
          passHref
          aria-current="page"
          onClick={onClick}
        >
          {text}
        </Link>
        {subMenuItems && (
          <>
            {isSubMenuOpen ? (
              <ChevronUp className={`absolute  w-5 h-5 top-1.5 right-1 pl-1 lg:right-0 cursor-pointer
              ${isActive ? 'text-white lg:text-primary' : 'text-gray-800'}
              }
              `}
                onClick={() => setSubMenuOpen(!isSubMenuOpen)}
              />
            ) : (
              <ChevronDown
                className={`absolute  w-5 h-5 top-1.5 right-1 pl-1 lg:right-0 cursor-pointer
              ${isActive ? 'text-white lg:text-primary' : 'text-gray-800'}
              }
              `}
                onClick={() => setSubMenuOpen(!isSubMenuOpen)}
              />
            )}
          </>

        )}
      </div>

      {subMenuItems && isSubMenuOpen && (
        <div className="flex flex-col lg:hidden">
          {subMenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-6 py-1.5 text-gray-800 hover:bg-gray-100 tracking-wider font-medium text-xs uppercase"
              onClick={item.onClick}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}

      {subMenuItems && isSubMenuOpen && (
        <div className="hidden lg:block absolute top-6 left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
          {subMenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:rounded-md"
              onClick={item.onClick}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};