import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import TechBadge from "../../../components/TechBadge";
import Galery from "../../../components/projects/Galery";

export default function MotionOcean() {
  const Images = [
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-1.webp",
      alt: "Mockup",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-2.webp",
      alt: "Logo V1 Bleu",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-3.webp",
      alt: "Logo V2 Noir",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-4.webp",
      alt: "Logo Final",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-5.webp",
      alt: "Logo Final Noir",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-6.webp",
      alt: "Mockup bonnet",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-7.webp",
      alt: "Mockup dos",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-8.webp",
      alt: "Mockup torse",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-9.webp",
      alt: "Mockup enseigne",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion-ocean-10.webp",
      alt: "Mockup maillot",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//motion_ocean.webp')] bg-center bg-cover bg-no-repeat"></div>
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
            MOTION IN THE OCEAN
          </h1>
          <div className="w-full gap-2.5 flex flex-wrap">
            <TechBadge isIllustrator />
            <TechBadge isPhotoshop />
          </div>
          <p>
            Ce projet consiste a créer un{" "}
            <span className="text-secondary">logo</span> pour une marque fictive
            de vêtements de natation. Ayant à disposition un descriptif de
            l'entreprise relativement simple, nous devions faire de la veille
            ainsi qu'une proposition de logo à justifier.
          </p>
          <p>
            Ce logo peut être décomposé en plusieurs éléments : Une{" "}
            <span className="text-secondary">vague</span>, une écriture cursive
            pour rappeler ce{" "}
            <span className="text-secondary">mouvement de l'eau</span> ainsi
            qu'une seconde écriture sans-serif pour l'aspect{" "}
            <span className="text-secondary">sérieux</span>,{" "}
            <span className="text-secondary">moderne</span> et{" "}
            <span className="text-secondary">professionnel</span>.
          </p>
        </div>
        <div className="flex w-full h-full items-center justify-center"></div>
      </div>
      <Galery images={Images} catNb={1} />
    </div>
  );
}
