import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'Cybersecurity Intern',
    company: 'Data Valley',
    duration: 'May 2024 – June 2024',
    description: 'Worked on real-time cyber threat detection using basic tools and reported security loopholes in test networks.',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Vaduka (Academic Project)',
    duration: 'Jan 2024 – Apr 2024',
    description: 'Built UI components using React.js for a vehicle rental app. Helped improve app flow and responsiveness.',
  },
  {
    role: 'Machine Learning Project',
    company: 'GITAM University',
    duration: 'Oct 2023 – Dec 2023',
    description: 'Developed a model for sentiment analysis using NLP and classification techniques in Python.',
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
