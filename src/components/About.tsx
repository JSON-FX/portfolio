import { stats, aboutChips } from "@/content";

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="eyebrow" data-reveal>
          about
        </div>
        <div className="about-grid">
          <div>
            <p className="about-lede" data-reveal>
              Nine years building software — and{" "}
              <em>the automation behind it</em>. From full-stack apps to workflow
              automations and API integrations, I turn slow, manual processes
              into systems that run themselves.
            </p>
            <p className="about-body" data-reveal>
              My core is modern JavaScript — <b>React, Next.js, Vue, and React Native</b>{" "}
              — alongside <b>Laravel</b>, <b>Python</b>, and <b>WordPress</b>. From multi-server
              Hub &amp; Spoke distribution to CI/CD pipelines, custom plugins, and
              REST APIs, I build across the whole path to production — for teams
              in Australia, Denmark, Canada, and the US. Remote-first since 2023,
              increasingly pairing AI coding tools with solid engineering to ship
              faster without cutting corners.
            </p>
            <div className="about-core" data-reveal>
              {aboutChips.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="stats" data-reveal>
            {stats.map((s) => (
              <div className="stat" key={s.l}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
