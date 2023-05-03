import React from "react";

import { social } from "../data";

import Logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/*social icons*/}
          <div className="flex space-x-6  items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" key={index} href={href}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/*logo  */}
          <div>
            <img src={Logo} className="h-10 w-20" alt="" />
          </div>
          {/*copy right*/}
          <p className="text-accent">
            &copy; 2023 leopico .All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
