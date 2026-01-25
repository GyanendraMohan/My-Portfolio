import React from 'react';
import './Experience.css';
import { experience } from '../../data';

const Experience = () => {
    return (
        <div className="exp">
            <h1 className="exp-heading">Industry Experience</h1>
            <div className="exp-list">
                {experience.map((item) => (
                    <div key={item.id} className="exp-card">
                        <div className="exp-header">
                            <h2 className="exp-role">{item.role}</h2>
                            <h3 className="exp-company">{item.company}</h3>
                            <span className="exp-period">{item.period}</span>
                        </div>
                        <ul className="exp-desc">
                            {item.desc.map((descItem, index) => (
                                <li key={index}>{descItem}</li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
