import React from 'react'
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div id='skills' className="skills-container">
        <div className="skills-grid">
            <div  data-aos="zoom-in-up" className='skills-left'>
                <h2 className="skills-heading">Technologies I Work with</h2>
                <p className="skills-text"> 
                    I have solid foundation in web development, specialization in HTML, CSS, Typescript & Javascript. My experience extends to using frameworks like React & Next.js to create dynamic and user-friendly applications. I&apos;m also proficient in Tailwind CSS for effective styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
                </p>
            </div>
            <div className="skills-right">
                <div className="skills-icons-grid">
                    <div className="skills-space">
                        <h2  data-aos="zoom-in-up">Typescript</h2>
                        <h2  data-aos="zoom-in-up">React.js</h2>
                        <h2  data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className="skills-space">
                        <h2  data-aos="zoom-in-up">Tailwind</h2>
                        <h2  data-aos="zoom-in-up">CSS</h2>
                        <h2  data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Skills;
