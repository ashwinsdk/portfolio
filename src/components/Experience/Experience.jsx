import React from 'react';
import './Experience.css';

const experienceData = [
    {
        title: 'Software Developer Intern',
        company: 'FriggHome',
        period: 'Full-time · Jun 2025 - present',
        location: 'Bangalore (on-site)',
        responsibilities: [
            'Built and maintained frontend modules for an Angular PWA used in smart-home / device management flows.',
            'Deployed backend services on Linux servers; used Docker setups for stable access.',
            'Worked on private blockchain devnet deployments: contract testing, deployment scripts, and integration with the Angular app.',
            'Used AI tools and coding assistants to research solutions and speed up prototyping.'
        ]
    }
];

const Experience = () => {
    return (
        <section className="experience-section section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-timeline">
                {experienceData.map((job, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-header">
                            <div className="experience-title-group">
                                <h3 className="experience-title">{job.title}</h3>
                                <p className="experience-company">{job.company}</p>
                            </div>
                            <span className="experience-period">{job.period}</span>
                        </div>
                        <p className="experience-location">{job.location}</p>
                        <ul className="experience-list">
                            {job.responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
