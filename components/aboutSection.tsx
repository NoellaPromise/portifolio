"use client";
import { AboutSectionProps } from "@/lib/aboutSection";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const AboutSection = ({ title, content, link }: AboutSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-16">
      <div
        className="flex items-center justify-between mb-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border border-black "></div>
          <h2 className="text-xl text-black font-semibold">{title}</h2>
        </div>
        <div className="flex items-center gap-4">
          {link && (
            <Link href={link.url} className="text-black hover:underline">
              {link.text}
            </Link>
          )}
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {isOpen && <p className="leading-loose pl-4">{content}</p>}
    </div>
  );
};
