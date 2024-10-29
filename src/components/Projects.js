import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Projects = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`mt-8 p-4 text-white mx-auto w-3/4 relative transition-opacity duration-1000 ${
        isIntersecting ? "fade-in-up" : "opacity-0"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <a
        href="https://github.com/AnssiPeltola/ReactRecipeSharingPlatform"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="project bg-plumpPurple p-6 rounded-lg shadow-lg mt-4 transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl">Recipe Sharing Platform</h2>
          <p>
            A full-stack web application using React, TypeScript, Node.js,
            PostgreSQL, and Passport-JWT for authentication. Users can create,
            share, and explore recipes with a responsive and user-friendly
            interface.
          </p>
          <div className="text-white font-bold flex items-center justify-center relative z-10 mt-4">
            Repository Link <FaExternalLinkAlt className="ml-2" />
          </div>
        </div>
      </a>
      <a
        href="https://github.com/AnssiPeltola/ReactWeatherFinder"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="project bg-plumpPurple p-6 rounded-lg shadow-lg mt-4 transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl">Weather Finder App</h2>
          <p>
            A weather forecasting app built with React, utilizing the
            OpenWeather API to fetch weather data for cities worldwide.
          </p>
          <div className="text-white font-bold flex items-center justify-center relative z-10 mt-4">
            Repository Link <FaExternalLinkAlt className="ml-2" />
          </div>
        </div>
      </a>
      <a
        href="https://github.com/AnssiPeltola/League-of-Legends-Random-Champions-Spin-Wheel"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="project bg-plumpPurple p-6 rounded-lg shadow-lg mt-4 transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl">
            League of Legends Random Champion Spin Wheel
          </h2>
          <p>
            An interactive web app using the LoL Champion API to randomly select
            champions. Built with JavaScript and Winwheel.js.
          </p>
          <div className="text-white font-bold flex items-center justify-center relative z-10 mt-4">
            Repository Link <FaExternalLinkAlt className="ml-2" />
          </div>
        </div>
      </a>
    </section>
  );
};

export default Projects;
