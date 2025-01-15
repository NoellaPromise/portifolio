"use client";
import StarIcon from "@/public/Icons/starIcon";
import Link from "next/link";
import Icon from "@/public/Icons/icon";
import IconHub from "@/public/Icons/iconHub";
import LinkedIn from "@/public/Icons/linkedIn";
import Instagram from "@/public/Icons/instagram";
import RightArrow from "@/public/Icons/rightArrow";
import Text from "@/public/Icons/text";
import MenuIcon from "@/public/Icons/menuIcon";
import { useState } from "react";
import BG from "@/public/Images/grid3.jpg";
import Image from "next/image";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div>
        <Image
          alt="background"
          src={BG}
          placeholder="blur"
          quality={100}
          fill
          sizes="200vw"
          className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-purple-900/50 opacity-10"
          style={{
            objectFit: "cover",
            backdropFilter: "blur(60px)",
          }}
        />
      </div>
      <main className="relative font-poppins font-medium text-primary-light">
        <nav className="flex justify-between m-10 sticky z-50">
          <Link
            href="/"
            className="hover:text-[#182a38] hover:scale-110 ml-2 md:ml-8 lg:ml-32 "
          >
            <StarIcon />
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-black focus:outline-none"
          >
            <MenuIcon />
          </button>

          <div
            className={`fixed lg:relative top-0 left-0 w-full h-screen lg:h-auto 
    bg-white lg:bg-transparent
    flex flex-col lg:flex-row items-center justify-center
    lg:flex lg:justify-end mr-28 lg:gap-8 
    transition-all duration-300
    ${isMenuOpen ? "block lg:flex" : "hidden lg:flex"}`}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <Link
                href="/about"
                className="hover:underline hover:decoration-blue-950 hover:underline-offset-6"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="hover:underline hover:decoration-blue-950 hover:underline-offset-6"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="hover:underline hover:decoration-blue-950 hover:underline-offset-6"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex flex-col justify-center md:p-6 lg:p-4 ml-8 lg:ml-72 tracking-wider font-medium ">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl 2xl:text-4xl mb-2 md:mb-4 lg:mb-8 text-secondary-light animate-pulse duration-[3000ms] hover:animate-none">
            AM NOELLA CLAIRE D'ASSISE DUSHAKIMANA
          </h1>
          <div className="mb-3 p-2 md:mb-8 lg:mb-10 w-full lg:w-4/5 leading-loose ">
            <Text />
          </div>
          <div className="flex gap-3">
            <Link
              href="/about"
              className="mb-4 md:mb-12 lg:mb-12 hover:underline"
            >
              See More About Me
            </Link>
            <Link
              href="/about"
              className="animate-[moveArrow_1s_ease-in-out_infinite]"
            >
              <RightArrow />
            </Link>
          </div>

          <div className="flex gap-12 mb-8">
            <Link
              href="https://gitlab.com/dushakenoella"
              className="hover:text-[#182a38] hover:scale-110"
            >
              <Icon />
            </Link>
            <Link
              href="https://github.com/NoellaPromise"
              className="hover:text-[#182a38] hover:scale-110"
            >
              <IconHub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/noella-claire-d-assise-dushakimana/"
              className="hover:text-[#182a38] hover:scale-110"
            >
              <LinkedIn />
            </Link>
            <Link
              href="https://www.instagram.com/noella_promise/?hl=en"
              className="hover:text-[#182a38] hover:scale-110"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
