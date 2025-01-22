"use client";
import StarIcon from "@/public/Icons/starIcon";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <nav className="flex justify-between m-10">
        <Link
          href="/"
          className="hover:text-[#182a38] hover:scale-110 ml-2 md:ml-8 lg:ml-32 z-50"
        >
          <StarIcon />
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-900 focus:outline-none z-50"
        >
          <Menu size={32} />
        </button>

        <div
          className={`fixed lg:relative top-0 left-0 w-full h-screen lg:h-auto
          flex flex-col lg:flex-row items-center justify-center
           bg-white lg:bg-transparent lg:w-auto
          transition-transform duration-300 ease-in-out
          lg:flex lg:justify-end lg:mr-28 lg:gap-8
          ${
            isMenuOpen
              ? "transform translate-x-0"
              : "transform translate-x-full lg:transform-none"
          }
          ${isMenuOpen ? "z-40" : "-z-10 lg:z-0"}
          `}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {navItems.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-black ${
                    pathname === link.href
                      ? "text-black font-bold underline underline-offset-4"
                      : "font-medium text-primary-light"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
