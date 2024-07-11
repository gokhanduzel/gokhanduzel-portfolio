import React from "react";

const Footer = () => {
  return (
    <footer className="z-10 relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center text-sm p-4">
      <p>
        &copy; {new Date().getFullYear()} Gökhan Düzel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
