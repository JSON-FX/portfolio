// Single source of truth for all portfolio content.
// Edit here to update the site — components read from these exports.

export const profile = {
  name: "Jayson Alanano",
  brandLead: "json",
  brandTail: ".alanano",
  email: "json.alanano@gmail.com",
  phone: "+63 927 231 4517",
  phoneHref: "tel:+639272314517",
  linkedin: "https://linkedin.com/in/jsonalanano",
  github: "https://github.com/JSON-FX",
  location: "Quezon, Bukidnon · PH",
  resume: "/resume.pdf",
};

export const stats: { n: string; l: string }[] = [
  { n: "9+", l: "years shipping" },
  { n: "4", l: "countries served" },
  { n: "8", l: "roles held" },
  { n: "20+", l: "repositories" },
];

export const aboutChips: string[] = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Vue.js",
  "Node.js",
  "Laravel",
  "WordPress",
];

export type Job = {
  idx: string;
  role: string;
  org: string;
  loc: string;
  date: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Job[] = [
  {
    idx: "01",
    role: "WordPress Developer",
    org: "Wing Assistant · VoltContent (OMG-Technologies)",
    loc: "Denmark · Remote",
    date: "May 2025 — Present",
    current: true,
    bullets: [
      "Run multiple WordPress servers on a Hub & Spoke architecture — provisioning, deployments, and DevOps.",
      "Built CI/CD with GitHub Actions, including automated Claude Code reviews on PRs and Hub & Spoke distribution to local servers.",
      "Shipped custom plugins (SEO structured-data schema) and reusable server-rendered UI shortcodes from Figma.",
    ],
  },
  {
    idx: "02",
    role: "Software Developer",
    org: "True Wealth Pty Ltd",
    loc: "Australia · Remote",
    date: "Dec 2024 — Mar 2025",
    bullets: [
      "Delivered projects and third-party integrations across Angular, Laravel, and Zoho CRM.",
      "Fixed critical bugs supporting daily financial operations with minimal downtime.",
    ],
  },
  {
    idx: "03",
    role: "Software Developer",
    org: "GameTruck",
    loc: "Phoenix, Arizona · Remote",
    date: "Mar 2024 — Dec 2024",
    bullets: [
      "Built and maintained Laravel apps for a nationwide entertainment-services company.",
      "Migrated the frontend from legacy CSS to Tailwind and built a reusable Laravel component library.",
      "Designed and implemented a secure payment-system integration end-to-end.",
    ],
  },
  {
    idx: "04",
    role: "Software Developer",
    org: "HeyBlinds",
    loc: "Montreal, Quebec · Remote",
    date: "Apr 2023 — Nov 2024",
    bullets: [
      "Built and maintained a full Laravel e-commerce platform — the company's primary revenue channel.",
      "Built REST integrations for email marketing and executed technical SEO / Core Web Vitals wins.",
    ],
  },
  {
    idx: "05",
    role: "Software Developer",
    org: "Local Government Unit of Quezon, Bukidnon",
    loc: "Philippines",
    date: "Jul 2019 — Apr 2023",
    bullets: [
      "Built full-stack Laravel apps for municipal workflows, including a custom document-tracking system.",
      "Co-founded the MIS Office Division and led a team of developers and technical staff.",
      "Built the public LGU web portal with Vue 3, Tailwind, and Axios.",
    ],
  },
];

export const earlyRoles: { role: string; date: string }[] = [
  { role: "IT Help Desk Technician — Commission on Elections", date: "2018 — 2019" },
  {
    role: "Software Developer / IT — Assoc. Bukidnon Sugarcane Farmers",
    date: "2017 — 2018",
  },
  {
    role: "Software Developer — University of the Immaculate Conception",
    date: "2016 — 2017",
  },
];

export type Project = {
  file: string;
  ext: string;
  title: string;
  desc: string;
  tags: string[];
  href?: string;
  privateLabel?: string;
};

export const projects: Project[] = [
  {
    file: "tindahan-pos",
    ext: "django",
    title: "Tindahan POS",
    desc: "A single-store inventory and point-of-sale system for a Philippine retailer. Stock can't go negative under concurrency, on-hand reconciles to an append-only ledger, and VAT-exempt SC/PWD pricing is enforced by tests — database constraints, not conventions.",
    tags: ["Python", "Django", "PostgreSQL", "HTMX"],
    href: "https://github.com/JSON-FX/tindahan-pos",
  },
  {
    file: "race-pace",
    ext: "react-native",
    title: "race-pace",
    desc: "A multi-organization trail & ultra-running event platform for Mindanao — one runner account across many organizers, with strictly isolated data. Expo (React Native) + React / Vite on Supabase, TypeScript end-to-end.",
    tags: ["React Native", "React", "Supabase", "TypeScript"],
    href: "https://github.com/JSON-FX/race-pace",
  },
  {
    file: "copytraderx",
    ext: "next",
    title: "CopyTraderX",
    desc: "A single-admin Next.js dashboard for distributing MetaTrader EA licenses — key generation, activation tracking, and user management for trading-automation software.",
    tags: ["Next.js", "TypeScript", "Docker"],
    href: "https://github.com/JSON-FX/copytraderx",
  },
  {
    file: "volt-whsper",
    ext: "swift",
    title: "Volt Whispr",
    desc: "A macOS menu-bar dictation app. On-device speech recognition (audio never leaves the device) with Claude Haiku polishing raw transcripts; global hotkeys and a Keychain-stored API key.",
    tags: ["Swift", "SwiftUI", "Claude"],
    href: "https://github.com/JSON-FX/volt-whsper",
  },
  {
    file: "lgu-sso-ui",
    ext: "react",
    title: "LGU SSO — UI",
    desc: "The management console for a local-government single sign-on — a TypeScript / React UI for administering users, roles, and connected departmental apps.",
    tags: ["TypeScript", "React", "Tailwind"],
    href: "https://github.com/JSON-FX/lgu-sso-ui",
  },
  {
    file: "lgu-sso",
    ext: "laravel",
    title: "LGU SSO — Backend",
    desc: "The single sign-on backend for a local government unit — a Laravel service unifying authentication across departmental systems.",
    tags: ["Laravel", "PHP", "Auth"],
    href: "https://github.com/JSON-FX/LGU-SSO",
  },
  {
    file: "freecasino-int",
    ext: "wordpress",
    title: "FreeCasino INT",
    desc: "A production WordPress / PHP platform for an international free-casino content brand — built and maintained as part of my work at Volt Content.",
    tags: ["WordPress", "PHP", "JavaScript"],
    privateLabel: "Private · Volt Content",
  },
  {
    file: "custom-schema-plugin",
    ext: "wordpress",
    title: "Custom Schema Plugin",
    desc: "A custom WordPress plugin that generates SEO structured-data (schema.org) markup across Volt Content's publishing properties.",
    tags: ["WordPress", "PHP", "SEO"],
    privateLabel: "Private · Volt Content",
  },
  {
    file: "impulse-ea",
    ext: "mql5",
    title: "Impulse EA",
    desc: "A MetaTrader 5 Expert Advisor — the algorithmic trading engine behind CopyTraderX's license distribution.",
    tags: ["MQL5", "MetaTrader", "Algo Trading"],
    privateLabel: "Private · JSON-FX",
  },
];

export const stackGroups: { title: string; chips: string[] }[] = [
  {
    title: "languages & frameworks",
    chips: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "Vue.js",
      "Node.js",
      "Angular",
      "Laravel",
      "PHP",
      "Python",
      "Django",
      "Swift / SwiftUI",
    ],
  },
  {
    title: "cms & front-end",
    chips: [
      "WordPress",
      "Custom Plugins",
      "Hooks & CPT",
      "ACF",
      "Tailwind CSS",
      "Bootstrap",
      "HTML & CSS",
    ],
  },
  {
    title: "tools & cloud",
    chips: [
      "AWS",
      "Git",
      "GitHub Actions",
      "Bitbucket Pipelines",
      "CI/CD",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Zoho CRM",
      "Figma",
    ],
  },
  {
    title: "ai coding",
    chips: [
      "Claude Code & MCPs",
      "GitHub Copilot",
      "Cline / RooCode",
      "OpenAI / Codex",
      "Gemini",
      "Deepseek",
      "Ollama",
    ],
  },
];
