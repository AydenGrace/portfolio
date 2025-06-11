import React from "react";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import Header from "../../components/header/Header";
import Particle from "../../components/particles/Particle";
import {Link} from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col">
      {/* <Header /> */}
      {/* <Particle /> */}
      <div className="w-full min-h-screen items-center justify-center flex flex-col z-10 gap-4">
        <h1 className="text-5xl sm:text-8xl md:text-[104px] text-secondary font-(family-name:--title-font-family) md:leading-[104px]">
          Erreur 404
        </h1>
        <div className="lg:w-1/2 w-full">
          <DotLottieReact
            src="https://lottie.host/eadbe296-447f-43e0-8e6d-d9a958296dd2/tZibSbIqhz.lottie"
            loop
            autoplay
            className="mb-4"
          />
        </div>
        <p>Oups, il semblerait que vous vous soyez perdu !</p>
        <Link
          to={"/"}
          className="bg-[#505455] p-2.5 px-4 rounded-lg mt-2 font-(family-name:--title-font-family) cursor-pointer hover:bg-[#303435] !visited:text-white !text-white"
        >
          REVENIR EN LIEU SÛR
        </Link>
      </div>
    </div>
  );
}
