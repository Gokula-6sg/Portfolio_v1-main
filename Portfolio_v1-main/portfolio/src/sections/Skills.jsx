import './Skills.css'

const skills = [
  { emoji: '☕', name: 'Java', desc: 'Primary language for enterprise backend systems', level: 4, variant: 'yellow' },
  // { emoji: '🍃', name: 'Spring Boot', desc: 'REST APIs, microservices, Spring Security, JPA — full production stack', level: 4, variant: 'black' },

  { emoji: '🦁', name: 'NestJS', desc: 'Scalable TypeScript backend', level: 3 },

  { emoji: '🟢', name: 'Node.js', desc: 'Async event-driven servers', level: 4, wide : true, variant: 'black' },
  //{ emoji: '🛡️', name: 'Cybersecurity', desc: 'Network security, vulnerability analysis, penetration testing, secure coding', level: 3, wide: true },
  { emoji: '🐘', name: 'PostgreSQL', desc: 'Relational data modeling', level: 3 },
    { emoji: '🏗', name: 'JavaScript', desc: 'Backend language for the Node environment', level: 3, variant: 'black' },
    { emoji: '🦈', name: 'MySQL', desc: 'Structured Data', level: 4,wide: true, variant: 'yellow' },
  { emoji: '🐳', name: 'Docker', desc: 'Containerization & deployment', level: 2 },
  { emoji: '🐧', name: 'Linux', desc: 'Daily driver & server admin', level: 3, variant: 'yellow' },
  { emoji: '🌐', name: 'Networking', desc: 'TCP/IP, DNS, firewalls, protocols', level: 3 },
  { emoji: '🍃', name: 'MongoDB', desc: 'Document-based NoSQL', level: 2, variant: 'black' },
  { emoji: '📦', name: 'Git / GitHub', desc: 'Version control & collaboration', level: 4, variant: 'black' },
  { emoji: '🏗️', name: 'System Design', desc: 'Distributed systems thinking', level: 3 },
    { emoji: '📮', name: 'Postman', desc: 'API testing and collaboration', level: 3 , wide: true, variant: 'yellow' },

    { emoji: '🔗', name: 'REST API', desc: 'Designing scalable web services', level: 4, wide: true, variant: 'black' },

    { emoji: '⚡', name: 'GraphQL', desc: 'Flexible API query language', level: 3 },

    { emoji: '🗄️', name: 'Redis', desc: 'In-memory caching and storage', level: 3 },
]

function SkillDots({ level }) {
  return (
    <div className="skill-dots">
      {[1,2,3,4,5].map(i => (
        <div key={i} className={`dot ${i <= level ? 'on' : ''}`} />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrapper">
        <div className="section-header reveal">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-line" />
        </div>

        <div className="skills-bento">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className={`skill-card card hoverable
                ${s.wide ? 'wide' : ''}
                ${s.variant === 'yellow' ? 'sk-yellow' : ''}
                ${s.variant === 'black' ? 'sk-black' : ''}
                reveal`}
              style={{ transitionDelay: `${(i % 4) * 0.07}s` }}
            >
              <div className="sk-emoji">{s.emoji}</div>
              <div className="sk-name">{s.name}</div>
              <div className="sk-desc">{s.desc}</div>
              <SkillDots level={s.level} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
