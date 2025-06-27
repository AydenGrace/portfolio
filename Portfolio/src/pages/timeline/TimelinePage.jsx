import React from "react";
import Timeline from "@mui/lab/Timeline";
import {IoSchoolOutline} from "react-icons/io5";
import TimeLineItem from "./components/TimeLineItem";
import {MdOutlineLockOpen} from "react-icons/md";
import {MdOutlineDesignServices} from "react-icons/md";
import {SiFreelancer} from "react-icons/si";
import {IoCode} from "react-icons/io5";
import {FaEquals} from "react-icons/fa";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {MdOutlineEventAvailable} from "react-icons/md";

import Separator from "../../components/separator/Separator";

export default function TimelinePage() {
  const Parcours = [
    {
      title: "Concepteur Développeur d'Application",
      company: "SOFIP - Verquigneul - 7 mois",
      desc: "Entrée en formation continue. Titre certifiant de niveau 6.",
      icon: <IoSchoolOutline size={24} color="#d8ca98" />,
      date: new Date("03/12/2025"),
    },
    {
      title: "Développeur Fullstack - Stagiaire",
      company: "1Civil.it - Roubaix - 1 mois",
      desc: "Réalisation d'un site web et d'une application mobile. En charge de la maquette, identité graphique, de la gestion d'équipe, du backend et de l'application mobile. Méthodologie Agile (SCRUM)",
      icon: <IoCode size={24} color="#d8ca98" />,
      date: new Date("02/13/2025"),
    },
    {
      title: "MS Développement JAVA/J2EE",
      company: "AFPA - Roubaix - 3 mois",
      desc: "Entrée en formation continue. Titre de professionnalisation.",
      icon: <IoSchoolOutline size={24} color="#d8ca98" />,
      date: new Date("12/12/2024"),
    },
    {
      title: "Développeur Fullstack - Stagiaire",
      company: "Primis - Lille - 1 mois",
      desc: "Création d'un site web de ressources à destination de professeurs et de lycéens.",
      icon: <IoCode size={24} color="#d8ca98" />,
      date: new Date("08/26/2024"),
    },
    {
      title: "Développeur Web et Web Mobile",
      company: "SOFIP - Verquigneul - 8 mois",
      desc: "Entrée en formation continue. Titre certifiant de niveau 5.",
      icon: <IoSchoolOutline size={24} color="#d8ca98" />,
      date: new Date("02/28/2024"),
    },
    {
      title: "Freelance",
      company: "WizarDesign - Roubaix - En cours",
      desc: "Démarches afin de devenir freelance et disposer d'un numéro de SIRET.",
      icon: <SiFreelancer size={24} color="#d8ca98" />,
      date: new Date("01/29/2024"),
    },
    {
      title: "Designer UI/UX - Stagiaire",
      company: "Le Reliquaire - Liège - 1 mois",
      desc: "Création d'un site web événementiel allant de la maquette au Wordpress.",
      icon: <MdOutlineDesignServices size={24} color="#d8ca98" />,
      date: new Date("10/19/2023"),
    },
    {
      title: "Concepteur Designer UI/UX",
      company: "ADAPECO - Douai - 9 mois",
      desc: "Entrée en formation continue. Titre certifiant de niveau 6.",
      icon: <IoSchoolOutline size={24} color="#d8ca98" />,
      date: new Date("06/10/2023"),
    },
    {
      title: "Game Master Polyvalent - CDI",
      company: "ORBIS Aventures - Tourcoing - 6 mois",
      desc: "Accueil de client. Gestion d'escapes games. Gestion de ludothèque. Conseils client. Entretien des locaux.",
      icon: <MdOutlineLockOpen size={24} color="#d8ca98" />,
      date: new Date("11/10/2022"),
    },
    {
      title: "Ambassadeur de l'Égalité - Service Civique",
      company: "CCAS - Roubaix - 8 mois",
      desc: "Assistance à la création du projet. Animation de stand. Création de jeux de sociétés. Lutte contre les discriminations et les inégalités.",
      icon: <FaEquals size={24} color="#d8ca98" />,
      date: new Date("03/01/2022"),
    },
    {
      title: "Game Master - CDDU",
      company: "Get Out! - Lille - 2 ans",
      desc: "Accueil de client. Gestion d'escape game. Entretien des locaux. Incarnation de personnages (théâtre).",
      icon: <MdOutlineLockOpen size={24} color="#d8ca98" />,
      date: new Date("08/01/2020"),
    },
    {
      title: "Télévendeur - CDI",
      company: "Centre européen de Formation - Lille - 1 mois",
      desc: "Démarchage téléphonique. Vente de formations.",
      icon: <TfiHeadphoneAlt size={24} color="#d8ca98" />,
      date: new Date("07/01/2020"),
    },
    {
      title: "Analyste Programmeur Industriel",
      company: "HEPL - Liège",
      desc: "Date du diplôme. Parcours scolaire équivalent à une license. Développement de logiciels. Traitement d'image, Gestion de bases de données. Gestion d'automates.",
      icon: <IoSchoolOutline size={24} color="#d8ca98" />,
      date: new Date("06/01/2019"),
    },
    {
      title: "Animateur Événementiel - Bénévole",
      company: "Chasse aux Reliques - Belgique - En cours",
      desc: "Gestion d'événements. Création d'énigmes. Animation d'événements. Accueil et gestion de participants.",
      icon: <MdOutlineEventAvailable size={24} color="#d8ca98" />,
      date: new Date("09/23/2018"),
    },
  ];
  return (
    <main className="w-full min-h-screen flex flex-col z-10 justify-center text-center p-top-header mb-4">
      <Separator number={1} />
      <h1 className="sectionTitle">MON PARCOURS PROFESSIONNEL</h1>
      <div className="w-full hidden sm:flex">
        <Timeline position="alternate" className="w-full">
          {Parcours.map((item, idx) => (
            <TimeLineItem
              key={idx}
              icon={item.icon}
              company={item.company}
              title={item.title}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </Timeline>
      </div>
      <div className="w-full flex sm:hidden">
        <Timeline position="right" className="w-full">
          {Parcours.map((item, idx) => (
            <TimeLineItem
              key={idx}
              icon={item.icon}
              company={item.company}
              title={item.title}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </Timeline>
      </div>
    </main>
  );
}
