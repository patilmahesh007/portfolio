import React, { useState } from 'react';
import {
  Linkedin,
  Instagram,
  Menu,
  X,
  Github,
  Mail,
  Code,
  ExternalLink
} from 'lucide-react';
import profile from './assets/profile2.png';
import projectt1 from './assets/sc1 (1).png';
import projectt2 from './assets/sc1 (2).png';
import projectt3 from './assets/sc1 (3).png';
import { 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiHtml5, 
  SiCss3, 
  SiJavascript 
} from 'react-icons/si';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Website Design',
      image: projectt1,
      description:
        'A React-based frontend website with an integrated payment gateway. This project features responsive design and secure transaction processing.',
      languages: "React, Node.js, Express, MongoDB, HTML, CSS, JavaScript",
      projectType: "Frontend",
      libraries: "Lucide React, React Icons, Tailwind CSS",
      features:
        "Responsive design, integrated payment gateway, dynamic product listing, secure transactions",
      sourceCode: 'https://github.com/patilmahesh007/ecommerce-frontend',
      liveDemo: 'https://ecommerce-demo.com',
    },
    {
      id: 2,
      title: 'Portfolio Website UI/UX',
      image: projectt3,
      description:
        'A sleek portfolio website showcasing modern UI/UX designs built using contemporary web technologies.',
      languages: "React, HTML, CSS, JavaScript",
      projectType: "Frontend",
      libraries: "Tailwind CSS, React Icons",
      features: "Modern design, responsive layout, interactive UI elements",
      sourceCode: 'https://github.com/patilmahesh007/portfolio-uiux',
      liveDemo: 'https://portfolio-demo.com',
    },
    {
      id: 3,
      title: 'Mobile App Interface',
      image: projectt2,
      description:
        'A mobile app interface design focused on intuitive user interactions and responsive design for a seamless user experience.',
      languages: "React Native, JavaScript",
      projectType: "Frontend",
      libraries: "React Native Elements, React Navigation",
      features: "Smooth animations, user-friendly navigation, responsive design",
      sourceCode: 'https://github.com/patilmahesh007/mobile-app-interface',
      liveDemo: 'https://mobileapp-demo.com',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const PortfolioCard = ({ item }) => {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-rose-500/10 transition-all duration-300 group">
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <div className="flex gap-4">
              <a
                href={item.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/80 p-2 rounded-full hover:bg-rose-500 transition-colors duration-300"
              >
                <Code className="w-5 h-5" />
              </a>
              <a
                href={item.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/80 p-2 rounded-full hover:bg-rose-500 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-rose-500 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className="space-y-3">
            <div className="inline-block px-3 py-1 bg-rose-500/10 text-rose-500 text-xs font-medium rounded-full">
              {item.projectType}
            </div>

            <div className="flex flex-wrap gap-2">
              {item.features.split(', ').map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-700">
              <div className="flex flex-wrap gap-2">
                {item.languages.split(', ').map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <a
              href={item.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-rose-500 hover:underline"
            >
              Source Code
            </a>
            <a
              href={item.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-rose-500 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[#1A1A1A]/80 border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-teal-500 text-xl md:text-2xl font-bold">Mahesh</span>
            <span className="text-white text-xl md:text-2xl font-bold">Patil</span>
          </div>

          <button className="md:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div
            className={`
              fixed inset-0 bg-[#1A1A1A] flex flex-col items-center justify-center space-y-8
              transition-transform duration-300 ease-in-out md:hidden
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <a
              href="#home"
              onClick={toggleMenu}
              className="text-2xl hover:text-rose-500 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="text-2xl hover:text-rose-500 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={toggleMenu}
              className="text-2xl hover:text-rose-500 transition-colors duration-300"
            >
              Portfolio
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-rose-500 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="hover:text-rose-500 transition-colors duration-300">
              About
            </a>
            <a href="#portfolio" className="hover:text-rose-500 transition-colors duration-300">
              Portfolio
            </a>
          </div>
          <button className="hidden md:block bg-rose-500 px-6 py-2 rounded-md hover:bg-rose-600 transition-colors duration-300 shadow-lg shadow-rose-500/20">
            Hire Me
          </button>
        </div>
      </nav>

      <div className="w-full px-4 md:max-w-[80vw] mx-auto">
        <section
          id="home"
          className="container mx-auto py-8 md:py-20 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-80px)]"
        >
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm{' '}
              <span className="text-rose-500 inline-block hover:scale-105 transition-transform duration-300">
                Mahesh Patil
              </span>
              <br />a Full Stack Web Developer
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl">
              With 6 months of professional experience, I develop dynamic, responsive web applications using modern technologies such as HTML, CSS, JavaScript, React, Tailwind, GitHub, MongoDB, Node, and Express.
            </p>

            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/patilmahesh007" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-gray-400 hover:text-rose-500 hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-rose-500 hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-rose-500 hover:scale-110 transition-all duration-300" />
              </a>
              <a href="mailto:Patilmahesh4007@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-6 h-6 text-gray-400 hover:text-rose-500 hover:scale-110 transition-all duration-300" />
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-gray-400 mb-4 tracking-wider">SKILLS</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiHtml5 className="w-6 h-6 text-orange-500" />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiCss3 className="w-6 h-6 text-blue-500" />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiJavascript className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiReact className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiTailwindcss className="w-6 h-6 text-sky-500" />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiNodedotjs className="w-6 h-6 text-green-500" />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiExpress className="w-6 h-6 text-gray-500" />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiMongodb className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group w-full max-w-sm mx-auto md:max-w-md">
            <img
              src={profile}
              alt="Mahesh Patil Profile"
              className="w-full h-auto"
            />
          </div>
        </section>

        <section id="about" className="container mx-auto py-12 md:py-20">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group w-full max-w-sm mx-auto md:max-w-md order-2 md:order-1 hidden md:block">
              <img
                src={profile}
                alt="About Mahesh Patil"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6 text-center md:text-left order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Me</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I'm Mahesh Patil, a Full Stack Web Developer with 6 months of hands-on experience building modern web applications. I have a strong foundation in front-end technologies like HTML, CSS, and JavaScript and have worked with frameworks and tools such as React and Tailwind CSS. On the back-end, I utilize Node, Express, and MongoDB to create robust and scalable applications.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="container mx-auto py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <footer className="container mx-auto py-8 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-center md:space-y-0 md:space-x-12 text-gray-400">
            <div className="flex items-center group hover:text-rose-500 transition-colors duration-300">
              <span className="mr-2 group-hover:scale-110 transition-transform duration-300">📱</span>
              <div>
                <p className="font-medium">Call Me Now</p>
                <a href="tel:+918468954007" className="text-sm hover:underline">
                  +91 8468954007
                </a>
              </div>
            </div>
            <div className="flex items-center group hover:text-rose-500 transition-colors duration-300">
              <span className="mr-2 group-hover:scale-110 transition-transform duration-300">📍</span>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm">Pune, India</p>
              </div>
            </div>
            <div className="flex items-center group hover:text-rose-500 transition-colors duration-300">
              <span className="mr-2 group-hover:scale-110 transition-transform duration-300">✉️</span>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:Patilmahesh4007@gmail.com" className="text-sm hover:underline">
                  Patilmahesh4007@gmail.com
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6">
            &copy; {new Date().getFullYear()} Mahesh Patil. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
