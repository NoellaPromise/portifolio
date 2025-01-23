import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import BG from "@/public/Images/grid3.jpg";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "my portifolio",
  description: "My personal portfolio",
  keywords: ["portfolio", "web development", "javascript", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased relative min-h-screen font-poppins font-medium text-primary-light`}
      >
        <div className="fixed inset-0 -z-10">
          <Image
            alt="background"
            src={BG}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            className="opacity-20"
            style={{
              objectFit: "cover",
            }}
          />
           <div className="absolute inset-0 bg-gradient-to-br from-pink-100/90 via-blue-50/50 to-pink-100/90"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
