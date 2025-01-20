import Link from "next/link";
import { Gitlab, Github , Linkedin,Instagram} from "lucide-react";

const footer = () => {
  return (
    <div className="flex gap-12 mb-8">
      <Link
        href="https://gitlab.com/dushakenoella"
        className="hover:text-[#182a38] hover:scale-110"
      >
        <Gitlab />
      </Link>
      <Link
        href="https://github.com/NoellaPromise"
        className="hover:text-[#182a38] hover:scale-110"
      >
        <Github />
      </Link>
      <Link
        href="https://www.linkedin.com/in/noella-claire-d-assise-dushakimana/"
        className="hover:text-[#182a38] hover:scale-110"
      >
        <Linkedin />
      </Link>
      <Link
        href="https://www.instagram.com/noella_promise/?hl=en"
        className="hover:text-[#182a38] hover:scale-110"
      >
        <Instagram />
      </Link>
    </div>
  );
};

export default footer;
