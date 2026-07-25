import { projects, profile } from "@/content";

export default function Work() {
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <div className="eyebrow" data-reveal>
          selected_work
        </div>
        <h2 className="sec-head" data-reveal>
          {"Things I've built."}
        </h2>
        <p className="sec-sub" data-reveal>
          A cross-section — cross-platform apps, trading systems, government
          platforms, and WordPress engineering.
        </p>
        <div className="work-grid" style={{ marginTop: "46px" }}>
          {projects.map((p) => (
            <div className="card" data-reveal key={p.file}>
              <div className="card-file">
                {p.file}
                <span className="ext">/ {p.ext}</span>
              </div>
              <div className="card-title">{p.title}</div>
              <div className="card-desc">{p.desc}</div>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.href ? (
                <a
                  className="card-link"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.href.replace("https://", "")} ↗
                </a>
              ) : (
                <span className="card-priv">{p.privateLabel}</span>
              )}
            </div>
          ))}
        </div>
        <div className="more-line" data-reveal>
          + more on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github.com/JSON-FX ↗
          </a>
        </div>
      </div>
    </section>
  );
}
