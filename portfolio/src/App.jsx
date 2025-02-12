import React, { useState } from 'react';
import {
  Linkedin,
  Facebook,
  Instagram,
  Menu,
  X
} from 'lucide-react';
import profile from './assets/profile2.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Website Design',
      image: 'https://via.placeholder.com/400x320',
    },
    {
      id: 2,
      title: 'Portfolio Website UI/UX',
      image: 'https://via.placeholder.com/400x320',
    },
    {
      id: 3,
      title: 'Mobile App Interface',
      image: 'https://via.placeholder.com/400x320',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[#1A1A1A]/80 border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-teal-500 text-xl md:text-2xl font-bold">Mahesh</span>
            <span className="text-white text-xl md:text-2xl font-bold">Patil</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`
            fixed inset-0 bg-[#1A1A1A] flex flex-col items-center justify-center space-y-8
            transition-transform duration-300 ease-in-out md:hidden
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <a href="#home" onClick={toggleMenu} className="text-2xl hover:text-rose-500 transition-colors duration-300">
              Home
            </a>
            <a href="#about" onClick={toggleMenu} className="text-2xl hover:text-rose-500 transition-colors duration-300">
              About
            </a>
            <a href="#portfolio" onClick={toggleMenu} className="text-2xl hover:text-rose-500 transition-colors duration-300">
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
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

      <div className='w-full px-4 md:max-w-[80vw] mx-auto'>
        {/* Home Section */}
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-rose-500 hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-rose-500 hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-rose-500 hover:scale-110 transition-all duration-300" />
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-gray-400 mb-4 tracking-wider">SKILLS</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <span className="text-sm font-bold">HTML</span>
                </div>
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                  <span className="text-sm font-bold">CSS</span>
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                  <span className="text-sm font-bold">JS</span>
                </div>
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                  <span className="text-sm font-bold">React</span>
                </div>
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
                  <span className="text-sm font-bold">TW</span>
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
            {/* Image only shows on desktop */}
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

        {/* Portfolio Section */}
        <section id="portfolio" className="container mx-auto py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-rose-500/20 transition-shadow duration-300"
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto py-8 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-center md:space-y-0 md:space-x-12 text-gray-400">
            <div className="flex items-center group hover:text-rose-500 transition-colors duration-300">
              <span className="mr-2 group-hover:scale-110 transition-transform duration-300">📱</span>
              <div>
                <p className="font-medium">Call Me Now</p>
                <p className="text-sm">+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center group hover:text-rose-500 transition-colors duration-300">
              <span className="mr-2 group-hover:scale-110 transition-transform duration-300">📍</span>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm">New York, USA</p>
              </div>
            </div>
            <div className="flex items-center group hover:text-rose-500 transition-colors duration-300">
              <span className="mr-2 group-hover:scale-110 transition-transform duration-300">✉️</span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm">mahesh.patil@example.com</p>
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