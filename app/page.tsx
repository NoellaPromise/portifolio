import StarIcon from "@/public/Icons/starIcon";
import Link from "next/link";
import Icon from "@/public/Icons/icon";
import IconHub from "@/public/Icons/iconHub";
import LinkedIn from "@/public/Icons/linkedIn";
import Instagram from "@/public/Icons/instagram";
import RightArrow from "@/public/Icons/rightArrow";
import Text from "@/public/Icons/text";
// import BG from "@/public/Images/grid3.jpg";
// import Image from "next/image";
export default function Home() {
  return (
    <div className="container px-4">
      <div>
        {/* <Image
          alt="background"
          src={BG}
          placeholder="blur"
          quality={100}
          fill
          sizes="200vw"
          style={
            {
              objectFit: "cover",
              opacity: "1"
            }
          }
        /> */}
      </div>
      <main className=" relative font-poppins font-medium text-primary-light">
        <nav className="flex justify-between m-10">
          <Link
            href="/"
            className="ml-32 hover:text-[#182a38] hover:scale-110"
          >
            <StarIcon />
          </Link>
          <div className="flex  gap-8 mr-32 hover:underline-offset-4">
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
            {/* <button>Toggler</button> */}
          </div>
        </nav>
        <div className="flex flex-col justify-center  p-8  ml-64 tracking-wider font-medium">
          <h1 className="font-semibold text-4xl mb-8 text-secondary-light animate-pulse duration-[3000ms] hover:animate-none">
            AM NOELLA CLAIRE D'ASSISE DUSHAKIMANA
          </h1>
          <div className="mb-10 w-4/5 leading-loose">
            <Text />
          </div>
          <div className="flex gap-3">
            <Link href="/about" className="mb-12 hover:underline">
              See More About Me
            </Link>
            <Link
              href="/about"
              className="animate-[moveArrow_1s_ease-in-out_infinite]"
            >
              <RightArrow />
            </Link>
          </div>

          <div className="flex gap-12">
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
