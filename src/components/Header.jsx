import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo/Name */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="group flex items-center space-x-3 transition-transform duration-200 hover:scale-105"
            >
              {/* Logo Circle */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">JD</span>
              </div>
              
              {/* Portfolio Text */}
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-lg leading-tight">
                  Justin's Portfolio
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">
                  ASPIRING DEVELOPER
                </span>
              </div>
            </a>
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/justin-rich-dimaandal-05067937a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:justindimaandal.work@gmail.com"
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
                aria-label="Email"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle bottom border when scrolled */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </header>
  );
};

export default Header;