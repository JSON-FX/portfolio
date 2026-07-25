import { stackGroups } from "@/content";

export default function Stack() {
  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <div className="eyebrow" data-reveal>
          stack
        </div>
        <h2 className="sec-head" data-reveal>
          Tools of the trade.
        </h2>
        <div className="stack-grid" style={{ marginTop: "46px" }}>
          {stackGroups.map((g) => (
            <div className="stack-col" data-reveal key={g.title}>
              <h3>{g.title}</h3>
              <div className="chips">
                {g.chips.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
