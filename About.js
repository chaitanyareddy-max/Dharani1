import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-wrapper">
      
    
      <div className="about-content" data-aos="fade-up">
         <h2 className="about-title">About Me</h2>
        <p>
          <strong>
            I'm a Computer Science and Artificial Intelligence student at Narasaraopeta Engineering College
             passionate about building intelligent systems, web technologies, and data-driven solutions.
            My learning journey is fueled by curiosity and a strong foundation in software and AI principles.
            Whether it's building web apps, dashboards, or solving real-world problems with Python, I aim to make a tech-powered impact.
          </strong>
        </p>

        <div className="about-cards">
          <div className="about-card">
            <span role="img" aria-label="college">🏫</span> Narasaraopeta Engineering College
          </div>
          <div className="about-card">
            <span role="img" aria-label="branch">💻</span> CSE (Artificial Intelligence)
          </div>
          <div className="about-card">
            <span role="img" aria-label="location">📍</span> Narasaraopeta, Andhra Pradesh
          </div>
        </div>

        <div className="about-buttons">
          <button
            className="btn"
            onClick={() =>
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
            }
          >
            View Projects
          </button>

          <button
            className="btn contact-btn"
            onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

