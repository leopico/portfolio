import React from "react";

import { skillsThree } from "../data";

const WebThreeSkills = () => {
  return (
    <section className="bg-tertiary py-12">
      <h3 className="text-center font-bold opacity-50">Web-3 skills</h3>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-2 md:grid-flow-row">
          {skillsThree.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img
                  src={skill.image}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebThreeSkills;
