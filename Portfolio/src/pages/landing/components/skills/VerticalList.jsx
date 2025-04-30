import React from "react";
import SkillItem from "./SkillItem";

export default function VerticalList({ title, skills }) {
  return (
    <div className="d-flex flex-column align-items-center p-10">
      <h3 className="miniTitle">{title}</h3>
      <div className="separatorSubline mb-10"></div>
      {skills.map((s, idx) => (
        <SkillItem skill={s} key={`Skill_${s.category}_${idx}`} />
      ))}
    </div>
  );
}
