import React from 'react';
import { Code, Smartphone, Palette, Globe, Database, Zap } from 'lucide-react';

const Service = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: "Web Development",
      description: "Building fast, scalable, and user-friendly websites using React, Next.js, and modern CSS frameworks.",
      technologies: ["React", "Next.js", "TypeScript", "Javascript", "Tailwind CSS"]
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile App Development",
      description: "Creating intuitive mobile applications for iOS and Android with seamless user experiences.",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      icon: <Palette size={48} />,
      title: "UI/UX Design",
      description: "Designing user-centered interfaces that look great and provide exceptional user experiences.",
      technologies: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      icon: <Server size={48} />,
      title: "Backend Development",
      description: "Building secure, scalable APIs and backend systems with robust business logic and database integration.",
      technologies: ["Java", "Spring Boot", "Node.js", "Express.js"]
    },
    {
      icon: <Database size={48} />,
      title: "Database Solutions",
      description: "Designing, developing, and optimizing secure and scalable database systems for modern applications.",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis","Others"]
    },
    {
      icon: <Zap size={48} />,
      title: "Performance Optimization",
      description: "Optimizing applications for better performance, faster load times, and improved user experience.",
      technologies: ["Lighthouse", "WebPageTest", "CloudFlare"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
            I help bring your ideas to life with cutting-edge technology and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800 rounded-full text-xs text-amber-400 border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;