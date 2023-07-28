import React, { useEffect, useState } from "react";
import { projectsData } from "../data";
import { projectsNav } from "../data";
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((d) => {
        return d.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/*nav*/}
      <nav className="mb-12 max-w-2xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <li
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-3 text-sm`}
                onClick={(e) => handleClick(e, index)}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/*projects grid*/}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
