import React, { useState, useEffect } from "react";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-red-600 text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-6xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-600 text-6xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-500 text-6xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-600 text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-6xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-600 text-6xl" /> },
  { name: "AWS", icon: <FaAws className="text-orange-600 text-6xl" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-600 text-6xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-6xl" />,
  },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-600 text-6xl" /> },
  { name: "Linux", icon: <FaLinux className="text-orange-400 text-6xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-6xl" /> },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const skillsRef = useRef(null);

  const [radius, setRadius] = useState(window.innerWidth < 768 ? 150 : 300);
  const [iconSize, setIconSize] = useState(
    window.innerWidth < 768 ? "text-4xl" : "text-8xl"
  );

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 150 : 300);
      setIconSize(window.innerWidth < 768 ? "text-4xl" : "text-8xl");
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const diameter = radius * 2;

  const circleStyle = {
    width: `${diameter}px`,
    height: `${diameter}px`,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const clockHandStyle = {
    position: "absolute",
    height: "4px",
    width: `${radius * 0.75}px`,
    background:
      "linear-gradient(to right, transparent 60%, #123 50%, #333 100%)", // Making the first half invisible
    transformOrigin: "0% 50%",
    transform: `rotate(${index * (360 / skills.length)}deg)`,
    left: "50%",
    zIndex: 10,
  };

  const arrowTipStyle = {
    width: "10px",
    height: "10px",
    backgroundColor: "#456",
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // Maintaining arrow shape
    position: "absolute",
    top: "-3px",
    right: "-10px",
    transform: "rotate(90deg)", // Rotating the arrow tip
    boxShadow: "2px 2px 8px rgba(0,0,0,0.4)",
    border: "1px solid #333",
  };

  useEffect(() => {
    // Single IntersectionObserver to start the animation and set timer when component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          startTimer(); // Start rotating skills only when the component is visible
          observer.disconnect(); // Ensure this is only set once
        }
      },
      { threshold: 0.7 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Cleanup function to clear the timer and stop observing
    return () => {
      clearInterval(timer);
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skillsRef.current]); // Dependency on the ref's current property

  // Timer management in a separate function
  const startTimer = () => {
    clearInterval(timer); // Clear any existing timer first
    const newTimer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2500);
    setTimer(newTimer);
  };

  // Manage active skill selection
  useEffect(() => {
    setActiveSkill(skills[index]);
  }, [index]);

  // Handler for manual skill selection
  const handleSkillSelect = (i) => {
    clearInterval(timer); // Ensure to clear the existing timer
    setIndex(i); // Update the index to the selected skill
    startTimer(); // Restart the timer with the new skill index
  };

  return (
    <div
      ref={skillsRef}
      className="section skills-container flex flex-col items-center min-h-screen"
    >
      <div className="mb-32 mt-12">
        <h1 className="relative skills text-3xl font-extrabold text-center animate-fadeIn">
          Skills and technologies
        </h1>
      </div>
      <div style={circleStyle}>
        {skills.map((skill, i) => {
          const angle = i * (360 / skills.length) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isActive = skill === activeSkill;
          const iconClassName = isActive
            ? "text-teal-300 text-4xl md:5xl lg:text-6xl "
            : "text-cyan-300/50 hover:text-cyan-200 text-4xl md:5xl lg:text-6xl active:text-teal-500";
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }} // Start scaled down
              animate={startAnimation ? { opacity: 1, scale: 1 } : {}} // Animate to full size and opacity
              transition={{ delay: i * 0.1 }}
              style={{
                position: "absolute",
                translateX: `${x}px`,
                translateY: `${y}px`,
                transform: "translate(-50%, -50%)", // Keep this transformation separate
              }}
              onClick={() => handleSkillSelect(i)}
            >
              {React.cloneElement(skill.icon, {
                className: `${iconClassName} cursor-pointer active:scale-90 transition-transform duration-150 ease-in-out`,
              })}
            </motion.div>
          );
        })}
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: skills.length * 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="mr-3 z-20 flex items-center justify-center">
              {React.cloneElement(activeSkill.icon, {
                className:
                  `skill-icon ${iconSize} ` +
                  activeSkill.icon.props.className.split(" ")[0],
              })}
            </div>
            <div style={clockHandStyle} className="">
              <div style={arrowTipStyle}></div> {/* Arrow tip added here */}
            </div>
            <p className="text-2xl z-20 text-white drop-shadow-whiteGlow">
              {activeSkill.name}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Skills;
