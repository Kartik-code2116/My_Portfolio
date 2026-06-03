# Kartik Thorat | Developer Portfolio Website

A state-of-the-art, high-performance developer portfolio website built using **React, Vite, TypeScript, and a custom Vanilla CSS design system**. This single-page application (SPA) integrates interactive elements and micro-interactions designed to highlight engineering proficiency and academic achievements.

---

## 🚀 Key Features

1. **Interactive Retro Terminal Emulator:**
   - A retro-style sandbox shell responding to commands (`about`, `skills`, `projects`, `joke`, `matrix`, `clear`).
2. **Dynamic Canvas Particle Background:**
   - A background constellation particle tracker that dynamically connects nodes and repels them from the mouse pointer coordinates.
3. **Twin-Element Custom Cursor:**
   - A custom cursor follower (instant inner dot + trailing outer ring with physics easing) that expands and glows when hovering over interactive elements. Automatically disabled on touch screens.
4. **Interactive Theme Customizer Console:**
   - A floating settings console at the bottom-right of the viewport to select accent palettes (*Cyan Glow*, *Cyber Pink*, *Matrix Green*, *Vivid Violet*) and toggle background particle systems.
5. **Detailed Case Study Modals:**
   - Overlay panels detailing engineering challenges, role descriptions, architectural choices, and performance metrics for individual projects.
6. **State-Based Competency Gauges:**
   - Dynamic progress meters inside the About tab representing technology proficiencies.
7. **SEO Optimization:**
   - Built-in metadata, keywords, description, and social Open Graph tags.

---

## 🛠️ Technology Stack

- **Core Framework:** React 19 (TypeScript)
- **Scaffolding Tool:** Vite
- **Styling:** Vanilla CSS (CSS Custom Variables & Variables Overrides)
- **State Management:** React Stateful hooks (useState, useEffect, useRef)
- **Animations:** CSS Keyframes & RequestAnimationFrame transitions

---

## 📁 Repository Structure

```
My_Potfolio/
├── public/                       # Static assets
│   ├── Kartik Resume (1st Year).pdf
│   └── Kartik_img (2) (1).jpg
├── src/
│   ├── components/               # Modular components
│   │   ├── CustomCursor.tsx      # Trailing cursor dot & ring
│   │   ├── Navbar.tsx            # Sticky header & mobile toggle
│   │   ├── Hero.tsx              # Banner & statistics counters
│   │   ├── About.tsx             # Bio & visual skill gauges
│   │   ├── Services.tsx          # Key deliverables cards
│   │   ├── Projects.tsx          # Project grid & timeline lists
│   │   ├── ProjectModal.tsx      # Case studies detail modal
│   │   ├── Publications.tsx      # Academic preprints catalog
│   │   ├── OpenSource.tsx        # Github repository grid
│   │   ├── InteractiveTerminal.tsx # Retro command line shell
│   │   ├── Testimonials.tsx      # Endorsement slider carousel
│   │   ├── FAQ.tsx               # Accordion Q&A panel
│   │   ├── Contact.tsx           # Form with front-end validation
│   │   ├── Footer.tsx            # Secondary copyrights
│   │   ├── ParticleBackground.tsx # HTML5 Canvas particles
│   │   └── ThemeCustomizer.tsx   # Floating accent toggle gear
│   ├── App.tsx                   # Central router & observers
│   ├── index.css                 # CSS custom variables & systems
│   └── main.tsx                  # Root mount entrypoint
├── index.html                    # SEO head & root index
└── package.json                  # Dependencies & script rules
```

---

## 👤 Developer Profile Snapshot

- **Name:** Kartik Thorat
- **Role:** Full Stack Developer & AI Enthusiast
- **Education:** VIT Pune, Bachelor of Artificial Intelligence (2024 — 2028 · CGPA: 8.5)
- **Contact:** kartik.thorat24@vit.edu | +91 8329785830
- **Location:** Pune, Maharashtra, India
- **Core Projects:**
  - *Mediconnect:* Responsive clinical booking OS (React, Express, MongoDB).
  - *Mess App:* Meal cost split calculator for students (Flutter, Firebase).
  - *AI Image Assistant:* TensorFlow auto-tagging container (Python, Flask, TensorFlow).
- **Core Stack:** React, TypeScript, Node.js, Express, Python, Firebase, TensorFlow, PostgreSQL, MongoDB, Git.

---

## 💻 Getting Started

To run or build the application locally, verify you have **Node.js** installed, then run:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production Compilation
```bash
npm run build
```
The output directory will compile bundles in `dist/`.
