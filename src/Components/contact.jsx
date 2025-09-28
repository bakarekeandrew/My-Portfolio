import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Facebook, Mail, ExternalLink, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'andrew.bakareke@email.com',
      link: 'mailto:andrew.bakareke@email.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+250 xxx xxx xxx',
      link: 'tel:+250xxxxxxx'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Kigali, Rwanda',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/bakarekeandrew',
      color: 'hover:bg-gray-700',
      username: '@bakarekeandrew'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/bakareke-andrew-307991249/',
      color: 'hover:bg-blue-700',
      username: 'Andrew Bakareke'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: '#',
      color: 'hover:bg-sky-700',
      username: '@andrewdev'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      url: '#',
      color: 'hover:bg-blue-600',
      username: 'Andrew Bakareke'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="bg-slate-900/50 backdrop-blur-md rounded-xl p-6 shadow-xl border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center gap-4">
                <div className="text-amber-400 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{info.title}</h3>
                  <p className="text-gray-400 group-hover:text-amber-400 transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg focus:border-amber-400 focus:outline-none transition-colors duration-300 text-white"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg focus:border-amber-400 focus:outline-none transition-colors duration-300 text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg focus:border-amber-400 focus:outline-none transition-colors duration-300 text-white"
                  placeholder="Project discussion, collaboration, etc."
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg focus:border-amber-400 focus:outline-none transition-colors duration-300 text-white resize-none"
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  required
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links & Additional Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">Connect With Me</h3>
              <p className="text-gray-400 mb-8">
                Follow me on social media for updates on my latest projects, tech insights, and behind-the-scenes content.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-slate-800 p-4 rounded-lg ${social.color} transition-all duration-300 flex items-center gap-4 group`}
                  >
                    <span className="text-amber-400 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </span>
                    <div className="flex-1">
                      <span className="text-white font-medium block">{social.name}</span>
                      <span className="text-gray-400 text-sm">{social.username}</span>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-white">Availability</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white">Available for new projects</span>
                </div>
                <div className="text-gray-400 text-sm">
                  <p className="mb-2">• Response time: Within 24 hours</p>
                  <p className="mb-2">• Working hours: 9 AM - 6 PM (CAT)</p>
                  <p>• Preferred project duration: 2-12 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;