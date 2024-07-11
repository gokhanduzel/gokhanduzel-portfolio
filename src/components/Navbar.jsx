import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    if (currentPosition < 10) {  // Adjust this threshold as needed
      setIsVisible(true);  // Ensure navbar is visible when near the top of the page
    } else if (scrollPosition > currentPosition) {
      setIsVisible(true);
    } else if (scrollPosition < currentPosition) {
      setIsVisible(false);
    }
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-30 bg-gradient-to-r bg-black/30 backdrop-blur-md text-white shadow-lg transition-transform duration-300 rounded-lg ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-[130%]"
      } max-w-screen-xl mx-auto`}
    >
      <div className="px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="font-bold">
              <Link to="home" className="text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-3xl hidden md:block cursor-pointer">
                &lt; Gökhan Düzel
              </Link>
              <Link to="home" className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl md:hidden cursor-pointer">
                &lt; GD
              </Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="flex">
              <div className="flex items-center">
                <h1 className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold text-cyan-500">
                  className = {"{"}
                </h1>
              </div>
              <div className="xl:ml-10 lg:ml-3 md:ml-2 flex items-baseline space-x-4">
                {[
                  "Home",
                  "About",
                  "Resume",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((item) => (
                  <Link
                    key={item}
                    activeClass="active"
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-3 py-1 md:px-0 rounded-md xl:text-xl lg:text-md md:text-lg sm:text-xs font-medium cursor-pointer hover:underline underline-offset-2 hover:drop-shadow-yellowGlow decoration-cyan-500 transition-colors duration-500"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="flex items-center md:mr-1 lg:mr-6 xl:mr-10 xl:ml-10 lg:ml-3 md:ml-2">
                <h1 className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold text-cyan-500">
                  {"}"}
                </h1>
              </div>
              <div className="flex items-center">
                <h1 className="text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl font-bold">
                  / &gt;
                </h1>
              </div>
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-1 rounded-md text-white hover:text-white hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-500 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="flex items-center">
              <h1 className="ml-12 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold text-cyan-500">
                className = {"{"}
              </h1>
            </div>
            <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 ml-24">
              {["Home", "About", "Resume", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    activeClass="active"
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block text-base font-medium cursor-pointer hover:bg-cyan-200"
                    style={{ padding: "8px 16px", borderRadius: "8px" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
            <div className="ml-12 flex items-center md:mr-1 lg:mr-6 xl:mr-10 xl:ml-10 lg:ml-3 md:ml-2">
              <h1 className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold text-cyan-500">
                {"}"}
              </h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-xl pb-4 sm:text-md md:text-xl lg:text-2xl xl:text-3xl font-bold">
                /&gt;
              </h1>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
