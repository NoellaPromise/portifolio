import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "@/lib/types";

export const ProjectCard = ({
  image,
  link,
  title,
  description,
  technologies,
}: ProjectsProps) => {
  return (
    <Link href={link} className="relative group">
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-cover"
        />

        <div className="absolute inset-0 p-8 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
          <h3 className="font-bold">{title}</h3>
          <p className="mt-4 text-sm">{description}</p>
          <p className="mt-4  flex gap-4 p-2 text-sm">{technologies.join(", ")}</p>
        </div>
      </div>
    </Link>
  );
};
