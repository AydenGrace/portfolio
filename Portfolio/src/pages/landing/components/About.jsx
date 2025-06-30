import React from "react";
import Separator from "../../../components/separator/Separator";
import styles from "./About.module.scss";
import ExperienceItem from "./ExperienceItem";

export default function About() {
  const grades = [
    {
      title: "Concepteur Développeur d'Application",
      center: "SOFIP",
      city: "Verquigneul",
      year: 2025,
      level: 6,
      current: true,
    },
    {
      title: "MS Développement JAVA/J2EE",
      center: "AFPA",
      city: "Roubaix",
      year: 2024,
      level: -1,
      current: false,
    },
    {
      title: "Développeur Web et Web Mobile",
      center: "SOFIP",
      city: "Verquigneul",
      year: 2024,
      level: 5,
      current: false,
    },
    {
      title: "Concepteur Designer UI",
      center: "ADAPECO",
      city: "Douai",
      year: 2023,
      level: 6,
      current: false,
    },
    {
      title: "Analyste développeur Industriel",
      center: "HEPL",
      city: "Liège",
      year: 2019,
      level: 6,
      current: false,
    },
  ];

  const experiences = [
    {
      title: "Designer / Développeur",
      company: "WizarDesign",
      contract: "Indépendant",
      start: new Date("01/29/2024"),
      end: new Date(Date.now()),
    },
    {
      title: "Développeur Web Fullstack",
      company: "1Civil.IT",
      contract: "Stagiaire",
      start: new Date("02/01/2025"),
      end: new Date("03/01/2025"),
    },
    {
      title: "Développeur Web Fullstack",
      company: "PRIMIS",
      contract: "Stagiaire",
      start: new Date("08/01/2024"),
      end: new Date("09/01/2024"),
    },
    {
      title: "Concepteur Designer UI/UX",
      company: "Le Reliquaire",
      contract: "Stagiaire",
      start: new Date("10/01/2023"),
      end: new Date("11/01/2023"),
    },
    {
      title: "Game Master Polyvalent",
      company: "Orbis Aventure",
      contract: "CDI",
      start: new Date("11/01/2022"),
      end: new Date("04/30/2023"),
    },
    // {
    //   title: "Ambassadeur de l'Égalité",
    //   company: "CCAS Roubaix",
    //   contract: "Service Civique",
    //   start: new Date("03/01/2023"),
    //   end: new Date("11/01/2023"),
    // },
    // {
    //   title: "Game Master",
    //   company: "Get Out!",
    //   contract: "CDDU",
    //   start: new Date("08/01/2020"),
    //   end: new Date("11/01/2022"),
    // },
    // {
    //   title: "Développeur .NET",
    //   company: "ALX System",
    //   contract: "Stagiaire",
    //   start: new Date("01/01/2019"),
    //   end: new Date("06/01/2019"),
    // },
  ];

  return (
    <section className="w-100 f-center flex-column mb-10">
      <Separator number={1} />
      <h2 className="sectionTitle">PRÉSENTATION</h2>
      <div className="w-100 d-flex flex-fill p-x-10 flex-col xl:flex-row-reverse">
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-fill justify-center">
          <div
            className={`${styles.img} w-full bg-top-right bg-contain max-h-screen min-h-[400px]`}
          ></div>
        </div>
        {/* RIGHT COLUMN */}
        <div className={`d-flex w-full flex-column`}>
          <p className={`${styles.desc}`}>
            Mon nom est <span>Pierre-Alexandre Crabbé</span>. Je suis un homme
            passionné par les domaines du numérique. Né en Belgique, j’ai obtenu
            un diplôme dans l’
            <span>Analyse et le Développement Informatique</span>. Après être
            arrivé en France, j’ai effectué plusieurs petits boulots allant du
            commercial au ludique. Après mon service civique, j’ai effectué
            plusieurs formations pour compléter mes compétences dans le domaine
            du numérique, tout en aiguisant ma créativité. Je suis alors devenu
            titulaire d’un titre de <span>Concepteur Designer UI</span> et{" "}
            <span>Développeur Web et Web Mobile</span>.
          </p>
          <p className={`${styles.desc} mb-2`}>
            De nature <span>Bienveillant</span>, <span>Créatif</span>,{" "}
            <span>Curieux</span>, ... je me pousse continuellement à développer
            de nouvelles compétences. Je suis quelqu’un qui prône la discussion
            et la <span>Coopération</span>, afin de pouvoir travailler ensemble
            dans un environnement qui poussera tout le monde à grandir.
          </p>
          {/* EXPERIENCES */}
          <div className="d-flex flex-fill flex-col md:flex-row">
            <div className="d-flex flex-fill flex-column align-items-center g-10 ">
              <h3 className={`${styles.expTitle}`}>DIPLÔMES</h3>
              <div className="separatorSubline"></div>
              {grades.map((exp, idx) => (
                <ExperienceItem
                  key={`grades_${idx}`}
                  isGrade={true}
                  exp={exp}
                />
              ))}
            </div>
            <div className="d-flex flex-fill flex-column align-items-center g-10">
              <h3 className={`${styles.expTitle}`}>EXPÉRIENCES</h3>
              <div className="separatorSubline"></div>
              {experiences.map((exp, idx) => (
                <ExperienceItem
                  key={`experiences_${idx}`}
                  isGrade={false}
                  exp={exp}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
