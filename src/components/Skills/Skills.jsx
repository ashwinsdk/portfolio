import React, { useState } from 'react';
import './Skills.css';

const skillsData = [
    {
        name: 'Programming Languages',
        category: 'Core',
        tools: 'Python, Rust, C, Java, JavaScipt',
        span: 1
    },
    {
        name: 'Frontend',
        category: 'Frontend Framework',
        tools: 'Angular, TypeScript, React',
        span: 1
    },
    {
        name: 'Blockchain',
        category: 'Web3',
        tools: 'Solidity & Smart Contracts',
        span: 1,
        highlight: true
    },
    {
        name: 'Database Systems',
        category: 'Database',
        tools: 'Postgres / MySQL / MongoDB',
        span: 1
    },
    {
        name: 'DevOps Tools',
        category: 'DevOps',
        tools: 'Linux server, Docker / Podman, API Management, Git',
        span: 1
    },
    {
        name: 'AI Code Assistants',
        category: 'Development',
        tools: 'VSCode Copilot, Cursor, Windsurf, ChatGPT, Grok, Perplexity, Deepseek',
        span: 1
    },
];

const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="skills" className="skills-section section">
            {/* <div className="skills-header"> */}
            <h2 className="section-title">KEY SKILLS</h2>
            {/* <div className="title-underline"></div> */}
            {/* </div> */}

            <div className="skills-matrix">
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className={`skill-node ${skill.highlight ? 'highlighted' : ''} ${hoveredIndex === index ? 'active' : ''}`}
                        data-span={skill.span}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setHoveredIndex(index)}
                        onBlur={() => setHoveredIndex(null)}
                        tabIndex={0}
                        role="article"
                        aria-label={`${skill.name}: ${skill.tools}`}
                    >
                        <div className="node-glass">
                            <div className="node-edge node-edge-top"></div>
                            <div className="node-edge node-edge-right"></div>
                            <div className="node-edge node-edge-bottom"></div>
                            <div className="node-edge node-edge-left"></div>

                            <div className="node-content">
                                <span className="node-category">{skill.category}</span>
                                <h3 className="node-name">{skill.name}</h3>
                                <p className="node-tools">{skill.tools}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
