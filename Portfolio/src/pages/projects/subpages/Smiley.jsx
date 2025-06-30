import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import TechBadge from "../../../components/TechBadge";
import Galery from "../../../components/projects/Galery";

export default function Smiley() {
  const Images = [
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Smiley_Mock_1.webp",
      alt: "Mockup Logo Smiley",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Smiley_Mock_2.webp",
      alt: "Mockup Logo Smiley",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Smiley_Mock_3.webp",
      alt: "Mockup Logo Smiley",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Smiley_Mock_4.webp",
      alt: "Mockup Logo Smiley",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Smiley_Mock_5.webp",
      alt: "Mockup Logo Smiley",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Smiley_Mock_5.webp')] bg-center bg-cover bg-no-repeat"></div>
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
            Smiley by Risus{" "}
          </h1>
          <div className="w-full gap-2.5 flex flex-wrap">
            <TechBadge isIllustrator />
            <TechBadge isFigma />
            <TechBadge isReact />
            <TechBadge isTailwind />
            <TechBadge isNode />
            <TechBadge isMongoDB />
            <TechBadge isSupabase />
          </div>
          <p>
            <span className="text-secondary">Smiley by Risus</span> est un
            projet fictif réalisé durant ma formation de Concepteur Développeur
            d'Application. Risus est une entreprise souhaitant mettre un point
            d'honneur sur le <span className="text-secondary">bonheur</span> de
            la population et a lancé sa marque Smiley dans la foulée.
          </p>
          <p>
            Smiley est une{" "}
            <span className="text-secondary">boutique en ligne</span> permettant
            d'acheter divers objets imprimés comme des{" "}
            <span className="text-secondary" cartes>
              cartes
            </span>{" "}
            ou des{" "}
            <span className="text-secondary" cartes>
              emballages
            </span>
            . Chaque article a pour particularité d'être accompagné d'un message
            ayant pour but de redonner le{" "}
            <span className="text-secondary">sourire</span> à la personne qui le
            reçoit.
          </p>
          <p>
            Ce projet a été réalisé entièrement, allant du{" "}
            <span className="text-secondary">cahier des charges</span> jusqu'au
            <span className="text-secondary">développement</span>, en passant
            par l'<span className="text-secondary">identité graphique</span>.
          </p>
          <p className="text-secondary">
            Le projet est toujours en cours de développement.
          </p>
          <p>
            Lien du site :{" "}
            <a href="https://smiley-opmf.onrender.com/" target="_blank">
              Render
            </a>
          </p>
          <p>
            lien de la maquette :{" "}
            <a
              href="https://www.figma.com/proto/95LD791QuD1q4Hg9B6VrXU/Risus?page-id=0%3A1&node-id=35-1105&viewport=2962%2C3821%2C0.26&t=sfXRthVZVn3O3FsC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=35%3A1105&show-proto-sidebar=1"
              target="_blank"
            >
              Prototype Figma
            </a>
          </p>
        </div>
        <div className="flex w-full items-center justify-center"></div>
      </div>
      <Galery images={Images} catNb={1} />
    </div>
  );
}
