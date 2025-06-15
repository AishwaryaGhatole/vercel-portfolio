import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        id='about'
      >
        I'm an Engineering student at SGBAU, Maharashtra, with a strong drive for full-stack development 
        and solving real-world problems through tech. I'm a multilingual communicator who blends analytical
        thinking with creativity whether I’m writing code or collaborating across teams. With a deep curiosity 
        for how things work and how they can work better, I’m passionate about building scalable, intuitive web 
        solutions that make an impact. I'm always eager to learn, iterate, and grow both as a developer and 
        a teammate. I'm confident that my enthusiasm and drive will help me succeed in any role that leverages 
        my passion for technology.
      </motion.p>

        <div className="flex items-center mt-7">
          <div className="w-5 h-5 m-2 rounded-full bg-[#915EFF]" />
          <div className="w-[55%] sm:h-1 h-1 violet-gradient" />
        </div>

    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
