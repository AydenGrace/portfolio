import React from "react";
import style from "./SkillItem.module.scss";

export default function SkillItem({ skill }) {
  return (
    <div className={`${style.container}`}>
      <img src={skill.icon} alt={skill.title} height={"40px"} />
      <p>{skill.title}</p>
    </div>
  );
}
