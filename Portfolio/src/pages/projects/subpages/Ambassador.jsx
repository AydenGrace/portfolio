import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import Separator from "../../../components/separator/Separator";
import {PhotoProvider, PhotoView} from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import TechBadge from "../../../components/TechBadge";
import Galery from "../../../components/projects/Galery";

export default function Ambassador() {
  const Images = [
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//logo_AmE_egalite_cercle_3.webp",
      alt: "illustration",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Creative%20Modern%20Business%20Card%20verso.webp",
      alt: "Carte de visite verso",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Creative%20Modern%20Business%20Card.webp",
      alt: "Carte de visite recto",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//pexels-nswatzphoto-2770681.webp')] bg-center bg-cover bg-no-repeat"></div>
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
            Ambassadeur de l'Égalité
          </h1>
          <div className="w-full gap-2.5 flex flex-wrap">
            <TechBadge isIllustrator />
            <TechBadge isPhotoshop />
          </div>
          <p>
            Ce projet est le sujet central de mon{" "}
            <span className="text-secondary">Service Civique</span> réalisé au
            CCAS de Roubaix. Il consiste à créer une brigade d'ambassadeurs
            bénévoles autour des thématiques de l'
            <span className="text-secondary">Égalité Femme-Homme</span>, les{" "}
            <span className="text-secondary"> Discriminations</span> et les{" "}
            <span className="text-secondary"> Stéréotypes</span>. Le rôle de ces
            ambassadeurs est de sensibilisé la population à ces thématiques mais
            aussi de pouvoir rediriger des personnes dans le besoin vers les
            autorités compétentes.
          </p>
          <p>
            Lors de ma mission, j'ai été chargé d'assister la personne en charge
            de la création de ce projet. J'ai pû alors apporter ma pierre à
            l'édifice en travaillant sur des illustrations, des jeux de
            sociétés, en animant des stands ou encore en échangeant avec le
            responsable de la communication sur certains designs comme le logo.
          </p>
          <p>
            Lien d'un article sur le projet :{" "}
            <a
              href="https://www.roubaixxl.fr/ambassadeurs-pour-faire-progresser-egalite/"
              target="_black"
            >
              ROUBAIXXL
            </a>
          </p>
          <p className="text-secondary">
            <i>
              "Les droits des femmes sont les droits humains." ~ Hillary Clinton
            </i>
          </p>
        </div>
        <div className="flex w-full h-full items-center justify-center"></div>
      </div>
      <Galery images={Images} catNb={1} />
    </div>
  );
}
