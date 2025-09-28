import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Andrew
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300">
              Software Developer
            </p>
            <p className="text-lg text-gray-400 max-w-lg">
              Crafting innovative digital solutions with clean code and creative problem-solving
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/Andrew_Bakareke_CV.pdf"
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-full hover:bg-amber-400 hover:text-white transition-all duration-300"
            >
              About Me
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-lg opacity-20 scale-110"></div>
            <img
              src="https://avatars.githubusercontent.com/u/110696153?s=400&u=4a5ca8befac68c820d7146b755140a110caf5d52&v=4"
              alt="Andrew Bakareke"
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-amber-400/30"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-amber-400" />
      </div>
    </section>
  );
};

export default Hero;