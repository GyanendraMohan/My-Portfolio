import React from 'react';
import './FeaturedProject.css';
import { featuredProject } from '../../data';

const FeaturedProject = () => {
    return (
        <div className="fp">
            <div className="fp-wrapper">
                <h1 className="fp-title">{featuredProject.title}</h1>
                <h3 className="fp-subtitle">{featuredProject.subtitle}</h3>

                <div className="fp-tags">
                    {featuredProject.techStack.map((tech, index) => (
                        <span key={index} className="fp-tag">{tech}</span>
                    ))}
                </div>

                <div className="fp-content">
                    <div className="fp-section">
                        <h4>Problem Statement</h4>
                        <p>{featuredProject.problem}</p>
                    </div>

                    <div className="fp-section">
                        <h4>Research Objective</h4>
                        <p>{featuredProject.objective}</p>
                    </div>

                    <div className="fp-section">
                        <h4>Methodology</h4>
                        <ul>
                            {featuredProject.methodology.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="fp-section">
                        <h4>Current Progress</h4>
                        <ul>
                            {featuredProject.progress.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="fp-alignment">
                    <strong>Research Alignment:</strong> {featuredProject.alignment}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
