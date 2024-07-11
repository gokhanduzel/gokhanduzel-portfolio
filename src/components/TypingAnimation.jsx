import React, { useState, useEffect } from "react";

const TypingAnimation = ({
  messages,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000,
}) => {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((currentText) =>
          currentText.substring(0, currentText.length - 1)
        );
        setSpeed(deletingSpeed);
      }, speed);
    } else {
      timer = setTimeout(() => {
        const currentMessage = messages[messageIndex];
        setText(
          (currentText) =>
            currentText + currentMessage.charAt(currentText.length)
        );
        setSpeed(typingSpeed);
      }, speed);
    }

    if (!isDeleting && text === messages[messageIndex]) {
      setIsDeleting(true);
      setSpeed(delayBetweenWords);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setSpeed(typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    messages,
    messageIndex,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span style={{ visibility: text ? "visible" : "hidden" }}>
      {text || " "}
    </span>
  );
};

export default TypingAnimation;
