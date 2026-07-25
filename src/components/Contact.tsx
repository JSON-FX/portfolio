import { profile } from "@/content";

export default function Contact() {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="eyebrow" data-reveal style={{ justifyContent: "center" }}>
          contact
        </div>
        <h2 className="contact-big" data-reveal>
          {"Let's build"}
          <br />
          <span className="grad">something solid.</span>
        </h2>
        <p className="contact-sub" data-reveal>
          Open to full-time roles — remote-first, worldwide.
        </p>
        <a className="contact-mail" data-reveal href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-meta" data-reveal>
          <a className="cm" href={profile.phoneHref}>
            {profile.phone}
          </a>
          <a className="cm" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="cm" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
