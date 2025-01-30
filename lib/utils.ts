import Monishare from "@/public/Images/monishare.png";
import Iskip from "@/public/Images/iskipproject.png";
import Meit from "@/public/Images/meit.png";
export const sections = [
  {
    title: "Engineering",
    content:
      "I'm passionate about creating digital experiences that make a lasting first impression. As a software engineer specializing in mobile development and web design, I transform complex challenges into elegant solutions. My work combines modern development practices with strong technical standards, ensuring every project is both beautiful and functional. When I'm not coding innovative applications, I'm exploring new technologies to enhance user experiences and solve real-world problems.   ",
    link: {
      text: "View Github",
      url: "https://github.com/NoellaPromise",
    },
  },
  
{
    title: "Videography",
    content:
      "My creative journey extends beyond code into the world of visual storytelling. As a videographer, I specialize in both indoor and outdoor productions, bringing stories to life through the lens. Each project is an opportunity to create compelling narratives, whether it's a intimate indoor shoot or a dynamic outdoor scene.",
    link: {
      text: "View Products",
      url: "https://www.instagram.com/noella_promise/",
    },
  },
];

export const projectsData = [
  {
    image: Monishare,
    link: "http://staging.violet.monishare.ojemba.s3-website.eu-central-1.amazonaws.com/",
    title: "Monishare",
    description:
      "Monishare is a mobile application that helps you get the nearest car so that you may rent it.",
    technologies: ["React", "Typescript", "TailwindCSS"],
  },
  {
    image: Iskip,
    link: "https://stage.i-skip.com/",
    title: "I-skip",
    description: "I-skip is a platform that makes your online shopping easier",
    technologies: ["NextJs", "Typescript", "TailwindCSS", "Strapi"],
  },
  {
    image: Meit,
    link: "https://frontend-legacy.meit.de/Home",
    title: "Meit",
    description:
      "Meit is an application that helps hospitals manage their medical equipments",
    technologies: ["React Native", "Typescript", "PHP"],
  },
];
