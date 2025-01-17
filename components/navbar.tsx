"use client";
import MenuIcon from "@/public/Icons/menuIcon";
import StarIcon from "@/public/Icons/starIcon";
import Link from "next/link";
import { useState } from "react";

const navbar = () => {
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
      <nav className="flex justify-between m-10 ">
        <Link
          href="/"
          className="hover:text-[#182a38] hover:scale-110 ml-2 md:ml-8 lg:ml-32 z-[100]"
        >
          <StarIcon />
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-900 focus:outline-none fixed top-12 right-10 z-[100]"
        >
          <MenuIcon />
        </button>

        <div
          className={`lg:relative w-full h-screen lg:h-auto lg:bg-transparent flex flex-col lg:flex-row items-center justify-center lg:flex lg:justify-end mr-28 lg:gap-8 
    transition-all duration-300 
    ${isMenuOpen ? "block lg:flex" : "hidden lg:flex"}`}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {navItems.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:underline hover:decoration-blue-950 hover:underline-offset-6"
                >
                  {item.label}
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
