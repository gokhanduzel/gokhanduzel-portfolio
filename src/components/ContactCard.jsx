import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const ContactCard = ({
  icon,
  href,
  linkText,
  hoverColor,
  custom,
  isLink = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linkText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleLinkClick = () => {
    const confirmMessage = `You will be redirected to ${linkText}. Do you want to continue?`;
    if (window.confirm(confirmMessage)) {
      window.open(href, "_blank");
    }
  };

  const handleClick = () => {
    if (!isLink) {
      handleCopy();
    } else {
      handleLinkClick();
    }
  };

  return (
    <InView as="div" onChange={setIsVisible} threshold={0.5} triggerOnce={true} className="">
      <motion.div
        initial={{ x: 50, opacity: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
        animate={isVisible ? { x: 0, opacity: 1, boxShadow: `0 0 15px ${hoverColor}` } : {}}
        transition={{ delay: custom * 0.1, type: "spring", stiffness: 120 }}
        className="flex items-center p-3 rounded-xl space-x-4 bg-black/20 backdrop-blur-lg cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={handleClick}
      >
        <div className="text-3xl" style={{ color: hoverColor }}>
          {icon}
        </div>
        <span className="text-lg font-semibold" style={{ color: hoverColor }}>
          {linkText}
        </span>
        {!isLink && copied && (
          <span className="absolute left-full ml-2 text-sm font-semibold text-green-500">
            Copied!
          </span>
        )}
      </motion.div>
    </InView>
  );
};

export default ContactCard;
