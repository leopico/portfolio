import React from "react";

// import banner image
import BannerImage from "../assets/img/banner_man.jpg";
import LeftSideHero from "./LeftSideHero";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex items-center h-full pt-8">
          {/*left side*/}
          <LeftSideHero />
          {/*right side*/}
          <img
            className="h-60 w-60 rounded-full mr-10 hidden lg:block object-cover"
            src={BannerImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
