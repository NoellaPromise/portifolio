import Link from "next/link";
import RightArrow from "@/public/Icons/rightArrow";
import Text from "@/public/Icons/text";
import BG from "@/public/Images/grid3.jpg";
import Image from "next/image";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
export default function Home() {
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
          className="opacity-20"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-pink-100/90"></div>
      </div>
      <main className="relative font-poppins font-medium text-primary-light">
        <NavBar />
        <div className="flex flex-col justify-center md:p-8 lg:p-4 ml-8 lg:ml-72 tracking-wider font-medium ">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl p-4 mb-2 md:mb-4 lg:mb-8 text-secondary-light animate-pulse duration-[3000ms] hover:animate-none">
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
          <Footer />
        </div>
      </main>
    </div>
  );
}
