import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Marquee from './components/Marquee'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  const [scrollPct, setScrollPct] = useState(0)
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const ringRef = useRef({ x: -100, y: -100 })
  const animRef = useRef(null)


// Scroll progress
    useEffect(() => {
        const onScroll = () => {
            const scrolled = document.documentElement.scrollTop
            const total = document.documentElement.scrollHeight - window.innerHeight
            setScrollPct(total > 0 ? (scrolled / total) * 100 : 0)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Cursor
    useEffect(() => {
        const onMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', onMove)

        const animateRing = () => {
            ringRef.current.x += (cursorPos.x - ringRef.current.x) * 0.1
            ringRef.current.y += (cursorPos.y - ringRef.current.y) * 0.1
            setRingPos({ x: ringRef.current.x, y: ringRef.current.y })
            animRef.current = requestAnimationFrame(animateRing)
        }
        animRef.current = requestAnimationFrame(animateRing)

        return () => {
            window.removeEventListener('mousemove', onMove)
            cancelAnimationFrame(animRef.current)
        }
    }, [cursorPos])

// Hover detection
    useEffect(() => {
        const els = document.querySelectorAll('a, button, .hoverable')
        const enter = () => setHovered(true)
        const leave = () => setHovered(false)
        els.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })
        return () => els.forEach(el => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) })
    })

    // Reveal on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        )
        const targets = document.querySelectorAll('.reveal, .reveal-left')
        targets.forEach(t => observer.observe(t))
        return () => observer.disconnect()
    })

  return (
    <>
      {/* Custom Cursor */}
        <div
            className={`cursor-dot ${hovered ? 'hovered' : ''}`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
        />
        {/*<div*/}
        {/*    className={`cursor-ring ${hovered ? 'hovered' : ''}`}*/}
        {/*    style={{ left: ringPos.x, top: ringPos.y }}*/}
        {/*/>*/}

      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Journey />
        <div className="divider" />
        <Blog />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
