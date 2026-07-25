import { profile } from "@/content";

export default function Footer() {
  return (
    <footer>
      <div className="foot-in">
        <span>
          <b>{profile.brandLead}</b>
          {profile.brandTail} — {profile.name}
        </span>
        <span>Full-Stack Developer · Remote-first</span>
        <span>© {new Date().getFullYear()} · Built with Next.js</span>
      </div>
    </footer>
  );
}
