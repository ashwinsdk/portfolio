import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const projectsData = [
    {
        title: 'UrbanDAO',
        description: 'A smart-city platform (Angular PWA) with role-based governance and gasless interactions for civic workflows. Built as part of an IEEE program and personal research.',
        link: 'https://github.com/ashwinsdk/UrbanDAO',
        tags: ['Angular', 'PWA', 'Blockchain', 'Governance']
    },
    {
        title: 'Project-Xylen',
        description: 'Distributed AI trading system for BTCUSDT perpetuals. Ensemble ML models, real-time market analysis, and risk management.',
        link: 'https://github.com/ashwinsdk/project-xylen',
        tags: ['AI', 'Trading', 'Python', 'ML']
    },
    {
        title: 'BillMint',
        description: 'Flutter app for invoice generation and billing for small sellers in India. Designed for simple usability and offline-first flows.',
        link: 'https://github.com/ashwinsdk/BillMint',
        tags: ['Flutter', 'Mobile', 'Invoicing']
    },
    {
        title: 'GrievX',
        description: 'Blockchain-based transparency system for urban grievance handling and trust in municipal workflows.',
        link: 'https://github.com/ashwinsdk/GrievX',
        tags: ['Blockchain', 'Civic Tech', 'Transparency']
    },
    {
        title: 'MetaTask',
        description: 'Decentralized task manager with wallet auth and task lifecycle tracking.',
        link: 'https://github.com/ashwinsdk/MetaTask',
        tags: ['Web3', 'Task Management', 'Blockchain']
    },
    {
        title: 'Ariyo',
        description: 'Hyperlocal platform to connect residents with verified local vendors and services (private work-in-progress).',
        link: null,
        tags: ['Hyperlocal', 'Platform', 'Private']
    }
];

const Projects = ({ reducedMotion }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at 2nd project
    const [expandedCard, setExpandedCard] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer to pause animations when off-screen
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setCurrentIndex((prev) => (prev + 1) % projectsData.length);
        }
        if (isRightSwipe) {
            setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
        } else if (e.key === 'ArrowRight') {
            setCurrentIndex((prev) => (prev + 1) % projectsData.length);
        }
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    };

    const handleCardTap = (index) => {
        if (index === currentIndex && window.innerWidth <= 768) {
            setExpandedCard(expandedCard === index ? null : index);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="projects-section"
            className="projects-section section"
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <h2 className="section-title">PROJECTS</h2>

            <div
                className="projects-stage"
                ref={containerRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div className="stage-track">
                    {projectsData.map((project, index) => {
                        const offset = index - currentIndex;
                        const isActive = index === currentIndex;
                        const isAdjacent = Math.abs(offset) === 1;
                        const isExpanded = expandedCard === index;

                        return (
                            <div
                                key={index}
                                className={`project-card ${isActive ? 'active' : ''} ${isAdjacent ? 'adjacent' : ''} ${isExpanded ? 'expanded' : ''}`}
                                style={{
                                    transform: `translateX(${offset * 100}%)`,
                                    opacity: isActive ? 1 : isAdjacent ? 0.4 : 0,
                                    zIndex: isActive ? 10 : isAdjacent ? 5 : 0,
                                    pointerEvents: isActive || isAdjacent ? 'auto' : 'none'
                                }}
                                onClick={() => handleCardTap(index)}
                                onMouseEnter={() => isActive && setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className={`card-glass ${isHovered && isActive && isVisible && !reducedMotion ? 'hovered' : ''}`}>
                                    {/* Inner glow lines */}
                                    <div className="glow-lines">
                                        <div className="glow-line top"></div>
                                        <div className="glow-line bottom"></div>
                                        <div className="glow-line left"></div>
                                        <div className="glow-line right"></div>
                                    </div>

                                    {/* Card content */}
                                    <div className="card-content">
                                        <h3 className="project-name">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>

                                        <div className="project-tags">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="tag-pill">{tag}</span>
                                            ))}
                                        </div>

                                        <a
                                            href={project.link || '#'}
                                            className="repository-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => {
                                                if (!project.link) e.preventDefault();
                                                e.stopPropagation();
                                            }}
                                        >
                                            <svg className="github-icon" viewBox="0 0 16 16" fill="currentColor">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                            {project.link ? 'View Repository' : 'Private Repository'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="stage-controls">
                <button
                    className={`control-arrow prev ${currentIndex === 0 ? 'disabled' : ''} ${currentIndex > 0 ? 'active' : ''}`}
                    onClick={goToPrevious}
                    disabled={currentIndex === 0}
                    aria-label="Previous project"
                >
                    ←
                </button>
                <span className="progress-indicator">
                    {currentIndex + 1} / {projectsData.length}
                </span>
                <button
                    className={`control-arrow next ${currentIndex === projectsData.length - 1 ? 'disabled' : ''} ${currentIndex < projectsData.length - 1 ? 'active' : ''}`}
                    onClick={goToNext}
                    disabled={currentIndex === projectsData.length - 1}
                    aria-label="Next project"
                >
                    →
                </button>
            </div>
        </section>
    );
};

export default Projects;
