import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ksuPurple text-white font-rubik">
      <main className="pt-32 p-4">
        <Header />
        <div className="container mx-auto max-w-5xl">
          <About />
          <Skills />
          <Projects />
          <SocialMedia />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
