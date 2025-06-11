import React from "react";
import Separator from "../../../components/separator/Separator";
import ProjectCard from "../../../components/projects/ProjectCard";
import projectsData from "../../../data/Projects.json";

export default function AllProjects() {
  return (
    <div className="d-flex flex-column align-items-center p-top-header z-10">
      <Separator number={1} />
      <h1 className="sectionTitle">MES PROJETS</h1>
      <section className="flex flex-wrap p-10 gap-10 items-center justify-center mb-4">
        {projectsData.map((project, idx) => (
          <ProjectCard key={`Project_${idx}`} project={project} />
        ))}
      </section>
    </div>
  );
}
