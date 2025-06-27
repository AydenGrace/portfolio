import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";
import "react-photo-view/dist/react-photo-view.css";
import TechBadge from "../../../components/TechBadge";
import Galery from "../../../components/projects/Galery";

export default function AdapImmo() {
  const Images = [
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//ai-mock-1.webp",
      alt: "Mockup sur mur",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//ai-mock-2.webp",
      alt: "Mockup d'enseigne",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//ai-mock-3.webp",
      alt: "Mockup sur papier",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//ai-mock-3.webp')] bg-center bg-cover bg-no-repeat"></div>
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
            Adap Immo{" "}
          </h1>
          <div className="w-full gap-2.5 flex flex-wrap">
            <TechBadge isIllustrator />
            <TechBadge isPhotoshop />
          </div>
          <p>
            Adap Immo est une agence immobilière fictive vendant des biens de
            luxe. Lors cette exercice, je me faisais passer pour le client et
            discutais avec des équipes de futurs Designer UI pour{" "}
            <span className="text-secondary">
              simuler une mise en situation
            </span>
            . Leur but était de nous vendre une nouvelle identité graphique pour
            notre agence.
          </p>
          <p>
            Après plusieurs rendez-vous avec les apprenants, je me suis décider
            de me prêter au jeu et de créer à mon tour un proposition de logo.
            Ma version reprend divers éléments du monde immobilier. On peut y
            voir les <span className="text-secondary">lettres A et D</span> pour
            le nom de l'entreprise former une{" "}
            <span className="text-secondary">maison</span> et un{" "}
            <span className="text-secondary">immeuble</span> en fond. Le cercle
            partiel est là pour rappeler la{" "}
            <span className="text-secondary">couronne triomphante</span>,
            montrant la stabilité et le côté luxueux de l'entreprise.
          </p>
        </div>
        <div className="flex w-full items-center justify-center"></div>
      </div>
      <Galery images={Images} catNb={1} />
    </div>
  );
}
