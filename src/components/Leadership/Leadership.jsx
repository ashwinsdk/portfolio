import React from 'react';
import './Leadership.css';

const leadershipData = [
    'Coordinated small teams during hackathons and project sprints.',
    'Can take basic ownership of features from design to deployment.'
];

const Leadership = () => {
    return (
        <section className="leadership-section section">
            <h2 className="section-title">Leadership & Collaboration</h2>
            <ul className="leadership-list">
                {leadershipData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default Leadership;
