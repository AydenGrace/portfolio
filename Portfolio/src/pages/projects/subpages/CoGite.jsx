import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";
import "react-photo-view/dist/react-photo-view.css";
import TechBadge from "../../../components/TechBadge";
import Galery from "../../../components/projects/Galery";

export default function CoGite() {
  const Images = [
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//cogite.webp",
      alt: "Mockup d'enseigne",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//cg-404.webp",
      alt: "Page 404",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//cg-home.webp",
      alt: "Homepage",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//cg-logo.webp",
      alt: "Logo",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//cg-fav.webp",
      alt: "Logotype",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//cogite.webp')] bg-center bg-cover bg-no-repeat"></div>
      <div className="flex flex-col md:flex-row w-full p-4 px-[10%] gap-4 relative">
        <div className="flex w-full flex-col gap-4">
          <Link
            className="flex gap-2 items-center text-secondary border-b-1 border-secondary !cursor-pointer w-fit pr-1"
            to={"/projects"}
          >
            <AiOutlineArrowLeft />
            Retour
          </Link>
          <h1 className="text-[40px] leading-[40px] text-secondary font-(family-name:--title-font-family)">
            Co'Gîte{" "}
          </h1>
          <div className="w-full gap-2.5 flex flex-wrap">
            <TechBadge isIllustrator />
            <TechBadge isPhotoshop />
            <TechBadge isHTML />
            <TechBadge isCSS />
            <TechBadge isJS />
            <TechBadge isFigma />
          </div>
          <p>
            Co'Gîte est un projet fictif réalisé en groupe ayant pour but de
            créer une plateforme similaire à Airbnb proposant des gîte insolites
            alant de la grue aménagée à la cabane au fond d'une mine.
          </p>
          <p>
            Ce projet a été réalisé en 2 temps. La première fois, je faisais
            partie de l'équipe de design qui devait créer toute l'identité
            graphique ainsi que la maquette pour qu'une équipe de développeur
            puisse réaliser le projet. La seconde fois, j'étais dans une équipe
            de développeur et nous avons décider de reprendre ce thème pour un
            exercice de groupe.
          </p>
        </div>
        <div className="flex w-full items-center justify-center"></div>
      </div>
      <Galery images={Images} catNb={1} />
    </div>
  );
}
