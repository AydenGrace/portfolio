import React, { useEffect } from "react";
import useWindowScroll from "../hooks/useWindowScroll";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const { y } = useWindowScroll();

  return (
    <header
      className={`w-100 p-20 d-flex index-10 fixed justify-content-between`}
      style={{
        background: `linear-gradient(180deg,rgba(21, 21, 21,1) 0%, rgba(21, 21, 21, 0.9) ${
          y > 1000 ? "100" : y / 10
        }%, rgba(21, 21, 21, 0) 100%)`,
      }}
    >
      <Link to={"/"} className="logo">
        CRABBÉ Pierre-Alexandre
      </Link>
      <nav className="d-flex g-20">
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
    </header>
  );
}
