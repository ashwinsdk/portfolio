import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">ASHWIN SUDHAKAR</h1>
                <p className="hero-role">
                    Final-year Computer Science • Software Developer Intern at FriggHome — 2025
                </p>
                <p className="hero-summary">
                    Final-year Computer Science student at REVA University and a full-time software developer intern at
                    FriggHome, a France-based startup. I build web and blockchain apps, deploy services on Linux, and use AI tools
                    to speed learning and development.
                </p>

                <div className="hero-ctas">
                    <button className="cta-primary" onClick={scrollToProjects} aria-label="Scroll to projects section">
                        View Projects
                    </button>
                    <a
                        href="/resume.pdf"
                        className="cta-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open CV as PDF in new tab"
                    >
                        Open CV (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
