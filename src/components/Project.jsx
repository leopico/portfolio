import React from "react";

const Project = ({ item }) => {
  const gitRepo = {
    href: item.link,
    target: "_blank",
  };
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded"
    >
      <div className="mb-5">
        <img className="p-2 rounded-xl" src={item.image} alt="" />
      </div>
      <p className="capitalize text-secondary font-semibold text-sm mb-3">
        {item.category}
      </p>
      <h6 className="text-1xl text-tertiary subtitle font-semibold capitalize mb-3">
        {item.name}
      </h6>
      <p className="text-sm text-white mb-3">{item.description}</p>
      <button className="btn btn-md bg-tertiary hover:bg-accent-hover transition-all rounded-full mb-3">
        <a {...gitRepo}>
          <b className="">clone repo</b>
        </a>
      </button>
    </div>
  );
};

export default Project;
