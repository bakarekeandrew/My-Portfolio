import React from 'react';
import { Code2, Lightbulb, Users, Zap, Download, Award, BookOpen, Coffee } from 'lucide-react';

const about = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "React & Next.js", level: 95 },
    { name: "JavaScript/TypeScript", level: 88 },
    { name: "UI/UX Design", level: 85 },
    { name: "Mobile Development", level: 80 },
    { name: "Backend Development", level: 75 }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Code2 size={24} /> },
    { number: "2+", label: "Years Experience", icon: <Award size={24} /> },
    { number: "30+", label: "Happy Clients", icon: <Users size={24} /> },
    { number: "100%", label: "Client Satisfaction", icon: <Zap size={24} /> }
  ];

  const values = [
    {
      icon: <Code2 size={32} />,
      title: "Clean Code",
      description: "I believe in writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description: "Working closely with clients and teams to ensure projects exceed expectations."
    },
    {
      icon: <Zap size={32} />,
      title: "Performance",
      description: "Optimizing every aspect of development for speed, efficiency, and user experience."
    }
  ];

  const interests = [
    { icon: <BookOpen size={20} />, text: "Learning new technologies" },
    { icon: <Code2 size={20} />, text: "Open source contributions" },
    { icon: <Coffee size={20} />, text: "Tech meetups & conferences" },
    { icon: <Users size={20} />, text: "Mentoring junior developers" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">My Story</h3>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I am an enthusiastic and dedicated software engineering student with a strong passion for developing innovative solutions. 
                  My journey in technology began with curiosity and has evolved into a commitment to creating impactful digital experiences.
                </p>
                <p className="text-lg leading-relaxed">
                  Detail-oriented and quality-focused, I strive to write clean and maintainable code that stands the test of time. 
                  As a continuous learner, I am always eager to expand my knowledge and stay updated with the latest technologies and industry best practices.
                </p>
                <p className="text-lg leading-relaxed">
                  With excellent communication and collaboration skills, I thrive in team environments where creativity and innovation flourish. 
                  My passion for leveraging technology to create innovative solutions is coupled with strong problem-solving and debugging abilities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/Andrew_Bakareke_CV.pdf"
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-amber-400 text-amber-400 px-6 py-3 rounded-full hover:bg-amber-400 hover:text-white transition-all duration-300"
                >
                  Let's Work Together
                </button>
              </div>
            </div>

            {/* Interests */}
            {/* <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">When I'm Not Coding</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="text-amber-400">
                      {interest.icon}
                    </div>
                    <span>{interest.text}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-amber-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            {/* <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-amber-400 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            My{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Values
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="text-amber-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <BookOpen size={24} className="text-amber-400" />
              Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-amber-400 pl-6 relative">
                <div className="absolute w-3 h-3 bg-amber-400 rounded-full -left-2 top-1"></div>
                <h4 className="text-lg font-semibold text-white">Software Engineering</h4>
                <p className="text-amber-400 font-medium">University/Institution</p>
                <p className="text-gray-400 text-sm">2022 - Present</p>
                <p className="text-gray-300 mt-2">
                  Focusing on modern software development practices, algorithms, data structures, 
                  and full-stack web development.
                </p>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <Zap size={24} className="text-amber-400" />
              Current Focus
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium">Advanced React Development</h4>
                  <p className="text-gray-400 text-sm">Mastering React 18, Next.js 14, and modern state management</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium">Cloud Technologies</h4>
                  <p className="text-gray-400 text-sm">Learning AWS, Docker, and microservices architecture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium">Mobile Development</h4>
                  <p className="text-gray-400 text-sm">Expanding skills in React Native and Flutter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;