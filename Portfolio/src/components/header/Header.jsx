import useWindowScroll from "../hooks/useWindowScroll";
import {Link, NavLink} from "react-router-dom";
import Burger from "./Burger";

export default function Header() {
  const {y} = useWindowScroll();

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
        <NavLink to={"/services"} className="nav">
          Mes Services
        </NavLink>
        <NavLink to={"/projects"} className="nav">
          Projets
        </NavLink>
        <NavLink to={"/contact"} className="nav">
          Contact
        </NavLink>
      </nav>
      <div className="flex md:hidden">
        <Burger />
      </div>
    </header>
  );
}
