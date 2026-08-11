import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const projects = [
  {
    title: "BeerDex",
    subtitle: "Beer Catalog & Collection",
    href: "https://github.com/AnssiPeltola/BeerDex",
    description:
      "A full-stack beer catalog and collection web application where users can browse beers, maintain personal collections, and contribute new beers, breweries, and beer styles through a moderation workflow.",
    tech: "Next.js · React · TypeScript · PostgreSQL · Drizzle ORM · NextAuth · Sharp · Cloudinary",
  },
  {
    title: "GraffSnap",
    subtitle: "Graffiti Sighting Tracker",
    href: "https://github.com/AnssiPeltola/GraffSnap",
    description:
      "A mobile-first web application for tracking and documenting graffiti sightings. Users can explore sightings on an interactive map, while authenticated users can add new locations with photos, notes, and device location data.",
    tech: "Next.js · React · TypeScript · PostgreSQL · Drizzle ORM · Leaflet · Neon · Cloudinary · Vercel",
  },
  {
    title: "Recipe Sharing Platform",
    subtitle: "Full-Stack Recipe Platform",
    href: "https://github.com/AnssiPeltola/ReactRecipeSharingPlatform",
    description:
      "A full-stack recipe-sharing platform where users can create, discover, and manage recipes while interacting with a growing community. Features include authentication, profiles, favorites, comments, advanced search, filtering, pagination, RecipeSwiper, and OpenFoodFacts ingredient search.",
    tech: "React · TypeScript · Redux · Node.js · PostgreSQL · JWT Authentication",
  },
  {
    title: "WalkJournal",
    subtitle: "Walking Tracker",
    href: "https://github.com/AnssiPeltola/WalkJournal",
    description:
      "A full-stack walking tracker that logs sessions, visualizes weekly and monthly walking trends, and maps long-term progress through interactive maps, heatmaps, route timelines, and progress dashboards.",
    tech: "Next.js · TypeScript · Tailwind CSS · Leaflet · SQLite",
  },
  {
    title: "TrackDuel",
    subtitle: "Music Discovery Platform",
    href: "https://github.com/AnssiPeltola/TrackDuel",
    description:
      "A React-based music discovery platform where users discover new music through head-to-head song battles, build personalized collections, and export selected tracks directly to Spotify playlists.",
    tech: "React · JavaScript · Spotify API",
  },
  {
    title: "MeetUpHelper",
    subtitle: "Group Calendar",
    href: "https://github.com/AnssiPeltola/MeetUpHelper",
    description:
      "A group calendar application for organizing events and meetups, combining shared calendars with group chat functionality, real-time notifications, event management, and Dockerized backend services.",
    tech: "Flutter · Dart · Django · Python · PostgreSQL · WebSocket · Docker",
  },
  {
    title: "Weather Finder",
    subtitle: "Weather Application",
    href: "https://github.com/AnssiPeltola/ReactWeatherFinder",
    description:
      "A React weather application that uses the OpenWeather API to provide weather forecasts for cities around the world.",
    tech: "React · JavaScript · OpenWeather API",
  },
  {
    title: "Lunch Discord Bot",
    subtitle: "Automated Lunch Menu Bot",
    href: "https://github.com/AnssiPeltola/LunchDiscordBot",
    description:
      "A Discord bot that automatically fetches and posts daily and weekly lunch menus for TPA Mortteli. It supports scheduled menu posting, slash commands, and a vacation sleep mode.",
    tech: "Python · Discord API",
  },
];

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

      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="project bg-plumpPurple p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold">{project.title}</h2>

              <p className="text-lg mb-3">{project.subtitle}</p>

              <p>{project.description}</p>

              <p className="mt-4">
                <span className="font-bold">Tech stack:</span> {project.tech}
              </p>

              <div className="text-white font-bold flex items-center justify-center relative z-10 mt-4">
                Repository Link
                <FaExternalLinkAlt className="ml-2" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
