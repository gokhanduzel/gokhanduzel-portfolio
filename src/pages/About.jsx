import React from "react";
import {
  FaUserGraduate,
  FaCode,
  FaUsers,
  FaToolbox,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Importing necessary icons
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import ContactCard from "../components/ContactCard";

const About = () => {
  const controls = useAnimation();
  const descriptionControls = useAnimation();

  const softSkills = [
    {
      icon: <FaToolbox className="text-3xl mr-2" />,
      title: "Detail-Oriented",
      description:
        "I ensure high precision in all software development phases.",
    },
    {
      icon: <FaUserGraduate className="text-3xl mr-2" />,
      title: "Independent Learner",
      description: "Continuously exploring new technologies and techniques.",
    },
    {
      icon: <FaUsers className="text-3xl mr-2" />,
      title: "Team Collaboration",
      description: "Known for enhancing team dynamics and productivity.",
    },
    {
      icon: <FaCode className="text-3xl mr-2" />,
      title: "Problem Solver",
      description: "Quick and efficient at diagnosing and resolving issues.",
    },
  ];

  return (
    <div className="section min-h-screen py-16 px-4 sm:px-8 lg:px-16 bg-cover">
      <div className="max-w-screen-lg mx-auto text-center flex flex-col">
        <h2 className="text-3xl relative about pb-4 font-extrabold text-white mb-8">
          About Me
        </h2>
        <div className="flex flex-col  lg:flex-row">
          <InView
            as="div"
            onChange={(inView) => {
              if (inView) {
                descriptionControls.start("visible");
              }
            }}
            threshold={0.5}
            triggerOnce={true}
          >
            <motion.div
              initial="hidden"
              animate={descriptionControls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.5, ease: "easeOut" },
                },
                hidden: {
                  opacity: 0,
                  y: 100,
                  transition: { duration: 1.5, ease: "easeOut" },
                },
              }}
            >
              <div className="text-left space-y-6 text-white">
                <span className="relative text-xl">
                  Hello, I'm{" "}
                  <span className="text-2xl underline underline-offset-2 decoration-cyan-500 drop-shadow-whiteGlow">
                    Gökhan Düzel,
                  </span>
                </span>
                <p className="relative text-xl leading-relaxed">
                  A dedicated software engineer based in Ottawa, ON, with a
                  proven track record of crafting cutting-edge software
                  solutions that elevate user experiences and optimize
                  operational efficiency. My educational foundation in Software
                  Engineering, combined with extensive practical experience,
                  enables me to tackle the most challenging technical problems
                  with innovative approaches and robust solutions. My passion
                  for technology is not just about building systems but about
                  making a tangible impact on businesses and individuals through
                  intelligent and scalable software architectures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-12">
                  {softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gradient-to-r bg-black/30 backdrop-blur-md rounded p-4 hover:scale-105 hover:rotate-1 hover:shadow-lg cursor-pointer"
                    >
                      {skill.icon}
                      <div>
                        <h4 className="text-xl font-bold">{skill.title}</h4>
                        <p>{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </InView>
          <div className="flex flex-col items-center mt-12 p-4 gap-10 lg:ml-32 lg:items-end lg:gap-20 rounded-lg">
            {[
              {
                icon: <FaEnvelope />,
                text: "gduzel@icloud.com",
                hoverColor: "#E63946",
                isLink: false,
              },
              {
                icon: <FaPhone />,
                text: "+1 (819) 329-5602",
                hoverColor: "#2A9D8F",
                isLink: false,
              },
              {
                icon: <FaLinkedin />,
                text: "LinkedIn profile",
                href: "https://linkedin.com/in/gokhan-duzel/",
                hoverColor: "#0077B5",
                isLink: true,
              },
              {
                icon: <FaGithub />,
                text: "GitHub profile",
                href: "https://github.com/GokhanDuzel",
                hoverColor: "#6C757D",
                isLink: true,
              },
            ].map((item, index) => (
              <ContactCard
                key={index}
                icon={item.icon}
                linkText={item.text}
                href={item.href}
                hoverColor={item.hoverColor}
                isLink={item.isLink}
                custom={index} // Staggering delay based on index
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
