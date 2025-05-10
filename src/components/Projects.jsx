import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio site built with React and Vite.',
    link: 'https://yourportfolio.com',
    repo: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'Weather App',
    description: 'A React app that shows real-time weather using OpenWeather API.',
    link: 'https://weatherapp.com',
    repo: 'https://github.com/yourusername/weather-app'
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank">Live Demo</a>
              <a href={project.repo} target="_blank">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
