"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Code, Layers } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      name: 'AI Site Inspector',
      description: 'AI based site inspection system that takes building images and calculate height, width, area, number of doors, windows, door + window area and at last the paintable area and the paint age. Also detects any wall defects like crack, damp and paint peeling. 85% accuracy achieved',
      techStack: ['Python', 'Meta', 'SAM3', 'OpenCV', 'Pillow', 'Matplotlib', 'Streamlit'],
      image: '/projects/project1.png'
    },
    {
      name: 'AI Image Search',
      description: 'An AI algorithm that takes user uploaded laminate image and recommends most matching 10 edge band images from database based on Similarity Score. It calculates feature vector of images using Hugging face model and find similarity using cosine similarity. 90% accuracy achieved',
      techStack: ['Python', 'PyTorch', 'OpenCV', 'Hugging Face', 'Google Vit Model', 'Streamlit', 'Feature Vector', 'JSON', 'Transformers', 'Scikit-Learn'],
      image: '/projects/project2.png'
    },
    {
      name: 'Home Exterior Layering',
      description: 'A Fine Tuned SAM3 model on existing data that efficiently detects different exterior sections like Base, Pillar, Projection, Border etc and mask them in different colors. Trained on 5000 images. Accuracy achieved 75%',
      techStack: ['Python', 'Scikit-Learn', 'Meta', 'SAM3', 'Transformers', 'Annotated Data', 'SAM3 GitHub'],
      image: '/projects/project3.png'
    },
    {
      name: 'AI Car Inspection Reporting System',
      description: 'A deep learning based AI tool that takes a car 360 degree video and detects different car body sections, car damage types and makes a frame wise report in excel that a user or client can download. Accuracy achieved 85%',
      techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit', 'YOLO', 'RoboFlow', 'OpenCV', 'Pillow', 'Ultralytics'],
      image: '/projects/project4.png'
    },
    {
      name: 'LBM - Document Summarization',
      description: 'Future of LLMs, SLMs LBMs (Large Behavioural Models) that can actually do certain task based on user personality, behaviour by observing previous user trends, type of answers they seek etc. A fine tuned SLM that is trained on open source PENS data. Accuracy achieved 90%',
      techStack: ['Python', 'SLMs', 'Llama Model', 'Streamlit', 'Hugging Face', 'PEFT', 'Quantization'],
      image: '/projects/project5.png'
    },
    {
      name: 'GenAI Text-Image & Color Picker',
      description: 'A GenAI project that takes a prompt from user and creates an image based on that. Later it let the user to pick color from that image to see which colors are there.',
      techStack: ['Python', 'OpenAI', 'Streamlit', 'Dall-E-3 Model', 'html', 'CSS', 'JavaScript', 'Pillow', 'Flask'],
      image: '/projects/project6.png'
    },
    {
      name: 'PotHole Detection From Camera',
      description: 'A deep learning based AI tool that can detect pot holes from road taking a camera live feed as input. The same thing that is done in Mahindra VisionX projects. Accuracy for pothole detection is 90%',
      techStack: ['Python', 'Google Colab', 'YOLO', 'Ultralytics', 'RoboFlow', 'Object Detection', 'Fine Tune Process'],
      image: '/projects/project7.png'
    },
    {
      name: 'MCP Agent ChatBot',
      description: 'A chatbot build using MCP (Model Context Protocol) that takes user query, find related information from a database and let the user see the matched answers. This is based on finding colored laminates from a database using query like "Find me some red laminates". Accuracy achoeved 92%',
      techStack: ['Python', 'Langchain', 'Langgraph', 'Streamlit', 'boto3', 'MCP', 'OpenAI'],
      image: '/projects/project8.png'  
    },
    {
      name: 'RAG ChatBot',
      description: 'A Retrieval Augmented Generation (RAG) based Chatbot that let the user question about some specific incident or content and in return receive appropriate answers. The knowledge base for this case is open source Hawaii Wild fire data. Context is maintained most of the time',
      techStack: ['Python', 'OpenAI', 'Text Files', 'Langchain', 'Streamlit', 'Langcahin Community', 'faiss-cpu'],
      image: '/projects/project9.png'  
    },
    {
      name: 'Lovable Dev Clone Creation',
      description: 'Loveable Dev, an AI platform to create modern website based on user prompt. Cloned the system Using Claud sonnet model to create the same. Currently hallucinating most of the times. With time, knowledge it will become good.',
      techStack: ['Python', 'Streamlit', 'Anthropic Claud Sonnet', 'React Vite Code', 'Ngrok'],
      image: '/projects/project10.png'  
    },
    {
      name: 'SAM2 Human Tracking',
      description: 'A Meta SAM2 and Ultralytics YOLO based approach where humans are detected and tracked all over a video. Each frame in the video is supplied to the system to detect and track the human. Can be used inside shopping malls, stores to detect human movement',
      techStack: ['Python', 'Meta', 'SAM2', 'Ultralytrics', 'YOLO', 'COCO dataset', 'Numpy'],
      image: '/projects/project11.png'
    }
  ];

  /* Intersection Observer for cards stagger animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  /* Section visibility */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-14 md:py-20 px-4 md:px-6"
      style={{
        background:
          'linear-gradient(to bottom, #0a0a1a 0%, #120a20 50%, #0a0a1a 100%)'
      }}
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Section Header */}
        <div className="projects-header text-center mb-16">
          <h2 className="exp-text text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animate-gradient bg-300% leading-[1.2] pb-2">
            Experience And Projects
          </h2>
          <p className="text-gray-400 mt-4">
            AI / ML systems built with production-ready design
          </p>
        </div>

        {/* ================= PROJECTS GRID ================= */}
        <div className="projects-grid mb-24">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="project-card-wrapper"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-card-modern">
                
                {/* Animated Background Gradient */}
                <div className="card-bg-gradient"></div>
                
                {/* Image Container */}
                <div className="project-image-wrapper">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="project-image"
                    />
                  ) : (
                    <div className="project-image-fallback">
                      <Layers className="w-20 h-20 text-cyan-400 opacity-50" />
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="image-overlay"></div>
                </div>

                {/* Content */}
                <div className="project-content">
                  <h3 className="project-title-modern">{project.name}</h3>
                  <p className="project-description-modern">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="tech-stack-modern">
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-400 text-sm font-semibold">
                        Tech Stack
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-badge-modern">
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
            <div className="current-project-content grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

              {/* Image */}
              <div className="current-project-image-container">
                {true ? (
                  <img
                    src="/projects/current_project.jpg"
                    alt="Ball Tracking in Cricket with Hawk Eye View"
                    className="w-full h-full object-contain rounded-xl"
                  />
                ) : (
                  <div className="current-project-image-fallback">
                    <Layers className="w-32 h-32 text-green-400 opacity-50" />
                  </div>
                )}
              </div>

              {/* Details */}
              <div>
                <h4 className="text-3xl font-bold text-white mb-4">
                  Ball Tracking in Cricket with Hawk Eye View
                </h4>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Currently developing a system that can efficiently detect white cricket ball from multiple
                  video cricket feeds, track the ball and give raw pixel coordinate of the ball position and then
                  finally plot them to create a Hawk Eye View.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Python',
                    'PyTorch',
                    'Ultralytics',
                    'YOLO',
                    'CUDA',
                    'OpenCV',
                    'Pillow',
                    'TrackNet',
                    'GitHub'
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
        @font-face {
          font-family: 'ExpFont';
          src: url('/navheadingfonts/Polea Extra Bold DEMO.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .exp-text {
          font-family: 'ExpFont', sans-serif;
          letter-spacing: 0.08em;
        }

        /* ================= PROJECTS GRID ================= */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 0 1rem;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0;
          }
        }

        /* Card Wrapper with Stagger Animation */
        .project-card-wrapper {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card-wrapper.card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Modern Project Card */
        .project-card-modern {
          position: relative;
          background: rgba(15, 10, 31, 0.6);
          border-radius: 1.5rem;
          overflow: hidden;
          border: 1px solid rgba(139, 92, 246, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card-modern:hover {
          transform: translateY(-8px);
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 
            0 20px 40px rgba(139, 92, 246, 0.3),
            0 0 60px rgba(6, 182, 212, 0.2);
        }

        /* Animated Background Gradient */
        .card-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.05) 0%,
            rgba(6, 182, 212, 0.05) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .project-card-modern:hover .card-bg-gradient {
          opacity: 1;
        }

        /* Image Wrapper */
        .project-image-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
          border-radius: 1.5rem 1.5rem 0 0;
          background: linear-gradient(
            135deg,
            rgba(6, 182, 212, 0.1),
            rgba(139, 92, 246, 0.1)
          );
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card-modern:hover .project-image {
          transform: scale(1.1);
        }

        /* Mobile touch scale effect */
        @media (max-width: 768px) {
          .project-card-modern:active .project-image {
            transform: scale(1.1);
          }
        }

        /* Image Overlay */
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(139, 92, 246, 0) 0%,
            rgba(139, 92, 246, 0.3) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card-modern:hover .image-overlay {
          opacity: 1;
        }

        .project-image-fallback {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Content */
        .project-content {
          padding: 1.5rem;
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title-modern {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.75rem;
          transition: all 0.3s ease;
        }

        .project-card-modern:hover .project-title-modern {
          background: linear-gradient(135deg, #22c55e, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
        }

        .project-description-modern {
          color: #d1d5db;
          line-height: 1.6;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          flex: 1;
        }

        /* Tech Stack */
        .tech-stack-modern {
          margin-top: auto;
        }

        .tech-badge-modern {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          background: rgba(139, 92, 246, 0.15);
          color: #c4b5fd;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(139, 92, 246, 0.3);
          transition: all 0.3s ease;
        }

        .tech-badge-modern:hover {
          background: rgba(139, 92, 246, 0.3);
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-2px);
        }

        /* ================= CURRENT PROJECT ================= */
        .current-project-card {
          background: rgba(15, 10, 31, 0.85);
          border-radius: 2rem;
          padding: 3rem;
          border: 1px solid rgba(34, 197, 94, 0.3);
          transition: all 0.4s ease;
        }

        .current-project-card:hover {
          border-color: rgba(34, 197, 94, 0.6);
          box-shadow: 
            0 20px 40px rgba(34, 197, 94, 0.2),
            0 0 60px rgba(6, 182, 212, 0.15);
        }

        .current-project-image-container {
          height: 300px;
          border-radius: 1rem;
          overflow: hidden;
        }

        .current-project-image-fallback {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.1),
            rgba(6, 182, 212, 0.1)
          );
        }

        .tech-badge-large {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          background: rgba(34, 197, 94, 0.2);
          color: #86efac;
          font-size: 0.8rem;
          border: 1px solid rgba(34, 197, 94, 0.3);
          transition: all 0.3s ease;
        }

        .tech-badge-large:hover {
          background: rgba(34, 197, 94, 0.3);
          transform: translateY(-2px);
        }

        /* Gradient Animation */
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradient 4s ease infinite;
          background-size: 300%;
        }

        .bg-300\\% {
          background-size: 300%;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 768px) {
          .project-content {
            padding: 1.5rem;
          }

          .project-image-wrapper {
            height: 200px;
          }

          .project-title-modern {
            font-size: 1.3rem;
          }

          .project-description-modern {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .tech-badge-modern {
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
          }

          .current-project-card {
            padding: 1.75rem;
          }

          .current-project-card h4 {
            font-size: 1.6rem;
          }

          .current-project-card p {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .current-project-image-container {
            height: 200px;
          }

          .projects-header {
            margin-bottom: 2.5rem;
          }

          .project-card-modern:hover {
            transform: none;
          }

          .project-card-modern:active {
            transform: translateY(-4px);
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Projects;