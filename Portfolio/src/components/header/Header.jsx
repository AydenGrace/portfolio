import React from "react";

export default function Header() {
  return (
    <header
      className={`w-100 p-20 d-flex index-10 fixed justify-content-between`}
    >
      <a href="#" className="logo">
        CRABBÉ Pierre-Alexandre
      </a>
      <nav className="d-flex g-20">
        <a href="#" className="nav">
          Accueil
        </a>
        <a href="#" className="nav">
          Mes Services
        </a>
        <a href="#" className="nav">
          Projets
        </a>
        <a href="#" className="nav">
          Contact
        </a>
      </nav>
    </header>
  );
}
