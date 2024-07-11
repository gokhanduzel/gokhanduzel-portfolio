import React from "react";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_co496ut",
        "template_771uoav",
        e.target,
        "y_NH6cBhC7vsiXIPr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="section min-h-screen flex flex-col items-center pb-24">
      <h1 className="relative text-3xl font-bold text-center mt-10 mb-14 lg:mb-32">Contact Me</h1>
      <div className="max-w-screen-lg w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="relative contact text-2xl font-extrabold text-center mb-8">
            Let's Connect
          </h2>
          <p className="relative text-lg mb-8 text-center lg:text-start">
            I'm eager to explore opportunities that can leverage my skills in
            creating innovative software solutions. If you have projects or
            roles that align with my expertise, don't hesitate to reach out!
          </p>
          <div className="relative mb-12 text-center lg:text-start">
            <p className="text-lg font-semibold">Location:</p>
            <p className="mb-8">Ottawa, ON, Canada</p>
            <p className="text-lg font-semibold">Call:</p>
            <p> +1 (819) 329-5602</p>
          </div>
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            {[
              {
                icon: <FaLinkedinIn />,
                href: "https://www.linkedin.com/in/gokhan-duzel/",
              },
              { icon: <FaGithub />, href: "https://github.com/GokhanDuzel" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                <div className="text-3xl cursor-pointer transform hover:scale-125 transition-transform duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div
          ref={ref}
          className={`relative transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl font-extrabold text-center mb-8">
            Send a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-500"
              >
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="100"
                required
                className="text-black mt-1 p-2 w-full border border-gray-500 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-yellow-600 transition-shadow duration-300 hover:shadow-md"
              />
              <span className="text-gray-700">{name.length}/100</span>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-500"
              >
                Your Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength="100"
                required
                className="text-black mt-1 p-2 w-full border border-gray-500 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-yellow-600 transition-shadow duration-300 hover:shadow-md"
              />
              <span className="text-gray-700">{email.length}/100</span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-500"
              >
                Your Message:
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength="500"
                required
                rows="4"
                className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-yellow-600 transition-shadow duration-300 hover:shadow-md"
              ></textarea>
              <span className="text-gray-700">{message.length}/500</span>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-96 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg transform transition-all hover:scale-110 hover:shadow-2xl active:scale-95 active:bg-gray-700"
              >
                Send <span className="text-cyan-400">➤</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
