import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CinematicIntro from './components/intro/CinematicIntro';
import BackgroundScene from './components/ui/BackgroundScene';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/navigation/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Certificates from './components/certificates/Certificates';
import GithubSection from './components/github/GithubSection';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import TerminalDrawer from './components/ui/TerminalDrawer';
import MatrixRain from './components/ui/MatrixRain';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="min-h-screen text-[#f4f4f5] relative overflow-x-hidden">
      {/* 1. Cinematic Intro (~2-3s) */}
      <AnimatePresence>
        {!introFinished && (
          <CinematicIntro onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      {/* 2. Global Interactive Background Scene (Grid + Particles + Cursor Spotlight) */}
      <BackgroundScene />

      {/* Interactive Matrix Digital Rain Overlay */}
      <MatrixRain />

      {/* Custom HUD Targeting Ring Cursor */}
      <CustomCursor />

      {/* 3. Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 3. Hero */}
        <Hero />

        {/* 4. About */}
        <About />

        {/* 5. Skills */}
        <Skills />

        {/* 6. Projects */}
        <Projects />

        {/* 7. Certificates */}
        <Certificates />

        {/* 8. GitHub */}
        <GithubSection />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Cyber Terminal CLI */}
      <TerminalDrawer />
    </div>
  );
}
