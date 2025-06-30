import React from "react";

export default function Footer() {
  return (
    <div className="w-full p-[20px] flex flex-col items-center justify-center bg-antracite text-text z-10 gap-4">
      <p>CRABBÉ Pierre-Alexandre © 2025</p>
      <div className="flex flex-col">
        <p className="text-xs">SIRET : 930 777 149 00012</p>
        <p className="text-xs">N° TVA : FR25 930 777 149</p>
      </div>
    </div>
  );
}
