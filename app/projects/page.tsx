import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ProjectCard } from "@/components/projectsCard";
import { projectsData } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 mb-6">
        <h1 className="m-6 text-4xl font-semibold text-black ">Projects.</h1>
        <div>
          <ul>
            <li className="flex gap-12 items-center justify-center mb-8">
              <Link
                href="/projects"
                className="hover:scale-110 hover:underline underline-offset-4  hover:font-bold"
              >
                Projects
              </Link>
              <Link
                href="/projects"
                className="hover:scale-110 hover:underline underline-offset-4 hover:font-bold"
              >
                Videos
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              link={project.link}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
           
            />
          ))}
        </div>
      </div>
      <div className="flex gap-3 max-w-4xl mx-auto p-8 ">
        <Link href="/projects" className="hover:underline">
          Let's Go To My Resume
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
