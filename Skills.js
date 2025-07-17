import React, { useState } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiMysql,
  SiSqlite, SiMongodb, SiNodedotjs, SiExpress, SiReact,
  SiNextdotjs, SiGit, SiPython
} from 'react-icons/si';
import { FaChartBar, FaTerminal } from 'react-icons/fa';

import './Skills.css';

const skills = [
  { name: 'HTML5', icon: <SiHtml5 />, color: '#e34c26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#264de4' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f0db4f' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#563d7c' },
  { name: 'SQLite', icon: <SiSqlite />, color: '#003B57' },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#3C873A' },
  { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
  { name: 'React.js', icon: <SiReact />, color: '#61DBFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { name: 'Git', icon: <SiGit />, color: '#F1502F' },
  { name: 'Power BI', icon: <FaChartBar />, color: '#F2C811' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'Terminal', icon: <FaTerminal />, color: '#333333' },
];

const Skills = () => {
  const [bgColor, setBgColor] = useState('#f1f6fc');

  const handleHover = (color) => setBgColor(color);
  const resetBackground = () => setBgColor('#f1f6fc');

  return (
    <div
      id="skills"
      className="skills-section"
      style={{
        backgroundColor: bgColor,
        transition: 'background-color 0.4s ease',
      }}
    >
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ backgroundColor: skill.color }}
            onMouseEnter={() => handleHover(skill.color)}
            onMouseLeave={resetBackground}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;


