import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SafeReport (Web + API)",
      category: "Full-Stack",
      description: "A crime and incident reporting platform with a Spring Boot backend and React frontend.",
      highlights: [
        "REST APIs with Spring Boot and PostgreSQL",
        "JWT authentication and role-based access control",
        "Optimized database schemas and SQL queries"
      ],
      technologies: ["React", "Spring Boot", "PostgreSQL", "JWT"],
      github: "https://safereport5.vercel.app/",
      live: true
    },
    {
      title: "SafeReport Mobile",
      category: "Mobile",
      description: "Cross-platform citizen-facing mobile client for real-time reporting and updates.",
      highlights: [
        "Multi-screen navigation and state management in Flutter",
        "Role-based views matching backend RBAC permissions"
      ],
      technologies: ["Flutter", "Dart", "REST APIs"],
      github: null,
      live: null
    },
    {
      title: "Car Sharing Application",
      category: "Full-Stack",
      description: "A car-sharing platform with bookings, vehicle listings, and user management.",
      highlights: [
        "NestJS backend services and APIs",
        "Authentication and authorization",
        "Built with Git and Agile practices"
      ],
      technologies: ["React", "NestJS", "MongoDB"],
      github: null,
      live: null
    },
    {
      title: "Disaster Management System",
      category: "Full-Stack",
      description: "A disaster reporting and response platform for citizens, coordinators, and administrators.",
      highlights: [
        "Role-based access for three user types",
        "Responsive React interfaces",
        "PostgreSQL schema and relationship design"
      ],
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      github: null,
      live: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of web, mobile, and backend systems I've designed and built.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 flex flex-col"
            >
              <span className="text-xs uppercase tracking-wider text-amber-400 mb-3">
                {project.category}
              </span>
              <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>

              <ul className="text-gray-300 text-sm space-y-2 mb-6">
                {project.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-800 rounded-full text-xs text-amber-400 border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links pinned to the bottom of the card */}
              <div className="mt-auto flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm text-gray-300 hover:text-amber-400 transition-colors">
                    <Github size={18} /> Link
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm text-gray-300 hover:text-amber-400 transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;