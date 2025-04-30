import React from "react";
import Separator from "../../../../components/separator/Separator";
import VerticalList from "./VerticalList";
import skills from "../../../../data/Skills.json";

export default function Skills() {
  return (
    <section className="w-100 d-flex justify-content-start align-items-center flex-column mb-10">
      <Separator number={2} />
      <h2 className="sectionTitle">MES COMPÉTENCES</h2>
      <div className="d-flex flex-fill wrap g-40 p-x-10 p-y-40 justify-content-center">
        <VerticalList
          title={"DESIGN"}
          skills={skills.filter((s) => s.category === "design")}
        />
        <VerticalList
          title={"FRONTEND"}
          skills={skills.filter((s) => s.category === "frontend")}
        />
        <VerticalList
          title={"OUTILS"}
          skills={skills.filter((s) => s.category === "tool")}
        />
        <VerticalList
          title={"BASE DE DONNÉES"}
          skills={skills.filter((s) => s.category === "bdd")}
        />
        <VerticalList
          title={"BACKEND"}
          skills={skills.filter((s) => s.category === "backend")}
        />
        <VerticalList
          title={"CMS"}
          skills={skills.filter((s) => s.category === "cms")}
        />
      </div>
    </section>
  );
}
