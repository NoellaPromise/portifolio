import { StaticImageData } from "next/image";

export interface ProjectsProps {
  image: string | StaticImageData;
  link: string;
  title: string;
  description: string;
  technologies: string[];
}
    