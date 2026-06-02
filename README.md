# Jatin Kumar Singh — AI Developer Portfolio

![Next.js](https://img.shields.io/badge/next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Python](https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Machine%20Learning](https://img.shields.io/badge/Machine%20Learning-FF6F00?style=for-the-badge)

> An aspiring Generative AI Developer portfolio showcasing full-stack web development, AI/ML projects, and competitive programming. Built with modern web technologies and a focus on clean, responsive design.

<p align="center">
  <a href="https://jatin-kumar-singh.dev"><strong>🔗 Live Site →</strong></a> (TODO: Update domain)
</p>

---

| Feature | Description |
|---------|-------------|
| 🎨 Custom Design System | Neo-brutalist aesthetic with acid colors, film grain, glassmorphism, and 3D depth — all from scratch |
| ⌘K Command Palette | Keyboard-navigable quick navigation with fuzzy search, shortcuts, and resume download |
| 🖱️ Custom Cursor | Hardware-accelerated animated cursor that reacts to interactive elements |
| 🌗 Dark / Light Mode | Full theme system with CSS variables and persistent preference via `ThemeProvider` |
| 🧲 Magnetic Buttons | Physics-based hover interactions using Framer Motion spring animations |
| 📊 Scroll Progress | Real-time animated progress bar tracking page scroll position |
| ⚡ Loading Screen | Branded boot sequence animation on initial visit |
| 🎮 Konami Code Easter Egg | Hidden `lord_decay` mode activated by the classic cheat code |

---

## 📄 Pages

### `/` — Home
The hero section features **mouse-aware parallax gradient blobs**, a rotating marquee ticker, an animated stats strip (projects shipped, years of experience, response time), and a **3D Bento Grid** showcasing featured work with depth and glow effects. Includes an about/bio section with headshot, a philosophy & process breakdown, service previews (Velocity Launch & AI Augmentation), and a bold CTA.

### `/work` — Work
Displays all projects as interactive cards with staggered entrance animations, category tags, tech badges, and metrics. Each card links to a **dynamic case study page** (`/work/[slug]`) built with `generateStaticParams`, featuring problem/solution/outcomes narratives and live GitHub links.

### `/stack` — Stack
A skills dashboard organized into **Frontend**, **Backend**, **AI/ML**, and **DevOps** categories. Each tool has a proficiency bar and a one-liner description. Includes a "Currently Learning" section (Rust, Kubernetes, Three.js, Solidity).

### `/services` — Services
Two service packages — **Velocity Launch** (production MVPs in 12 hours) and **AI Augmentation** (LLM integration, RAG pipelines, custom agents). Features a side-by-side **Agency vs. Me** comparison table with detailed feature breakdowns.

### `/contact` — Contact
A **multi-step contact form** (name → email → budget → brief) powered by Formspree, with an animated FAQ accordion, social links, and contact info (location, response time, languages spoken: English, French, Arabic, Mandarin).

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 14 (App Router, React Server Components) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS 3, custom design tokens, CSS variables |
| **Animation** | Framer Motion (springs, parallax, staggered reveals, 3D tilt, `AnimatePresence`) |
| **Icons** | Lucide React |
| **Utilities** | `clsx`, `tailwind-merge` |
| **Typography** | Space Grotesk (headings), JetBrains Mono (body/code) — via `next/font` |
| **Forms** | Formspree (API route at `/api/contact`) |
| **Deployment** | Vercel |

---

## 🧩 Component Architecture

```
components/ui/
├── BentoGrid.tsx         # 3D interactive project grid with glow & depth
├── CommandPalette.tsx     # ⌘K quick nav with keyboard support
├── CustomCursor.tsx       # Animated hardware-accelerated cursor
├── Decorative.tsx         # SVG patterns (circuit, dots, crosshatch)
├── LiveTerminal.tsx       # Simulated terminal typing animation
├── LoadingScreen.tsx      # Branded boot sequence
├── MagneticButton.tsx     # Physics-based hover interactions
├── ScrollProgress.tsx     # Scroll position indicator
├── ThemeProvider.tsx       # Dark/light mode context provider
└── ThemeToggle.tsx         # Theme switcher button

app/
├── page.tsx               # Home — hero, stats, bento, about, services, CTA
├── work/page.tsx           # Project listing with animated cards
├── work/[slug]/page.tsx    # Dynamic case study pages
├── stack/page.tsx          # Skills & proficiency dashboard
├── services/page.tsx       # Service packages & comparison
├── contact/page.tsx        # Multi-step contact form + FAQ
├── not-found.tsx           # Custom 404
├── layout.tsx              # Root layout with nav, cursor, command palette
├── globals.css             # Design system & custom animations
└── api/contact/route.ts    # Formspree integration endpoint

lib/
├── projects.ts             # Project data & case study content
└── utils.ts                # Shared utility functions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jatin-kumar-singh/portfolio.git
cd luxury-engineering-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design Decisions

- **No UI libraries** — every component (`BentoGrid`, `CommandPalette`, `MagneticButton`, etc.) is built from scratch for full creative control
- **Neo-Brutalist meets Luxury** — high-contrast acid palette (`#CDFF00`, `#FF006E`, `#3A86FF`) combined with glassmorphism, film grain overlays, and premium typography
- **Motion as a first-class citizen** — staggered reveals, spring physics, 3D tilt, parallax, and page transitions via Framer Motion
- **Performance-first** — React Server Components where possible, `next/font` for zero layout shift, optimized SVG patterns

---

## 📬 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jatin-kumar-singh-65b50a355/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jatin-kumar-singh)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jatin.singh2024@nst.rishihood.edu.in)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://jatin-kumar-singh.dev)

---

<p align="center">
  <sub>Built by <strong>Jatin Kumar Singh</strong> — AI Developer | Full-Stack Engineer</sub>
</p>
# jatin_portfolio_2
