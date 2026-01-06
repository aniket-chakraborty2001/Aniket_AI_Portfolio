// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

// const Internship = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   const experiences = [
//     {
//       title: 'Data Science Intern',
//       company: 'Institute of Pulmocare and Research (IPCR)',
//       location: 'Kolkata, India',
//       duration: 'July 2024 - Oct 2022',
//       responsibilities: [
//         'Worked and Understood how HRCT chest scans are read',
//         'Used COPD and COPD PH patients and fetch there heart measurements from HRCT ches scans',
//         'Performed Data Analysis on these Data',
//         'Presented my findings in a webinar'
//       ],
//       color: 'cyan'
//     },
//     {
//       title: 'Private Tutoring',
//       company: 'Self Employed',
//       location: 'Kolkata, India',
//       duration: 'Feb 2020 - April 2025',
//       responsibilities: [
//         'preparing students for class 10 board exams',
//         'Preparing students for basic computer training - Excel, Python Programming',
//         'Preparing students for Math Olympiad exams for class 8 to 10'
//       ],
//       color: 'purple'
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       id="internship"
//       ref={sectionRef}
//       className="min-h-screen relative py-20 px-6 overflow-hidden"
//       style={{
//         background: 'linear-gradient(to bottom, #0a0a1a 0%, #1e0f35 50%, #0a0a1a 100%)'
//       }}
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 top-20 left-20 animate-float-slow" />
//         <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 bottom-20 right-20 animate-float-slower" />
//       </div>

//       {/* Decorative Briefcase Icons */}
//       <div className="absolute top-40 right-10 opacity-5">
//         <Briefcase className="w-32 h-32 text-purple-400" />
//       </div>
//       <div className="absolute bottom-40 left-10 opacity-5">
//         <Briefcase className="w-32 h-32 text-cyan-400" />
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 inline-block animate-gradient bg-300% leading-[1.2] pb-2">
//             Internship & Previous Work Experience
//           </h2>
//           <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 via-purple-600 to-cyan-500 mx-auto mt-4 rounded-full" />
//           <p className="text-gray-400 mt-6 text-lg">
//             Professional experiences and hands-on learning
//           </p>
//         </div>

//         {/* Experience Cards */}
//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className={`experience-card transition-all duration-1000 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//               }`}
//               style={{ transitionDelay: `${index * 0.3}s` }}
//             >
//               {/* Animated Glow Border */}
//               <div className={`experience-glow experience-glow-${exp.color}`} />
              
//               {/* Card Content */}
//               <div className="experience-content">
//                 {/* Header Section */}
//                 <div className="experience-header">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-3">
//                       <Briefcase className={`w-6 h-6 text-${exp.color}-400 icon-float`} />
//                       <h3 className="experience-title">
//                         {exp.title}
//                       </h3>
//                     </div>
                    
//                     <h4 className="experience-company">
//                       {exp.company}
//                     </h4>
                    
//                     <div className="flex items-center gap-2 text-gray-400 mt-2">
//                       <MapPin className="w-4 h-4" />
//                       <span className="text-sm">{exp.location}</span>
//                     </div>
//                   </div>

//                   {/* Duration Badge */}
//                   <div className="duration-badge">
//                     <Calendar className="w-4 h-4" />
//                     <span>{exp.duration}</span>
//                   </div>
//                 </div>

//                 {/* Responsibilities Section */}
//                 {exp.responsibilities.length > 0 && (
//                   <div className="responsibilities-section">
//                     <ul className="responsibilities-list">
//                       {exp.responsibilities.map((resp, idx) => (
//                         <li
//                           key={idx}
//                           className={`responsibility-item ${
//                             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
//                           }`}
//                           style={{ transitionDelay: `${index * 0.3 + 0.2 + idx * 0.1}s` }}
//                         >
//                           <div className="responsibility-bullet">
//                             <ChevronRight className="w-4 h-4" />
//                           </div>
//                           <span>{resp}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Decorative Corner Elements */}
//                 <div className="corner-decoration corner-top-left" />
//                 <div className="corner-decoration corner-top-right" />
//                 <div className="corner-decoration corner-bottom-left" />
//                 <div className="corner-decoration corner-bottom-right" />

//                 {/* Hover Wave Effect */}
//                 <div className="wave-effect" />
//               </div>

//               {/* Side Accent */}
//               <div className={`side-accent side-accent-${exp.color}`} />
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div
//           className={`stats-container transition-all duration-1000 ${
//             isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
//           }`}
//           style={{ transitionDelay: '0.8s' }}
//         >
//           <div className="stat-box">
//             <div className="stat-value text-cyan-400">2+</div>
//             <div className="stat-label">Professional Roles</div>
//           </div>
//           <div className="stat-box">
//             <div className="stat-value text-purple-400">5+</div>
//             <div className="stat-label">Total Years of Experience</div>
//           </div>
//           <div className="stat-box">
//             <div className="stat-value text-yellow-400">40+</div>
//             <div className="stat-label">Projects Completed</div>
//           </div>
//         </div>
//       </div>

//       {/* Styles */}
//       <style jsx>{`
//         /* Float Animations */
//         @keyframes float-slow {
//           0%, 100% { 
//             transform: translate(0, 0) scale(1); 
//             opacity: 0.1;
//           }
//           50% { 
//             transform: translate(20px, -20px) scale(1.1); 
//             opacity: 0.15;
//           }
//         }

//         @keyframes float-slower {
//           0%, 100% { 
//             transform: translate(0, 0) scale(1); 
//             opacity: 0.1;
//           }
//           50% { 
//             transform: translate(-20px, 20px) scale(1.1); 
//             opacity: 0.15;
//           }
//         }

//         .animate-float-slow {
//           animation: float-slow 15s ease-in-out infinite;
//         }

//         .animate-float-slower {
//           animation: float-slower 18s ease-in-out infinite;
//         }

//         /* Gradient Animation */
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

//         /* Icon Float Animation */
//         @keyframes icon-float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }

//         .icon-float {
//           animation: icon-float 2s ease-in-out infinite;
//         }

//         /* Experience Card */
//         .experience-card {
//           position: relative;
//           margin: 0 auto;
//         }

//         .experience-glow {
//           position: absolute;
//           inset: -3px;
//           border-radius: 1.5rem;
//           opacity: 0;
//           transition: opacity 0.5s ease;
//           filter: blur(12px);
//         }

//         .experience-glow-cyan {
//           background: linear-gradient(135deg, #06b6d4, #8b5cf6, #06b6d4);
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }

//         .experience-glow-purple {
//           background: linear-gradient(135deg, #8b5cf6, #ec4899, #8b5cf6);
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }

//         .experience-card:hover .experience-glow {
//           opacity: 0.7;
//         }

//         .experience-content {
//           position: relative;
//           background: linear-gradient(135deg, rgba(88, 28, 135, 0.5), rgba(76, 29, 149, 0.6));
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border: 1px solid rgba(168, 85, 247, 0.3);
//           border-radius: 1.5rem;
//           padding: 2.5rem;
//           overflow: hidden;
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .experience-card:hover .experience-content {
//           border-color: rgba(168, 85, 247, 0.6);
//           box-shadow: 
//             0 20px 60px rgba(168, 85, 247, 0.3),
//             0 0 80px rgba(6, 182, 212, 0.2);
//           transform: translateY(-10px) scale(1.02);
//         }

//         /* Header Section */
//         .experience-header {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: space-between;
//           align-items: flex-start;
//           gap: 1.5rem;
//           margin-bottom: 2rem;
//           position: relative;
//           z-index: 1;
//         }

//         .experience-title {
//           font-size: 1.75rem;
//           font-weight: 800;
//           color: #fde047;
//           text-shadow: 0 0 20px rgba(253, 224, 71, 0.4);
//         }

//         .experience-company {
//           font-size: 1.125rem;
//           font-weight: 600;
//           color: #ffffff;
//           margin-top: 0.5rem;
//         }

//         /* Duration Badge */
//         .duration-badge {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           background: linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(234, 179, 8, 0.3));
//           border: 1px solid rgba(234, 179, 8, 0.4);
//           border-radius: 9999px;
//           padding: 0.75rem 1.5rem;
//           color: #fde047;
//           font-weight: 700;
//           font-size: 0.875rem;
//           white-space: nowrap;
//           box-shadow: 0 4px 15px rgba(234, 179, 8, 0.2);
//           transition: all 0.3s ease;
//         }

//         .duration-badge svg {
//           color: #fde047;
//         }

//         .experience-card:hover .duration-badge {
//           transform: scale(1.05);
//           box-shadow: 0 6px 20px rgba(234, 179, 8, 0.4);
//         }

//         /* Responsibilities Section */
//         .responsibilities-section {
//           position: relative;
//           z-index: 1;
//         }

//         .responsibilities-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }

//         .responsibility-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 0.75rem;
//           color: #e5e7eb;
//           font-size: 1rem;
//           line-height: 1.7;
//           padding: 0.75rem;
//           background: rgba(0, 0, 0, 0.2);
//           border-left: 3px solid rgba(6, 182, 212, 0.5);
//           border-radius: 0.5rem;
//           transition: all 0.4s ease;
//         }

//         .responsibility-item:hover {
//           background: rgba(0, 0, 0, 0.3);
//           border-left-color: rgba(6, 182, 212, 0.8);
//           transform: translateX(10px);
//         }

//         .responsibility-bullet {
//           flex-shrink: 0;
//           width: 1.5rem;
//           height: 1.5rem;
//           background: linear-gradient(135deg, #06b6d4, #8b5cf6);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           margin-top: 0.125rem;
//         }

//         /* Corner Decorations */
//         .corner-decoration {
//           position: absolute;
//           width: 20px;
//           height: 20px;
//           border: 2px solid rgba(234, 179, 8, 0.4);
//           transition: all 0.3s ease;
//         }

//         .corner-top-left {
//           top: 1rem;
//           left: 1rem;
//           border-right: none;
//           border-bottom: none;
//         }

//         .corner-top-right {
//           top: 1rem;
//           right: 1rem;
//           border-left: none;
//           border-bottom: none;
//         }

//         .corner-bottom-left {
//           bottom: 1rem;
//           left: 1rem;
//           border-right: none;
//           border-top: none;
//         }

//         .corner-bottom-right {
//           bottom: 1rem;
//           right: 1rem;
//           border-left: none;
//           border-top: none;
//         }

//         .experience-card:hover .corner-decoration {
//           border-color: rgba(234, 179, 8, 0.8);
//           width: 30px;
//           height: 30px;
//         }

//         /* Wave Effect */
//         .wave-effect {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           height: 100%;
//           background: linear-gradient(
//             to top,
//             rgba(6, 182, 212, 0.1),
//             transparent
//           );
//           opacity: 0;
//           transition: opacity 0.5s ease;
//           pointer-events: none;
//         }

//         .experience-card:hover .wave-effect {
//           opacity: 1;
//           animation: wave 2s ease-in-out infinite;
//         }

//         @keyframes wave {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         /* Side Accent */
//         .side-accent {
//           position: absolute;
//           left: 0;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 6px;
//           height: 60%;
//           border-radius: 0 1rem 1rem 0;
//           transition: all 0.3s ease;
//         }

//         .side-accent-cyan {
//           background: linear-gradient(to bottom, transparent, #06b6d4, transparent);
//         }

//         .side-accent-purple {
//           background: linear-gradient(to bottom, transparent, #8b5cf6, transparent);
//         }

//         .experience-card:hover .side-accent {
//           height: 80%;
//           box-shadow: 0 0 30px currentColor;
//         }

//         /* Stats Container */
//         .stats-container {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 2rem;
//           margin-top: 4rem;
//           max-width: 900px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .stat-box {
//           background: rgba(15, 10, 31, 0.6);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(139, 92, 246, 0.3);
//           border-radius: 1.5rem;
//           padding: 2rem;
//           text-align: center;
//           transition: all 0.3s ease;
//         }

//         .stat-box:hover {
//           transform: translateY(-10px) scale(1.05);
//           border-color: rgba(139, 92, 246, 0.6);
//           box-shadow: 
//             0 20px 40px rgba(139, 92, 246, 0.3),
//             0 0 60px rgba(6, 182, 212, 0.2);
//         }

//         .stat-value {
//           font-size: 3rem;
//           font-weight: 900;
//           margin-bottom: 0.5rem;
//           text-shadow: 0 0 30px currentColor;
//         }

//         .stat-label {
//           color: #9ca3af;
//           font-size: 0.875rem;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//         }

//         /* Color Utilities */
//         .text-cyan-400 { color: #22d3ee; }
//         .text-purple-400 { color: #c084fc; }
//         .text-yellow-400 { color: #facc15; }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .experience-content {
//             padding: 1.5rem;
//           }

//           .experience-header {
//             flex-direction: column;
//           }

//           .experience-title {
//             font-size: 1.5rem;
//           }

//           .duration-badge {
//             width: 100%;
//             justify-content: center;
//           }

//           .stats-container {
//             grid-template-columns: 1fr;
//             gap: 1.5rem;
//           }

//           .corner-decoration {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Internship;

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

const Internship = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'Institute of Pulmocare and Research (IPCR)',
      location: 'Kolkata, India',
      duration: 'July 2024 - Oct 2022',
      responsibilities: [
        'Worked and Understood how HRCT chest scans are read',
        'Used COPD and COPD PH patients and fetch there heart measurements from HRCT ches scans',
        'Performed Data Analysis on these Data',
        'Presented my findings in a webinar'
      ],
      color: 'cyan'
    },
    {
      title: 'Private Tutoring',
      company: 'Self Employed',
      location: 'Kolkata, India',
      duration: 'Feb 2020 - April 2025',
      responsibilities: [
        'preparing students for class 10 board exams',
        'Preparing students for basic computer training - Excel, Python Programming',
        'Preparing students for Math Olympiad exams for class 8 to 10',
        'Understanding the capabilities of student and helping to increase it'
      ],
      color: 'purple'
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
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
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
      id="internship"
      ref={sectionRef}
      className="min-h-screen relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0a1a 0%, #1e0f35 50%, #0a0a1a 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 top-20 left-20 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 bottom-20 right-20 animate-float-slower" />
      </div>

      {/* Decorative Briefcase Icons */}
      <div className="absolute top-40 right-10 opacity-5">
        <Briefcase className="w-32 h-32 text-purple-400" />
      </div>
      <div className="absolute bottom-40 left-10 opacity-5">
        <Briefcase className="w-32 h-32 text-cyan-400" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 inline-block animate-gradient bg-300% leading-[1.2] pb-2">
            Internship & Previous Work Experience
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 via-purple-600 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Professional experiences and hands-on learning
          </p>
        </div>

        {/* Swiper Container */}
        <div className="swiper-container">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualChange(prevSlide)}
            className="swiper-nav-btn swiper-nav-left"
            aria-label="Previous experience"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleManualChange(nextSlide)}
            className="swiper-nav-btn swiper-nav-right"
            aria-label="Next experience"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Experience Cards Swiper */}
          <div className="swiper-wrapper">
            <div
              className="swiper-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`swiper-slide ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.3}s` }}
                >
                  <div className="experience-card">
                    {/* Animated Glow Border */}
                    <div className={`experience-glow experience-glow-${exp.color}`} />
                    
                    {/* Card Content */}
                    <div className="experience-content">
                      {/* Header Section */}
                      <div className="experience-header">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Briefcase className={`w-6 h-6 text-${exp.color}-400 icon-float`} />
                            <h3 className="experience-title">
                              {exp.title}
                            </h3>
                          </div>
                          
                          <h4 className="experience-company">
                            {exp.company}
                          </h4>
                          
                          <div className="flex items-center gap-2 text-gray-400 mt-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="duration-badge">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Responsibilities Section */}
                      {exp.responsibilities.length > 0 && (
                        <div className="responsibilities-section">
                          <ul className="responsibilities-list">
                            {exp.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className={`responsibility-item ${
                                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                }`}
                                style={{ transitionDelay: `${index * 0.3 + 0.2 + idx * 0.1}s` }}
                              >
                                <div className="responsibility-bullet">
                                  <ChevronRight className="w-4 h-4" />
                                </div>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Decorative Corner Elements */}
                      <div className="corner-decoration corner-top-left" />
                      <div className="corner-decoration corner-top-right" />
                      <div className="corner-decoration corner-bottom-left" />
                      <div className="corner-decoration corner-bottom-right" />

                      {/* Hover Wave Effect */}
                      <div className="wave-effect" />
                    </div>

                    {/* Side Accent */}
                    <div className={`side-accent side-accent-${exp.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="swiper-pagination">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualChange(() => setCurrentIndex(index))}
                className={`swiper-dot ${currentIndex === index ? 'swiper-dot-active' : ''}`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`stats-container transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <div className="stat-box">
            <div className="stat-value text-cyan-400">2+</div>
            <div className="stat-label">Professional Roles</div>
          </div>
          <div className="stat-box">
            <div className="stat-value text-purple-400">5+</div>
            <div className="stat-label">Total Years of Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-value text-yellow-400">40+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Float Animations */
        @keyframes float-slow {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.1;
          }
          50% { 
            transform: translate(20px, -20px) scale(1.1); 
            opacity: 0.15;
          }
        }

        @keyframes float-slower {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.1;
          }
          50% { 
            transform: translate(-20px, 20px) scale(1.1); 
            opacity: 0.15;
          }
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 18s ease-in-out infinite;
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

        /* Icon Float Animation */
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .icon-float {
          animation: icon-float 2s ease-in-out infinite;
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
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          width: 2rem;
          border-radius: 9999px;
        }

        /* Experience Card */
        .experience-card {
          position: relative;
          margin: 0 auto;
        }

        .experience-glow {
          position: absolute;
          inset: -3px;
          border-radius: 1.5rem;
          opacity: 0;
          transition: opacity 0.5s ease;
          filter: blur(12px);
        }

        .experience-glow-cyan {
          background: linear-gradient(135deg, #06b6d4, #8b5cf6, #06b6d4);
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .experience-glow-purple {
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #8b5cf6);
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .experience-card:hover .experience-glow {
          opacity: 0.7;
        }

        .experience-content {
          position: relative;
          background: linear-gradient(135deg, rgba(88, 28, 135, 0.5), rgba(76, 29, 149, 0.6));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 1.5rem;
          padding: 2.5rem;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .experience-card:hover .experience-content {
          border-color: rgba(168, 85, 247, 0.6);
          box-shadow: 
            0 20px 60px rgba(168, 85, 247, 0.3),
            0 0 80px rgba(6, 182, 212, 0.2);
          transform: translateY(-10px) scale(1.02);
        }

        /* Header Section */
        .experience-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .experience-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #fde047;
          text-shadow: 0 0 20px rgba(253, 224, 71, 0.4);
        }

        .experience-company {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          margin-top: 0.5rem;
        }

        /* Duration Badge */
        .duration-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(234, 179, 8, 0.3));
          border: 1px solid rgba(234, 179, 8, 0.4);
          border-radius: 9999px;
          padding: 0.75rem 1.5rem;
          color: #fde047;
          font-weight: 700;
          font-size: 0.875rem;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(234, 179, 8, 0.2);
          transition: all 0.3s ease;
        }

        .duration-badge svg {
          color: #fde047;
        }

        .experience-card:hover .duration-badge {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(234, 179, 8, 0.4);
        }

        /* Responsibilities Section */
        .responsibilities-section {
          position: relative;
          z-index: 1;
        }

        .responsibilities-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .responsibility-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #e5e7eb;
          font-size: 1rem;
          line-height: 1.7;
          padding: 0.75rem;
          background: rgba(0, 0, 0, 0.2);
          border-left: 3px solid rgba(6, 182, 212, 0.5);
          border-radius: 0.5rem;
          transition: all 0.4s ease;
        }

        .responsibility-item:hover {
          background: rgba(0, 0, 0, 0.3);
          border-left-color: rgba(6, 182, 212, 0.8);
          transform: translateX(10px);
        }

        .responsibility-bullet {
          flex-shrink: 0;
          width: 1.5rem;
          height: 1.5rem;
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-top: 0.125rem;
        }

        /* Corner Decorations */
        .corner-decoration {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(234, 179, 8, 0.4);
          transition: all 0.3s ease;
        }

        .corner-top-left {
          top: 1rem;
          left: 1rem;
          border-right: none;
          border-bottom: none;
        }

        .corner-top-right {
          top: 1rem;
          right: 1rem;
          border-left: none;
          border-bottom: none;
        }

        .corner-bottom-left {
          bottom: 1rem;
          left: 1rem;
          border-right: none;
          border-top: none;
        }

        .corner-bottom-right {
          bottom: 1rem;
          right: 1rem;
          border-left: none;
          border-top: none;
        }

        .experience-card:hover .corner-decoration {
          border-color: rgba(234, 179, 8, 0.8);
          width: 30px;
          height: 30px;
        }

        /* Wave Effect */
        .wave-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(6, 182, 212, 0.1),
            transparent
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .experience-card:hover .wave-effect {
          opacity: 1;
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Side Accent */
        .side-accent {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 60%;
          border-radius: 0 1rem 1rem 0;
          transition: all 0.3s ease;
        }

        .side-accent-cyan {
          background: linear-gradient(to bottom, transparent, #06b6d4, transparent);
        }

        .side-accent-purple {
          background: linear-gradient(to bottom, transparent, #8b5cf6, transparent);
        }

        .experience-card:hover .side-accent {
          height: 80%;
          box-shadow: 0 0 30px currentColor;
        }

        /* Stats Container */
        .stats-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 4rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .stat-box {
          background: rgba(15, 10, 31, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-box:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 
            0 20px 40px rgba(139, 92, 246, 0.3),
            0 0 60px rgba(6, 182, 212, 0.2);
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 30px currentColor;
        }

        .stat-label {
          color: #9ca3af;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Color Utilities */
        .text-cyan-400 { color: #22d3ee; }
        .text-purple-400 { color: #c084fc; }
        .text-yellow-400 { color: #facc15; }

        /* Responsive Design */
        @media (max-width: 768px) {
          .experience-content {
            padding: 1.5rem;
          }

          .experience-header {
            flex-direction: column;
          }

          .experience-title {
            font-size: 1.5rem;
          }

          .duration-badge {
            width: 100%;
            justify-content: center;
          }

          .stats-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .corner-decoration {
            display: none;
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

export default Internship;