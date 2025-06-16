import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const isMobile = window.innerWidth < 768;
const MotionWrapper = isMobile ? React.Fragment : motion.div

const TechnologyCard = ({ index, name, icon, link }) => (
  <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] pb-10">
    <Tilt
      options={{
        max: 25,
        scale: 1,
        speed: 400,
      }}
    >
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.1, 0.6)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[250px] flex justify-evenly items-center flex-col">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={icon}
              alt={name}
              className="w-16 h-16 object-contain"
              loading="lazy"
            />
          </a>
          <h3 className="text-white text-[18px] font-bold text-center mt-4">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  </div>
);

const Tech = () => (
  <>
    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      id="skills"
      className="scroll-mt-32"
    >
      <p className={`${styles.sectionSubText} text-center`}>
        Foundational Knowledge I hold
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
    </motion.div>

    <div className="mt-16 flex flex-wrap gap-6 justify-center">
      {technologies.map((tech, index) => (
        <TechnologyCard key={tech.id} index={index} {...tech} />
      ))}
    </div>
  </>
);


export default SectionWrapper(Tech, "");
