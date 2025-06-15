import React from "react";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import { BallBg } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto z-10" id="hero">

    <BallBg />

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-96 lg:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Aishwarya.</span>
          </h1>
          <h6 className={`lg:text-5xl sm:text-xl md:text-2xl mt-2 text-white-100`}>
            I do
            <Typewriter
              options={{
                strings: ["Full-stack Development", "DevOps", "API Integrations", "Frontend Development"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Hero;
