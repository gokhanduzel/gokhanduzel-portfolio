import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import TypingAnimation from "../components/TypingAnimation";
import "./Home.css";
import profileImage from "../assets/IMG_7893.jpg";
import { Link } from "react-scroll";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const messages = [
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
  ];

  return (
    <div className="section home text-white overflow-hidden flex flex-col items-center justify-center min-h-screen pt-24">
      <div className="w-64">
        <motion.img
          src={profileImage}
          alt="Profile"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-4 border-blue-300 rounded-lg border-dashed"
        />
      </div>

      <div
        className="z-10 p-5 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h1 className="text-6xl font-bold mb-3 text-transparent">
          Hi, I'm <span>Gökhan</span>
        </h1>
        <div className="text-3xl md:text-4xl lg:text-4xl font-light">
          <TypingAnimation messages={messages} />
        </div>
        <p className="text-xl max-w-md mx-auto leading-relaxed">
          From the capital of Canada, creating software that powers tomorrow.
        </p>
        <div className="mt-10">
          <Link
            to="resume"
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-6 py-3 rounded-full shadow-lg mr-4 hover:scale-105 active:scale-95 transition-transform duration-200 inline-block"
          >
            View my CV
          </Link>
          <Link
            to="contact"
            className="border-2 cursor-pointer border-cyan-500 px-6 py-3 rounded-full shadow-lg text-white hover:scale-105 active:scale-95 transition-transform duration-200 inline-block"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
