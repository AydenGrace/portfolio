import {IoLogoLinkedin} from "react-icons/io";
import {IoLogoGithub} from "react-icons/io5";

export default function Socials() {
  return (
    <div className="fixed hidden md:flex bottom-2.5 left-2.5 z-20 gap-2.5">
      <a
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 !cursor-pointer "
        href="https://github.com/AydenGrace"
        target="_blank"
      >
        <IoLogoGithub className="w-10 h-10 hover:scale-125 animated" />
      </a>
      <a
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 !cursor-pointer "
        href="https://www.linkedin.com/in/pierre-alexandre-crabb%C3%A9/"
        target="_blank"
      >
        <IoLogoLinkedin className="w-10 h-10 hover:scale-125 animated" />
      </a>
    </div>
  );
}
