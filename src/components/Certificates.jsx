"use client";

import React, { useState, useEffect, useRef } from "react";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const certificates = [
    {
      title: "EPG In DS AI and ML",
      issuer: "IIT Roorkee, Intellipaat, Bangalore",
      date: "Feb 2024 to Present",
      skills: ["Python", "MSSQL", "EDA", "PowerBI", "ML", "DL", "AI"],
      credentialUrl: "https://drive.google.com/file/d/1OGRaqXd75zDny4vfUPF47Qp02Ugy6wuD/view?usp=drive_link"
    },
    {
      title: "Google Data Analysis",
      issuer: "Coursera, Google",
      date: "May 2023",
      skills: ["Python", "Excel", "SQL"],
      credentialUrl: "https://drive.google.com/file/d/1tWV_db3PoNV3PAnE48cl50Xm157s_xRz/view?usp=drive_link"
    },
    {
      title: "IBM Data Science",
      issuer: "Coursera, IBM",
      date: "November 2023",
      skills: ["Python", "R", "SQL", "EDA", "ML"],
      credentialUrl: "https://drive.google.com/file/d/1r1a2AXQk77fgPZkJxx8B-POY2SzbCFqn/view?usp=drive_link"
    },
    {
      title: "Mathematics for ML",
      issuer: "Coursera, Imperial College of London",
      date: "January 2024",
      skills: ["Python", "Algebra", "Calculus", "PCA"],
      credentialUrl: "https://drive.google.com/file/d/1ZBMAWZoriarOppCJvnm1jZKnCDz3C2yT/view?usp=drive_link"
    },
    {
      title: "Prompt Engineering",
      issuer: "Coursera, Vanderbilt University",
      date: "October 2023",
      skills: ["ChatGPT", "Prompting", "Context"],
      credentialUrl: "https://drive.google.com/file/d/17H3T9PLwFdT2ZvejXpsnQBvbE_nUl3Vy/view?usp=drive_link"
    },
    {
      title: "Internship Certificate",
      issuer: "IPCR Kolkata",
      date: "September 2024",
      skills: ["Python", "Research", "Collaboration"],
      credentialUrl: "https://drive.google.com/file/d/1RUdEpdNwzWT-5zPwbsX6A3SXB1kofFgl/view?usp=drive_link"
    }
  ];

  useEffect(() => {
    autoPlayRef.current = setInterval(() => next(), 2000);
    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex]);

  const next = () => setCurrentIndex((p) => (p + 1) % certificates.length);
  const prev = () => setCurrentIndex((p) => (p === 0 ? certificates.length - 1 : p - 1));

  const handleManualChange = (cb) => {
    clearInterval(autoPlayRef.current);
    cb();
    autoPlayRef.current = setInterval(next, 2000);
  };

  const getVisibleCards = () => {
    const total = certificates.length;
    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (currentIndex + offset + total) % total;
      return { ...certificates[index], offset, index };
    });
  };

  return (
    <section
      id="certificates"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #020617, #0f172a, #020617)"
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 top-20 left-20" />
        <div className="absolute w-96 h-96 bg-fuchsia-600 rounded-full blur-3xl opacity-10 bottom-20 right-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animated-gradient-text bg-300% leading-[1.2] pb-2">
            Certificates & Training
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-6 text-lg">
            Formal training and validation of specialized skills
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <button className="nav-btn left" onClick={() => handleManualChange(prev)}>
            <ChevronLeft />
          </button>

          <div className="carousel">
            {getVisibleCards().map((cert) => (
              <div
                key={cert.index}
                className={`card ${cert.offset === 0 ? "active" : ""}`}
                style={{
                  transform: `translateX(${cert.offset * 200}px) scale(${cert.offset === 0 ? 1 : 0.75})`,
                  zIndex: 10 - Math.abs(cert.offset),
                  opacity: Math.abs(cert.offset) > 1 ? 0.3 : 1
                }}
              >
                <div className="card-glow" />
                <div className="card-inner">
                  <div className="badge">
                    <Award />
                  </div>

                  <h3 className="title">{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>

                  <div className="skills">
                    {cert.skills.map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>

                  <a href={cert.credentialUrl} className="btn" target="_blank">
                    View Credential <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-btn right" onClick={() => handleManualChange(next)}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <style jsx>{`
        .carousel {
          position: relative;
          height: 450px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .animated-gradient-text {
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient 4s ease infinite;
        }

        .card {
          position: absolute;
          width: 410px;
          height: 400px;
          transition: all 0.6s ease;
        }

        .card-glow {
          position: absolute;
          inset: -4px;
          background: linear-gradient(
            135deg,
          rgba(251, 191, 36, 0.9),   /* amber */
          rgba(56, 189, 248, 0.9) 
          );
          border-radius: 1.5rem;
          opacity: 0;
          filter: blur(100px);
          pointer-events: none;
        }

        .card.active .card-glow {
          opacity: 0.9;
        }

        .card-inner {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(99, 102, 241, 0.4);
          border-radius: 1.5rem;
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .badge {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #22d3ee, #6366f1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
        }

        .title {
          color: #e0f2fe;
          font-size: 1.4rem;
          font-weight: 800;
        }

        .issuer {
          color: #c7d2fe;
        }

        .date {
          color: #67e8f9;
          font-weight: 700;
        }

        .skills span {
          background: rgba(99, 102, 241, 0.25);
          border: 1px solid rgba(129, 140, 248, 0.4);
          color: #e0e7ff;
          padding: 0.4rem 0.75rem;
          border-radius: 0.4rem;
          font-size: 0.75rem;
        }

        .btn {
          margin-top: auto;
          background: linear-gradient(135deg, #34d399, #22d3ee);
          color: #020617;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 700;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(34, 211, 238, 0.25);
          border: 1px solid rgba(34, 211, 238, 0.4);
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
        }

        .nav-btn.left { left: -4rem; }
        .nav-btn.right { right: -4rem; }
      `}</style>
    </section>
  );
};

export default Certificates;