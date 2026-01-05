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
      skills: ["Python", "MSSQL", "Data Analysis", "Power BI", "Machine Learning", "Deep Learning", "AI"],
      credentialUrl: "#"
    },
    {
      title: "Google Data Analysis",
      issuer: "Coursera",
      date: "May 2023",
      skills: ["Python", "Excel", "SQL", "Pandas", "Matplotlib", "Seaborn", "R"],
      credentialUrl: "#"
    },
    {
      title: "IBM Data Science",
      issuer: "Coursera",
      date: "November 2023",
      skills: ["Python", "R", "SQL", "Data Analysis", "Plotly Dash", "Machine Learning"],
      credentialUrl: "#"
    },
    {
      title: "Mathematics for ML",
      issuer: "Imperial College of London",
      date: "January 2024",
      skills: ["Python", "Linear Algebra", "Multivariate Calculus", "PCA"],
      credentialUrl: "#"
    },
    {
      title: "Prompt Engineering",
      issuer: "Coursera, Vanderbilt University",
      date: "October 2023",
      skills: ["ChatGPT", "Prompting", "Context"],
      credentialUrl: "#"
    },
    {
      title: "Internship Certificate",
      issuer: "IPCR Kolkata",
      date: "September 2024",
      skills: ["Python", "Research", "Collaboration"],
      credentialUrl: "#"
    }
  ];

  /* ---------- Auto Play ---------- */
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const getVisibleCards = () => {
    const total = certificates.length;
    return [-1, 0, 1].map((offset) => {
      const index = (currentIndex + offset + total) % total;
      return { ...certificates[index], offset, index };
    });
  };

  return (
    <section
      id="certificates"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0a0a1a, #1a0f2e, #0a0a1a)"
      }}
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400">
          Certificates & Training
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-purple-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        {/* Left Arrow */}
        <button className="nav-btn left" onClick={prev}>
          <ChevronLeft />
        </button>

        {/* Cards */}
        <div className="carousel">
          {getVisibleCards().map((cert) => (
            <div
              key={cert.index}
              className={`card ${cert.offset === 0 ? "active" : "side"}`}
              style={{
                transform: `translateX(${cert.offset * 260}px) scale(${cert.offset === 0 ? 1.1 : 0.85})`,
                zIndex: cert.offset === 0 ? 10 : 5,
                opacity: cert.offset === 0 ? 1 : 0.5
              }}
            >
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

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  className="btn"
                >
                  View Credential <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="nav-btn right" onClick={next}>
          <ChevronRight />
        </button>
      </div>

      {/* Styles */}
      <style jsx>{`
        .carousel {
          position: relative;
          height: 420px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          position: absolute;
          width: 460px;
          transition: all 0.6s ease;
        }

        .card-inner {
          background: rgba(234, 179, 8, 0.12);
          border: 1px solid rgba(234, 179, 8, 0.4);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 0 40px rgba(234, 179, 8, 0.25);
        }

        .active .card-inner {
          box-shadow: 0 0 80px rgba(234, 179, 8, 0.6);
        }

        .badge {
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(135deg, #eab308, #fbbf24);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
        }

        .title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fde047;
        }

        .issuer {
          font-weight: 600;
          color: white;
        }

        .date {
          font-size: 0.85rem;
          color: #fde047;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }

        .skills span {
          background: rgba(234, 179, 8, 0.25);
          padding: 0.3rem 0.6rem;
          border-radius: 0.375rem;
          font-size: 0.7rem;
          color: #fde047;
        }

        .btn {
          margin-top: 1rem;
          background: linear-gradient(135deg, #eab308, #fbbf24);
          color: black;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-weight: 700;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(234, 179, 8, 0.25);
          border: 1px solid rgba(234, 179, 8, 0.5);
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          z-index: 20;
        }

        .nav-btn.left {
          left: -4rem;
        }

        .nav-btn.right {
          right: -4rem;
        }
      `}</style>
    </section>
  );
};

export default Certificates;