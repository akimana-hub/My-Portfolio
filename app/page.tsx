'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Mail,
  MapPin,
  Code,
  Palette,
  BarChart3,
  Cloud,
  Briefcase,
  User,
  Award,
  Calendar,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  Globe,
  Layers,
  Zap,
  Settings
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive and modern websites using HTML, Tailwind CSS, JavaScript.",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces that provide exceptional user experiences using Tools like Figma and Canva.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "DevOps",
      description: "Passionate about exploring cloud technologies with a growing focus on Amazon Web Services (AWS). Enthusiastic about leveraging services like EC2, S3, IAM, and Lambda to build scalable, secure, and efficient applications.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Business Analysis",
      description: "Skilled in gathering and analyzing business requirements, creating detailed documentation, and facilitating clear communication between technical and non-technical stakeholders.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-amber-500"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "BookHive (E-Commerce Platform)",
      description: "Modern e-commerce solution with advanced features",
      category: "Web Development",
      image: "/bookhive.png",
      tags: ["E-commerce", "Web Development", "UI/UX"],
      icon: <Globe className="w-5 h-5 text-purple-600" />,
      link: "https://bookhive.firedevs.in/"
    },
    {
      id: 2,
      title: "Advertisement",
      description: "UI UX design for Donuts advertisement",
      category: "UI/UX",
      image: "/donut.png",
      tags: ["Design", "Advertisement", "Branding"],
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      link: "https://www.figma.com/proto/Rb228sL8swTQjJmApoIqa7/donuts?node-id=2-2"
    },
    {
      id: 3,
      title: "Shoe Advertisement",
      description: "Intuitive mobile application interface design",
      category: "UI/UX",
      image: "/shoe.png",
      tags: ["Mobile Design", "UI/UX", "Product"],
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      link: "https://www.figma.com/design/DLSPkme69U1CJr7jHSvJ8M/FIRST-FIGMA-FILE?node-id=0-1"
    }
  ];

  const experience = [
    {
      title: "BUSINESS ANALYST INTERN",
      company: "Alobha Technologies",
      duration: "(December 2024 - January 2025)",
      description: "Gained valuable experience in documentation, requirement gathering, and market research. Improved analytical and communication skills through practical exposure to real-world projects.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const stats = [
    {
      number: "8.7",
      label: "CGPA",
      icon: <Award className="w-6 h-6 text-purple-800" />
    },
    {
      number: "5+",
      label: "Programming Tools",
      icon: <Settings className="w-6 h-6 text-purple-800" />
    },
    {
      number: "1 month",
      label: "Internship Experience",
      icon: <Calendar className="w-6 h-6 text-purple-800" />
    }
  ];

  return (
    <div className="bg-purple-50 min-h-screen">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">PORTFOLIO</div>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-purple-700 hover:text-purple-900 font-medium transition-colors duration-200">{item}</a>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-purple-700 p-2 rounded-lg hover:bg-purple-100 transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-3 px-4 text-purple-700 hover:text-purple-900 hover:bg-purple-50 font-medium" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300/15 rounded-full blur-md"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
          <div className="text-center">
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              ANAMIKA<br />
              <span className="text-purple-200">KUMARI</span>
            </h1>
            <p className="text-purple-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Creative designer & developer crafting beautiful digital experiences
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-full hover:bg-purple-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-4xl font-bold text-purple-800">
                  HELLO<br />
                  I&#39;M ANAMIKA
                </h2>
              </div>
              <p className="text-purple-700 mb-6 leading-relaxed">
                I am a third-year B.Tech student in Computer Science. My passion lies in creating innovative and user-friendly digital experiences. I am proficient in HTML, CSS, and JavaScript and experienced with backend technologies like SQL and MongoDB. I enjoy the process of transforming ideas into tangible products and have a keen eye for design and detail.
              </p>
              <p className="text-purple-600 mb-8 leading-relaxed">
                My approach combines strategic thinking with creative execution, ensuring that every project not only 
                looks amazing but also achieves its intended goals. I believe in the power of good design to transform 
                businesses and connect with audiences on a deeper level.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-purple-800">{stat.number}</div>
                    <div className="text-purple-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-100 mx-auto overflow-hidden rounded-full bg-gradient-to-br from-purple-200 to-purple-300 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image 
                  src={"/anamikaimg.jpg"}
                  alt="Profile Picture"
                  width={500}
                  height={384}
                  className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative gradient element */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-60 blur-sm"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-28 h-28 bg-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-lg"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              MY SKILLS
            </h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              I specialize in front-end development, UI/UX design, full-stack web development, and cloud computing, delivering seamless, user-centric digital experiences powered by scalable cloud solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-purple-100 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Layers className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-purple-800 mb-4">MY PROJECTS</h2>
          <p className="text-purple-600 max-w-2xl mx-auto">
            A selection of my recent projects that showcase my skills and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                {/* Overlay with category badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.icon}
                    <span className="text-purple-600 text-sm font-medium">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                {/* Project Description */}
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium hover:bg-purple-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* View Project Link */}
                <a 
                  href={project.link}
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors group"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-28 h-28 bg-purple-400/20 rounded-full blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              WORK EXPERIENCE<br />
              <span className="text-purple-200">& JOURNEY</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">{exp.company}</h4>
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-4 h-4 text-purple-200" />
                      <p className="text-purple-100 font-medium">{exp.duration}</p>
                    </div>
                    <p className="text-purple-100 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-4xl font-bold text-purple-800">LET&#39;S WORK TOGETHER</h2>
              </div>
              <p className="text-purple-600 mb-8 leading-relaxed">
                Ready to bring your vision to life? I&#39;d love to hear about your project and explore how we can create something amazing together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Mail className="text-purple-600" size={20} />
                  </div>
                  <span className="text-purple-700 font-medium">anamikakumari0428@gmail.com</span>
                </div> 
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <span className="text-purple-700 font-medium">Delhi, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
  <h3 className="text-lg font-semibold text-purple-800 mb-4">Connect with me</h3>
  <div className="flex space-x-4">
    {/* GitHub */}
    <a 
      href="https://github.com/akimana-hub" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-purple-100 rounded-xl hover:bg-purple-200 transition-colors cursor-pointer"
    >
      <Github className="w-5 h-5 text-purple-600" />
    </a>

    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/in/anamika-kumari-541650219/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-purple-100 rounded-xl hover:bg-purple-200 transition-colors cursor-pointer"
    >
      <Linkedin className="w-5 h-5 text-purple-600" />
    </a>  
  </div>
</div>

            </div>  
            <div className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <textarea 
                  rows={5}
                  placeholder="Your Message" 
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none transition-all duration-200"
                ></textarea>
              </div>
              <button 
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 w-full justify-center"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-purple-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="p-2 bg-white/10 rounded-lg">
                <Star className="w-5 h-5 text-white" />
              </div>
              <p className="text-purple-200">© 2024 Anamika Kumari. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-2 text-purple-200">
              <span>Made with</span>
              <div className="text-red-400">❤️</div>
              <span>by Anamika</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-full shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-110">
          <ExternalLink size={20} />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;