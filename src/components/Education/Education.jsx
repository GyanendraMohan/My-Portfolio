import React from 'react';
import './Education.css';
import { education, skills, certifications } from '../../data';

const Education = () => {
    return (
        <div className="edu-skills">
            <div className="edu-section">
                <h1 className="es-title">Education</h1>
                <div className="edu-list">
                    {education.map((item) => (
                        <div key={item.id} className="edu-card">
                            <h3>{item.degree}</h3>
                            <h4>{item.institution}</h4>
                            <p>{item.focus}</p>
                        </div>
                    ))}
                </div>

                <h1 className="es-title" style={{ marginTop: '40px' }}>Certifications</h1>
                <ul className="cert-list">
                    {certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                    ))}
                </ul>
            </div>

            <div className="skills-section">
                <h1 className="es-title">Skills</h1>

                <div className="skill-category">
                    <h3>Programming & Tools</h3>
                    <div className="skill-tags">
                        {skills.programming.map((skill, index) => <span key={index}>{skill}</span>)}
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Research & Analytics</h3>
                    <div className="skill-tags">
                        {skills.research.map((skill, index) => <span key={index}>{skill}</span>)}
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Systems & Infrastructure</h3>
                    <div className="skill-tags">
                        {skills.systems.map((skill, index) => <span key={index}>{skill}</span>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
