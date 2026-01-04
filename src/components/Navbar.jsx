"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download } from "lucide-react";

const NAVBAR_HEIGHT = 90;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'internship', label: 'Internship' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="w-full px-10">
          <div
            className={`glass-navbar rounded-full px-8 py-4 flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'shadow-glow-strong' : 'shadow-glow'
            }`}
          >
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-2xl px-6 py-2 rounded-full">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                    A(I)niket
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <ul className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <li key={item.id} className="nav-item-wrapper">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="nav-item relative px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-yellow-400"
                  >
                    {/* Active indicator background */}
                    {activeSection === item.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-fade-in" />
                    )}
                    
                    {/* Hover effect background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full opacity-0 hover-bg transition-opacity duration-300" />
                    
                    {/* Shine effect on hover */}
                    <span className="absolute inset-0 rounded-full overflow-hidden">
                      <span className="shine-effect" />
                    </span>

                    {/* Text */}
                    <span className="relative z-10 text-lg md:text-lg tracking-wide">
                      {item.label}
                    </span>

                    {/* Bottom indicator line */}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 indicator-line rounded-full" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Right-side actions */}
            <div className="flex items-center gap-4 ml-6">
            
            {/* GitHub */}
            <div className="tooltip-wrapper">
              <a
                href="https://github.com/aniket-chakraborty2001"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="GitHub"
              >
                <Github size={26} />  
              </a>
              <span className="tooltip">GitHub</span>
            </div>

            {/* LinkedIn */}
            <div className="tooltip-wrapper">
              <a
                href="https://www.linkedin.com/in/aniket-chakraborty20022001/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={26} />
              </a>
              <span className="tooltip">LinkedIn</span>
            </div>

            {/* Resume */}
            <div className="tooltip-wrapper">
              <a
                href="/resume/Aniket_Chakraborty_Resume.pdf"
                download
                className="icon-btn resume-btn"
                aria-label="Download Resume"
              >
                <Download size={26} />
              </a>
              <span className="tooltip">Resume</span>
            </div>

            </div>
          </div>
        </div>
      </nav>

      {/* Styles */}
      <style jsx>{`
        /* Glassmorphism Effect */
        .glass-navbar {
          background: rgba(10, 10, 26, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .shadow-glow {
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            0 0 20px rgba(0, 240, 255, 0.1),
            0 0 40px rgba(138, 43, 226, 0.1);
        }

        .shadow-glow-strong {
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.5),
            0 0 30px rgba(0, 240, 255, 0.2),
            0 0 60px rgba(138, 43, 226, 0.2);
        }

        /* Nav Item Animations */
        .nav-item-wrapper {
          animation: slideDown 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hover Effects */
        .nav-item:hover .hover-bg {
          opacity: 1;
        }

        .nav-item:hover .indicator-line {
          width: 70%;
        }

        /* Shine Effect */
        .shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .nav-item:hover .shine-effect {
          left: 100%;
        }

        /* Active State Animation */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: rgba(139, 92, 246, 0.25);
          transition: all 0.3s ease;
        }

        .tooltip-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Tooltip Bubble */
        .tooltip {
          position: absolute;
          bottom: -45px;
          left: 50%;
          transform: translateX(-50%) translateY(5px);
          background: linear-gradient(135deg, #a4c452ff, #75302bff);
          color: black;
          font-size: 0.85rem;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 9999px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow:
            0 4px 15px rgba(6, 182, 212, 0.4),
            0 0 20px rgba(139, 92, 246, 0.3);
          z-index: 50;
        }

        /* Tooltip Arrow */
        .tooltip::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid #06b6d4;
        }

        /* Show tooltip on hover */
        .tooltip-wrapper:hover .tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .icon-btn:hover {
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          box-shadow:
            0 0 15px rgba(6, 182, 212, 0.6),
            0 0 25px rgba(139, 92, 246, 0.5);
          transform: translateY(-2px) scale(1.05);
        }

        .resume-btn {
          background: linear-gradient(135deg, #22c55e, #16a34a);
        }

        .resume-btn:hover {
          box-shadow:
            0 0 15px rgba(34, 197, 94, 0.6),
            0 0 25px rgba(22, 163, 74, 0.5);
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        /* Pulse Animation for Active Item */
        .nav-item:has(.animate-fade-in) {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(0, 240, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.7));
          }
        }

        /* Smooth transitions */
        .nav-item {
          position: relative;
          overflow: hidden;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 1px;
          background: linear-gradient(45deg, transparent, rgba(0, 240, 255, 0.5), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .nav-item:hover::before {
          opacity: 1;
          animation: rotate-border 2s linear infinite;
        }

        @keyframes rotate-border {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Particle effect on hover */
        .nav-item::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.4), transparent);
          transform: translate(-50%, -50%);
          transition: width 0.4s, height 0.4s;
        }

        .nav-item:hover::after {
          width: 100%;
          height: 100%;
        }

        /* Responsive adjustments */
        @media (max-width: 1280px) {
          .nav-item {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .nav-item span {
            font-size: 0.813rem;
          }
        }

        @media (max-width: 1024px) {
          .nav-item {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }

        /* Glowing text effect on active */
        .nav-item.active-glow {
          text-shadow: 
            0 0 10px rgba(0, 240, 255, 0.8),
            0 0 20px rgba(138, 43, 226, 0.6);
        }
      `}</style>
    </>
  );
};

export default Navbar;