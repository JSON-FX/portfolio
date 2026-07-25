import { experience, earlyRoles } from "@/content";

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="wrap">
        <div className="eyebrow" data-reveal>
          experience
        </div>
        <h2 className="sec-head" data-reveal>
          A decade of shipping, remotely.
        </h2>
        <p className="sec-sub" data-reveal>
          Most recent first. Older roles condensed below.
        </p>
        <div className="tl" style={{ marginTop: "46px" }}>
          {experience.map((job) => (
            <div className={`tl-item${job.current ? " cur" : ""}`} data-reveal key={job.idx}>
              <div className="tl-top">
                <div className="tl-role">
                  <span className="tl-idx">{job.idx}</span>
                  {job.role}
                </div>
                <div className="tl-date">{job.date}</div>
              </div>
              <div className="tl-co">
                {job.org} <span className="loc">— {job.loc}</span>
              </div>
              <ul className="tl-bul">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="tl-item" data-reveal>
            <div className="tl-early">
              <div className="h">Earlier — 2016 to 2019</div>
              {earlyRoles.map((r, i) => (
                <div className="row" key={i}>
                  <span className="r">{r.role}</span>
                  <span className="m">{r.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
