"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const certificates = [
    {
      title: 'EPG In DS AI and ML',
      issuer: 'IIT Roorkee, Intellipaat, Bangalore',
      date: 'Feb 2024 to Present',
      skills: ['Python', 'MSSQL', 'Data Analysis', 'Power BI', 'Machine Learning', 'Deep Learning', 'AI'],
      credentialUrl: '#'
    },
    {
      title: 'Google Data Analysis',
      issuer: 'Coursera',
      date: 'May 2023',
      skills: ['Python', 'Excel', 'SQL', 'Pandas', 'Matplotlib', 'Seaborn', 'R'],
      credentialUrl: '#'
    },
    {
      title: 'IBM Data Science',
      issuer: 'Coursera',
      date: 'November 2023',
      skills: ['Python', 'R', 'SQL', 'Data Analysis', 'Plotly Dash', 'Machine Learning'],
      credentialUrl: '#'
    },
    {
      title: 'Mathematics for ML',
      issuer: 'Imperial College of Londo',
      date: 'January 2024',
      skills: ['Python', 'Linear Algebra', 'Multivariate Calculus', 'PCA'],
      credentialUrl: '#'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'Coursera, Vanderbilt University',
      date: 'October 2023',
      skills: ['ChatGPT', 'user perspective', 'Prompting', 'Context'],
      credentialUrl: '#'
    },
    {
      title: 'Internship Certificate',
      issuer: 'IPCR Kolkata',
      date: 'September 2024',
      skills: ['Python', 'Research', 'Research Paper Writing', 'Collaboration'],
      credentialUrl: '#'
    }
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
      id="certificates"
      ref={sectionRef}
      className="min-h-screen relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0a1a 0%, #1a0f2e 50%, #0a0a1a 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 top-20 left-20 animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 bottom-20 right-20 animate-pulse-slower" />
      </div>

      {/* Decorative Award Icons */}
      <div className="absolute top-32 right-10 opacity-5 animate-float">
        <Award className="w-24 h-24 text-yellow-400" />
      </div>
      <div className="absolute bottom-32 left-10 opacity-5 animate-float-delayed">
        <Award className="w-24 h-24 text-purple-400" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animate-gradient bg-300% leading-[1.2] pb-2">
            Certificates & Training
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-purple-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Formal training and validation of specialized skills
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`certificate-card transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Border Glow */}
              <div className="certificate-glow" />

              {/* Card Content */}
              <div className="certificate-content">
                {/* Award Icon Badge */}
                <div className="certificate-badge">
                  <Award className="w-8 h-8" />
                </div>

                {/* Certificate Title */}
                <h3 className="certificate-title">{cert.title}</h3>

                {/* Issuer */}
                <h4 className="certificate-issuer">
                  {cert.issuer}
                </h4>

                {/* Date */}
                <div className="certificate-date">
                  <span>{cert.date}</span>
                </div>

                {/* Skills Tags */}
                <div className="certificate-skills">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Credential Button */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-button"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-4 h-4 button-arrow" />
                </a>

                {/* Hover Particle Effects */}
                {hoveredCard === index && (
                  <div className="particle-container">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="particle"
                        style={{
                          '--angle': `${(360 / 6) * i}deg`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Shine Effect */}
                <div className="shine-effect" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Pulse Animations */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }

        @keyframes pulse-slower {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.15); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }

        /* Float Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
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

        /* Certificate Card */
        .certificate-card {
          position: relative;
          height: 100%;
        }

        .certificate-glow {
          position: absolute;
          inset: -3px;
          border-radius: 1.5rem;
          background: linear-gradient(135deg, #8b5cf6, #a855f7, #8b5cf6);
          background-size: 200% 200%;
          opacity: 0;
          transition: opacity 0.5s ease;
          filter: blur(15px);
          animation: gradient 3s ease infinite;
        }

        .certificate-card:hover .certificate-glow {
          opacity: 0.8;
        }

        .certificate-content {
          position: relative;
          height: 100%;
          background: linear-gradient(135deg, rgba(88, 28, 135, 0.6), rgba(76, 29, 149, 0.7));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 1.5rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .certificate-card:hover .certificate-content {
          border-color: rgba(168, 85, 247, 0.6);
          transform: translateY(-10px) scale(1.03);
          box-shadow: 
            0 25px 50px rgba(139, 92, 246, 0.4),
            0 0 80px rgba(234, 179, 8, 0.2);
        }

        /* Certificate Badge */
        .certificate-badge {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #eab308, #fbbf24);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          transition: all 0.5s ease;
          box-shadow: 0 0 30px rgba(234, 179, 8, 0.6);
          color: #000;
        }

        .certificate-card:hover .certificate-badge {
          transform: rotate(360deg) scale(1.1);
        }

        /* Certificate Title */
        .certificate-title {
          font-size: 1.375rem;
          font-weight: 800;
          color: #fde047;
          line-height: 1.4;
          text-shadow: 0 0 20px rgba(253, 224, 71, 0.4);
        }

        /* Certificate Issuer */
        .certificate-issuer {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.5;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(234, 179, 8, 0.3);
        }

        /* Certificate Date */
        .certificate-date {
          color: #fde047;
          font-size: 0.875rem;
          font-weight: 700;
        }

        /* Skills Tags */
        .certificate-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .skill-tag {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          background: rgba(234, 179, 8, 0.2);
          border: 1px solid rgba(234, 179, 8, 0.4);
          border-radius: 0.375rem;
          color: #fde047;
          font-size: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          transform: translateY(-2px);
          background: rgba(234, 179, 8, 0.3);
          box-shadow: 0 4px 12px rgba(234, 179, 8, 0.4);
        }

        /* Credential Button */
        .credential-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #eab308, #fbbf24);
          color: #000;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.875rem;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(234, 179, 8, 0.4);
        }

        .credential-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(234, 179, 8, 0.6);
        }

        .button-arrow {
          transition: transform 0.3s ease;
        }

        .credential-button:hover .button-arrow {
          transform: translateX(5px);
        }

        /* Particle Effect */
        .particle-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #eab308, #8b5cf6);
          border-radius: 50%;
          opacity: 0;
          animation: particle-burst 1.2s ease-out forwards;
        }

        @keyframes particle-burst {
          0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(60px) scale(1);
            opacity: 0;
          }
        }

        /* Shine Effect */
        .shine-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          );
          transform: translateX(-100%) rotate(45deg);
          transition: transform 0.8s;
          pointer-events: none;
        }

        .certificate-card:hover .shine-effect {
          transform: translateX(100%) rotate(45deg);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .certificate-content {
            padding: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .certificate-title {
            font-size: 1.25rem;
          }

          .certificate-issuer {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Certificates;