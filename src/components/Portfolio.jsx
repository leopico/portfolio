import React from "react";

import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-tertiary min-h-[700px] ">
      <div className="xl:container px-3 xs:px-10 sm:px-24 md:px-1 mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[3rem] before:-left-3/4 before:hidden before:lg:block pb-5">
            My Portfolio Pj
          </h2>
          <p className="subtitle">
            Some projects are studied on course and some projects are designed
            by me.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
