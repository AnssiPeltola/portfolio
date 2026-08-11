import React from "react";
import {
  FaCode,
  FaTools,
  FaCloud,
  FaDatabase,
  FaLayerGroup,
  FaGraduationCap,
  FaRobot,
} from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const SkillCard = ({ icon, title, skills }) => (
  <div className="skill bg-plumpPurple p-5 rounded-lg shadow-lg transform hover:scale-[1.02] transition duration-300 border-gradient">
    <div className="flex flex-col md:flex-row md:items-center gap-5">
      <div className="flex items-center gap-3 md:w-1/3 md:min-w-[220px]">
        <div className="bg-customOrange text-white p-3 rounded-full shrink-0">
          {icon}
        </div>

        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="flex flex-wrap gap-2 md:flex-1">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-black/20 px-3 py-2 rounded-md text-sm transition duration-200 hover:bg-customOrange"
          >
            {skill}
          </span>
        ))}
      </div>
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
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "C#", "Python", "Java"],
    },
    {
      icon: <FaLayerGroup className="text-2xl" />,
      title: "Web & Frameworks",
      skills: [
        "React",
        "Next.js",
        "Angular",
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "Databases",
      skills: ["PostgreSQL", "SQL", "Firebase", "Neon", "SQLite Cloud"],
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Flyway", "CLI"],
    },
    {
      icon: <FaCloud className="text-2xl" />,
      title: "Cloud & Integration",
      skills: ["AWS", "Firebase", "Boomi"],
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Familiar With",
      skills: ["Redis", "WebSockets", "Django"],
    },
    {
      icon: <FaRobot className="text-2xl" />,
      title: "AI-Assisted Development",
      skills: [
        "ChatGPT",
        "GitHub Copilot",
        "AI-assisted Debugging",
        "Code Review & Refactoring",
        "Prompting & Context Engineering",
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
      <h1 className="text-3xl font-bold text-center mb-3">
        Skills & Technologies
      </h1>

      <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
        Technologies and tools I use for full-stack development, software
        engineering, databases, and cloud integrations.
      </p>

      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        {skillsData.map((category) => (
          <SkillCard
            key={category.title}
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
