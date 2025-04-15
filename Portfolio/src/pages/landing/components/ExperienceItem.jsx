import React from "react";
import style from "./ExperienceItem.module.scss";

export default function ExperienceItem({ isGrade = false, exp }) {
  console.log(exp);

  const month = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "octobre",
    "Novembre",
    "Décembre",
  ];

  const levelToString = (level) => {
    switch (level) {
      case 6:
        return `Niveau ${level} - BAC +3/+4`;
      case 5:
        return `Niveau ${level} - BAC +2`;
      case -1:
      default:
        return `Professionnalisation`;
    }
  };
  return (
    <article className={`d-flex flex-column ${style.container}`}>
      <h4>{exp.title}</h4>
      {isGrade ? (
        <p>
          {exp.center} - {exp.city} - {exp.year} {exp.current && "- En cours"}
        </p>
      ) : (
        <p>
          {exp.company} - {exp.contract}
        </p>
      )}
      {isGrade ? (
        <p>{levelToString(exp.level)}</p>
      ) : (
        <p>
          {month[exp.start.getMonth()]} {exp.start.getFullYear()} -{" "}
          {month[exp.end.getMonth()]} {exp.end.getFullYear()}
        </p>
      )}
    </article>
  );
}
