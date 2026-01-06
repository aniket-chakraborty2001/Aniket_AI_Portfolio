"use client";

import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  const educationData = [
    {
      degree: 'Master of Science (MSc.)',
      major: 'Data Science',
      institution: 'Manipal Academy of Higher Education (MAHE), Bangalore',
      duration: '2022 - 2024',
      cgpa: '9.4',
      coursework: 'Data Analysis, Data Science, Machine Learning, Deep Learning, NLP, Computer Vision',
      credentialsLink: 'https://drive.google.com/file/d/1fVjykc4PMnaYD6L7fMotCEM2j2uc4yxB/view?usp=sharing',
      icon: '🎓'
    },
    {
      degree: 'Bachelor of Science (BSc.)',
      major: 'Mathematics',
      institution: 'Ramkrishna Mission Vivekananda Centenary College (RKMVCC), Rahara, Kolkata',
      duration: '2019 - 2022',
      cgpa: '9.00',
      coursework: 'Calculus, Algebra, Statistics, Linear Programming, Real & Complex Analysis',
      credentialsLink: 'https://drive.google.com/file/d/1okbXbXdQ4sjYagLOJiq8U8zvfLvEwLE3/view?usp=sharing',
      icon: '📚'
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

  // Auto-play swiper
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % educationData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + educationData.length) % educationData.length);
  };

  const handleManualChange = (callback) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    callback();
    autoPlayRef.current = setInterval(nextSlide, 4000);
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      className="min-h-screen relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0a1a 0%, #1a0f2e 50%, #0a0a1a 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 top-20 right-20 animate-float-education" />
        <div className="absolute w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 bottom-20 left-20 animate-float-education-delayed" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 opacity-5">
        <GraduationCap className="w-32 h-32 text-purple-400" />
      </div>
      <div className="absolute bottom-40 right-10 opacity-5">
        <BookOpen className="w-32 h-32 text-yellow-400" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animate-gradient bg-300%">
            Education
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-purple-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            My academic journey and qualifications
          </p>
        </div>

        {/* Swiper Container */}
        <div className="swiper-container">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualChange(prevSlide)}
            className="swiper-nav-btn swiper-nav-left"
            aria-label="Previous education"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleManualChange(nextSlide)}
            className="swiper-nav-btn swiper-nav-right"
            aria-label="Next education"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Education Cards Swiper */}
          <div className="swiper-wrapper">
            <div
              className="swiper-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`swiper-slide ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.3}s` }}
                >
                  <div className="education-card">
                    {/* Animated Border */}
                    <div className="education-card-border" />
                    
                    {/* Card Content */}
                    <div className="education-card-content">
                      <div className="education-card-inner">
                        {/* Header Section */}
                        <div className="education-header">
                          <div className="flex-1">
                            <h3 className="education-degree">
                              {edu.degree}
                            </h3>
                            <h4 className="education-major">
                              {edu.major}
                            </h4>
                            <p className="education-institution">
                              {edu.institution}
                            </p>
                          </div>

                          {/* Duration & CGPA Badge */}
                          <div className="education-badge-container">
                            <div className="education-badge">
                              <div className="badge-duration">
                                {edu.duration}
                              </div>
                              <div className="badge-cgpa">
                                <Award className="w-4 h-4" />
                                <span>CGPA: {edu.cgpa}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Coursework Section */}
                        <div className="education-coursework">
                          <div className="coursework-label">
                            <BookOpen className="w-4 h-4" />
                            <span>Key Coursework:</span>
                          </div>
                          <p className="coursework-text">
                            {edu.coursework}
                          </p>
                        </div>

                        {/* View Credentials Button */}
                        <div className="education-actions">
                          <a
                            href={edu.credentialsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="credentials-button"
                          >
                            <span>View Credentials</span>
                            <ExternalLink className="w-4 h-4 button-icon" />
                            <div className="button-glow" />
                          </a>
                        </div>
                      </div>

                      {/* Decorative Icon */}
                      <div className="education-icon">
                        {edu.icon}
                      </div>

                      {/* Shine Effect */}
                      <div className="education-shine" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="swiper-pagination">
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualChange(() => setCurrentIndex(index))}
                className={`swiper-dot ${currentIndex === index ? 'swiper-dot-active' : ''}`}
                aria-label={`Go to education ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Float Animations */
        @keyframes float-education {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
            opacity: 0.1;
          }
          33% { 
            transform: translate(30px, -30px) rotate(120deg); 
            opacity: 0.15;
          }
          66% { 
            transform: translate(-20px, 20px) rotate(240deg); 
            opacity: 0.1;
          }
        }

        @keyframes float-education-delayed {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
            opacity: 0.1;
          }
          33% { 
            transform: translate(-30px, 30px) rotate(-120deg); 
            opacity: 0.15;
          }
          66% { 
            transform: translate(20px, -20px) rotate(-240deg); 
            opacity: 0.1;
          }
        }

        .animate-float-education {
          animation: float-education 20s ease-in-out infinite;
        }

        .animate-float-education-delayed {
          animation: float-education-delayed 25s ease-in-out infinite;
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

        /* Swiper Container */
        .swiper-container {
          position: relative;
          max-width: 100%;
          margin: 0 auto;
        }

        .swiper-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
        }

        .swiper-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .swiper-slide {
          min-width: 100%;
          padding: 0 1rem;
          box-sizing: border-box;
          transition: opacity 1s ease;
        }

        /* Navigation Buttons */
        .swiper-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
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

        .swiper-nav-btn:hover {
          background: rgba(139, 92, 246, 0.4);
          border-color: rgba(139, 92, 246, 0.6);
          transform: translateY(-50%) scale(1.1);
        }

        .swiper-nav-left {
          left: -1rem;
        }

        .swiper-nav-right {
          right: -1rem;
        }

        /* Pagination Dots */
        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .swiper-dot {
          width: 0.75rem;
          height: 0.75rem;
          background: rgba(168, 85, 247, 0.3);
          border: 1px solid rgba(168, 85, 247, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-dot:hover {
          background: rgba(168, 85, 247, 0.5);
          transform: scale(1.2);
        }

        .swiper-dot-active {
          background: linear-gradient(135deg, #a855f7, #eab308);
          width: 2rem;
          border-radius: 9999px;
        }

        /* Education Card */
        .education-card {
          position: relative;
          margin: 0 auto;
        }

        .education-card-border {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #a855f7, #eab308, #a855f7);
          background-size: 200% 200%;
          border-radius: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s;
          animation: gradient 3s ease infinite;
          filter: blur(8px);
          z-index: 0;
        }

        .education-card:hover .education-card-border {
          opacity: 0.6;
        }

        .education-card-content {
          position: relative;
          background: linear-gradient(135deg, rgba(88, 28, 135, 0.4), rgba(76, 29, 149, 0.5));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .education-card:hover .education-card-content {
          border-color: rgba(168, 85, 247, 0.6);
          box-shadow: 
            0 20px 60px rgba(168, 85, 247, 0.3),
            0 0 80px rgba(234, 179, 8, 0.2);
          transform: translateY(-8px);
        }

        .education-card-inner {
          position: relative;
          padding: 2.5rem;
          z-index: 1;
        }

        /* Header Section */
        .education-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .education-degree {
          font-size: 2rem;
          font-weight: 800;
          color: #fde047;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 20px rgba(253, 224, 71, 0.3);
        }

        .education-major {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .education-institution {
          font-size: 1rem;
          color: #d1d5db;
          line-height: 1.6;
        }

        /* Badge Container */
        .education-badge-container {
          flex-shrink: 0;
        }

        .education-badge {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(234, 179, 8, 0.3);
          border-radius: 1rem;
          padding: 1rem 1.5rem;
          text-align: right;
          min-width: 180px;
        }

        .badge-duration {
          font-size: 1.125rem;
          font-weight: 700;
          color: #fde047;
          margin-bottom: 0.5rem;
        }

        .badge-cgpa {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
        }

        .badge-cgpa svg {
          color: #fde047;
        }

        /* Coursework Section */
        .education-coursework {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .coursework-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #fde047;
          font-weight: 700;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .coursework-label svg {
          color: #fde047;
        }

        .coursework-text {
          color: #e5e7eb;
          line-height: 1.8;
          font-size: 1rem;
        }

        /* Actions Section */
        .education-actions {
          display: flex;
          justify-content: flex-start;
        }

        .credentials-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 2rem;
          background: linear-gradient(135deg, #eab308, #fbbf24);
          color: #000000;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 9999px;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(234, 179, 8, 0.4);
        }

        .credentials-button:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 8px 30px rgba(234, 179, 8, 0.6),
            0 0 40px rgba(234, 179, 8, 0.4);
        }

        .credentials-button:active {
          transform: translateY(-1px);
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .credentials-button:hover .button-icon {
          transform: translateX(5px);
        }

        .button-glow {
          position: absolute;
          inset: -50%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .credentials-button:hover .button-glow {
          transform: translateX(100%);
        }

        /* Decorative Icon */
        .education-icon {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-size: 4rem;
          opacity: 0.15;
          transition: all 0.5s ease;
          pointer-events: none;
        }

        .education-card:hover .education-icon {
          opacity: 0.3;
          transform: rotate(15deg) scale(1.2);
        }

        /* Shine Effect */
        .education-shine {
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
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }

        .education-card:hover .education-shine {
          opacity: 1;
          animation: shine-sweep 1.5s ease-in-out;
        }

        @keyframes shine-sweep {
          from {
            transform: translateX(-100%) rotate(45deg);
          }
          to {
            transform: translateX(100%) rotate(45deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .education-card-inner {
            padding: 1.5rem;
          }

          .education-degree {
            font-size: 1.5rem;
          }

          .education-major {
            font-size: 1.125rem;
          }

          .education-institution {
            font-size: 0.875rem;
          }

          .education-header {
            flex-direction: column;
          }

          .education-badge {
            width: 100%;
            text-align: left;
          }

          .badge-cgpa {
            justify-content: flex-start;
          }

          .education-icon {
            font-size: 3rem;
            top: 1rem;
            right: 1rem;
          }

          .swiper-nav-left {
            left: 0.5rem;
          }

          .swiper-nav-right {
            right: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;