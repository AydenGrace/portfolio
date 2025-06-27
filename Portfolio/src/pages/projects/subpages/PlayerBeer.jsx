import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";
import "react-photo-view/dist/react-photo-view.css";
import TechBadge from "../../../components/TechBadge";
import Galery from "../../../components/projects/Galery";

export default function PlayerBeer() {
  const Images = [
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//65849.webp",
      alt: "Mockup d'enseigne",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pb-Carte_des_boissons_Mockup.webp",
      alt: "Carte des boissons",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pb-Carte_de_visite_Mockup.webp",
      alt: "Carte de visite",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pb-Home%20Body.webp",
      alt: "Page d'accueil",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pb-Concept%20-%20Body.webp",
      alt: "Page Concept",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pb-landing.webp",
      alt: "Accueil",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pb-newsletter.webp",
      alt: "Newsletter",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pb-post.webp",
      alt: "Publication instagram",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pb-refonte.webp",
      alt: "Refonte visuelle",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pb-landing.webp')] bg-center bg-cover bg-no-repeat"></div>
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
            Player Beer
          </h1>
          <div className="w-full gap-2.5 flex flex-wrap">
            <TechBadge isIllustrator />
            <TechBadge isPhotoshop />
            <TechBadge isInDesign />
            <TechBadge isPremierePro />
            <TechBadge isFigma />
            <TechBadge isWordpress />
          </div>
          <p>
            Ce projet est le sujet central de ma formation de{" "}
            <span className="text-secondary">Concepteur Designer UI/UX</span>.
            Il s'agit d'un projet fictif de bar à thème sur la pop-culture avec
            une ambiance futuriste.
          </p>
          <p>
            Ce projet était à créer entièrement, en démarrant d'un concept
            jusqu'au site web et la gestion des réseaux sociaux en passant par
            le maquettage et la création de visuels. J'ai alors du créer un
            logo, des imprimables et réaliser un trailer vidéo en plus du site
            web.
          </p>
          <p>
            La vidéo est composée majoritairement d'extraits libres de droits.
            Cependant on peut y retrouver des extraits du film Ready Player, du
            trailer d'Orbis Aventures ainsi que du jeu Elite Dangerous.
          </p>
          <p className="text-secondary">
            <i>"Merci d'avoir joué à mon jeu." ~ Ready Player One</i>
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <ReactPlayer
            url="https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Player%20_Beer_%20-%20Trailer%20V1.6.mp4"
            controls
          />
        </div>
      </div>
      <Galery images={Images} catNb={1} />
    </div>
  );
}
