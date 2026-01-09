"use client";

import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Zap, GitBranch, Network, Sparkles, Atom, Code2, Binary } from 'lucide-react';

const Welcome = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Hide welcome screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className={`welcome-container ${!isVisible ? 'fade-out' : ''}`}>
      {/* Animated Grid Background */}
      <div className="grid-background" />
      
      {/* Animated Lines */}
      <div className="lines-container">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`line line-${i + 1}`} />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Floating AI Icons */}
      <div className="floating-icons">
        <div className="icon-wrapper icon-1">
          <Brain className="w-12 h-12 text-cyan-400" />
        </div>
        <div className="icon-wrapper icon-2">
          <Cpu className="w-10 h-10 text-purple-400" />
        </div>
        <div className="icon-wrapper icon-3">
          <Network className="w-14 h-14 text-pink-400" />
        </div>
        <div className="icon-wrapper icon-5">
          <GitBranch className="w-12 h-12 text-green-400" />
        </div>
        <div className="icon-wrapper icon-9">
          <Binary className="w-10 h-10 text-pink-300" />
        </div>
      </div>

      {/* Central Brain with Rings */}
      <div className="ai-brain-container">
        <div className="brain-rings">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
        </div>
        <div className="brain-core">
          <Brain className="w-20 h-20 text-cyan-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="welcome-content">
        {/* Welcome Text */}
        <div className="welcome-text">
          <h1 className="welcome-title">
            Welcome To
          </h1>
          <h2 className="brand-name">
            Anexus
          </h2>
          
          {/* Wave Dots */}
          <div className="wave-dots">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
            <span className="dot dot-4" />
            <span className="dot dot-5" />
            <span className="dot dot-6" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {/* Loading Text */}
        <p className="loading-text">
          Initializing AI Portfolio...
        </p>
      </div>

      {/* Gradient Orbs */}
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />

      {/* Styles */}
      <style jsx>{`
        .welcome-container {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #0a0a1a 0%, #1a0f2e 50%, #0a0a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 1;
          transition: opacity 0.5s ease-out;
          overflow: hidden;
        }

        .welcome-container.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        /* Animated Grid Background */
        .grid-background {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
          z-index: 1;
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        /* Animated Lines */
        .lines-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent);
          animation: line-move linear infinite;
        }

        .line-1 { top: 10%; width: 80%; animation-duration: 8s; }
        .line-2 { top: 25%; width: 60%; animation-duration: 10s; animation-delay: 1s; }
        .line-3 { top: 40%; width: 70%; animation-duration: 12s; animation-delay: 2s; }
        .line-4 { top: 55%; width: 65%; animation-duration: 9s; animation-delay: 0.5s; }
        .line-5 { top: 70%; width: 75%; animation-duration: 11s; animation-delay: 1.5s; }
        .line-6 { top: 85%; width: 55%; animation-duration: 10s; animation-delay: 2.5s; }
        .line-7 { top: 15%; width: 90%; animation-duration: 13s; }
        .line-8 { top: 95%; width: 85%; animation-duration: 15s; animation-delay: 3s; }

        @keyframes line-move {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        /* Floating Particles */
        .particles-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: float-particle ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        .particle-1 { top: 10%; left: 15%; animation-duration: 6s; }
        .particle-2 { top: 20%; left: 85%; animation-duration: 8s; animation-delay: 1s; }
        .particle-3 { top: 30%; left: 25%; animation-duration: 7s; animation-delay: 2s; }
        .particle-4 { top: 40%; left: 75%; animation-duration: 9s; }
        .particle-5 { top: 50%; left: 15%; animation-duration: 6.5s; animation-delay: 1.5s; }
        .particle-6 { top: 60%; left: 85%; animation-duration: 7.5s; animation-delay: 0.5s; }
        .particle-7 { top: 70%; left: 30%; animation-duration: 8.5s; animation-delay: 2.5s; }
        .particle-8 { top: 80%; left: 70%; animation-duration: 10s; }
        .particle-9 { top: 15%; left: 50%; animation-duration: 9.5s; animation-delay: 1s; }
        .particle-10 { top: 25%; left: 60%; animation-duration: 7s; animation-delay: 2s; }
        .particle-11 { top: 35%; left: 40%; animation-duration: 8s; }
        .particle-12 { top: 45%; left: 90%; animation-duration: 6s; animation-delay: 1.5s; }
        .particle-13 { top: 55%; left: 10%; animation-duration: 9s; animation-delay: 0.5s; }
        .particle-14 { top: 65%; left: 55%; animation-duration: 7.5s; animation-delay: 2.5s; }
        .particle-15 { top: 75%; left: 20%; animation-duration: 8.5s; }
        .particle-16 { top: 85%; left: 80%; animation-duration: 10s; animation-delay: 1s; }
        .particle-17 { top: 12%; left: 35%; animation-duration: 6.5s; animation-delay: 2s; }
        .particle-18 { top: 28%; left: 78%; animation-duration: 9.5s; }
        .particle-19 { top: 48%; left: 45%; animation-duration: 7s; animation-delay: 1.5s; }
        .particle-20 { top: 88%; left: 50%; animation-duration: 8s; animation-delay: 0.5s; }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) scale(1.5);
            opacity: 1;
          }
        }

        /* Gradient Orbs */
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: pulse-orb 4s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #06b6d4, transparent);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #8b5cf6, transparent);
          bottom: 10%;
          right: 10%;
          animation-delay: 1s;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, #ec4899, transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 2s;
        }

        @keyframes pulse-orb {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        /* Floating Icons */
        .floating-icons {
          position: absolute;
          inset: 0;
          z-index: 2;
        }

        .icon-wrapper {
          position: absolute;
          filter: drop-shadow(0 0 10px currentColor);
          animation: float-icon 6s ease-in-out infinite;
        }

        .icon-1 { top: 15%; left: 15%; animation-delay: 0s; }
        .icon-2 { top: 20%; right: 20%; animation-delay: 0.5s; }
        .icon-3 { top: 60%; left: 10%; animation-delay: 1s; }
        .icon-4 { bottom: 20%; right: 15%; animation-delay: 1.5s; }
        .icon-5 { bottom: 30%; left: 25%; animation-delay: 2s; }
        .icon-6 { top: 40%; right: 10%; animation-delay: 2.5s; }
        .icon-7 { top: 35%; left: 8%; animation-delay: 0.8s; }
        .icon-8 { bottom: 25%; right: 22%; animation-delay: 1.8s; }
        .icon-9 { top: 50%; left: 18%; animation-delay: 1.2s; }

        @keyframes float-icon {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(20px) rotate(-5deg);
          }
        }

        /* AI Brain Container */
        .ai-brain-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
          opacity: 0.15;
        }

        .brain-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .ring {
          position: absolute;
          border: 2px solid;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: expand-ring 3s ease-out infinite;
        }

        .ring-1 {
          width: 200px;
          height: 200px;
          border-color: rgba(6, 182, 212, 0.6);
          animation-delay: 0s;
        }

        .ring-2 {
          width: 300px;
          height: 300px;
          border-color: rgba(139, 92, 246, 0.6);
          animation-delay: 1s;
        }

        .ring-3 {
          width: 400px;
          height: 400px;
          border-color: rgba(236, 72, 153, 0.6);
          animation-delay: 2s;
        }

        @keyframes expand-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        .brain-core {
          position: relative;
          z-index: 1;
          animation: pulse-brain 2s ease-in-out infinite;
        }

        @keyframes pulse-brain {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.8));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 40px rgba(139, 92, 246, 1));
          }
        }

        /* Welcome Content */
        .welcome-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 600px;
          padding: 2rem;
        }

        .welcome-text {
          margin-bottom: 3rem;
        }

        .welcome-title {
          font-size: 2.5rem;
          font-weight: 300;
          color: #e5e7eb;
          margin-bottom: 0.5rem;
          letter-spacing: 0.1em;
          animation: fade-in-up 0.8s ease-out;
        }

        .brand-name {
          font-size: 5rem;
          font-weight: 900;
          background: linear-gradient(120deg, #06b6d4, #facc15, #8b5cf6, #ec4899, #06b6d4);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient-shift 4s ease infinite;
          letter-spacing: 0.05em;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Wave Dots */
        .wave-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          border-radius: 50%;
          animation: wave 1.5s ease-in-out infinite;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
        }

        .dot-1 { animation-delay: 0s; }
        .dot-2 { animation-delay: 0.1s; }
        .dot-3 { animation-delay: 0.2s; }
        .dot-4 { animation-delay: 0.3s; }
        .dot-5 { animation-delay: 0.4s; }
        .dot-6 { animation-delay: 0.5s; }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Progress Bar */
        .progress-container {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          overflow: hidden;
          margin-bottom: 1rem;
          animation: fade-in-up 0.8s ease-out 0.4s backwards;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899);
          background-size: 200% 100%;
          animation: gradient-slide 2s ease infinite;
          border-radius: 9999px;
          transition: width 0.1s ease;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.8);
        }

        @keyframes gradient-slide {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Loading Text */
        .loading-text {
          color: #9ca3af;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          animation: fade-in-up 0.8s ease-out 0.6s backwards, pulse-text 2s ease-in-out infinite;
        }

        @keyframes pulse-text {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .welcome-title {
            font-size: 1.75rem;
          }

          .brand-name {
            font-size: 3rem;
          }

          .icon-wrapper svg {
            width: 24px;
            height: 24px;
          }

          .gradient-orb {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;