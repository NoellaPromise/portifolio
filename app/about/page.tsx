import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { sections } from "@/lib/utils";
import { AboutSection } from "@/components/aboutSection";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">About Me.</h1>

        {sections.map((section, index) => (
          <AboutSection
            key={index}
            title={section.title}
            content={section.content}
            link={section.link}
          />
        ))}
      </div>
      <div className="flex gap-3 max-w-4xl mx-auto p-8">
        <Link href="/projects" className="hover:underline">
        Let&apos;s continue to Projects
        </Link>
        <Link
          href="/projects"
          className="animate-[moveArrow_1s_ease-in-out_infinite]"
        >
          <ArrowRight />
        </Link>
      </div>
      <div className="max-w-4xl mx-auto p-8">
        <Footer />
      </div>
    </div>
  );
};

export default page;
