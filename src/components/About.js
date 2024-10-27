import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mb-8 p-4 text-white mx-auto w-3/4 relative z-20"
    >
      <div className="text-center">
        <div className="relative inline-block">
          <div className="absolute -top-5 left-0 right-0 flex justify-center z-20 overflow-visible">
            <svg viewBox="0 0 400 150" className="w-full h-full">
              <path
                id="curve"
                d="M 60, 120 Q 200, 10 340, 120"
                fill="transparent"
              />
              <text width="400" className="text-white text-2xl font-bold">
                <textPath
                  xlinkHref="#curve"
                  startOffset="50%"
                  textAnchor="middle"
                  fill="white"
                >
                  Hello, I'm Anssi Peltola!
                </textPath>
              </text>
            </svg>
          </div>

          <div className="w-48 h-48 md:w-96 md:h-96 mt-10 z-10 relative mx-auto">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <p className="mt-2">
        I'm a software developer based in Tampere, Finland, with a diverse
        background in full-stack development and a passion for delivering
        innovative solutions. My focus is on building robust and scalable web
        applications, and I’m best with{" "}
        <strong>React, TypeScript, Node.js, and PostgreSQL.</strong> I'm always
        eager to learn and apply new technologies to enhance my skills and
        create impactful projects.
      </p>
      <h2 className="text-2xl font-bold mt-4">About Me</h2>
      <p className="mt-2">
        After nearly a decade in the culinary industry, I transitioned into
        software development to pursue my passion for technology and
        problem-solving. My experience spans modern front-end and back-end
        technologies, and I thrive in collaborative, Agile-driven environments
        that focus on meaningful, real-world solutions.
      </p>
      <p className="mt-2">
        Currently, I'm focusing on developing a full-stack recipe-sharing
        platform with React that allows users to create, modify, and share their
        favorite recipes. My experience includes working on various personal
        projects, internships, and client work, giving me a strong foundation in
        creating scalable and responsive web applications.
      </p>
      <h2 className="text-2xl font-bold mt-4">Experience</h2>
      <p className="mt-2">
        <strong>Devolution (Trainee):</strong> Developed a web-based version of
        a mobile app using React, TypeScript, and Firebase, serving as Scrum
        Master for a four-member team. I led sprint planning and team
        communication, gaining hands-on experience in Agile methodologies.
      </p>
      <p className="mt-2">
        <strong>Gavon (Trainee):</strong> Contributed to game development using
        Phaser 3, Angular, TypeScript, and PostgreSQL. I gained practical skills
        in database management, REST API development, and handling real-time
        data.
      </p>
    </section>
  );
};

export default About;
