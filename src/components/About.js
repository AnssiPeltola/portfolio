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
              src={`${process.env.PUBLIC_URL}/profile.png`}
              alt="Anssi Peltola"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <p className="mt-4">
        I'm a software developer and Information Systems student based in
        Tampere, Finland. I enjoy turning ideas into working software, solving
        interesting problems, and learning new technologies along the way. My
        main interests are{" "}
        <strong>
          full-stack development, web development, and software engineering.
        </strong>
      </p>

      <p className="mt-3">
        I work across modern frontend and backend technologies including React,
        Next.js, TypeScript, Node.js, PostgreSQL, and cloud and integration
        services. I enjoy building practical applications where frontend
        experiences, APIs, databases, authentication, and external services come
        together as one complete product.
      </p>

      <h2 className="text-2xl font-bold mt-6">About Me</h2>

      <p className="mt-2">
        Before moving into software development, I spent nearly a decade working
        in the culinary industry. That background taught me how to work under
        pressure, collaborate with different people, solve problems quickly, and
        take responsibility for the quality of my work.
      </p>

      <p className="mt-3">
        I later transitioned into software development to pursue my interest in
        technology and problem-solving. Since fall 2025, I have been studying
        for a{" "}
        <strong>
          Bachelor of Business Administration in Information Systems
        </strong>{" "}
        at Tampere University of Applied Sciences (TAMK), combining formal
        studies with hands-on software projects and professional experience.
      </p>

      <p className="mt-3">
        I enjoy working in collaborative environments and continuously improving
        the way I build software, including the use of modern development tools
        and AI-assisted workflows for debugging, refactoring, research, and
        development.
      </p>

      <h2 className="text-2xl font-bold mt-6">Experience</h2>

      <p className="mt-2">
        <strong>Devolution - Trainee:</strong> Developed a web-based version of
        a mobile application using React, TypeScript, and Firebase as part of a
        four-person Agile team. I also served as Scrum Master, helping
        coordinate sprint planning, development work, and team communication.
      </p>

      <p className="mt-3">
        <strong>Gavon - Trainee:</strong> Contributed to a web-based application
        using Angular, TypeScript, Phaser 3, and PostgreSQL. My work included
        REST API integration, database management, and real-time data handling
        as part of a development team.
      </p>
    </section>
  );
};

export default About;
