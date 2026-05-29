import { useRef, useEffect } from 'react'
import './Blog.css'

const posts = [
    {
        cat: 'Cybersecurity',
        title: 'Think Like a Hacker to Build Better Backends',
        excerpt: 'Integrating an offensive mindset into defensive engineering transforms how you design APIs, auth flows, and data models from the ground up.',
        date: 'MAR 2025',
        readTime: '6 min read',
        num: '01',
    },
    {
        cat: 'Architecture',
        title: 'Microservices vs Monolith: A Practical Take',
        excerpt: "After shipping both architectures in production, here's what I actually learned beyond the conference hype and Twitter takes.",
        date: 'FEB 2025',
        readTime: '8 min read',
        num: '02',
    },
    {
        cat: 'Networking',
        title: 'TCP/IP for Application Developers',
        excerpt: "You write network code daily. But do you actually understand what happens below the abstraction layer? Let's find out.",
        date: 'JAN 2025',
        readTime: '10 min read',
        num: '03',
    },
    {
        cat: 'Security',
        title: 'JWT vs Session Auth: What Nobody Tells You',
        excerpt: "Both have sharp edges in production. Here's what I learned after implementing both at scale and getting burned by each.",
        date: 'DEC 2024',
        readTime: '7 min read',
        num: '04',
    },
    {
        cat: 'Backend',
        title: 'Database Connection Pooling Deep Dive',
        excerpt: "Most developers never think about connection pools until production falls over. Here's everything you need to know before that happens.",
        date: 'NOV 2024',
        readTime: '9 min read',
        num: '05',
    },
]

export default function Blog() {
    const trackRef = useRef(null)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)

    // Arrow button scroll
    const scroll = (dir) => {
        if (!trackRef.current) return
        trackRef.current.scrollBy({ left: dir * 420, behavior: 'smooth' })
    }

    // Drag-to-scroll
    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const onMouseDown = (e) => {
            isDragging.current = true
            startX.current = e.pageX - track.offsetLeft
            scrollLeft.current = track.scrollLeft
            track.style.cursor = 'grabbing'
        }

        const onMouseLeave = () => {
            isDragging.current = false
            track.style.cursor = 'grab'
        }

        const onMouseUp = () => {
            isDragging.current = false
            track.style.cursor = 'grab'
        }

        const onMouseMove = (e) => {
            if (!isDragging.current) return
            e.preventDefault()
            const x = e.pageX - track.offsetLeft
            const walk = (x - startX.current) * 1.4
            track.scrollLeft = scrollLeft.current - walk
        }

        track.addEventListener('mousedown', onMouseDown)
        track.addEventListener('mouseleave', onMouseLeave)
        track.addEventListener('mouseup', onMouseUp)
        track.addEventListener('mousemove', onMouseMove)

        return () => {
            track.removeEventListener('mousedown', onMouseDown)
            track.removeEventListener('mouseleave', onMouseLeave)
            track.removeEventListener('mouseup', onMouseUp)
            track.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <section id="blog">
            {/* Header inside max-width wrapper */}
            <div className="section-wrapper blog-header-wrap">
                <div className="section-header reveal">
                    <span className="section-tag">Writing</span>
                    <h2 className="section-title">Blog</h2>
                    <div className="section-line" />
                    <div className="blog-arrows">
                        <button className="blog-arrow-btn" onClick={() => scroll(-1)} aria-label="Scroll left">←</button>
                        <button className="blog-arrow-btn" onClick={() => scroll(1)} aria-label="Scroll right">→</button>
                    </div>
                </div>
                <p className="blog-drag-hint">← Drag to scroll →</p>
            </div>

            {/* Full-width horizontal scroll track */}
            <div className="blog-scroll-outer">
                <div className="blog-track" ref={trackRef}>
                    <div className="blog-track-spacer" />
                    {posts.map((p, i) => (
                        <article key={i} className="blog-card card">
                            <div className="blog-card-inner">
                                <div className="blog-num">{p.num}</div>
                                <span className="blog-cat">{p.cat}</span>
                                <h3 className="blog-title">{p.title}</h3>
                                <p className="blog-excerpt">{p.excerpt}</p>
                            </div>
                            <div className="blog-card-foot">
                                <div className="blog-meta">
                                    <span className="blog-date">{p.date}</span>
                                    <span className="blog-read-time">{p.readTime}</span>
                                </div>
                                <a href="#" className="blog-link" onClick={e => e.stopPropagation()}>Read →</a>
                            </div>
                        </article>
                    ))}
                    <div className="blog-track-spacer" />
                </div>
            </div>
        </section>
    )
}
