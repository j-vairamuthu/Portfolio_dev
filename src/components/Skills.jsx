import React from 'react';
import './Skills.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vite',
  'Tailwind CSS',
  'TypeScript',
  'Git & GitHub',
  'Responsive Design',
  'REST APIs'
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
