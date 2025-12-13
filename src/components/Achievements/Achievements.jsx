import React from 'react';
import './Achievements.css';

const achievementsData = [
    'Completed a 6-month IEEE Computer Society program where I developed UrbanDAO and learned practical blockchain workflows.',
    'Hackathon participant: DigitalGov Hack, PEC Hackathon, Diamante Hackathon, HACKHAZARDS \'25, StackFusionFest Hack.',
    'Active on GitHub with multiple public projects focused on blockchain, PWA, and mobile apps.'
];

const Achievements = () => {
    return (
        <section className="achievements-section section">
            <h2 className="section-title">Achievements & Activities</h2>
            <ul className="achievements-list">
                {achievementsData.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
        </section>
    );
};

export default Achievements;
