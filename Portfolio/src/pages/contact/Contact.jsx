import React from "react";

export default function Contact() {
  return (
    <main className="w-full min-h-screen flex flex-col z-10">
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-[20%] text-center">
        <h1 className="text-[104px] text-secondary font-(family-name:--title-font-family) leading-[104px]">
          ENVIE DE PARLER D'UN PROJET ?
        </h1>
        <p className="text-[40px] font-(family-name:--title-font-family)">
          Je serais ravi de lire votre message !
        </p>
      </section>
      <form className="w-full min-h-screen flex flex-col items-center justify-center px-[20%] text-center gap-4">
        <div className="flex flex-col w-full items-center mb-4">
          <h2 className="text-[40px] text-secondary font-(family-name:--title-font-family)">
            FORMULAIRE DE CONTACT{" "}
          </h2>
          <div className="separatorLine max-w-[500px]"></div>
        </div>
        {/* INPUT AREA */}
        <div className="flex flex-col items-start gap-1 w-full max-w-[700px]">
          {" "}
          <label htmlFor="name" className="">
            Votre nom <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className="bg-[#252525] rounded-lg w-full text-text border-text/50 border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary min-w-[300px] placeholder:opacity-60 placeholder:italic"
            placeholder="John Doe"
          />
        </div>
        {/* INPUT AREA */}
        <div className="flex flex-col items-start gap-1 w-full max-w-[700px]">
          {" "}
          <label htmlFor="email" className="">
            Votre email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="bg-[#252525] rounded-lg w-full text-text border-text/50 border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary min-w-[300px]  placeholder:opacity-60 placeholder:italic"
            placeholder="john.doe@gmail.com"
          />
        </div>
        {/* INPUT AREA */}
        <div className="flex flex-col items-start gap-1 w-full max-w-[700px]">
          {" "}
          <label htmlFor="message" className="">
            Votre message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            autoComplete="email"
            className="bg-[#252525] rounded-lg w-full text-text border-text/50 border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary min-w-[300px] placeholder:opacity-60 placeholder:italic min-h-[150px]"
            placeholder="J'ai un projet en tête..."
          />
        </div>
        {/* INPUT AREA */}
        <div className="relative flex items-center gap-1 w-full max-w-[700px] text-primary">
          {" "}
          <input
            type="checkbox"
            id="rgpd"
            value={""}
            className="relative peer appearance-none w-4 h-4 bg-[#252525] rounded border border-text cursor-pointer text-secondary checked:bg-secondary checked:text-primary"
          />
          <label htmlFor="rgpd" className="text-text">
            Votre message <span className="text-red-400">*</span>
          </label>
          <svg
            className="absolute left-0 w-4 h-4 mt-1 hidden peer-checked:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </form>
    </main>
  );
}
