"use client";

import React, { useState, useEffect, useRef } from "react";
import { Briefcase, MapPin, Code } from "lucide-react";
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowCards(true), 600);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #0a0a1a 0%, #1a0a2e 50%, #0a0a1a 100%)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600 blur-3xl opacity-10 top-20 left-10 animate-float" />
        <div className="absolute w-96 h-96 bg-cyan-500 blur-3xl opacity-10 bottom-20 right-10 animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 inline-block animate-gradient bg-300%">
            About Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* =================== IMAGE STACK =================== */}
        <div className="flex justify-center items-center relative h-80 mb-20">
          {/* Left */}
          <div
            className={`absolute transition-all duration-1000 ${
              isVisible ? "left-image-final" : "left-image-initial"
            }`}
          >
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <Image
                src="/Images/Picture_1.jpg"
                alt="Aniket Chakraborty"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right */}
          <div
            className={`absolute transition-all duration-1000 ${
              isVisible ? "right-image-final" : "right-image-initial"
            }`}
          >
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-purple-500/30">
              <Image
                src="/Images/Picture_2.jpg"
                alt="Aniket Chakraborty"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* =================== NAME =================== */}
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Aniket Chakraborty
          </h3>
          <div className="flex justify-center gap-3 text-lg">
            <span className="text-cyan-400">AI/ML Professional</span>
            <span className="text-gray-500">•</span>
            <span className="text-purple-400">Researcher</span>
            <span className="text-gray-500">•</span>
            <span className="text-yellow-400">Engineer</span>
          </div>
        </div>

        {/* =================== TEXT SECTIONS =================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Professional Overview */}
          <div className="info-card lg:col-span-2">
            <h4 className="section-title">
              <Code className="w-6 h-6" />
              Professional Overview
            </h4>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I am a multifaceted AI/ML professional currently working at Webbies
              in Kolkata, where I combine my expertise as an AI/ML Developer,
              AI Researcher, and AI Engineer to create innovative solutions
              bridging research and real-world applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My work involves developing advanced machine learning models,
              researching emerging AI technologies, and engineering scalable
              AI systems.
            </p>
          </div>

          {/* Current Role */}
          <div className="info-card">
            <h4 className="section-title">Current Role</h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Briefcase className="text-cyan-400" />
                <div>
                  <p className="text-gray-400 text-sm">Company</p>
                  <p className="text-white">Webbies</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-purple-400" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-2">Roles</p>
                <ul className="space-y-2">
                  <li className="role-item cyan">AI/ML Developer</li>
                  <li className="role-item purple">AI Researcher</li>
                  <li className="role-item yellow">AI Engineer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="info-card lg:col-span-3">
            <h4 className="text-3xl font-bold text-yellow-400 text-center mb-10">
              Areas of Expertise
            </h4>

            <div className="grid md:grid-cols-3 gap-10 text-center">
              <Expertise
                title="AI Development"
                color="cyan"
                text="Building intelligent applications using modern ML frameworks and neural networks."
              />
              <Expertise
                title="Research"
                color="purple"
                text="Exploring novel AI methodologies and pushing research boundaries."
              />
              <Expertise
                title="Engineering"
                color="yellow"
                text="Designing scalable, production-ready AI infrastructure."
              />
            </div>
          </div>
        </div>
      </div>

      {/* =================== STYLES =================== */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradient 4s ease infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .bg-300\% {
          background-size: 300%;
        }

        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 1s;
        }

        .left-image-initial {
          transform: translateX(-180px) rotate(-18deg) scale(0.95);
          opacity: 0;
        }

        .left-image-final {
          transform: translateX(-90px) rotate(-12deg);
          opacity: 1;
          z-index: 10;
        }

        .right-image-initial {
          transform: translateX(180px) rotate(18deg) scale(0.95);
          opacity: 0;
        }

        .right-image-final {
          transform: translateX(90px) rotate(10deg);
          opacity: 1;
          z-index: 20;
        }

        .info-card {
          background: linear-gradient(
            135deg,
          rgba(255, 255, 255, 0.08),
          rgba(255, 255, 255, 0.02));
          border-radius: 1.5rem;
          padding: 2rem;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.35),
            inset 0 0 30px rgba(255, 255, 255, 0.03);
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease,
            border 0.4s ease;
        }

        .info-card:hover {
          transform: scale(1.05);
          box-shadow:
            0 25px 60px rgba(185, 232, 18, 0.45),
            inset 0 0 40px rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(185, 232, 18, 0.45);
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: #facc15;
          margin-bottom: 1rem;
        }

        .role-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
        }

        .role-item::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
        }

        .role-item.cyan::before { background: #22d3ee; }
        .role-item.purple::before { background: #a855f7; }
        .role-item.yellow::before { background: #facc15; }
      `}</style>
    </section>
  );
};

const Expertise = ({ title, text, color }) => (
  <div>
    <div
      className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center border border-${color}-500/30`}
    >
      <Code className="text-yellow-400 w-8 h-8" />
    </div>
    <h5 className="text-xl font-bold text-yellow-400 mb-2">{title}</h5>
    <p className="text-gray-300 text-sm">{text}</p>
  </div>
);

export default About;