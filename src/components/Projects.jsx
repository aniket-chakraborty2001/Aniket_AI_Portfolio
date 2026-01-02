"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Code, Layers } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  const projects = [
    {
      name: 'AI-Powered Chatbot System',
      description: 'Developed an intelligent conversational AI system using NLP and deep learning to provide human-like interactions.',
      techStack: ['Python', 'TensorFlow', 'BERT', 'FastAPI', 'React'],
      image: '/projects/project1.jpg'
    },
    {
      name: 'Computer Vision Recognition',
      description: 'Built a real-time object detection and recognition system capable of identifying multiple objects.',
      techStack: ['Python', 'PyTorch', 'OpenCV', 'YOLO', 'Flask'],
      image: '/projects/project2.jpg'
    },
    {
      name: 'Predictive Analytics Platform',
      description: 'Created a machine learning platform that analyzes historical data to predict future trends.',
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'MongoDB', 'Next.js'],
      image: '/projects/project3.jpg'
    },
    {
      name: 'Predictive Analytics Platform',
      description: 'Created a machine learning platform that analyzes historical data to predict future trends.',
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'MongoDB', 'Next.js'],
      image: '/projects/project3.jpg'
    },
    {
      name: 'Predictive Analytics Platform',
      description: 'Created a machine learning platform that analyzes historical data to predict future trends.',
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'MongoDB', 'Next.js'],
      image: '/projects/project3.jpg'
    },
    {
      name: 'Predictive Analytics Platform',
      description: 'Created a machine learning platform that analyzes historical data to predict future trends.',
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'MongoDB', 'Next.js'],
      image: '/projects/project3.jpg'
    },
    {
      name: 'Predictive Analytics Platform',
      description: 'Created a machine learning platform that analyzes historical data to predict future trends.',
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'MongoDB', 'Next.js'],
      image: '/projects/project3.jpg'
    },
    {
      name: 'Predictive Analytics Platform',
      description: 'Created a machine learning platform that analyzes historical data to predict future trends.',
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'MongoDB', 'Next.js'],
      image: '/projects/project3.jpg'  
    },
    {
      name: 'Predictive Analytics Platform',
      description: 'Created a machine learning platform that analyzes historical data to predict future trends.',
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'MongoDB', 'Next.js'],
      image: '/projects/project3.jpg'  
    },
    {
      name: 'Predictive Analytics Platform',
      description: 'Created a machine learning platform that analyzes historical data to predict future trends.',
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'MongoDB', 'Next.js'],
      image: '/projects/project3.jpg'  
    }
  ];

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Auto-play */
  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [currentSlide]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % projects.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-6"
      style={{
        background:
          'linear-gradient(to bottom, #0a0a1a 0%, #120a20 50%, #0a0a1a 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Experience & Projects
          </h2>
          <p className="text-gray-400 mt-4">
            AI / ML systems built with production-ready design
          </p>
        </div>

        {/* ================= PROJECTS CAROUSEL ================= */}
        <div className="relative overflow-hidden rounded-3xl mb-24">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full p-4">
                <div className="project-card">

                  {/* Image */}
                  <div className="project-image-container">
                    <div className="project-image-fallback">
                      <Layers className="w-24 h-24 text-cyan-400 opacity-50" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="project-details">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="tech-stack">
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-400 text-sm font-semibold">
                          Tech Stack
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span key={idx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button onClick={prevSlide} className="carousel-nav left">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="carousel-nav right">
            <ChevronRight />
          </button>
        </div>

        {/* ================= CURRENT PROJECT SECTION ================= */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Current Project
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mt-3 rounded-full" />
          </div>

          <div className="current-project-card">
            <div className="current-project-content grid md:grid-cols-2 gap-8">

              {/* Image */}
              <div className="current-project-image-container">
                <div className="current-project-image-fallback">
                  <Layers className="w-32 h-32 text-green-400 opacity-50" />
                </div>
              </div>

              {/* Details */}
              <div>
                <h4 className="text-3xl font-bold text-white mb-4">
                  Advanced Neural Network Framework
                </h4>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Currently developing a next-generation neural network framework
                  that combines transformer architectures with novel attention
                  mechanisms, targeting real-world applications in healthcare,
                  finance, and education.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Python',
                    'PyTorch',
                    'Transformers',
                    'CUDA',
                    'Docker',
                    'Kubernetes',
                    'AWS',
                    'React'
                  ].map((tech, idx) => (
                    <span key={idx} className="tech-badge-large">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .project-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          background: rgba(15, 10, 31, 0.85);
          border-radius: 2rem;
          padding: 2rem;
        }

        .project-image-container,
        .current-project-image-container {
          height: 300px;
          border-radius: 1rem;
          overflow: hidden;
        }

        .project-image-fallback,
        .current-project-image-fallback {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(6,182,212,.1), rgba(139,92,246,.1));
        }

        .project-title {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          -webkit-background-clip: text;
          color: transparent;
        }

        .project-description {
          color: #d1d5db;
          margin: 1rem 0;
          line-height: 1.7;
        }

        .tech-badge,
        .tech-badge-large {
          padding: 0.45rem 1rem;
          border-radius: 9999px;
          background: rgba(139,92,246,.2);
          color: #c4b5fd;
          font-size: 0.8rem;
        }

        .current-project-card {
          background: rgba(15, 10, 31, 0.85);
          border-radius: 2rem;
          padding: 3rem;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(139,92,246,.3);
          border-radius: 50%;
          padding: .6rem;
          color: white;
        }

        .carousel-nav.left { left: 1rem; }
        .carousel-nav.right { right: 1rem; }

        @media (max-width: 900px) {
          .project-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;