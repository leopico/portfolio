import React from "react";

import { FiGithub } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";

const Project = ({ item }) => {
  const gitRepo = {
    href: item.github,
    target: "_blank",
  };
  const link = {
    href: item.link,
    target: "_blank",
  };
  return (
    <div
      key={item.id}
      className="bg-[#1A2332] p-3 lg:p-5 rounded-xl space-y-2 text-center"
    >
      <img
        alt="pj-img"
        src={item.image}
        fill
        className="object-cover w-full h-40 xs:h-48 rounded-lg"
      />
      <div className="text-white flex flex-col h-auto sm:h-64">
        <div className="flex-none">
          <p className="capitalize font-semibold text-sm mb-3">
            {item.category}
          </p>
        </div>
        <div className="flex-none">
          <h6 className="text-lg subtitle font-semibold capitalize mb-3">
            {item.name}
          </h6>
        </div>
        <div className="flex-none md:grow">
          <p className="text-[12px] sm:text-sm mb-3 text-start p-1">
            {item.description}
          </p>
        </div>
        <div className="flex flex-row justify-evenly space-x-14 flex-none">
          <button className="btn btn-md bg-tertiary hover:bg-accent-hover transition-all rounded-full mb-3">
            <a {...link}>
              <AiOutlineLink />
            </a>
          </button>
          <button className="btn btn-md bg-tertiary hover:bg-accent-hover transition-all rounded-full mb-3">
            <a {...gitRepo}>
              <FiGithub />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
