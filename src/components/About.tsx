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
              Nine years turning messy requirements into{" "}
              <em>dependable, shipped software</em> — from municipal government
              systems to e-commerce platforms and a macOS app.
            </p>
            <p className="about-body" data-reveal>
              My core is modern JavaScript — <b>React, Next.js, Vue, and React Native</b>{" "}
              — alongside <b>Laravel</b> and <b>WordPress</b>, and I own the whole
              path to production: multi-server Hub &amp; Spoke deployments, CI/CD
              with GitHub Actions and Bitbucket, custom plugins, and REST
              integrations. Remote-first since 2023, delivering for teams across
              Australia, Denmark, Canada, and the US — increasingly pairing AI
              coding tools with solid engineering to ship faster without cutting
              corners.
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
