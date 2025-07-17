import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Apply class to body for global CSS theming
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} />

      <Hero theme={theme} />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
