import React from "react";
import Separator from "../../../components/separator/Separator";
import ProjectCard from "../../../components/projects/ProjectCard";
import projectsData from "../../../data/Projects.json";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import {Link} from "react-router-dom";

export default function WIP() {
  return (
    <div className="d-flex flex-column min-h-screen align-items-center p-top-header z-10">
      <div className="w-full items-center justify-center flex flex-col z-10 gap-4 px-4 text-center">
        <h1 className="text-5xl sm:text-8xl md:text-[104px] text-secondary font-(family-name:--title-font-family) md:leading-[104px]">
          Travail en cours
        </h1>
        <div className="lg:w-1/2 w-full">
          <DotLottieReact
            src="https://lottie.host/d061b4aa-4302-428c-b68d-70c06993e288/CUV5deYTrT.lottie"
            loop
            autoplay
            className="mb-4"
          />
        </div>
        <p>Oups, il semblerait que cette page soit en cours de rédaction !</p>
        <Link
          to={"/projects"}
          className="bg-[#505455] p-2.5 px-4 rounded-lg mt-2 font-(family-name:--title-font-family) cursor-pointer hover:bg-[#303435] !visited:text-white !text-white"
        >
          REVENIR AUX PROJETS
        </Link>
      </div>
    </div>
  );
}
