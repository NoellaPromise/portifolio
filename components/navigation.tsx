// components/Navigation.js
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import StarIcon from "@/public/Icons/starIcon";
import MenuIcon from "@/public/Icons/menuIcon";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 z-50 bg-white/80 backdrop-blur-sm">
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        <Link
          href="/"
          className="hover:text-[#182a38] hover:scale-110 ml-2 md:ml-8 lg:ml-32"
        >
          <StarIcon />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-900 focus:outline-none p-2 rounded-md z-[100]"
        >
          <MenuIcon />
        </button>

        <div
          className={`fixed lg:relative top-0 left-0 w-full bg-white/90 h-screen lg:h-auto lg:bg-transparent 
          flex flex-col lg:flex-row items-center justify-center lg:flex lg:justify-end mr-28 lg:gap-8 
          transition-all duration-300 z-20
          ${isMenuOpen ? "block lg:flex" : "hidden lg:flex"}`}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {navItems.map(
              (item) =>
                pathname !== item.href && ( // Only show if not current page
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:underline hover:decoration-blue-950 hover:underline-offset-6"
                  >
                    {item.label}
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
