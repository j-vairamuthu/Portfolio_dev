import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <div className="app">
        <header className="hero">
          <h1>Hello, I'm <span className="name">Your Name</span></h1>
          <p className="subtitle">Frontend Developer • React Enthusiast</p>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
            <a href="mailto:you@example.com">Email Me</a>
          </div>
        </header>

        <section className="about">
          <h2>About Me</h2>
          <p>
            I'm a passionate frontend developer with a focus on building responsive, accessible,
            and performant web apps using React. I love turning ideas into interactive experiences.
          </p>
        </section>
        <Projects />
        <Skills />
        <Contact />
    </div>
    </>
  )
}

export default App;

