const ITEMS = [
  'Java', 'System Design', 'NestJS', 'Node.js', 'PostgreSQL',
  'Docker', 'Cybersecurity', 'Linux', 'Networking', 'MongoDB',
  'System Design', 'REST APIs', 'JWT Auth', 'Microservices', 'Git','MySql',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}<span className="marquee-dot"> ·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
