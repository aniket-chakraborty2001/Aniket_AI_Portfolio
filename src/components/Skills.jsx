"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, TrendingUp, X } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
      case 'high': return '#10b981';
      case 'medium': return '#eab308';
      case 'basic': return '#06b6d4';
      default: return '#8b5cf6';
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
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen relative py-16 md:py-24 px-4 md:px-6 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a0a1a 0%, #0f0a1f 50%, #0a0a1a 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 top-20 right-20 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 bottom-20 left-20 animate-float-slower" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="skill-text text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animated-gradient-text bg-300% leading-[1.2] pb-2">
            Skills And Technologies
          </h2>
          <div className="h-1 w-32 bg-linear-to-r from-purple-500 to-cyan-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto px-4">
            A comprehensive toolkit of cutting-edge technologies and frameworks I work with
          </p>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 mb-16">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className={`skill-grid-item group relative ${isVisible ? 'stat-visible' : 'stat-hidden'}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
              onClick={() => isMobile && setActiveSkill(skill)}
            >
              <div className="skill-card-inner">
                <div className="skill-icon-container">
                  <img
                    src={`/icons/${skill.icon}`}
                    alt={skill.name}
                    className="skill-img"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <p className="skill-name-label">{skill.name}</p>
                </div>

                {/* Desktop Hover Details */}
                {!isMobile && (
                  <div className="desktop-hover-details">
                    <h4 className="text-sm font-bold text-yellow-400 mb-1">{skill.name}</h4>
                    <div className="flex items-center gap-1 text-[10px] text-gray-300">
                      <Calendar size={10} className="text-cyan-400" /> {skill.timeline}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] mt-1" style={{ color: getExperienceColor(skill.experience) }}>
                      <TrendingUp size={10} /> {getExperienceLabel(skill.experience)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Detail Overlay */}
        {isMobile && activeSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm" onClick={() => setActiveSkill(null)}>
            <div className="skill-details-mobile" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-gray-400" onClick={() => setActiveSkill(null)}>
                <X size={24} />
              </button>
              <img src={`/icons/${activeSkill.icon}`} alt="" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="skill-details-name-mobile">{activeSkill.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gray-400 text-sm flex items-center gap-2"><Calendar size={16} /> Timeline</span>
                  <span className="text-white font-semibold">{activeSkill.timeline}</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <TrendingUp size={16} style={{ color: getExperienceColor(activeSkill.experience) }} /> Experience
                  </span>
                  <span className="font-semibold" style={{ color: getExperienceColor(activeSkill.experience) }}>
                    {getExperienceLabel(activeSkill.experience)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

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
              className={`stat-card ${isVisible ? 'stat-visible' : 'stat-hidden'} hover:/`}
              // style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className={`text-4xl font-bold text-${stat.color}-400 mb-2`}>{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-float-slower { animation: float-slow 25s ease-in-out infinite reverse; }

        .animated-gradient-text {
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient 4s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Grid Item Styles */
        .skill-grid-item {
          aspect-ratio: 1/1;
          perspective: 1000px;
          cursor: pointer;
        }

        .skill-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(15, 10, 31, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .skill-grid-item:hover .skill-card-inner {
          border-color: rgba(250, 204, 21, 0.5);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
          background: rgba(15, 10, 31, 0.9);
        }

        .skill-icon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }

        .skill-img {
          width: 45px;
          height: 45px;
          object-fit: contain;
          margin-bottom: 8px;
        }

        .skill-name-label {
          font-size: 0.75rem;
          color: #9ca3af;
          text-align: center;
          font-weight: 600;
        }

        .desktop-hover-details {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 26, 0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 8px;
          text-align: center;
        }

        .skill-grid-item:hover .desktop-hover-details {
          opacity: 1;
        }

        .skill-grid-item:hover .skill-icon-container {
          opacity: 0;
          transform: scale(0.8);
        }

        /* Mobile Details Card */
        .skill-details-mobile {
          background: #0f0a1f;
          border: 1px solid rgba(139, 92, 246, 0.4);
          border-radius: 2rem;
          padding: 2.5rem 1.5rem;
          width: 100%;
          max-width: 320px;
          position: relative;
          box-shadow: 0 0 50px rgba(139, 92, 246, 0.3);
          animation: slideUp 0.3s ease-out;
        }

        .skill-details-name-mobile {
          font-size: 1.75rem;
          font-weight: 800;
          text-align: center;
          color: white;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #facc15, #c084fc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Stats Card */
        .stat-card {
          background: rgba(15, 10, 31, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px) scale(1.10);
          border-color: rgba(255, 215, 0, 0.8);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.2 ); 
        }

        .stat-hidden { opacity: 0; transform: translateY(20px); }
        .stat-visible { opacity: 1; transform: translateY(0); transition: all 0.6s ease-out; }

        @font-face {
          font-family: 'SkillFont';
          src: url('/navheadingfonts/Polea Extra Bold DEMO.otf') format('opentype');
        }
        .skill-text { font-family: 'SkillFont', sans-serif; letter-spacing: 0.08em; }

        .text-cyan-400 { color: #22d3ee; }
        .text-purple-400 { color: #c084fc; }
        .text-yellow-400 { color: #facc15; }
        .text-pink-400 { color: #f472b6; }

        @media (max-width: 768px) {
          .skill-img { width: 35px; height: 35px; }
          .skill-card-inner { border-radius: 1rem; }
          .stat-card:hover { transform: none; scale: 1; }
        }
      `}</style>
    </section>
  );
};

export default Skills;