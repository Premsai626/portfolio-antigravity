import React from 'react';

export const TECH_SKILLS = [
  // --- TOP ROW (Above central card) ---
  {
    id: 'python',
    name: 'Python',
    category: 'Backend & ML',
    bg: 'bg-[#1e293b]',
    border: 'border-sky-500/40 hover:border-sky-400',
    glow: 'shadow-[0_0_20px_rgba(56,189,248,0.35)]',
    summary: 'My primary language for machine learning, building backend APIs with FastAPI, computer vision pipelines, and scripting automation tools. Cisco Python Essentials 1 certified.',
    projects: ['ORBIT AI Engine', 'Conversational AI Bot'],
    credentials: 'Cisco Networking Academy Certified',
    color: '#38bdf8',
    initPos: { x: -26, y: -45 },
    convergedPos: { x: -20, y: -29 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v1.4h2.9v.4H6.3S4 4.8 4 8c0 3.2 2 3.1 2 3.1h1.2v-1.5s-.1-1.8 1.8-1.8h3v-2.5s.2-3.3-3.1-3.3zm-1.6 1.1c.3 0 .6.3.6.6s-.3.6-.6.6-.6-.3-.6-.6.3-.6.6-.6z" fill="#38BDF8"/>
        <path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-1.4h-2.9v-.4h5.6s2.3.3 2.3-2.9c0-3.2-2-3.1-2-3.1h-1.2v1.5s.1 1.8-1.8 1.8h-3v2.5s-.2 3.3 3.1 3.3zm1.6-1.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z" fill="#FACC15"/>
      </svg>
    )
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'Cloud & DevOps',
    bg: 'bg-[#291334]',
    border: 'border-amber-500/40 hover:border-amber-400',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.35)]',
    summary: 'Cloud infrastructure experience including EC2 deployments, serverless functions, Application Load Balancers, and DNS routing from the AWS Cloud Trek Bootcamp.',
    projects: ['AWS Cloud Trek', 'Cloud Deployments'],
    credentials: 'AWS Student Builder Group & SCOPE',
    color: '#f59e0b',
    initPos: { x: -8, y: -46 },
    convergedPos: { x: -7, y: -30 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M5 9h2.5l2 6h-1.5l-.5-1.5H5.5L5 15H3.5L5 9zm1.5 3.5h1.2l-.6-2.2-.6 2.2zm4.5-3.5h1.5l1.5 5 1.5-5h1.5l-2.2 6.5h-1.6L11 9zm8.5 2c0-.5-.4-.8-1-.8-.5 0-.8.2-.8.5 0 .8 2.3.6 2.3 2.3 0 1.2-1 1.7-2 1.7-.8 0-1.6-.3-2-.7l.6-1.1c.4.3.9.5 1.4.5.4 0 .7-.1.7-.4 0-.8-2.3-.6-2.3-2.3 0-1.1.9-1.8 2-1.8.7 0 1.4.2 1.8.6l-.7 1.1z" fill="#fcd34d"/>
        <path d="M3 18c6 3.5 12 3.5 18 0" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18.5 16.5l2.5 1.5-1.5 2" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Backend & OOP',
    bg: 'bg-[#451a03]',
    border: 'border-amber-600/40 hover:border-amber-400',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.35)]',
    summary: 'Strong foundation in object-oriented programming, data structures, multithreading, and building backend services with Spring Boot.',
    projects: ['Core Algorithmic Systems', 'Microservice Architectures'],
    credentials: 'MLRIT CSM Academic Focus',
    color: '#f59e0b',
    initPos: { x: 7, y: -46 },
    convergedPos: { x: 6, y: -30 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M8.5 17.5c2.5.5 5.5.5 8 0m-7 2c2 .3 4.5.3 6.5 0m-8 2.5c3.5.5 7.5.5 10.5 0" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M13 3c-1 2-2 3.5 0 5s2 3 0 5m3-8c-1 1.5-1.5 3 0 4.5" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend Engineering',
    bg: 'bg-[#0f172a]',
    border: 'border-cyan-500/50 hover:border-cyan-400',
    glow: 'shadow-[0_0_25px_rgba(6,182,212,0.35)]',
    summary: 'My primary frontend tool: building fast single-page apps, custom React hooks, Framer Motion interactive layouts, and Canvas visualizers.',
    projects: ['ORBIT Platform', 'VibeTune Sanctuary', 'Developer Portfolio'],
    credentials: 'Carnival 2.0 Web Dev Winner',
    color: '#06b6d4',
    initPos: { x: 25, y: -45 },
    convergedPos: { x: 20, y: -29 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 animate-[spin_18s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#22d3ee" />
      </svg>
    )
  },

  // --- LEFT WING (Flanking left of card) ---
  {
    id: 'c',
    name: 'C Programming',
    category: 'Low-Level & Embedded',
    bg: 'bg-[#172554]',
    border: 'border-blue-500/40 hover:border-blue-400',
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]',
    summary: 'Direct memory management, pointers, and low-level computer architecture. Used in Arduino/ESP microcontroller firmware and sensor drivers.',
    projects: ['Smart Wi-Fi Obstacle Car', 'Embedded Automation'],
    credentials: 'Cisco C Essentials 1 Verified',
    color: '#3b82f6',
    initPos: { x: -44, y: -22 },
    convergedPos: { x: -33, y: -16 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M19 15.5c-1.3 2-3.6 3.5-6.5 3.5-4.7 0-8.5-3.8-8.5-8.5S7.8 2 12.5 2c2.9 0 5.2 1.5 6.5 3.5" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="12.5" cy="10.5" r="2.5" fill="#93c5fd" />
      </svg>
    )
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Web Standards',
    bg: 'bg-[#431407]',
    border: 'border-orange-600/40 hover:border-orange-400',
    glow: 'shadow-[0_0_20px_rgba(234,88,12,0.3)]',
    summary: 'Writing clean, semantic, and accessible markup. Leveraging Canvas 2D contexts, audio streams, and modern browser APIs.',
    projects: ['All Web Projects', 'Semantic UI Architecture'],
    credentials: 'Web Development Core',
    color: '#ea580c',
    initPos: { x: -46, y: 0 },
    convergedPos: { x: -35, y: 0 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z" fill="#9a3412" stroke="#ea580c" strokeWidth="1.5"/>
        <path d="M12 5.5v14l4.5-1.5 1.2-12.5H12z" fill="#f97316"/>
        <path d="M8 8h8m-7.6 3.5h7.2l-.5 4.5-3.1 1-3.1-1-.2-2" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend Runtime',
    bg: 'bg-[#052e16]',
    border: 'border-emerald-500/40 hover:border-emerald-400',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
    summary: 'Server-side JavaScript runtime for building REST APIs, lightweight microservices, and full-stack backend integrations.',
    projects: ['FAQ Chatbot Backend', 'Full-Stack Web Servers'],
    credentials: 'Backend & API Integration',
    color: '#10b981',
    initPos: { x: -43, y: 22 },
    convergedPos: { x: -33, y: 16 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8.5 4.9v9.8L12 21.5l-8.5-4.8V6.9L12 2z" stroke="#34d399" strokeWidth="2" fill="#064e3b" fillOpacity="0.4"/>
        <path d="M12 7v10m-4-7l4 2 4-2" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },

  // --- RIGHT WING (Flanking right of card) ---
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Core Language',
    bg: 'bg-[#422006]',
    border: 'border-yellow-500/40 hover:border-yellow-400',
    glow: 'shadow-[0_0_20px_rgba(234,179,8,0.3)]',
    summary: 'Modern ES6+ development, asynchronous async/await pipelines, Web Audio API synthesis, and interactive HTML5 canvas simulations.',
    projects: ['VibeTune Procedural Audio', 'Interactive Portfolio'],
    credentials: 'Advanced Web Engineering',
    color: '#eab308',
    initPos: { x: 44, y: -22 },
    convergedPos: { x: 33, y: -16 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#ca8a04"/>
        <path d="M8 17.5c.5.5 1.5.8 2.2.4.8-.4 1-1.3 1-2.4v-5.5h-1.8v5.5c0 .5-.2.8-.5.8-.3 0-.6-.2-.9-.5l-.8 1.7zm6.2-.2c1 .5 2.2.7 3.2.2 1-.5 1.5-1.5 1.5-2.6 0-2.3-2.5-2.2-2.5-3.3 0-.4.3-.7.9-.7.6 0 1.2.2 1.6.5l.8-1.5c-.7-.4-1.6-.6-2.4-.6-1.5 0-2.7.9-2.7 2.4 0 2.2 2.5 2.1 2.5 3.3 0 .5-.4.8-1 .8-.7 0-1.4-.3-1.9-.8l-.5 1.7z" fill="#ffffff"/>
      </svg>
    )
  },
  {
    id: 'css3',
    name: 'CSS3 / Tailwind',
    category: 'Styling & Design',
    bg: 'bg-[#082f49]',
    border: 'border-cyan-500/40 hover:border-cyan-400',
    glow: 'shadow-[0_0_20px_rgba(14,165,233,0.3)]',
    summary: 'Crafting slick dark interfaces with Tailwind CSS v4, custom keyframe animations, glassmorphism, responsive grid layouts, and GPU-accelerated styling.',
    projects: ['Portfolio Design System', 'VibeTune UI', 'ORBIT Dashboard'],
    credentials: 'Carnival 2.0 Web Design Domain',
    color: '#0ea5e9',
    initPos: { x: 46, y: 0 },
    convergedPos: { x: 35, y: 0 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z" fill="#0369a1" stroke="#0ea5e9" strokeWidth="1.5"/>
        <path d="M12 5.5v14l4.5-1.5 1.2-12.5H12z" fill="#38bdf8"/>
        <path d="M8 8h8m-7.6 3.5h7.2l-.5 4.5-3.1 1-3.1-1-.2-2" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    category: 'Backend Framework',
    bg: 'bg-[#14532d]',
    border: 'border-green-500/40 hover:border-green-400',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.3)]',
    summary: 'Developing enterprise Java backends with RESTful controllers, JPA/Hibernate data layers, dependency injection, and microservice architectures.',
    projects: ['Enterprise Web Services', 'Secure Data Controllers'],
    credentials: 'Enterprise Java Architecture',
    color: '#22c55e',
    initPos: { x: 43, y: 22 },
    convergedPos: { x: 33, y: 16 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4 17C3 13 4 8 9 5c5-3 10-2 11 1 1 3 0 8-5 11-5 3-10 2-11 0z" fill="#15803d" stroke="#4ade80" strokeWidth="1.5"/>
        <path d="M7 15c2-3 6-7 11-8m-7 5c-2 1-3 3-4 3" stroke="#bbf7d0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },

  // --- BOTTOM ROW (Below central card) ---
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'NoSQL Database',
    bg: 'bg-[#022c22]',
    border: 'border-emerald-600/40 hover:border-emerald-400',
    glow: 'shadow-[0_0_20px_rgba(5,150,105,0.3)]',
    summary: 'Document-based NoSQL database management, JSON schema design, indexing, and aggregation pipelines on MongoDB Atlas. Credly verified badge holder.',
    projects: ['Web Data Models', 'Document Stores'],
    credentials: 'MongoDB Basics Credly Verified',
    color: '#059669',
    initPos: { x: -24, y: 44 },
    convergedPos: { x: -18, y: 29 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 6 7.5 6 13.5c0 3.3 2.7 6 6 8.5 3.3-2.5 6-5.2 6-8.5C18 7.5 12 2 12 2z" fill="#047857" stroke="#34d399" strokeWidth="1.5"/>
        <path d="M12 2v20" stroke="#a7f3d0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Version Control',
    bg: 'bg-[#3b070c]',
    border: 'border-orange-500/40 hover:border-orange-400',
    glow: 'shadow-[0_0_20px_rgba(249,115,22,0.3)]',
    summary: 'Daily driver for version control: branching strategies, atomic commits, merge conflict resolution, and collaborative workflows.',
    projects: ['All Engineering Projects'],
    credentials: 'DevOps & Version Control',
    color: '#f97316',
    initPos: { x: -8, y: 45 },
    convergedPos: { x: -6, y: 30 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <path d="M19.5 10.5l-6-6a2.1 2.1 0 00-3 0l-6 6a2.1 2.1 0 000 3l6 6a2.1 2.1 0 003 0l6-6a2.1 2.1 0 000-3z" stroke="#fb923c" strokeWidth="1.8" fill="#7c2d12" fillOpacity="0.3"/>
        <circle cx="9" cy="12" r="1.5" fill="#fdba74"/>
        <circle cx="15" cy="12" r="1.5" fill="#fdba74"/>
        <path d="M10.5 12h3" stroke="#fdba74" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Collaboration & CI/CD',
    bg: 'bg-[#18181b]',
    border: 'border-slate-500/40 hover:border-slate-300',
    glow: 'shadow-[0_0_20px_rgba(255,255,255,0.2)]',
    summary: 'Project hosting, collaborative pull request reviews, automated CI/CD with GitHub Actions, and shipping open-source code.',
    projects: ['Premsai626 GitHub Profile'],
    credentials: 'Open-Source Developer',
    color: '#f4f4f5',
    initPos: { x: 8, y: 45 },
    convergedPos: { x: 6, y: 30 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor" color="#f8fafc">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    )
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Relational Database',
    bg: 'bg-[#0c4a6e]',
    border: 'border-sky-600/40 hover:border-sky-400',
    glow: 'shadow-[0_0_20px_rgba(2,132,199,0.3)]',
    summary: 'Relational schema design, normalization, ACID transactions, complex JOIN queries, and database indexing for optimal performance.',
    projects: ['Structured Application Data', 'Relational Schemas'],
    credentials: 'DBMS Foundations',
    color: '#0284c7',
    initPos: { x: 24, y: 44 },
    convergedPos: { x: 18, y: 29 },
    size: 'w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
    icon: () => (
      <svg className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="8" ry="3" stroke="#38bdf8" strokeWidth="1.8" fill="#0369a1" fillOpacity="0.4"/>
        <path d="M4 7v5c0 1.7 3.6 3 8 3s8-1.3 8-3V7m-16 5v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5" stroke="#38bdf8" strokeWidth="1.8"/>
      </svg>
    )
  }
];
