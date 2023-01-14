import React from "react";
import { Link } from "react-scroll";

// import image
import Image from "../assets/img/about_man.jpg";

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
                Freelance Blockchain development
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8  ">
                Talk is very cheap 🤘🏽! You can tract upon my portfolio projects.
              </p>
            </div>

            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all rounded-full">
              👇🏽👇🏽👇🏽
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
