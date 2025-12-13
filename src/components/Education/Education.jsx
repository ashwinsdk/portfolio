import React from 'react';
import './Education.css';

const educationData = [
    {
        institution: 'REVA University',
        degree: 'B.E., Computer Science',
        period: 'Aug 2022 - May 2026',
        location: 'Bangalore, Karnataka',
        gpa: '8.77'
    },
    {
        institution: 'SPK GEMS',
        degree: 'Higher Secondary',
        period: 'Jul 2020 - Mar 2022',
        location: 'Namakkal, Tamil Nadu',
        gpa: null
    }
];

const Education = () => {
    return (
        <section className="education-section section">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card">
                        <div className="education-header">
                            <h3 className="education-institution">{edu.institution}</h3>
                            <span className="education-period">{edu.period}</span>
                        </div>
                        <p className="education-degree">{edu.degree}</p>
                        <p className="education-location">{edu.location}</p>
                        {edu.gpa && (
                            <p className="education-gpa">Cumulative GPA: {edu.gpa}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
