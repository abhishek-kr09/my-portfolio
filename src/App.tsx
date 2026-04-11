import React, { useState } from 'react';
import { AnimatedBackground } from './components/layout/AnimatedBackground';
import { Splash } from './components/layout/Splash';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Navigation } from './components/layout/Navigation';
import resumeData from './data/resume.json';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      {showSplash ? (
        <Splash onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <AnimatedBackground />
          <Navigation />
          
          <main className="relative z-10 pb-24 md:pb-0">
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
            
            <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.</p>
            </footer>
          </main>
        </>
      )}
    </div>
  );
}
