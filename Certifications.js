import React from 'react';
import './Certifications.css';

const certificates = [
  {
    title: 'SQL (Intermediate)',
    provider: 'HackerRank',
    image: require('./Chaitanya.png'),
    link: 'https://www.hackerrank.com/certificate/your-sql-link'
  },
  {
    title: 'Build Static Website',
    provider: 'FutureSkills Prime',
    image: require('./android.jpg'),
    link: 'https://certificate-link-2.com'
  },
  {
    title: 'JS (Intermediate)',
    provider: 'HackerRank',
    image: require('./react certificate.png'),
    link: 'https://certificate-link-3.com'
  },
  // Add more as needed
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certificates-grid">
        {certificates.map((cert, i) => (
          <div className="certificate-card" key={i}>
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <div className="cert-overlay">
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

