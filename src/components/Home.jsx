"use client";

import React, { useEffect, useRef, useState } from "react";
import { Briefcase, MapPin } from "lucide-react";

const Home = () => {
  const canvasRef = useRef(null);

  /* =======================
     Typing Effect State
  ======================= */
  const fullText = "Building intelligence with AI";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);


  /* =======================
     Typing Animation
  ======================= */
  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      index++;
      setDisplayText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(typingInterval);
        setTypingDone(true);
        setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  /* =======================
     Blinking Cursor
  ======================= */
  useEffect(() => {
    if (typingDone) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [typingDone]);

  /* =======================
     Canvas Background
  ======================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

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
        ctx.fillStyle = "rgba(0, 240, 255, 0.6)";
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

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(138, 43, 226, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawConnections();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id = 'home'
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Typing Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="text-cyan-400 ml-1">
            {showCursor ? "|" : " "}
          </span>
        </h1>

        {/* Subtitle */}
        <div className="text-xl md:text-2xl mb-8 font-light">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Developer
          </span>

          <span className="mx-3 text-gray-400">|</span>

          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Researcher
          </span>

          <span className="mx-3 text-gray-400">|</span>

          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Engineer
          </span>
        </div>

        {/* Badges */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <div className="flex items-center gap-2 px-6 py-3 bg-yellow-500 rounded-full text-black">
            <Briefcase size={18} />
            Webbies
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-cyan-700 rounded-full text-white">
            <MapPin size={18} />
            Kolkata
          </div>
        </div>

        {/* DESCRIPTION HERE*/}
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
          Passionate about building intelligent systems and pushing the boundaries
          of artificial intelligence. Specialized in{" "}
          <span className="text-cyan-400 font-semibold">
            machine learning
          </span>
          ,{" "}
          <span className="text-purple-400 font-semibold">
            deep learning
          </span>
          , and{" "}
          <span className="text-yellow-400 font-semibold">
            AI research
          </span>
          .
        </p>

        {/* CTA */}
        <button
          onClick={scrollToAbout}
          className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:scale-105 transition cursor-pointer"
        >
          Learn More About Me
        </button>
      </div>
    </section>
  );
};

export default Home;