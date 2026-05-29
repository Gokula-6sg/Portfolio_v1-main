import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <div className="section-header reveal">
          <span className="section-tag">About</span>
          <h2 className="section-title">Who Am I?</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          {/* Left Card */}
          <div className="about-main-card card reveal">
            <div className="about-avatar">G</div>
            <div className="about-name">GOKULAKRISHNAA T</div>
            <div className="about-role-pill">Backend Dev</div>

            <p className="about-para">
              I'm a <strong>backend developer</strong> obsessed with the systems beneath the surface —
              APIs, databases, and the security layers that keep everything running reliably under pressure.
            </p>
            <p className="about-para">
              Currently building production-grade systems with <strong>Node Environment</strong>,
              and diving deep into System Design from Monolithic to security-first architecture.
            </p>
            <p className="about-para">
              I believe great backend engineering is an art form: clean abstractions,
              thoughtful system design, and code that handles failure gracefully.
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <div className="info-label">Location</div>
                <div className="info-val">Chennai, India</div>
              </div>
              <div className="info-item">
                <div className="info-label">Focus</div>
                <div className="info-val">Backend · Database · Design </div>
              </div>
              <div className="info-item">
                <div className="info-label">Status</div>
                <div className="info-val">Open to Work ✦</div>
              </div>
              <div className="info-item">
                <div className="info-label">Degree</div>
                <div className="info-val">B.Tech CSBS</div>
              </div>
            </div>
          </div>

          {/* Right Stack */}
          <div className="about-right-stack">
            <div className="stat-card card yellow-card reveal">
              <div className="stat-num">3+</div>
              <div className="stat-label">Production Projects</div>
              <div className="stat-sub">Shipped real systems used by real people</div>
            </div>

            <div className="stat-card card black-card reveal">
              <div className="stat-num yellow-num">6+</div>
              <div className="stat-label">Technologies</div>
              <div className="stat-sub">Full-stack of the backend world</div>
            </div>

            <div className="quote-card card reveal">
              <div className="quote-label">Philosophy</div>
              <blockquote className="quote-text">
                "Scalability is not a feature added later; it's a principle considered from the beginning."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
