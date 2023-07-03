import React from "react";

// import image
import Image from "../assets/img/code-profile.jpg";
import ResumeDownload from "./ResumeDownload";

const About = () => {
  return (
    <section id="about" className="section bg-secondary ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-80 w-[500px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg-text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[3rem] before:hidden before:lg:block">
                Leopico
              </h2>
              <p className="mb-4 text-accent ">
                Freelance Front-end web developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 antialiased text-justify">
                I’m a long-time wandering at nft space and web-3 community for a
                long time. Currently, in addition to the web development field.
                I started exploring web development in the middle of 2021 and
                since then I have become addicted. I completed a large number of
                projects and gained a large number of connections in this Web-2
                and Web-3 world.Talk is very cheap 🤘🏽! You can tract upon my
                portfolio projects.
              </p>
            </div>
            <ResumeDownload />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
