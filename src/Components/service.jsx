import React from 'react';
import { Code, Smartphone, Palette, Globe, Database, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const service = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: "Web Development",
      shortDesc: "Modern, responsive websites that drive results",
      description: "I build fast, scalable, and user-friendly websites using the latest technologies like React, Next.js, and modern CSS frameworks.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Modern UI/UX"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      price: "Starting from $800"
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile App Development",
      shortDesc: "Native and cross-platform mobile solutions",
      description: "Creating intuitive mobile applications for iOS and Android that provide seamless user experiences and robust functionality.",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Offline Functionality",
        "App Store Deployment"
      ],
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      price: "Starting from $1,200"
    },
    {
      icon: <Palette size={48} />,
      title: "UI/UX Design",
      shortDesc: "Beautiful interfaces that users love",
      description: "Designing user-centered interfaces that not only look great but also provide exceptional user experiences and drive conversions.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      price: "Starting from $600"
    },
    {
      icon: <Globe size={48} />,
      title: "E-Commerce Solutions",
      shortDesc: "Complete online store development",
      description: "Building robust e-commerce platforms with secure payment integration, inventory management, and analytics.",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Order Tracking",
        "Analytics Dashboard"
      ],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      price: "Starting from $1,500"
    },
    {
      icon: <Database size={48} />,
      title: "Backend Development",
      shortDesc: "Scalable server-side solutions",
      description: "Developing robust APIs and backend systems that can handle high traffic and complex business logic.",
      features: [
        "REST API Development",
        "Database Design",
        "Cloud Integration",
        "Security Implementation"
      ],
      technologies: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
      price: "Starting from $1,000"
    },
    {
      icon: <Zap size={48} />,
      title: "Performance Optimization",
      shortDesc: "Speed up your existing applications",
      description: "Analyzing and optimizing existing applications for better performance, faster load times, and improved user experience.",
      features: [
        "Performance Audit",
        "Code Optimization",
        "Database Tuning",
        "CDN Implementation"
      ],
      technologies: ["Lighthouse", "WebPageTest", "GTMetrix", "CloudFlare"],
      price: "Starting from $500"
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

                {/* Title & Short Description */}
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-amber-400 font-medium mb-4">{service.shortDesc}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <CheckCircle size={16} className="text-amber-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
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

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.price}</span>
                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-2 text-amber-400 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="text-sm font-medium">Get Quote</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-xl border border-slate-700 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            My{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Process
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs, goals, and project requirements"
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating detailed project timeline, wireframes, and technical specifications"
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with regular updates and feedback sessions"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, deployment, and ongoing support for your project"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-4">{process.step}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{process.title}</h4>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Project?
            </span>
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and see how I can help bring your vision to life.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg font-semibold"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default service;