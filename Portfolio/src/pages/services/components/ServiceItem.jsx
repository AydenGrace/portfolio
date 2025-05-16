import React from "react";

export default function ServiceItem({ title = "TEST", desc, icon, idx }) {
  return (
    <div className="bg-[#2D2D2D] flex px-4 py-6 rounded-2xl flex-col w-[300px] h-[300px] gap-3">
      <img src={icon} alt={title} width={48} />
      <h3 className="text-secondary font-(family-name:--title-font-family) uppercase text-xl">
        {title}
      </h3>
      <p>{desc}</p>
      <div className="flex w-full flex-fill justify-end items-end text-end text-transparent font-outline-1 font-(family-name:--title-font-family) text-[40px]">
        <p>0{idx}</p>
      </div>
    </div>
  );
}
