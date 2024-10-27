import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    };

    const links = document.querySelectorAll(".scroll-link");
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      document.body.classList.toggle("full-page-scroll", isDesktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling || !document.body.classList.contains("full-page-scroll"))
        return;

      const sections = document.querySelectorAll(".full-page");
      const currentSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
      });

      if (currentSection) {
        const currentIndex = Array.from(sections).indexOf(currentSection);
        let targetIndex = currentIndex;

        if (e.deltaY > 0 && currentIndex < sections.length - 1) {
          targetIndex = currentIndex + 1;
        } else if (e.deltaY < 0 && currentIndex > 0) {
          targetIndex = currentIndex - 1;
        }

        if (targetIndex !== currentIndex) {
          isScrolling = true;
          sections[targetIndex].scrollIntoView({ behavior: "smooth" });

          setTimeout(() => {
            isScrolling = false;
          }, 500);
        }
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-ksuPurple text-white font-rubik">
      <main className="p-4">
        <div className="container mx-auto max-w-5xl">
          <section id="page1" className="full-page">
            <Header />
            <About />
            <a href="#page2" className="scroll-link arrow-right">
              ↓
            </a>
          </section>
          <section id="page2" className="full-page">
            <Skills />
            <a href="#page3" className="scroll-link arrow-right">
              ↓
            </a>
          </section>
          <section id="page3" className="full-page">
            <Projects />
            <SocialMedia />
            <Footer />
            <a href="#page1" className="scroll-link arrow-right">
              ↑
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
