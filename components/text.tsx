import Link from "next/link";
import React from "react";

const text = () => {
  return (
    <div>
      I&apos;m a software engineer specializing in web and mobile development,
      creating impactful{" "}
      <Link
        href="/projects"
        className="font-bold text-black hover:underline underline-offset-2"
      >
        DIGITAL SOLUTIONS
      </Link>{" "}
      that solve real-world problems. I combine technical expertise with strong
      collaborative skills to build innovative applications. Driven by
      curiosity, I constantly explore emerging technologies to deliver better
      user experiences. <br /> <br />
      Beyond coding, I&apos;m a passionate videographer creating compelling {" "}
      <Link
        href="https://www.instagram.com/noella_promise/?hl=en"
        className="font-bold text-black hover:underline underline-offset-2"
      >
        VISUAL STORIES
      </Link>{" "}
      . When I&apos;m not building applications or filming, you&apos;ll find me
      unwinding to gospel music, finding inspiration in its peaceful melodies.
    </div>
  );
};

export default text;
