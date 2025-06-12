import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import Separator from "../../../components/separator/Separator";
import {PhotoProvider, PhotoView} from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import TechBadge from "../../../components/TechBadge";

export default function SelfTaught() {
  const Images = [
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//elephant.webp",
      alt: "Elephant",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//fusion_mots.webp",
      alt: "Visage et Mots",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//visage_coupe.webp",
      alt: "Visage coupé",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//homme_savanne.webp",
      alt: "Homme Savanne",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//purple_eye.webp",
      alt: "Yeux Mauve",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//neon.webp",
      alt: "Néon",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//paris.webp",
      alt: "Fonte à Paris",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//cadre_harry.webp",
      alt: "Cadre Harry Potter",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//galaxy.webp",
      alt: "Galaxie",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//peinture.webp",
      alt: "Visage et peinture",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//femme_peinture.webp",
      alt: "Femme et peinture",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//femme_arc-en-ciel.webp",
      alt: "Femme et Arc-en-ciel",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//rousse.webp",
      alt: "Rousse",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//peint.webp",
      alt: "Femme et peinture NB",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//lac.webp",
      alt: "Lac",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Mila.webp",
      alt: "Mila",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//planete.webp",
      alt: "Planète",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//cerf.webp",
      alt: "Cerf",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//eyes.webp",
      alt: "Traitement des yeux",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//elephant.webp')] bg-center bg-cover bg-no-repeat"></div>
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
            PREMIERS PAS
          </h1>
          <div className="w-full gap-2.5 flex flex-wrap">
            <TechBadge isIllustrator />
            <TechBadge isPhotoshop />
          </div>

          <p>
            Dans tout apprentissage, il y a les premiers pas, les premières
            découvertes, les premières aventures ! Vivant entouré d'artistes
            (dessinateurs de BD, tatoueurs, peintres, etc..), j'ai toujours eu
            un attrait pour les domaines artistiques.
          </p>
          <p>
            Bien que je n'en ai pas fait mon domaine d'étude, m'orientant vers
            du développement informatique, j'ai voulu apprendre. C'est à l'aide
            de recherches personnelles, de divers tutoriels, et de
            questionnements que j'en suis arrivé là. Vous trouverez dans la
            galerie ci-dessous mes débuts avec les outils de la suite Adobe !
          </p>
          <p className="text-secondary">
            <i>"Le tout est de commencer." ~ Damascios</i>
          </p>
        </div>
        <div className="flex w-full h-full items-center justify-center"></div>
      </div>
      <div className="flex flex-col w-full px-[10%] items-center">
        <div className="flex flex-col w-full gap-4 items-center">
          <Separator number={1} />
          <h2 className="text-[40px] leading-[40px] text-secondary font-(family-name:--title-font-family)">
            Galerie
          </h2>
          <PhotoProvider>
            <div className="w-full flex flex-wrap gap-4 items-center justify-center mb-4">
              {Images.map((img, i) => (
                <PhotoView src={img.src} key={i}>
                  <div className="w-[300px] h-[425px] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="cursor-pointer !min-h-[425px] !object-cover"
                    />
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
}
