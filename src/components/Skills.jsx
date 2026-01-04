"use client";

import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  // Array of 29 skills with their icon filenames
  const SKILLS = [
  { name: "Python", icon: "/python.png" },
  { name: "Numpy", icon: "/numpy.png" },
  { name: "Pandas", icon: "/pandas.png" },
  { name: "Matplotlib", icon: "/matplotlib.png" },
  { name: "Seaborn", icon: "/seaborn.png" },
  { name: "Statsmodel", icon: "/statsmodel.png" },
  { name: "Scipy", icon: "/scipy.png" },
  { name: "Scikit-learn", icon: "/scikitlearn.png" },
  { name: "OpenCV", icon: "/opencv.png" },
  { name: "PIL", icon: "/pillow.png" },
  { name: "Tensorflow", icon: "/tensorFlow.png" },
  { name: "Streamlit", icon: "/streamlit.png" },
  { name: "Pytorch", icon: "/pytorch.png" },
  { name: "MSSQL", icon: "/mssql.png" },
  { name: "MYSQL", icon: "/mysql.png" },
  { name: "Dash", icon: "/plotly.png" },
  { name: "Hugging face", icon: "/hf.png" },
  { name: "GitHub", icon: "/git.png" },
  { name: "Flask Server", icon: "/flask.png" },
  { name: "Docker", icon: "/docker.png" },
  { name: "Redis", icon: "/redis.png" },
  { name: "Cassandra", icon: "/cassandra.png" },
  { name: "Prometheus", icon: "/prometheus.png" },
  { name: "Kafka", icon: "/kafka.png" },
  { name: "Langchain", icon: "/langchain.png" },
  { name: 'Ultralytics', icon: "/ultralytics.png"},
  { name: 'Llama', icon: "/llama.png"},
  { name: 'OpenAI', icon: "/openai.png"},
  { name: 'Gemini', icon: "/gemini.png"},
  { name: 'VS Code', icon: "/vscode.png"},
  { name: 'Jupyter', icon: "/jupyter.png"},
  { name: 'Google Colab', icon: "/googlecolab.png"}
];

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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen relative py-20 px-6 overflow-hidden"
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
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animate-gradient bg-300% leading-[1.2] pb-2">
            Skills & Technologies
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of cutting-edge technologies and frameworks I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="relative">
          {/* Animated connection lines background */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-10">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              {/* Animated connecting lines */}
              {[...Array(5)].map((_, i) => (
                <line
                  key={i}
                  x1="0%"
                  y1={`${20 * i}%`}
                  x2="100%"
                  y2={`${20 * (i + 1)}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  className="animate-line-draw"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 relative">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className={`skill-card transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{
                  transitionDelay: `${index * 0.05}s`
                }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="skill-card-inner">
                  {/* Rotating border effect */}
                  <div className="skill-card-border" />
                  
                  {/* Card content */}
                  <div className="skill-card-content">
                    {/* Icon container */}
                    <div className="skill-icon-wrapper">
                      <img
                        src={`/icons/${skill.icon}`}
                        alt={skill.name}
                        className="skill-icon"
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback icon */}
                      <div className="skill-icon-fallback" style={{ display: 'none' }}>
                        <svg className="w-12 h-12 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Skill name tooltip */}
                    <div className={`skill-name ${hoveredSkill === index ? 'skill-name-visible' : ''}`}>
                      {skill.name}
                    </div>

                    {/* Hover glow effect */}
                    <div className="skill-glow" />
                  </div>
                </div>

                {/* Particle effect on hover */}
                {hoveredSkill === index && (
                  <div className="skill-particles">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="particle"
                        style={{
                          '--angle': `${(360 / 8) * i}deg`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '30+', label: 'Technologies', color: 'cyan' },
            { number: '1+', label: 'Years Experience', color: 'purple' },
            { number: '40+', label: 'Projects Built', color: 'yellow' },
            { number: '∞', label: 'Learning Never Stops', color: 'pink' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`stat-card transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

        .bg-300\% {
          background-size: 300%;
        }

        /* Line Draw Animation */
        @keyframes line-draw {
          0% {
            stroke-dasharray: 0, 1000;
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            stroke-dasharray: 1000, 0;
            opacity: 0;
          }
        }

        .animate-line-draw {
          animation: line-draw 3s ease-in-out infinite;
        }

        /* Skill Card Styles */
        .skill-card {
          position: relative;
          cursor: pointer;
          perspective: 1000px;
           margin-bottom: 1rem;
        }

        .skill-card-inner {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .skill-card:hover .skill-card-inner {
          transform: rotateY(10deg) rotateX(-10deg) scale(1.1);
        }

        .skill-card-border {
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #06b6d4, #8b5cf6, #06b6d4);
          background-size: 300% 300%;
          border-radius: 1rem;
          opacity: 0;
          transition: opacity 0.3s;
          animation: gradient 3s ease infinite;
          filter: blur(8px);
        }

        .skill-card:hover .skill-card-border {
          opacity: 0.8;
        }

        .skill-card-content {
          position: absolute;
          inset: 0;
          background: rgba(15, 10, 31, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-card-content {
          background: rgba(15, 10, 31, 0.95);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 
            0 0 30px rgba(139, 92, 246, 0.3),
            0 0 60px rgba(6, 182, 212, 0.2),
            inset 0 0 30px rgba(139, 92, 246, 0.1);
        }

        .skill-icon-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-icon {
          width: 70%;
          height: 70%;
          object-fit: contain;
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.1) rotateZ(5deg);
          filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.8));
        }

        .skill-icon-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Skill Name Tooltip */
        .skill-name {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(6, 182, 212, 0.95));
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .skill-name::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid rgba(139, 92, 246, 0.95);
        }

        .skill-name-visible {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* Glow Effect */
        .skill-glow {
          position: absolute;
          inset: -50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .skill-card:hover .skill-glow {
          opacity: 1;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }

        /* Particle Effect */
        .skill-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #06b6d4, #8b5cf6);
          border-radius: 50%;
          opacity: 0;
          animation: particle-burst 1s ease-out forwards;
        }

        @keyframes particle-burst {
          0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(50px);
            opacity: 0;
          }
        }

        /* Stats Card */
        .stat-card {
          background: rgba(15, 10, 31, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
        }

        /* Color utilities for stats */
        .text-cyan-400 { color: #22d3ee; }
        .text-purple-400 { color: #c084fc; }
        .text-yellow-400 { color: #facc15; }
        .text-pink-400 { color: #f472b6; }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .skill-card-content {
            padding: 0.5rem;
          }

          .skill-name {
            font-size: 0.75rem;
            padding: 0.375rem 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;