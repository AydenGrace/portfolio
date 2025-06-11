import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import Separator from "../../../components/separator/Separator";
import {PhotoProvider, PhotoView} from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function PetitRenard() {
  const Images = [
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//renard_1.webp",
      alt: "Création du Renard",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//renard_2.webp",
      alt: "Mise en couleur du Renard",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//renard_3.webp",
      alt: "Base du décors",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//renard_4.webp",
      alt: "Ajout d'éléments",
    },
    {
      src: "https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//petit_renard.webp",
      alt: "Illustration finale",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//petit_renard.webp')] bg-center bg-cover bg-no-repeat"></div>
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
            LE PETIT RENARD
          </h1>
          <div className="w-full flex flex-wrap">
            <div className="flex items-center border-orange-700 border-2 text-text rounded-2xl px-2 py-1 text-sm gap-1">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/portfolio-e3894.firebasestorage.app/o/icons%2FAdobe%20Illustrator-min.webp?alt=media&token=a9bef1e0-3ea5-4434-b1bf-c370131f49eb"
                }
                alt={"Illustrator"}
                width={"25px"}
              />
              Adobe Illustrator
            </div>
          </div>
          <p>
            Ce projet est un exercice ayant pour but de s'exercer avec{" "}
            <span className="text-secondary">Adobe Illustrator</span>. L'énoncé
            est relativement simple : Réaliser, uniquement avec les outils
            d'illustrator, une illustration au format A3 représentant une oeuvre
            littéraire, cinématographique ou vidéoludique. Cette illustration
            doit être réalisé dans un style choisi au préalable à l'aide d'une
            veille créative.
          </p>
          <p>
            Sur base de cet énoncé, une idée m'est venue : Réaliser mon exercice
            sur l'oeuvre du <span className="text-secondary">Petit Prince</span>{" "}
            d'Antoine de Saint-Exupéry. Mais, contrairement à la plupart des
            représentations de cet oeuvre, j'ai voulu mettre le point de vue du
            Renard. Celui qui, dans le chapitre 21, démontre ce qu'est l'amitié.
          </p>
          <p className="text-secondary">
            <i>
              "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour
              les yeux." ~ Le Renard
            </i>
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
                      className="cursor-pointer !h-[425px] !object-cover"
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
