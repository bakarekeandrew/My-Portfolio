import Nav from "./nav";
import Hero from "./hero";
import About from "./about";
import Service from "./service";
import Contact from "./contact";
import Projects from "./Projects";

const Main = () => {
  return (
    <>
      <div id="main" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="pt-8">
          <Nav />
        </div>
        <Hero />
        <About />
        <Projects />
        <Service />
        <Contact />
        <div className="text-center py-8">
          <h1 className="text-2xl font-semibold">© 2025 Andrew. All rights reserved.</h1>
        </div>
      </div>
    </>
  );
};

export default Main;