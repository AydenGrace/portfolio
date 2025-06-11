import React from "react";
import BlurText from "../../../components/bits/BlurText";

export default function Title() {
  return (
    <section className="w-100 mh-screen f-center">
      <div className="flex flex-col text-center">
        <h1 className="font-(family-name:--title-font-family) text-6xl sm:text-[128px] text-secondary ">
          PORTFOLIO
        </h1>
        {/* <BlurText
          text="PORTFOLIO"
          delay={25}
          animateBy="letters"
          direction="bottom"
          className="font-(family-name:--title-font-family) text-6xl sm:text-[128px] text-secondary"
        /> */}
        <h2 className="font-(family-name:--title-font-family) text-4xl sm:text-[40px] text-text">
          UX/UI Designer & Web Developer
        </h2>
      </div>
    </section>
  );
}
