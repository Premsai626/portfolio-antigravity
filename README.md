# Prem Sai — Developer Portfolio ✦

> Modern, vibe-coded developer portfolio featuring an interactive **3D Cylindrical Certificates Vault**, **scroll-driven skills convergence**, **typewriter bio animations**, and **bento grid project showcases**.

[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-ff0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

---

## ⚡ Highlights & Key Features

### 1. 🌀 Scroll-Driven 3D Certificates Vault
* **Radial Cylindrical Projection:** Arranges verified credentials in an elliptical 3D perspective space with concave depth-of-field styling.
* **Scroll-Linked Physics:** As the visitor scrolls down or up the page, Framer Motion's `useScroll` and `useSpring` smoothly drive the 3D cylinder's rotational inertia.
* **Direct Inspection:** Clicking the front-facing card opens a high-resolution lightbox inspection modal featuring verified credential metadata, Credly verification badges, and official PDF documents. Clicking any visible side card rotates that card directly to the front.

### 2. 🌌 Floating Skills Constellation
* **Scroll-Driven Convergence:** 14 real technical skills float in 3D perspective behind the central card and converge smoothly toward the center as the user scrolls.
* **Interactive Modals:** Clicking any floating tech icon opens a detailed summary modal explaining practical experience and application domains.

### 3. ⌨️ Scroll-Triggered Typewriter Bio
* An animated typewriter effect that triggers dynamically when the About section enters the viewport, presenting a clean monospace developer statement.

### 4. 🚀 Bento Grid Projects Showcase
* **ORBIT (Dominant Featured Project):** Automated AI Interview & Proctoring Platform with real-time webcam anomaly detection.
* **VibeTune:** Emotion-aware web audio studio with real-time facial expression tracking and procedural harmonic drones.
* **Secondary Projects:** Interactive bento cards with live demo triggers, repository links, and tech stack pills.

### 5. 💻 Cyberpunk "Vibe-Coded" Aesthetic
* Monospace telemetry indexing (`// 01. about`, `// 02. stack`, `// 03. projects`, `// 04. certs`, `// 05. contact`).
* Custom `<P/>` monogram SVG favicon with `JetBrains Mono` and `Inter` typography.
* Live status beacon: `● Available for projects & internships`.
* 100% mobile-compact and responsive across all viewports.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React 19 + Vite 6
* **Styling & Layout:** Tailwind CSS v4 (native `@tailwindcss/vite` pipeline)
* **Animation & 3D Math:** Framer Motion 12 (`useScroll`, `useTransform`, `useSpring`, `useMotionValue`)
* **Icons:** Lucide React
* **Typography:** Geist / Inter + JetBrains Mono + Caveat (handwritten accents)

---

## 📁 Project Structure

```
portfolio-antigravity/
├── public/
│   ├── certificates/          # Official credential PDFs & high-res images
│   └── favicon.svg            # Custom <P/> monogram favicon
├── src/
│   ├── animations/            # Reusable Framer Motion variants
│   ├── assets/                # Profile portraits & visual media
│   ├── components/
│   │   ├── about/             # Typewriter bio & academic credentials
│   │   ├── certificates/      # Scroll-driven 3D cylinder vault & lightbox
│   │   ├── contact/           # Direct Gmail compose & contact form
│   │   ├── footer/            # Connection links & social bar
│   │   ├── github/            # Live GitHub profile card
│   │   ├── hero/              # Hero landing page & developer availability
│   │   ├── intro/             # Cinematic 2.5s intro animation
│   │   ├── navigation/        # Backdrop-blurred floating navbar
│   │   ├── projects/          # Featured ORBIT showcase & secondary bento
│   │   ├── skills/            # Floating converging tech icons
│   │   └── ui/                # ElectricBorder, PixelCard, BackgroundScene
│   ├── data/
│   │   ├── portfolio.js       # Central data model (projects, certs, links)
│   │   └── techIcons.jsx      # SVG tech icon definitions & summaries
│   ├── hooks/                 # useScrollProgress, useMousePosition, etc.
│   ├── App.jsx                # Main application entry and section flow
│   ├── index.css              # Global styles & Tailwind v4 theme setup
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Premsai626/portfolio-antigravity.git
   cd portfolio-antigravity
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-optimized static build will be generated in the `dist/` directory.

---

## 📬 Contact & Links

* **Author:** Ippili Prem Sai
* **Institution:** MLR Institute of Technology (B.Tech in CS & Machine Learning)
* **Location:** Hyderabad, India
* **GitHub:** [@Premsai626](https://github.com/Premsai626)
* **LinkedIn:** [in/premsai02](https://www.linkedin.com/in/premsai02)
* **Instagram:** [@\_\_premsai05\_](https://www.instagram.com/__premsai05_)
* **Email:** [ippilipremsai12356@gmail.com](mailto:ippilipremsai12356@gmail.com)

---

<div align="center">
  <sub>Built with precision and passion by Prem Sai. Designed with vibe-coded aesthetics.</sub>
</div>
