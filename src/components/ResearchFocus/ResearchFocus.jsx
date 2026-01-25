import React from 'react';
import './ResearchFocus.css';
import { researchInterests } from '../../data';

const ResearchFocus = () => {
    return (
        <div className="rf">
            <div className="rf-texts">
                <h1 className="rf-title">Research Interests</h1>
                <p className="rf-desc">
                    Focusing on the intersection of wireless sensing, signal processing, and machine learning.
                </p>
            </div>
            <div className="rf-list">
                {researchInterests.map((item) => (
                    <div key={item.id} className="rf-card">
                        <div className="rf-icon">{item.icon}</div>
                        <h3 className="rf-card-title">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResearchFocus;
