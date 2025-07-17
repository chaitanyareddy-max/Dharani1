import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Hero.css';
import profilePic from './chaitanya.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ['Hello, I am '],
      typeSpeed: 60,
      backSpeed: 30,
      showCursor: true,
      loop: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="hero" id="home"> {/* 👈 This is the fix */}
      {/* Left side with scroll from left */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1>
          <span ref={typedRef} style={{ color: '#4fc3f7', fontWeight: 'bold' }}></span>{' '}
          <span style={{ color: '#ff6b6b' }}>Chaitanya</span>
        </h1>

        <h2 style={{ color: '#ff6b6b' }}>
          I’m{' '}
          <ReactTyped
            strings={['an Engineer', 'a Student', 'a Teacher', 'a Developer']}
            typeSpeed={60}
            backSpeed={40}
            loop
            showCursor={false}
          />
        </h2>

        <p>I am a B.Tech student passionate about web development.</p>

        <a
          href="/Chaitanya-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn view-resume"
        >
          View Resume
        </a>

        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope size={32} />
          </a>
        </div>
      </motion.div>

      {/* Right side image scrolls in from right */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={profilePic} alt="Chaitanya" className="profile-pic" />
      </motion.div>
    </section>
  );
};

export default Hero;
