import React, { useState, useEffect, useRef } from 'react';
import { Brain, Cpu, Zap, GitBranch, Network, Sparkles } from 'lucide-react';

const Welcome = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);

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
    }, 30);

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

  // Neural network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.8)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(138, 43, 226, ${1 - distance / 120})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    let animationId;
    function animate() {
      ctx.fillStyle = 'rgba(10, 10, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`welcome-container ${!isVisible ? 'fade-out' : ''}`}>
      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="neural-canvas"
      />

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
        <div className="icon-wrapper icon-4">
          <Zap className="w-10 h-10 text-yellow-400" />
        </div>
        <div className="icon-wrapper icon-5">
          <GitBranch className="w-12 h-12 text-green-400" />
        </div>
        <div className="icon-wrapper icon-6">
          <Sparkles className="w-10 h-10 text-blue-400" />
        </div>
      </div>

      {/* Central AI Brain Animation */}
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

        /* Neural Network Canvas */
        .neural-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
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

        .icon-1 {
          top: 15%;
          left: 15%;
          animation-delay: 0s;
        }

        .icon-2 {
          top: 20%;
          right: 20%;
          animation-delay: 0.5s;
        }

        .icon-3 {
          top: 60%;
          left: 10%;
          animation-delay: 1s;
        }

        .icon-4 {
          bottom: 20%;
          right: 15%;
          animation-delay: 1.5s;
        }

        .icon-5 {
          bottom: 30%;
          left: 25%;
          animation-delay: 2s;
        }

        .icon-6 {
          top: 40%;
          right: 10%;
          animation-delay: 2.5s;
        }

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
          text-shadow: 
            0 0 30px rgba(250, 204, 21, 0.4),
            0 0 60px rgba(6, 182, 212, 0.3);
          letter-spacing: 0.05em;
        }

        .brand-name::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(250, 204, 21, 0.8), transparent 70%);
          background-size: 200% 100%;
          animation: light-sweep 2.5s linear infinite;
         -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          pointer-events: none;
        }

        @keyframes light-sweep {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
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

          .icon-wrapper {
            width: 32px;
            height: 32px;
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