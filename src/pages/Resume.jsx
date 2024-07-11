import React from "react";
import { useInView } from "react-intersection-observer";
import resumeFile from "../assets/gokhan_duzel_CV.pdf";

const ResumeItem = ({ children, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate delay based on index
  const delay = index * 0.2; // 0.3 seconds delay per item

  return (
    <div
      ref={ref}
      className="transition-opacity duration-700 ease-in-out"
      style={{
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}s`, // Apply dynamic delay
      }}
    >
      {children}
    </div>
  );
};

const Resume = () => {
  return (
    <div className="section">
      <h2 className="z-10 pt-10 resume pb-12 relative text-3xl font-extrabold text-center mb-8">
        Sum of My Resume
      </h2>
      <div className="min-h-screen bg-cover m-4 border-2 rounded-xl py-16 px-4 sm:px-8 lg:px-16">
        <div className="mx-auto ">
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="z-10">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-8">
                <ResumeItem index={0}>
                  <div>
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="mr-2">🎓</span> University of Ottawa
                      (Ottawa, CA)
                    </h4>
                    <p className="text-gray-600">
                      Bachelor of Software Engineering
                    </p>
                    <p className="text-gray-600">September 2018 – June 2023</p>
                  </div>
                </ResumeItem>
                <ResumeItem index={1}>
                  <div>
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="mr-2">📚</span> Istanbul Saint Joseph
                      French Highschool
                    </h4>
                    <p className="text-gray-600">Highschool Diplome</p>
                    <p className="text-gray-600">September 2013 – June 2018</p>
                  </div>
                </ResumeItem>
                <ResumeItem index={2}>
                  <div>
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="mr-2">💻</span> IBM Full-Stack Software
                      Developer Certificate Program
                    </h4>
                    <p className="text-gray-600">Coursera</p>
                    <p className="text-gray-600">
                      Course program: Cloud Computing, HTML,CSS3, Git & GitHub,
                      JavaScript ES5/ES6, React, Node.js, TypeScript, Express,
                      Python, Flask, SQL, Django, Docker, Kubernetes, OpenShift,
                      Microservices and Serverless.
                    </p>
                  </div>
                </ResumeItem>
              </div>
            </div>
            <div className="z-10">
              <h3 className="text-2xl font-bold mb-4">My Experience</h3>
              <div className="space-y-8">
                <ResumeItem index={3}>
                  <div>
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="mr-2">💼</span> Software Infrastructure
                      Student Engineer
                    </h4>
                    <div className="flex flex-row justify-between text-gray-300">
                      <p>Ford Motor Company</p>
                      <p>Ottawa, Canada</p>
                    </div>
                    <p className="text-gray-600">05 2022 – 09 2022</p>
                    <p className="text-gray-600">
                      Automated and enhanced testing processes for smart car
                      communication using Python, significantly improving system
                      reliability and operational efficiency.
                    </p>
                  </div>
                </ResumeItem>
                <ResumeItem index={4}>
                  <div>
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="mr-2">💼</span> Front-end Developer
                      (React Native)
                    </h4>
                    <div className="flex flex-row justify-between text-gray-300">
                      <p>University of Ottawa</p>
                      <p>Ottawa, Canada</p>
                    </div>
                    <p className="text-gray-600">05 2021 – 09 2021</p>
                    <p className="text-gray-600">
                      Led the front-end development of the UOttawa Co-op
                      Navigator mobile app, enhancing user experience and
                      maintaining code quality.
                    </p>
                  </div>
                </ResumeItem>
                <ResumeItem index={5}>
                  <div>
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="mr-2">💼</span> Web Developer
                    </h4>
                    <div className="flex flex-row justify-between text-gray-300">
                      <p>University of Ottawa</p>
                      <p>Ottawa, Canada</p>
                    </div>
                    <p className="text-gray-600">09 2020 – 12 2020</p>
                    <p className="text-gray-600">
                      Contributed to the development of the "Ventus" academic
                      management portal, enhancing functionality and user
                      engagement through effective code management and database
                      optimization.
                    </p>
                  </div>
                </ResumeItem>
                <ResumeItem index={6}>
                  <div>
                    <h4 className="text-xl font-semibold flex items-center">
                      <span className="mr-2">💼</span> Junior Web Developer
                    </h4>
                    <div className="flex flex-row justify-between text-gray-300">
                      <p>Acibadem Healthcare Group</p>
                      <p>Istanbul, Turkey</p>
                    </div>
                    <p className="text-gray-600">01 2020 – 05 2020</p>
                    <p className="text-gray-500">
                      Enhanced the employer website for improved user experience
                      and functionality, integrating modern web technologies and
                      managing database systems efficiently.
                    </p>
                  </div>
                </ResumeItem>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <ResumeItem index={7}>
              <a
                href={resumeFile}
                download="Gokhan_Duzel_Resume.pdf"
                className="relative bg-gray-800 text-cyan-400 px-6 py-3 rounded-full shadow-lg transform transition duration-200 hover:bg-gray-700 active:bg-gray-600 hover:scale-105 active:scale-100 hover:shadow-xl active:shadow-md"
              >
                Download CV
              </a>
            </ResumeItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
