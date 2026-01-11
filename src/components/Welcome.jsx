"use client";

import React, { useState, useEffect } from 'react';

const Welcome = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {

    // Hide welcome screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className={`welcome-container ${!isVisible ? 'fade-out' : ''}`}>

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

        {/* Loading Text */}
        <p className="loading-text">
          Initializing AI Portfolio...
        </p>
      </div>

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
          border-radius: 50%;
          animation: wave 1.5s ease-in-out infinite;
        }

        .dot-1 { 
          animation-delay: 0s;
          background: #06b6d4;
          box-shadow: 0 0 18px rgba(6, 182, 212, 0.8); 
        }
        .dot-2 { 
          animation-delay: 0.1s;
          background: #8b5cf6;
          box-shadow: 0 0 18px rgba(139, 92, 246, 0.8);
        }
        .dot-3 { 
          animation-delay: 0.2s;
          background: #facc15;
          box-shadow: 0 0 18px rgba(250, 204, 21, 0.8); 
        }
        .dot-4 { 
          animation-delay: 0.3s;
          background: #ec4899;
          box-shadow: 0 0 18px rgba(236, 72, 153, 0.8); 
        }
        .dot-5 { 
          animation-delay: 0.4s;
          background: #22c55e;
          box-shadow: 0 0 18px rgba(34, 197, 94, 0.8); 
        }
        .dot-6 { 
          animation-delay: 0.5s;
          background: #06b6d4;
          box-shadow: 0 0 18px rgba(6, 182, 212, 0.8); 
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
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
        }
      `}</style>
    </div>
  );
};

export default Welcome;