# Jayson Alanano — Portfolio

A single-page developer portfolio. Dark "terminal-kinetic" aesthetic with an
amber phosphor accent, parallax hero, scroll-triggered reveals, and Lenis
smooth-scroll.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · `next/font`
(Chivo · IBM Plex Sans · JetBrains Mono) · Lenis. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Editing content

All copy lives in [`src/content.ts`](src/content.ts) — profile, stats,
experience, projects, and the stack groups. Update that file and the sections
re-render; no component changes needed.

- Sections: `src/components/*` (Nav, Hero, About, Experience, Work, Stack, Contact, Footer)
- Motion (reveals, parallax, typed command, smooth-scroll): `src/components/Fx.tsx`
- Design system / tokens: `src/app/globals.css`
- Résumé PDF: `public/resume.pdf`
- Social/OG image: `src/app/opengraph-image.tsx` · Favicon: `src/app/icon.svg`

Set `NEXT_PUBLIC_SITE_URL` in the environment to your production URL so
OpenGraph/Twitter metadata resolve to absolute links.
