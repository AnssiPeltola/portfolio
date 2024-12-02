import React from "react";
import { FaCode, FaTools, FaCloud } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tooltip from "@mui/material/Tooltip";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const getProficiencyLabel = (level) => {
  if (level >= 96) return "Expert";
  if (level >= 76) return "Advanced";
  if (level >= 51) return "Intermediate";
  return "Beginner";
};

const SkillCard = ({ icon, title, skills }) => (
  <div className="skill bg-plumpPurple p-4 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300 border-gradient flex-grow relative">
    <div className="flex flex-col items-center mb-4">
      <div className="bg-customOrange text-white p-3 rounded-full mb-2">
        {icon}
      </div>
      <h2 className="text-xl text-center w-full">{title}</h2>
    </div>
    <div className="flex flex-wrap justify-center gap-2 w-full">
      {skills.map((skill, index) => (
        <Tooltip
          key={index}
          title={`Proficiency in ${skill.name}: ${getProficiencyLabel(
            skill.level
          )}`}
          arrow
        >
          <div className="flex flex-col items-center w-20">
            <div className="w-10 h-10 mb-1">
              <CircularProgressbar
                value={skill.level}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#FFA500",
                  trailColor: "#666666",
                })}
              />
            </div>
            <span className="text-xs text-center break-words">
              {skill.name}
            </span>
          </div>
        </Tooltip>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  const skillsData = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Languages & Frameworks",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "HTML", level: 90 },
        { name: "SCSS/CSS", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Redux", level: 75 },
        { name: "REST API", level: 85 },
        { name: "Python", level: 60 },
        { name: "Flutter", level: 60 },
        { name: "C#", level: 70 },
        { name: "Angular", level: 75 },
        { name: "SQL", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "Passport-JWT", level: 65 },
        { name: "Phaser 3", level: 50 },
      ],
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Tools & Software",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 95 },
        { name: "Docker", level: 65 },
        { name: "VS Code", level: 90 },
        { name: "GitHub Copilot", level: 90 },
        { name: "ChatGPT", level: 90 },
        { name: "Flyway", level: 80 },
        { name: "DBeaver", level: 75 },
        { name: "Postman", level: 85 },
        { name: "Redis", level: 70 },
        { name: "CMD", level: 80 },
        { name: "Dev Console", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "Unity", level: 65 },
      ],
    },
    {
      icon: <FaCloud className="text-2xl" />,
      title: "Cloud & Integration",
      skills: [
        { name: "Firebase", level: 75 },
        { name: "Boomi", level: 50 },
        { name: "WebSocket", level: 65 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`my-8 p-4 text-white mx-auto w-3/4 relative transition-opacity duration-1000 ${
        isIntersecting ? "fade-in-up" : "opacity-0"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Skills</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {skillsData.map((category, index) => (
          <SkillCard
            key={index}
            icon={category.icon}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
