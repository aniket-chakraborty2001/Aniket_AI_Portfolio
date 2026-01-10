"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Array of skills with timeline and experience
  const SKILLS = [
    { name: "Python", icon: "/python.png", timeline: "5+ Years", experience: "high" },
    { name: "Numpy", icon: "/numpy.png", timeline: "3+ Years", experience: "high" },
    { name: "Pandas", icon: "/pandas.png", timeline: "3+ Years", experience: "high" },
    { name: "Matplotlib", icon: "/matplotlib.png", timeline: "3+ Years", experience: "high" },
    { name: "Seaborn", icon: "/seaborn.png", timeline: "3+ Years", experience: "high" },
    { name: "Statsmodel", icon: "/statsmodel.png", timeline: "1+ Years", experience: "medium" },
    { name: "Scipy", icon: "/scipy.png", timeline: "1+ Years", experience: "medium" },
    { name: "Scikit-learn", icon: "/scikitlearn.png", timeline: "3+ Years", experience: "high" },
    { name: "OpenCV", icon: "/opencv.png", timeline: "1.5+ Years", experience: "high" },
    { name: "Pillow", icon: "/pillow.png", timeline: "1+ Years", experience: "high" },
    { name: "Tensorflow", icon: "/tensorFlow.png", timeline: "1.5+ Years", experience: "high" },
    { name: "Streamlit", icon: "/streamlit.png", timeline: "1+ Years", experience: "medium" },
    { name: "Pytorch", icon: "/pytorch.png", timeline: "1+ Years", experience: "high" },
    { name: "MSSQL", icon: "/mssql.png", timeline: "2+ Years", experience: "medium" },
    { name: "MYSQL", icon: "/mysql.png", timeline: "2+ Years", experience: "medium" },
    { name: "Dash", icon: "/plotly.png", timeline: "1+ Years", experience: "basic" },
    { name: "Hugging face", icon: "/hf.png", timeline: "1+ Years", experience: "high" },
    { name: "GitHub", icon: "/git.png", timeline: "2+ Years", experience: "high" },
    { name: "Flask Server", icon: "/flask.png", timeline: "1+ Years", experience: "medium" },
    { name: "Docker", icon: "/docker.png", timeline: "3 Months", experience: "basic" },
    { name: "Redis", icon: "/redis.png", timeline: "3 Months", experience: "basic" },
    { name: "Cassandra", icon: "/cassandra.png", timeline: "3 Months", experience: "basic" },
    { name: "Prometheus", icon: "/prometheus.png", timeline: "3 Months", experience: "basic" },
    { name: "Kafka", icon: "/kafka.png", timeline: "3 Months", experience: "basic" },
    { name: "Langchain", icon: "/langchain.png", timeline: "1+ Years", experience: "medium" },
    { name: 'Ultralytics', icon: "/ultralytics.png", timeline: "1+ Years", experience: "high" },
    { name: 'Llama', icon: "/llama.png", timeline: "1+ Years", experience: "high" },
    { name: 'OpenAI', icon: "/openai.png", timeline: "1+ Years", experience: "high" },
    { name: 'Gemini', icon: "/gemini.png", timeline: "1+ Years", experience: "high" },
    { name: 'VS Code', icon: "/vscode.png", timeline: "5+ Years", experience: "high" },
    { name: 'Jupyter', icon: "/jupyter.png", timeline: "5+ Years", experience: "high" },
    { name: 'Google Colab', icon: "/googlecolab.png", timeline: "3+ Years", experience: "high" }
  ];

  const getExperienceColor = (exp) => {
    switch(exp) {
      case 'high': return '#10b981'; // green
      case 'medium': return '#eab308'; // yellow
      case 'basic': return '#06b6d4'; // cyan
      default: return '#8b5cf6'; // purple
    }
  };

  const getExperienceLabel = (exp) => {
    switch(exp) {
      case 'high': return 'Expert';
      case 'medium': return 'Intermediate';
      case 'basic': return 'Beginner';
      default: return 'Learning';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Auto-play carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSkill();
    }, window.innerWidth < 768 ? 3000 : 2000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  const nextSkill = () => {
    setCurrentIndex((prev) => (prev + 1) % SKILLS.length);
  };

  const prevSkill = () => {
    setCurrentIndex((prev) => (prev - 1 + SKILLS.length) % SKILLS.length);
  };

  const handleManualChange = (callback) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    callback();
    autoPlayRef.current = setInterval(nextSkill, 2000);
  };

  // Get visible skills (current and surrounding)
  const getVisibleSkills = () => {
    const visible = [];
    const total = SKILLS.length;
    
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      visible.push({
        ...SKILLS[index],
        offset: i,
        index: index
      });
    }
    
    return visible;
  };

  const visibleSkills = getVisibleSkills();
  const activeSkill = SKILLS[currentIndex] || SKILLS[0];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen relative py-16 md:py-20 px-4 md:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0a1a 0%, #0f0a1f 50%, #0a0a1a 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 top-20 right-20 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 bottom-20 left-20 animate-float-slower" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="skill-text text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animated-gradient-text bg-300% leading-[1.2] pb-2">
            Skills And Technologies
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of cutting-edge technologies and frameworks I work with
          </p>
        </div>

        {/* Skills Carousel */}
        <div className="carousel-container mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualChange(prevSkill)}
            className="carousel-nav-btn carousel-nav-left"
            aria-label="Previous skill"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleManualChange(nextSkill)}
            className="carousel-nav-btn carousel-nav-right"
            aria-label="Next skill"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Skills Display */}
          <div className="skills-carousel">
            {visibleSkills.map((skill, idx) => (
              <div
                key={skill.index}
                className={`carousel-skill ${skill.offset === 0 ? 'carousel-skill-active' : ''}`}
                // style={{
                //   transform: `translateX(${skill.offset * 140}px) scale(${skill.offset === 0 ? 1.5 : 0.7})`,
                // style={{
                //   transform: `
                //     translateX(${
                //       typeof window !== 'undefined' && window.innerWidth < 768
                //           ? skill.offset * 90
                //           : skill.offset * 140
                //     }px)
                //     scale(${
                //       typeof window !== 'undefined' && window.innerWidth < 768
                //         ? skill.offset === 0 ? 1.2 : 0.6
                //         : skill.offset === 0 ? 1.5 : 0.7
                //     })
                style={{
                  transform: `
                    translateX(${skill.offset * (isMobile ? 90 : 140)}px)
                    scale(${skill.offset === 0 ? (isMobile ? 1.2 : 1.5) : (isMobile ? 0.6 : 0.7)})
                  `,
                  zIndex: skill.offset === 0 ? 10 : 5 - Math.abs(skill.offset),
                  opacity: Math.abs(skill.offset) > 1 ? 0.3 : 1
                }}
              >
                <div className="skill-carousel-card">
                  <div className="skill-carousel-border" />
                  <div className="skill-carousel-content">
                    <img
                      src={`/icons/${skill.icon}`}
                      alt={skill.name}
                      className="skill-carousel-icon"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Details */}
          <div className="skill-details">
            <h3 className="skill-details-name">{activeSkill.name}</h3>
            
            <div className="skill-details-info">
              <div className="skill-info-item">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="skill-info-label">Timeline:</span>
                <span className="skill-info-value">{activeSkill.timeline}</span>
              </div>

              <div className="skill-info-item">
                <TrendingUp 
                  className="w-5 h-5" 
                  style={{ color: getExperienceColor(activeSkill.experience) }}
                />
                <span className="skill-info-label">Experience:</span>
                <span 
                  className="skill-info-value skill-experience-badge"
                  style={{ 
                    color: getExperienceColor(activeSkill.experience),
                    borderColor: getExperienceColor(activeSkill.experience)
                  }}
                >
                  {getExperienceLabel(activeSkill.experience)}
                </span>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="carousel-dots">
              {SKILLS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualChange(() => setCurrentIndex(index))}
                  className={`carousel-dot ${currentIndex === index ? 'carousel-dot-active' : ''}`}
                  aria-label={`Go to skill ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            { number: '30+', label: 'Technologies', color: 'cyan' },
            { number: '1+', label: 'Years Experience', color: 'purple' },
            { number: '40+', label: 'Projects Built', color: 'yellow' },
            { number: '∞', label: 'Learning Never Stops', color: 'pink' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${
                isVisible ? 'stat-visible' : 'stat-hidden'
              }`}
              style={{ transitionDelay: `${1.5 + index * 0.1}s` }}
            >
              <div className={`text-4xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Background Grid Pattern */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Float Animations */
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }

        /* Gradient Animation */
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradient 4s ease infinite;
        }

        .animated-gradient-text {
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient 4s ease infinite;
        }

        /* Carousel Container */
        .carousel-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Navigation Buttons */
        .carousel-nav-btn {
          position: absolute;
          top: 150px;
          width: 3rem;
          height: 3rem;
          background: rgba(139, 92, 246, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 92, 246, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
        }

        .carousel-nav-btn:hover {
          background: rgba(139, 92, 246, 0.4);
          border-color: rgba(139, 92, 246, 0.6);
          transform: scale(1.1);
        }

        .carousel-nav-left {
          left: 0;
        }

        .carousel-nav-right {
          right: 0;
        }

        /* Skills Carousel */
        .skills-carousel {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin: 0 auto;
          perspective: 1000px;
        }

        .carousel-skill {
          position: absolute;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .carousel-skill-active {
          filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.8));
        }

        .skill-carousel-card {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .skill-carousel-border {
          position: absolute;
          inset: -3px;
          background: linear-gradient(45deg, #06b6d4, #8b5cf6, #06b6d4);
          background-size: 300% 300%;
          border-radius: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s;
          animation: gradient 3s ease infinite;
          filter: blur(10px);
        }

        .carousel-skill-active .skill-carousel-border {
          opacity: 1;
        }

        .skill-carousel-content {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(184, 184, 41, 0.74);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(139, 92, 246, 0.3);
          border-radius: 1.5rem;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .carousel-skill-active .skill-carousel-content {
          border-color: rgba(250, 204, 21, 0.8);
          background: rgba(250, 204, 21, 0.18);
          box-shadow: 
            0 0 35px rgba(250, 204, 21, 0.5),
            inset 0 0 25px rgba(250, 204, 21, 0.2);
        }

        .skill-carousel-icon {
          width: 80%;
          height: 80%;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        /* Skill Details */
        .skill-details {
          margin-top: 3rem;
          text-align: center;
          padding: 2rem;
          background: rgba(15, 10, 31, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1.5rem;
          transition: all 0.3s ease;
        }

        .skill-details:hover {
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 10px 40px rgba(139, 92, 246, 0.2);
        }

        .skill-details-name {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #06b6d4, #edea14ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 2rem;
          animation: fade-in 0.5s ease;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .skill-details-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .skill-info-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .skill-info-item:hover {
          transform: translateY(-3px);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 5px 20px rgba(139, 92, 246, 0.3);
        }

        .skill-info-label {
          color: #9ca3af;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .skill-info-value {
          color: white;
          font-size: 1rem;
          font-weight: 700;
        }

        .skill-experience-badge {
          padding: 0.25rem 0.75rem;
          border: 1px solid;
          border-radius: 9999px;
          font-size: 0.875rem;
        }

        /* Carousel Dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .carousel-dot {
          width: 0.5rem;
          height: 0.5rem;
          background: rgba(139, 92, 246, 0.3);
          border: 1px solid rgba(139, 92, 246, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot:hover {
          background: rgba(139, 92, 246, 0.5);
          transform: scale(1.3);
        }

        .carousel-dot-active {
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          width: 1.5rem;
          border-radius: 9999px;
        }

        /* Stats Card */
        .stat-card {
          position: relative;
          background: rgba(15, 10, 31, 0.6);
          backdrop-filter: blur(20px);
          // -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          transition: scale 0.12s ease-out,
                      box-shadow 0.12s ease-out,
                      border-color 0.12s ease-out;
        }

        .stat-hidden {
          opacity: 0;
          transform: translateY(10px);
        }

        .stat-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          background: linear-gradient(
            135deg,
            transparent,
            rgba(196, 154, 123, 0.6),
            rgba(83, 173, 104, 0.6),
            transparent
          );
          opacity: 0;
          filter: blur(10px);
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-card:hover {
          scale: 1.2;
          border-color: rgba(139, 92, 246, 0.8);
          box-shadow: 
            0 0 20px rgba(192, 223, 40, 0.96),
            0 0 40px rgba(41, 26, 111, 1),
            inset 0 0 20px rgba(139, 92, 246, 0.15);
        }

        @font-face {
          font-family: 'SkillFont';
          src: url('/navheadingfonts/Polea Extra Bold DEMO.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .skill-text {
          font-family: 'SkillFont', sans-serif;
          letter-spacing: 0.08em;
        }

        /* Color utilities for stats */
        .text-cyan-400 { color: #22d3ee; }
        .text-purple-400 { color: #c084fc; }
        .text-yellow-400 { color: #facc15; }
        .text-pink-400 { color: #f472b6; }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .skill-details-name {
            font-size: 2rem;
          }

          .skill-details-info {
            flex-direction: column;
            gap: 1rem;
          }

          .carousel-nav-btn {
            width: 2.5rem;
            height: 2.5rem;
          }

          .carousel-skill {
            transform: translateX(${skill => skill.offset * 100}px) scale(${skill => skill.offset === 0 ? 1.3 : 0.6}) !important;
          }
        }

      // @media (max-width: 768px) {
      //   .skills-carousel {
      //     height: 220px;
      //   }

        .skill-carousel-card {
          width: 90px;
          height: 90px;
        }
      }

      @media (max-width: 768px) {
        .carousel-nav-btn {
          display: none;
        }
      }

      @media (max-width: 768px) {
        .skill-details {
          padding: 1.5rem;
        }

        .skill-details-name {
          font-size: 1.8rem;
        }
      }

      @media (max-width: 768px) {
        .skill-info-item:hover,
        .stat-card:hover {
          transform: none;
          scale: 1;
          box-shadow: none;
        }
      }

      @media (max-width: 768px) {
        .stat-card:hover {
          scale: 1;
        }

        .stat-card {
          padding: 1.25rem;
        }
      }

      `}</style>
    </section>
  );
};

export default Skills;