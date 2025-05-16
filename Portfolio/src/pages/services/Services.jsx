import React from "react";
import Separator from "../../components/separator/Separator";
import ServiceItem from "./components/ServiceItem";
import ServicesData from "../../data/Services.json";

export default function Services() {
  return (
    <div className="d-flex flex-column align-items-center p-top-header min-h-screen z-10">
      <Separator number={1} />
      <h1 className="sectionTitle">MES SERVICES</h1>
      <section className="w-full flex flex-fill flex-wrap p-x-10 py-10 gap-10 justify-center">
        {ServicesData.map((s, idx) => (
          <ServiceItem
            key={idx}
            title={s.title}
            desc={s.desc}
            icon={s.icon}
            idx={idx + 1}
          />
        ))}
      </section>
    </div>
  );
}
