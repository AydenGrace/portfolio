import React from "react";
import TechBadge from "../../../components/TechBadge";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import ReactCompareImage from "react-compare-image";

export default function Restauration() {
  return (
    <div className="w-full min-h-screen flex flex-col z-10 gap-4">
      <div className="h-[50vh] w-full bg-[url('https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Wedding_before.webp')] bg-top bg-cover bg-no-repeat"></div>
      <div className="flex flex-col md:flex-row w-full p-4 px-[10%] gap-4 relative">
        <div className="flex w-1/2 flex-col gap-4">
          <Link
            className="flex gap-2 items-center text-secondary border-b-1 border-secondary !cursor-pointer w-fit pr-1"
            to={"/projects"}
          >
            <AiOutlineArrowLeft />
            Retour
          </Link>
          <h1 className="text-[40px] leading-[40px] text-secondary font-(family-name:--title-font-family)">
            RESTAURATION
          </h1>
          <div className="w-full gap-2.5 flex flex-wrap">
            <TechBadge isPhotoshop />
          </div>
          <p>
            Les photos des plus gros événements de nos vies ont parfois une
            lourde valeur sentimentale. C'est pour cette raison qu'on est venu
            me voir afin de travailler sur une ancienne photo de mariage. La
            photo qui m'a été donnée avait clairement vécu des jours meilleurs.
            Diverses déchirures était présentes et des morceaux étaient restés
            collés à la vitre de son cadre.
          </p>
          <p>
            En me basant sur ce qu'il restait, j'ai retouché l'image sur
            photoshop afin de lui redonner un petit coup de jeune sans pour
            autant en modifier le fond. Il n'a, par exemple, pas été question
            d'en modifier les couleurs. Outre le travail de restauration, il m'a
            été demandé de retirer une personne en arrière plan.
          </p>
          <p className="text-secondary">
            Vous pouvez utiliser le slider afin de voir l'étant avant et après
            mes modifications.
          </p>
        </div>
        <div className="flex w-1/2 h-full items-center justify-center">
          <div className="flex h-full w-full max-w-[500px]">
            <ReactCompareImage
              sliderPositionPercentage={0.5}
              leftImageLabel="Avant"
              rightImageLabel="Après"
              leftImage="https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Wedding_before.webp"
              rightImage="https://gahtfyaqzgunbhepuitf.supabase.co/storage/v1/object/public/portfolio//Wedding_After.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
