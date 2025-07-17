import React from 'react';
import './Projects.css';
import img1 from './vaduka.JPG';
import img2 from './portfolio.jpg';
import img3 from './sent.jpeg';

const projects = [
  {
    title: 'Typing Speed Test',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: 'A web application to measure and improve typing speed with real-time feedback and performance tracking.',
    demoLink: '#',
    githubLink: '#',
    image: img1,
  },
  {
    title: 'Wikipedia Search',
    techStack: ['React', 'Wikipedia API'],
    description: 'A search application that fetches and displays Wikipedia articles using their API with dynamic results.',
    demoLink: '#',
    githubLink: '#',
    image: img2,
  },
  {
    title: 'Food Munch Website',
    techStack: ['HTML', 'CSS'],
    description: 'A responsive restaurant website showcasing menu items, offers, and online ordering capabilities.',
    demoLink: '#',
    githubLink: '#',
    image: img3,
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="btn-group">
                  <a href={project.demoLink} className="btn filled" target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={project.githubLink} className="btn outline" target="_blank" rel="noreferrer">View Code</a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
