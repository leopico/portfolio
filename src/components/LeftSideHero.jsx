import React from "react";
import TypeWriter from "typewriter-effect";
import WhatsAppBtn from "./WhatsAppBtn";

const LeftSideHero = () => {
  return (
    <div className="flex-1 flex flex-col items-center lg:items-start">
      <p className="text-lg text-accent mb-[15px]">
        Hey, I'm <b>Leo</b> ! 👋🏽
      </p>
      <small className="text-lg text-accent mb-[22px]">
        <b>I'm a</b>
      </small>
      <p className="text-lg text-accent mb-[22px] ">
        <TypeWriter
          options={{
            strings: [
              " junior blockchain developer 🤩",
              " passionate on learning about web-3...👊🏽",
              " Father of 🙅🏼‍♀️",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
      <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center ls:text-left">
        I build blockchain development and front-end for web interfaces. 😺I am
        very passion on blockchain field.
      </p>
      <WhatsAppBtn />
    </div>
  );
};

export default LeftSideHero;
