"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";

const ResumePage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-4">
        <h1 className="text-4xl  text-black font-bold mb-8">Resumé.</h1>

        <p className="mb-8">
          Reach out to me via my{" "}
          <Link href="/contact" className="text-black font-medium">
            contact page
          </Link>{" "}
          ·{" "}
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="text-black font-medium"
          >
            View
          </button>{" "}
          or{" "}
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="text-black font-medium"
          >
            download
          </button>{" "}
          the resume
        </p>

        <div className="rounded-lg shadow-sm mb-8">
          <iframe
            src="/resume.pdf"
            className="w-full h-[1450px]"
            title="Resume PDF"
          ></iframe>
        </div>
        <div className="flex gap-3 max-w-4xl mx-auto mb-12 ">
          <Link href="/contact" className="hover:underline">
            You may contact me now
          </Link>
          <Link
            href="/projects"
            className="animate-[moveArrow_1s_ease-in-out_infinite]"
          >
            <ArrowRight />
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ResumePage;
