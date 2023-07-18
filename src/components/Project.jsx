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
      className="flex flex-col items-center text-center bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded"
    >
      <div className="mb-5 w-full">
        <img
          className="p-2 rounded-xl w-full"
          src={item.image}
          alt=""
          style={{ height: "200px" }}
        />
      </div>
      <div>
        <p className="capitalize text-secondary font-semibold text-sm mb-3">
          {item.category}
        </p>
        <h6 className="text-1xl text-tertiary subtitle font-semibold capitalize mb-3">
          {item.name}
        </h6>
        <p className="text-[12px] sm:text-sm text-white mb-3 text-justify p-1">
          {item.description}
        </p>
      </div>
      <div className="flex flex-row justify-evenly space-x-14 ">
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
  );
};

export default Project;
