import { useState } from 'react'
import './Projects.css'

const projects = [
    {
        num: '01',
        name: 'Social Media Application (Microservice)',
        tagline: 'The culture, unified.',
        desc: 'Social Media App with the Microservice Architecture, It shows the redis cache for the lower m/s.',
        tech: ['Node.Js', 'Express', 'Docker', 'MongoDB', 'Redis', 'RabbitMQ'],
        github: 'https://github.com/Gokula-6sg/microservices-social-media',
        category: 'System Design',
        year: '2025-26',
        emoji: '🏫',
    },
    {
        num: '02',
        name: 'Auto Note Collector - (Chrome Extension)',
        tagline: 'Zero conflict for Note taking.',
        desc: 'Created a Chrome Extension to solve the problem of disorganized online research by allowing users to capture, search, and export web highlights efficiently, featuring a dark-mode UI for productivity.',
        tech: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'Manifest V3'],
        github: 'https://github.com/Gokula-6sg/auto-note-collector',
        category: 'Chrome Extension',
        year: '2025',
        emoji: '📒',
    },
    {
        num: '03',
        name: 'Secure File Sharing',
        tagline: 'Know before attackers do.',
        desc: 'Secured File Sharing platform for thee authentication and password enabled sharing files.',
        tech: ['Node.js', 'Express', 'Supabase','Multer'],
        github: 'https://github.com/Gokula-6sg/Secure-file-share',
        category: 'Secure Drive',
        year: '2025',
        emoji: '🤖',
    },
    {
        num: '04',
        name: 'Network Monitoring Dashboard',
        tagline: 'See everything. Miss nothing.',
        desc: 'Real-time network traffic visualization and anomaly detection. Monitors bandwidth, latency, and flags suspicious traffic patterns with automated alert pipelines.',
        tech: ['Node.js', 'Express', 'Grafana', 'Linux'],
        github: 'https://github.com',
        category: 'Network Intelligence',
        year: '2023',
        emoji: '📡',
    },
    {
        num: '05',
        name: 'Knowledge Graph API',
        tagline: 'Every Theory, one platform.',
        desc: 'A backend-only API that builds a smart knowledge graph connecting skills, resources, and topics — powered by GraphQL and Neo4j.',
        tech: ['Node.js', 'Express', 'Neo4j', 'GraphQL Server', 'Redis'],
        github: 'https://github.com/Gokula-6sg/knowledge-Graph-API',
        category: 'Education Platform',
        year: '2025',
        emoji: '🎯',
    },

]

export default function Projects() {
    const [active, setActive] = useState(0)

    const current = projects[active]

    return (
        <section id="projects">
            <div className="section-wrapper">
                <div className="section-header reveal">
                    <span className="section-tag">Work</span>
                    <h2 className="section-title">Projects</h2>
                    <div className="section-line" />
                    <span className="proj-total-count">05 Projects</span>
                </div>

                <div className="proj-layout">

                    {/* ── Left: index list ── */}
                    <div className="proj-index">
                        {projects.map((p, i) => (
                            <button
                                key={p.num}
                                className={`proj-index-item ${active === i ? 'proj-index-item--active' : ''}`}
                                onClick={() => setActive(i)}
                            >
                                <span className="pi-num">{p.num}</span>
                                <span className="pi-name">{p.name}</span>
                                <span className="pi-arrow">{active === i ? '→' : ''}</span>
                            </button>
                        ))}
                    </div>

                    {/* ── Right: active project card ── */}
                    <div className="proj-detail-wrap">
                        <div className="proj-detail card" key={active}>

                            {/* Top bar */}
                            <div className="pd-topbar">
                                <div className="pd-category-row">
                                    <span className="pd-emoji">{current.emoji}</span>
                                    <span className="pd-category">{current.category}</span>
                                    {current.featured && <span className="pd-featured-pill">★ Featured</span>}
                                </div>
                                <span className="pd-year">{current.year}</span>
                            </div>

                            {/* Big name */}
                            <div className="pd-name-area">
                                <div className="pd-num-ghost">{current.num}</div>
                                <h3 className="pd-name">{current.name}</h3>
                                <p className="pd-tagline">{current.tagline}</p>
                            </div>

                            {/* Desc */}
                            <p className="pd-desc">{current.desc}</p>

                            {/* Tech */}
                            <div className="pd-tech-area">
                                <span className="pd-tech-label">Built with</span>
                                <div className="pd-tech-list">
                                    {current.tech.map(t => (
                                        <span key={t} className="pd-tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pd-actions">
                                {current.live && (
                                    <a href={current.live} target="_blank" rel="noreferrer" className="btn btn-yellow pd-btn">
                                        Live Demo ↗
                                    </a>
                                )}
                                <a href={current.github} target="_blank" rel="noreferrer" className="btn btn-black pd-btn">
                                    GitHub →
                                </a>
                            </div>

                            {/* Progress dots */}
                            <div className="pd-dots">
                                {projects.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`pd-dot ${active === i ? 'pd-dot--on' : ''}`}
                                        onClick={() => setActive(i)}
                                        aria-label={`Project ${i + 1}`}
                                    />
                                ))}
                            </div>

                        </div>

                        {/* Prev / Next */}
                        <div className="proj-nav-btns">
                            <button
                                className="proj-nav-btn"
                                onClick={() => setActive(i => Math.max(0, i - 1))}
                                disabled={active === 0}
                            >← Prev</button>
                            <button
                                className="proj-nav-btn proj-nav-btn--next"
                                onClick={() => setActive(i => Math.min(projects.length - 1, i + 1))}
                                disabled={active === projects.length - 1}
                            >Next →</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
