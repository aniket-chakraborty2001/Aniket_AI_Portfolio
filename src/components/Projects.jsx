// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Code, Layers } from 'lucide-react';

// const Projects = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sectionRef = useRef(null);
//   const autoPlayRef = useRef(null);

//   const projects = [
//     {
//       name: 'AI Site Inspector',
//       description: 'AI based site inspection system that takes building images and calculate height, width, area, number of doors, windows, door + window area and at last the paintable area and the paint age. Also detects any wall defects like crack, damp and paint peeling. 85% accuracy achieved',
//       techStack: ['Python', 'Meta', 'SAM3', 'OpenCV', 'Pillow', 'Matplotlib', 'Streamlit'],
//       image: '/projects/project1.png'
//     },
//     {
//       name: 'AI Image Search',
//       description: 'An AI algorithm that takes user uploaded laminate image and recommends most matching 10 edge band images from database based on Similarity Score. It calculates feature vector of images using Hugging face model and find similarity using cosine similarity. 90% accuracy achieved',
//       techStack: ['Python', 'PyTorch', 'OpenCV', 'Hugging Face', 'Google Vit Model', 'Streamlit', 'Feature Vector', 'JSON', 'Transformers', 'Scikit-Learn'],
//       image: '/projects/project2.png'
//     },
//     {
//       name: 'Home Exterior Layering',
//       description: 'A Fine Tuned SAM3 model on existing data that efficiently detects different exterior sections like Base, Pillar, Projection, Border etc and mask them in different colors. Trained on 5000 images. Accuracy achieved 75%',
//       techStack: ['Python', 'Scikit-Learn', 'Meta', 'SAM3', 'Transformers', 'Annotated Data', 'SAM3 GitHub'],
//       image: '/projects/project3.png'
//     },
//     {
//       name: 'AI Car Inspection Reporting System',
//       description: 'A deep learning based AI tool that takes a car 360 degree video and detects different car body sections, car damage types and makes a frame wise report in excel that a user or client can download. Accuracy achieved 85%',
//       techStack: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit', 'YOLO', 'RoboFlow', 'OpenCV', 'Pillow', 'Ultralytics'],
//       image: '/projects/project4.png'
//     },
//     {
//       name: 'LBM - Document Summarization',
//       description: 'Future of LLMs, SLMs LBMs (Large Behavioural Models) that can actually do certain task based on user personality, behaviour by observing previous user trends, type of answers they seek etc. A fine tuned SLM that is trained on open source PENS data. Accuracy achieved 90%',
//       techStack: ['Python', 'SLMs', 'Llama Model', 'Streamlit', 'Hugging Face', 'PEFT', 'Quantization'],
//       image: '/projects/project5.png'
//     },
//     {
//       name: 'GenAI Text-Image & Color Picker',
//       description: 'A GenAI project that takes a prompt from user and creates an image based on that. Later it let the user to pick color from that image to see which colors are there.',
//       techStack: ['Python', 'OpenAI', 'Streamlit', 'Dall-E-3 Model', 'html', 'CSS', 'JavaScript', 'Pillow', 'Flask'],
//       image: '/projects/project6.png'
//     },
//     {
//       name: 'PotHole Detection From Camera',
//       description: 'A deep learning based AI tool that can detect pot holes from road taking a camera live feed as input. The same thing that is done in Mahindra VisionX projects. Accuracy for pothole detection is 90%',
//       techStack: ['Python', 'Google Colab', 'YOLO', 'Ultralytics', 'RoboFlow', 'Object Detection', 'Fine Tune Process'],
//       image: '/projects/project7.png'
//     },
//     {
//       name: 'MCP Agent ChatBot',
//       description: 'A chatbot build using MCP (Model Context Protocol) that takes user query, find related information from a database and let the user see the matched answers. This is based on finding colored laminates from a database using query like "Find me some red laminates". Accuracy achoeved 92%',
//       techStack: ['Python', 'Langchain', 'Langgraph', 'Streamlit', 'boto3', 'MCP', 'OpenAI'],
//       image: '/projects/project8.png'  
//     },
//     {
//       name: 'RAG ChatBot',
//       description: 'A Retrieval Augmented Generation (RAG) based Chatbot that let the user question about some specific incident or content and in return receive appropriate answers. The knowledge base for this case is open source Hawaii Wild fire data. Context is maintained most of the time',
//       techStack: ['Python', 'OpenAI', 'Text Files', 'Langchain', 'Streamlit', 'Langcahin Community', 'faiss-cpu'],
//       image: '/projects/project9.png'  
//     },
//     {
//       name: 'Lovable Dev Clone Creation',
//       description: 'Loveable Dev, an AI platform to create modern website based on user prompt. Cloned the system Using Claud sonnet model to create the same. Currently hallucinating most of the times. With time, knowledge it will become good.',
//       techStack: ['Python', 'Streamlit', 'Anthropic Claud Sonnet', 'React Vite Code', 'Ngrok'],
//       image: '/projects/project10.png'  
//     },
//     {
//       name: 'SAM2 Human Tracking',
//       description: 'A Meta SAM2 and Ultralytics YOLO based approach where humans are detected and tracked all over a video. Each frame in the video is supplied to the system to detect and track the human. Can be used inside shopping malls, stores to detect human movement',
//       techStack: ['Python', 'Meta', 'SAM2', 'Ultralytrics', 'YOLO', 'COCO dataset', 'Numpy'],
//       image: '/projects/project11.png'
//     }
//   ];

//   /* Intersection Observer */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   /* Auto-play */
//   useEffect(() => {
//     autoPlayRef.current = setInterval(nextSlide, 5000);
//     return () => clearInterval(autoPlayRef.current);
//   }, [currentSlide]);

//   const nextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % projects.length);

//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="min-h-screen py-20 px-6"
//       style={{
//         background:
//           'linear-gradient(to bottom, #0a0a1a 0%, #120a20 50%, #0a0a1a 100%)'
//       }}
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="exp-text text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animate-gradient bg-300% leading-[1.2] pb-2">
//             Experience And Projects
//           </h2>
//           <p className="text-gray-400 mt-4">
//             AI / ML systems built with production-ready design
//           </p>
//         </div>

//         {/* ================= PROJECTS CAROUSEL ================= */}
//         <div className="relative overflow-hidden rounded-3xl mb-24">
//           <div
//             className="flex transition-transform duration-700"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {projects.map((project, index) => (
//               <div key={index} className="min-w-full p-4">
//                 <div className="project-card">

//                   {/* Image */}
//                   <div className="project-image-container">
//                     {project.image? (
//                       <img
//                         src={project.image}
//                         alt={project.name}
//                         className="w-full h-full object-contain rounded-xl"
//                       />
//                     ) : (
//                       <div className="project-image-fallback">
//                         <Layers className="w-24 h-24 text-cyan-400 opacity-50" />
//                       </div>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="project-details">
//                     <h3 className="project-title">{project.name}</h3>
//                     <p className="project-description">
//                       {project.description}
//                     </p>

//                     <div className="tech-stack">
//                       <div className="flex items-center gap-2 mb-3">
//                         <Code className="w-4 h-4 text-cyan-400" />
//                         <span className="text-gray-400 text-sm font-semibold">
//                           Tech Stack
//                         </span>
//                       </div>

//                       <div className="flex flex-wrap gap-2">
//                         {project.techStack.map((tech, idx) => (
//                           <span key={idx} className="tech-badge">
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation */}
//           <button onClick={prevSlide} className="carousel-nav left">
//             <ChevronLeft />
//           </button>
//           <button onClick={nextSlide} className="carousel-nav right">
//             <ChevronRight />
//           </button>
//         </div>

//         {/* The Crousal Dot Animation */}
//         <div className="flex justify-center gap-3 mt-10 mb-20">
//           {projects.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`carousel-dot ${
//                 currentSlide === index ? "active" : ""
//               }`}
//               aria-label={`Go to project ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* ================= CURRENT PROJECT SECTION ================= */}
//         <div
//           className={`transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
//           }`}
//         >
//           <div className="text-center mb-12">
//             <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
//               Current Project
//             </h3>
//             <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mt-3 rounded-full" />
//           </div>

//           <div className="current-project-card">
//             <div className="current-project-content grid md:grid-cols-2 gap-8">

//               {/* Image */}
//               <div className="current-project-image-container">
//                 {true ? (   /* later replace `true` with a condition if needed */
//                   <img
//                     src="/projects/current_project.jpg"
//                     alt="Ball Tracking in Cricket with Hawk Eye View"
//                     className="w-full h-full object-contain rounded-xl"
//                   />
//                 ) : (
//                   <div className="current-project-image-fallback">
//                     <Layers className="w-32 h-32 text-green-400 opacity-50" />
//                   </div>
//                 )}
//               </div>

//               {/* Details */}
//               <div>
//                 <h4 className="text-3xl font-bold text-white mb-4">
//                   Ball Tracking in Cricket with Hawk Eye View
//                 </h4>

//                 <p className="text-gray-300 leading-relaxed mb-6">
//                   Currently developing a system that can efficiently detect white cricket ball from multiple
//                   video cricket feeds, track the ball and give raw pixel coordinate of the ball position and then
//                   finally plot them to create a Hawk Eye View.
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     'Python',
//                     'PyTorch',
//                     'Ultralytics',
//                     'YOLO',
//                     'CUDA',
//                     'OpenCV',
//                     'Pillow',
//                     'TrackNet',
//                     'GitHub'
//                   ].map((tech, idx) => (
//                     <span key={idx} className="tech-badge-large">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//       </div>

//       {/* ================= STYLES ================= */}
//       <style jsx>{`
//         .project-card {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2rem;
//           background: rgba(15, 10, 31, 0.85);
//           border-radius: 2rem;
//           padding: 2rem;
//         }

//         @font-face {
//           font-family: 'ExpFont';
//           src: url('/navheadingfonts/Polea Extra Bold DEMO.otf') format('opentype');
//           font-weight: normal;
//           font-style: normal;
//           font-display: swap;
//         }

//         .exp-text {
//           font-family: 'ExpFont', sans-serif;
//           letter-spacing: 0.08em;
//         }

//         .project-image-container,
//         .current-project-image-container {
//           height: 300px;
//           border-radius: 1rem;
//           overflow: hidden;
//         }

//         .project-image-fallback,
//         .current-project-image-fallback {
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: linear-gradient(135deg, rgba(6,182,212,.1), rgba(139,92,246,.1));
//         }

//         .project-title {
//           font-size: 2rem;
//           font-weight: 700;
//           background: linear-gradient(135deg, #06b6d4, #8b5cf6);
//           -webkit-background-clip: text;
//           color: transparent;
//         }

//         .project-description {
//           color: #d1d5db;
//           margin: 1rem 0;
//           line-height: 1.7;
//         }

//         .tech-badge,
//         .tech-badge-large {
//           padding: 0.45rem 1rem;
//           border-radius: 9999px;
//           background: rgba(139,92,246,.2);
//           color: #c4b5fd;
//           font-size: 0.8rem;
//         }

//         .current-project-card {
//           background: rgba(15, 10, 31, 0.85);
//           border-radius: 2rem;
//           padding: 3rem;
//         }

//         .carousel-nav {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           background: rgba(139,92,246,.3);
//           border-radius: 50%;
//           padding: .6rem;
//           color: white;
//         }

//         .carousel-nav.left { left: 1rem; }
//         .carousel-nav.right { right: 1rem; }

//         @media (max-width: 900px) {
//           .project-card {
//             grid-template-columns: 1fr;
//           }
//         }

//         .carousel-dot {
//           width: 12px;
//           height: 12px;
//           border-radius: 9999px;
//           background: rgba(139, 92, 246, 0.4);
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//         }

//         .carousel-dot:hover {
//           transform: scale(1.2);
//           background: rgba(139, 92, 246, 0.7);
//         }

//         .carousel-dot.active {
//           background: linear-gradient(135deg, #22c55e, #06b6d4);
//           box-shadow:
//             0 0 10px rgba(34, 197, 94, 0.8),
//             0 0 20px rgba(6, 182, 212, 0.6);
//           transform: scale(1.4);
//         }
        
//         @keyframes gradient { 
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         .animate-gradient {
//           animation: gradient 4s ease infinite;
//         }

//         .bg-300\% {
//           background-size: 300%;
//         }

//       `}</style>
//     </section>
//   );
// };

// export default Projects;

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
      className="min-h-screen py-14 md:py-20 px-4 md:px-6"
      style={{
        background:
          'linear-gradient(to bottom, #0a0a1a 0%, #120a20 50%, #0a0a1a 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="projects-header text-center mb-16">
          <h2 className="exp-text text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animate-gradient bg-300% leading-[1.2] pb-2">
            Experience And Projects
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
                    {project.image? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <div className="project-image-fallback">
                        <Layers className="w-24 h-24 text-cyan-400 opacity-50" />
                      </div>
                    )}
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

        {/* The Crousal Dot Animation */}
        <div className="flex justify-center gap-3 mt-8 mb-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`carousel-dot ${
                currentSlide === index ? "active" : ""
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
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
                {true ? (   /* later replace `true` with a condition if needed */
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
        .project-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          background: rgba(15, 10, 31, 0.85);
          border-radius: 2rem;
          padding: 2rem;
        }

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

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: rgba(139, 92, 246, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .carousel-dot:hover {
          transform: scale(1.2);
          background: rgba(139, 92, 246, 0.7);
        }

        .carousel-dot.active {
          background: linear-gradient(135deg, #22c55e, #06b6d4);
          box-shadow:
            0 0 10px rgba(34, 197, 94, 0.8),
            0 0 20px rgba(6, 182, 212, 0.6);
          transform: scale(1.4);
        }
        
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

        @media (max-width: 768px) {
          .project-card {
            padding: 1.5rem;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .project-image-container,
          .current-project-image-container {
            height: 200px;
          }
        }

        @media (max-width: 768px) {
          .project-title {
            font-size: 1.6rem;
          }

          .project-description {
            font-size: 0.95rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 768px) {
          .tech-badge,
          .tech-badge-large {
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
          }
        }
          
        @media (max-width: 768px) {
          .carousel-nav {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .project-card {
            border-radius: 1.5rem;
          }
        }

        @media (max-width: 768px) {
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
        }

        @media (max-width: 768px) {
          .carousel-dot:hover {
            transform: none;
          }
        }

        @media (max-width: 768px) {
          .projects-header {
            margin-bottom: 2.5rem; /* was effectively ~4rem */
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;