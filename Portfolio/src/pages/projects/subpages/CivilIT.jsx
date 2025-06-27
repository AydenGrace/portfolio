import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import TechBadge from "../../../components/TechBadge";
import Galery from "../../../components/projects/Galery";

export default function CivilIT() {
  const Images = [
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//base.webp",
      alt: "Accueil",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Tutoriel.webp",
      alt: "Tutoriel",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Details.webp",
      alt: "Détails",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//c6f153ebb8e0494bc4d3aa69fa077e8846bff612.webp",
      alt: "Mockup Logo",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//c6f153ebb8e0494bc4d3aa69fa077e8846bff612.webp')] bg-center bg-cover bg-no-repeat"></div>
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
            1Civil.IT{" "}
          </h1>
          <div className="w-full gap-2.5 flex flex-wrap">
            <TechBadge isIllustrator />
            <TechBadge isReact />
            <TechBadge isJava />
            <TechBadge isSpringBoot />
            <TechBadge isPostgre />
            <TechBadge isFigma />
          </div>
          <p>
            1CiviL.IT est un projet de groupe réalisé durant mon stage dans
            l'entreprise du même nom. Il s'agit d'une application mobile
            permettant le signalement d'incivilités (dépôts sauvages par
            exemple).
          </p>
          <p>
            J'ai été en charge de l'organisation, la création de{" "}
            <span className="text-secondary">l'identité graphique</span> et du{" "}
            <span className="text-secondary">maquettage</span>. Je faisais aussi
            office de <span className="text-secondary">Product Owner</span> dans
            le cadre de l'organisation{" "}
            <span className="text-secondary">SCRUM</span> adoptée durant le
            stage.
          </p>
          <p>
            Une fois la maquette achevée, je me suis penché sur le{" "}
            <span className="text-secondary">backend</span> ainsi que la partie
            mobile en <span className="text-secondary">React Native</span>. Le
            projet a été <span className="text-secondary">architecturé</span> et{" "}
            <span className="text-secondary">documenté</span> afin de permettre
            aux autres équipes qui ont repris le projet après nous de s'y
            retrouver le plus facilement possible.
          </p>
        </div>
        <div className="flex w-full items-center justify-center"></div>
      </div>
      <Galery images={Images} catNb={1} />
    </div>
  );
}
