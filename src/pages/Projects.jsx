import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

import swapsHome from "../assets/swaps/swaps_home.png";
import swapsChat from "../assets/swaps/swaps_chat.png";
import swapsCreateHonda from "../assets/swaps/swaps_createhonda.png";
import swapsCreateItem from "../assets/swaps/swaps_createitem.png";
import swapsEditItem from "../assets/swaps/swaps_edititem.png";
import swapsItemDetails from "../assets/swaps/swaps_itemdetails.png";
import swapsLogin from "../assets/swaps/swaps_login.png";
import swapsProfileItem from "../assets/swaps/swaps_profileitem.png";
import swapsRegister from "../assets/swaps/swaps_register.png";
import swapsSearchSwaps from "../assets/swaps/swaps_searchswaps.png";
import swapsSwapRequest from "../assets/swaps/swaps_swaprequest.png";

import cruzrChat from "../assets/cruzr/cruzr_chat.png";
import cruzrCreateListing from "../assets/cruzr/cruzr_createlisting.png";
import cruzrHome from "../assets/cruzr/cruzr_home.png";
import cruzrProfile from "../assets/cruzr/cruzr_profile.png";
import cruzrRegister from "../assets/cruzr/cruzr_register.png";
import cruzrSearch from "../assets/cruzr/cruzr_search.png";

import bestcarDealerships from "../assets/bestcars/dealerships.png";
import bestcarDetails from "../assets/bestcars/dealership_details.png";
import bestcarContact from "../assets/bestcars/contact_us.png";

const projects = [
  {
    name: "Swaps",
    description:
      "SWAPS is a full-stack web application designed to facilitate item swapping and trading among users, incorporating advanced features like real-time chat using Socket.io, item listings, user profiles, and swap requests. The app leverages React for a dynamic front end and Node.js for a scalable back end, integrates AWS S3 for image storage, uses Google Maps API for location-based searches, and includes robust security features for user authentication and secure transactions.",
    images: [
      swapsHome,
      swapsChat,
      swapsCreateHonda,
      swapsCreateItem,
      swapsEditItem,
      swapsItemDetails,
      swapsLogin,
      swapsProfileItem,
      swapsRegister,
      swapsSearchSwaps,
      swapsSwapRequest,
    ],
    technologies: [
      "React",
      "Node.js",
      "Redux",
      "JS",
      "MongoDB",
      "S3",
      "Google Maps API",
      "SocketIO",
    ],
  },
  {
    name: "Cruzr",
    description:
      "CRUZR is a comprehensive car marketplace platform developed using Node.js and React with TypeScript, ensuring type safety and scalability. It features a MongoDB database with Mongoose schemas, RESTful API integration, and Redux for state management. The application enhances user interaction through real-time chat functionalities, secure session management, and an intuitive image handling system with Cloudinary. It is deployed on Heroku for reliable web accessibility.",
    images: [
      cruzrHome,
      cruzrRegister,
      cruzrSearch,
      cruzrChat,
      cruzrProfile,
      cruzrCreateListing,
    ],
    technologies: ["React", "Node.js", "TypeScript", "Cloudinary", "Heroku"],
  },
  {
    name: "BestCar",
    description:
      "This project involved creating a full-stack web application for reviewing car dealerships, utilizing Django and Python for the backend, and JavaScript for the frontend. It integrates IBM Watson NLU for sentiment analysis, employs IBM Cloudant for database services, and uses Docker and Kubernetes for containerization and deployment. The platform provides a responsive user interface and efficient data handling through RESTful APIs, offering detailed insights into dealership performance.",
    images: [bestcarDealerships, bestcarDetails],
    technologies: [
      "Python",
      "JS",
      "Django",
      "HTML",
      "CSS",
      "Docker",
      "Kubernetes",
      "IBM Cloudant",
    ],
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    fade: true,
    pauseOnHover: false,
  };

  const handleProjectChange = (index) => {
    setCurrentProjectIndex(index);
    sliderRef.current.slickGoTo(0); // Optionally reset to the first slide of the new project
  };

  return (
    <div className="section py-16 px-12 sm:px-16 lg:px-24 text-white">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="relative projects text-3xl font-extrabold my-8 mb-20">
          Featured Projects
        </h2>
        <div className="flex justify-center mb-8 relative">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectChange(index)}
              className={`mx-2 mb-16 md:mx-4 lg:mx-10 px-4 py-2 text-white ${
                index === currentProjectIndex
                  ? "bg-cyan-500"
                  : "bg-gray-800 hover:bg-cyan-300"
              } active:scale-90 active:bg-cyan-400 transition-colors duration-300 rounded-xl`}
            >
              {project.name}
            </button>
          ))}
        </div>

        <Slider ref={sliderRef} {...settings}>
          {projects[currentProjectIndex].images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-72 md:h-full lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-8 transition-opacity duration-500 ease-in-out hover:bg-transparent">
                <div className="text-left">
                  <h3 className="text-sm md:text-2xl lg:text-2xl font-bold text-white">
                    {projects[currentProjectIndex].name}
                  </h3>
                  <p className="mt-2 project-description">
                    {projects[currentProjectIndex].description}
                  </p>
                  <div className="mt-4 flex flex-wrap">
                    {projects[currentProjectIndex].technologies.map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="m-1 bg-orange-400 rounded-full px-2 py-1 text-xs/3"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
