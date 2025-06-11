import React from "react";
import style from "./ExperienceItem.module.scss";

export default function ExperienceItem({isGrade = false, exp}) {
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

  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  const timeBetweenDates = (start, end) => {
    let diffDays = dateDiffInDays(start, end);
    console.log(diffDays);

    let msg = "- ";

    if (diffDays > 365) {
      msg += `${Math.floor(diffDays / 365)} an${
        Math.floor(diffDays / 365) > 1 ? "s" : ""
      } `;
      diffDays = diffDays % 365;
    }
    msg += `${
      Math.floor(diffDays / 30) > 0 ? Math.floor(diffDays / 30) : "1"
    } mois`;

    return msg;
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
          {exp.company} - {exp.contract} {timeBetweenDates(exp.start, exp.end)}
        </p>
      )}
      {isGrade ? (
        <p>{levelToString(exp.level)}</p>
      ) : (
        <>
          <p>
            {month[exp.start.getMonth()]} {exp.start.getFullYear()} -{" "}
            {month[exp.end.getMonth()]} {exp.end.getFullYear()}
          </p>
        </>
      )}
    </article>
  );
}
