import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-top">
        <div className="hero-hello">Glad you're here !!</div>
        <div className="hero-sub">This is</div>
      </div>

      <div className="hero-name-card card">
        <h1 className="hero-name">
          <span className="name-line">GOKULAKRISHNAA</span>


        </h1>
        <div className="hero-deco">
          <span className="deco-tag">Backend Dev</span>


        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-role-badge">
          <span className="badge-dot" />
          Backend Developer · Cybersecurity Enthusiast · Chennai, IN
        </div>
        <div className="hero-btns">
          <button className="btn btn-black" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}
