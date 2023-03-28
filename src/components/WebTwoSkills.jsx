import React from "react";

import { skillsTwo } from "../data";

const WebTwoSkills = () => {
  return (
    <section className="bg-primary py-12">
      <h3 className="text-center font-bold opacity-50">Web-2 skills</h3>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-11 md:grid-flow-row">
          {skillsTwo.map((skill, index) => {
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

export default WebTwoSkills;
