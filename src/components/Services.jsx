import React from "react";

import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-primary">
      <div className="container mx-auto">
        {/*section title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[3rem] before:-left-28 before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">
            Developing secure and decentralized web applications for clients &
            SEO.
          </p>
        </div>
      </div>
      {/*item grid */}
      <div className="grid lg:grid-cols-2 gap-8 p-3">
        {services.map((service, index) => {
          return (
            <div className="bg-secondary p-6 rounded-2xl" key={index}>
              <div className="text-accent rounded-sm w-12 h-12 flex jsutify-center mb-24 text-[28px]">
                {service.icon}
              </div>
              <h4 className="text-xl font-medium mb-2">{service.name}</h4>
              <p className="text-[12px] sm:text-sm md:text-base">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
