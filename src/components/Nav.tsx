import { profile } from "@/content";

export default function Nav() {
  return (
    <nav>
      <div className="nav-in">
        <a className="brand" href="#hero">
          <span className="b-dot" />
          <span className="logo">
            <b>{profile.brandLead}</b>
            {profile.brandTail}
          </span>
        </a>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#work">work</a>
          <a href="#stack">stack</a>
          <a href="#contact">contact</a>
        </div>
        <a className="nav-cta" href={profile.resume} target="_blank" rel="noopener noreferrer">
          résumé ↓
        </a>
      </div>
    </nav>
  );
}
