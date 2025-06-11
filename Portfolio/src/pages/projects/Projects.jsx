import React from "react";
import Separator from "../../components/separator/Separator";
import ProjectCard from "../../components/projects/ProjectCard";
import projectsData from "../../data/Projects.json";
import {Outlet} from "react-router-dom";

export default function Projects() {
  return <Outlet />;
}
