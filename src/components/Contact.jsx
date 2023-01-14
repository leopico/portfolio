import React from "react";

import { contact } from "../data";
import ContactEmail from "./ContactEmail";

const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        {/*section title*/}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            You can send to me below email-form if you have any collaborate.🤨
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/*info*/}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-15 h-14 flex items-start justify-between mt-2 mb-4 lg:mb-0 text-2xl ">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1 ">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <ContactEmail />
        </div>
      </div>
    </section>
  );
};

export default Contact;
