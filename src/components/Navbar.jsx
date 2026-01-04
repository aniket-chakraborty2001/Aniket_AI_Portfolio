import React, { useState, useEffect } from 'react';


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
        <div className="max-w-7xl mx-auto px-6">
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
                    className={`nav-item relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-gray-300 hover:text-yellow-400'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
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
                    <span className="relative z-10 text-sm tracking-wide">
                      {item.label}
                    </span>

                    {/* Bottom indicator line */}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 indicator-line rounded-full" />
                  </button>
                </li>
              ))}
            </ul>
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