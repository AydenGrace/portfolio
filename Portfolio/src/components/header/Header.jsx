import useWindowScroll from "../hooks/useWindowScroll";
import {Link, NavLink} from "react-router-dom";
import Burger from "./Burger";
import {useState} from "react";
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";

export default function Header() {
  const {y} = useWindowScroll();
  const [opened, setOpened] = useState(null);

  return (
    <header
      className={`w-100 p-20 d-flex fixed justify-content-between items-center z-50`}
      style={{
        background: `linear-gradient(180deg,rgba(21, 21, 21,1) 0%, rgba(21, 21, 21, 0.9) ${
          y > 1000 ? "100" : y / 10
        }%, rgba(21, 21, 21, 0) 100%)`,
      }}
    >
      <Link
        to={"/"}
        className="text-secondary font-(family-name:--title-font-family) text-lg sm:text-xl cursor-pointer logo"
      >
        CRABBÉ Pierre-Alexandre
      </Link>
      <nav className="hidden md:flex g-20">
        <NavLink to={"/"} className="nav">
          Accueil
        </NavLink>
        {/* <NavLink to={"/services"} className="nav">
          Mes Services
        </NavLink> */}
        <NavLink to={"/timeline"} className="nav">
          Mon Parcours
        </NavLink>
        <NavLink to={"/projects"} className="nav">
          Projets
        </NavLink>
        <NavLink to={"/contact"} className="nav">
          Contact
        </NavLink>
      </nav>
      <div className="flex md:hidden">
        <Burger closeTrigger={opened}>
          <NavLink
            to={"/"}
            className="nav mb-20"
            onClick={() => setOpened(Math.random())}
          >
            Accueil
          </NavLink>
          {/* <NavLink
            to={"/services"}
            className="nav mb-20"
            onClick={() => setOpened(Math.random())}
          >
            Mes Services
          </NavLink> */}
          <NavLink
            to={"/timeline"}
            className="nav mb-20"
            onClick={() => setOpened(Math.random())}
          >
            Mon Parcours
          </NavLink>
          <NavLink
            to={"/projects"}
            className="nav mb-20"
            onClick={() => setOpened(Math.random())}
          >
            Projets
          </NavLink>
          <NavLink
            to={"/contact"}
            className="nav mb-20"
            onClick={() => setOpened(Math.random())}
          >
            Contact
          </NavLink>
          <div className="flex flex-1"></div>
          <div className="flex w-full justify-evenly bottom-2.5 gap-2.5">
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
        </Burger>
      </div>
    </header>
  );
}
