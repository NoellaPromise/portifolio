import Link from "next/link";
import Icon from "@/public/Icons/icon";
import IconHub from "@/public/Icons/iconHub";
import LinkedIn from "@/public/Icons/linkedIn";
import Instagram from "@/public/Icons/instagram";

const footer = () => {
  return (
    <div className="flex gap-12 mb-8">
      <Link
        href="https://gitlab.com/dushakenoella"
        className="hover:text-[#182a38] hover:scale-110"
      >
        <Icon />
      </Link>
      <Link
        href="https://github.com/NoellaPromise"
        className="hover:text-[#182a38] hover:scale-110"
      >
        <IconHub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/noella-claire-d-assise-dushakimana/"
        className="hover:text-[#182a38] hover:scale-110"
      >
        <LinkedIn />
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
