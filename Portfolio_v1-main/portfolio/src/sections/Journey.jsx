import './Journey.css'

const milestones = [
  {
    year: '2022-23',
    title: 'Kamaraj Matric Hr. Sec. School, CHIDAMBARAM, TN.',
    desc: 'Computer Science with Mathematics'},
  {
    year: 'Current',
    title: 'Rajalakshmi Institute Of Technology',
    desc: 'B.Tech Computer Science And Business System',
      current: true,
  }
]

export default function Journey() {
  return (
    <section id="journey">
      <div className="section-wrapper">
        <div className="section-header reveal">
          <span className="section-tag">Timeline</span>
          <h2 className="section-title">My Journey</h2>
          <div className="section-line" />
        </div>

        <div className="journey-grid">
          <div className="journey-left reveal-left">
            <div className="journey-big-text">
              THE<br />
              <span className="journey-accent">STORY</span><br />
              SO FAR
            </div>
          </div>

          <div className="timeline">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`tl-item reveal ${m.current ? 'tl-current' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="tl-year-col">
                  <div className="tl-year">{m.year}</div>
                  <div className={`tl-dot ${m.current ? 'tl-dot--active' : ''}`} />
                </div>
                <div className="tl-body">
                  <h3 className="tl-title">{m.title}</h3>
                  <p className="tl-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
