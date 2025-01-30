import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { sections } from "@/lib/utils";
import { AboutSection } from "@/components/aboutSection";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto text-justify">
          <h1 className="text-4xl text-black font-bold mb-8 dark:text-white">
            About Me.
          </h1>
          
          {sections.map((section, index) => (
            <AboutSection
              key={index}
              title={section.title}
              content={section.content}
              link={section.link}
            />
          ))}
        </div>

        <div className="flex gap-3 max-w-4xl mx-auto mt-8">
          <Link href="/projects" className="hover:underline">
            Let&apos;s continue to projects
          </Link>
          <Link
            href="/projects"
            className="animate-[moveArrow_1s_ease-in-out_infinite]"
          >
            <ArrowRight />
          </Link>
        </div>

        <div className="max-w-4xl mx-auto mt-6">
          <Footer />
        </div>
      </main>
    </div>
  );
};
 export default page;