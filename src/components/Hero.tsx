import { profile } from "@/content";

export default function Hero() {
  return (
    <header id="hero">
      <div className="hero-layer hero-glow" data-px="0.25" />
      <div className="hero-layer hero-ghost" data-px="0.12">
        DEV
      </div>
      <div className="hero-layer hero-tok" style={{ top: "22%", left: "7%" }} data-px="-0.18">
        {"const stack = ['php','ts','swift']"}
      </div>
      <div className="hero-layer hero-tok" style={{ top: "70%", left: "12%" }} data-px="0.22">
        {"await deploy('vercel')"}
      </div>
      <div className="hero-layer hero-tok" style={{ top: "32%", right: "9%" }} data-px="0.3">
        git push origin main
      </div>

      <div className="wrap hero-in">
        <div className="term-line">
          <span className="p">➜</span> <span className="mono">~/jayson-alanano</span>{" "}
          <span className="c" id="typed" />
          <span className="caret" />
        </div>
        <h1 className="hero-title" data-reveal>
          Jayson
          <br />
          <span className="grad">Alanano</span>
        </h1>
        <div className="hero-role" data-reveal>
          Full-Stack Developer &nbsp;·&nbsp;{" "}
          <b>React · Next.js · Laravel · React Native</b> &nbsp;·&nbsp; AI-Augmented DevOps
        </div>
        <div data-reveal>
          <span className="pill">
            <span className="live" />
            Open to full-time roles
          </span>
        </div>
        <div className="cta-row" data-reveal>
          <a className="btn pri" href="#work">
            View selected work
          </a>
          <a className="btn sec" href={profile.resume} target="_blank" rel="noopener noreferrer">
            Download résumé
          </a>
          <a className="btn sec" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="hero-strip" data-reveal>
          <span>
            <b>9+</b> years experience
          </span>
          <span>
            <b>4</b> countries (AU · DK · CA · US)
          </span>
          <span>
            <b>Remote-first</b>
          </span>
          <span>{profile.location}</span>
        </div>
      </div>
      <div className="scrollhint">↓ scroll</div>
    </header>
  );
}
