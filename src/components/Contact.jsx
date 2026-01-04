"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      // Import emailjs-com library (you need to install it: npm install @emailjs/browser)
      const emailjs = (await import('@emailjs/browser')).default;

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Aniket Chakraborty',
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0a1a 0%, #0f0a1f 50%, #0a0a1a 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 top-20 left-20 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 bottom-20 right-20 animate-float-slower" />
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-40 right-10 opacity-5 animate-float">
        <Mail className="w-32 h-32 text-cyan-400" />
      </div>
      <div className="absolute bottom-40 left-10 opacity-5 animate-float-delayed">
        <Send className="w-32 h-32 text-purple-400" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 inline-block animate-gradient bg-300%">
            Get In Touch
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div
            className={`contact-info-section transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-glow" />
              <div className="contact-card-content">
                <div className="contact-icon-wrapper">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="contact-card-title">Email Address</h3>
                <a
                  href="mailto:aniket.chakraborty@example.com"
                  className="contact-card-link"
                >
                  aniket.chakraborty2001@gmail.com
                </a>
                <p className="contact-card-description">
                  Send me an email anytime. I'll get back to you as soon as possible!
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="contact-card" style={{ transitionDelay: '0.2s' }}>
              <div className="contact-card-glow" />
              <div className="contact-card-content">
                <div className="contact-icon-wrapper">
                  <MapPin className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="contact-card-title">Location</h3>
                <p className="contact-card-link">
                  Kolkata, West Bengal, India
                </p>
                <p className="contact-card-description">
                  Currently working at Webbies in the beautiful city of Kolkata
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="contact-card" style={{ transitionDelay: '0.3s' }}>
                <div className="contact-card-glow" />
                <div className="contact-card-content">
                    <h4 className="contact-card-title">Why Connect?</h4>

                    <ul className="additional-info-list enhanced-list">
                        <li>
                          <CheckCircle className="w-5 h-5 text-cyan-400" />
                          <span>Collaborate on AI/ML projects</span>
                        </li>
                        <li>
                          <CheckCircle className="w-5 h-5 text-purple-400" />
                          <span>Discuss research opportunities</span>
                        </li>
                        <li>
                          <CheckCircle className="w-5 h-5 text-pink-400" />
                          <span>Share ideas and innovations</span>
                        </li>
                        <li>
                          <CheckCircle className="w-5 h-5 text-yellow-400" />
                          <span>Explore job opportunities</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div
            className={`contact-form-section transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="form-container">
              <div className="form-glow" />
              <div className="form-content">
                <h3 className="form-title">Send Me a Message</h3>
                <p className="form-description">
                  Fill out the form below and I'll respond within 24 hours
                </p>

                <div className="contact-form">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <User className="w-4 h-4" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="form-input"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <Mail className="w-4 h-4" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                      className="form-input"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      <MessageSquare className="w-4 h-4" />
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      rows={5}
                      className="form-input form-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="status-message status-success">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="status-message status-error">
                      <span>⚠️ Failed to send message. Please try again or email directly.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Float Animations */
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(10deg); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, 20px) rotate(-10deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 18s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
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

        /* Contact Info Section */
        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Contact Card */
        .contact-card {
          position: relative;
          transition: all 1s ease;
        }

        .contact-card-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #06b6d4, #8b5cf6, #06b6d4);
          background-size: 200% 200%;
          border-radius: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s;
          filter: blur(10px);
          animation: gradient 3s ease infinite;
        }

        .contact-card:hover .contact-card-glow {
          opacity: 0.6;
        }

        .contact-card-content {
          position: relative;
          background: rgba(15, 10, 31, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1.5rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .contact-card:hover .contact-card-content {
          border-color: rgba(139, 92, 246, 0.6);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
        }

        .contact-icon-wrapper {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2));
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .contact-card:hover .contact-icon-wrapper {
          transform: rotate(10deg) scale(1.1);
          box-shadow: 0 0 30px currentColor;
        }

        .contact-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .contact-card-link {
          font-size: 1rem;
          font-weight: 600;
          color: #06b6d4;
          text-decoration: none;
          display: block;
          margin-bottom: 0.75rem;
          transition: all 0.3s ease;
        }

        .contact-card-link:hover {
          color: #8b5cf6;
          transform: translateX(5px);
        }

        .contact-card-description {
          color: #9ca3af;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        /* Additional Info */
        .additional-info {
          background: rgba(15, 10, 31, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1.5rem;
          padding: 2rem;
        }

        .additional-info-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .additional-info-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .additional-info-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #e5e7eb;
          font-size: 0.875rem;
        }

        /* Form Container */
        .form-container {
          position: relative;
        }

        .form-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #8b5cf6);
          background-size: 200% 200%;
          border-radius: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s;
          filter: blur(10px);
          animation: gradient 3s ease infinite;
        }

        .form-container:hover .form-glow {
          opacity: 0.6;
        }

        .form-content {
          position: relative;
          background: rgba(15, 10, 31, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 1.5rem;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .form-container:hover .form-content {
          border-color: rgba(139, 92, 246, 0.6);
        }

        .form-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .form-description {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }

        /* Contact Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e5e7eb;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 0.75rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          background: rgba(0, 0, 0, 0.5);
        }

        .form-input::placeholder {
          color: #6b7280;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        /* Submit Button */
        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.6);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Spinner */
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Status Messages */
        .status-message {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 0.75rem;
          font-size: 0.875rem;
          animation: slide-up 0.3s ease;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .status-success {
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #6ee7b7;
        }

        .status-error {
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .form-content {
            padding: 1.5rem;
          }

          .contact-card-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;