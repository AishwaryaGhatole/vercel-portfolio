import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  const toggleResume = () => {
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  useEffect(() => {
    if (toggle) setActive("");
  }, [toggle]);

  return (
    <nav className="w-full fixed top-0 z-50 bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="#hero"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className="w-9 h-9 bg-no-repeat bg-contain pointer-events-none"
              style={{ backgroundImage: `url(${logo})` }}
              ></div>

              <span className="font-bold text-xl">
                AISHWARYA <span className="hidden sm:inline">GHATOLE</span>
              </span>
          </Link>

          {/* Desktop Menu */}
          <motion.ul 
          initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 0.07 }} 
                className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                
                className={`${
                  active === link.title ? "text-white" : "text-gray-300"
                } hover:text-white text-lg font-medium cursor-pointer`}
                onClick={()=>{
                  const sound = new Audio(`${link.sound}`)
                  sound.volume = 0.5;
                  sound.play()
                }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)
                  }
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <button
                onClick={toggleResume}
                className="bg-tertiary text-white py-1 px-4 rounded hover:bg-opacity-90 transition"
              >
                Resume
              </button>
            </li>
          </motion.ul>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setToggle(!toggle)}>
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-7 h-7 object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {toggle && (
          <div
            className="md:hidden bg-black text-white px-6 py-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${link.id}`}
                  className="block text-lg"
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                    
                  }}
                >
                  {link.title}
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <button
                onClick={toggleResume}
                className="w-full bg-tertiary py-2 rounded text-white hover:bg-opacity-90 transition"
              >
                Resume
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
