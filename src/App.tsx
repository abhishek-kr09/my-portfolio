import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedBackground } from './components/layout/AnimatedBackground';
import { Splash } from './components/layout/Splash';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { CodingProfiles } from './components/sections/CodingProfiles';
import { Navigation } from './components/layout/Navigation';
import resumeData from './data/resume.json';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const githubUrl = resumeData.basics.links.find((link) => link.name === 'GitHub')?.url;
  const linkedinUrl = resumeData.basics.links.find((link) => link.name === 'LinkedIn')?.url;

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
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <CodingProfiles />
            <Education />

            <section id="contact" className="px-4 py-20 sm:px-6">
              <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10">
                <p className="text-sm font-medium text-blue-300">Open to Software Development Engineer roles</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let&apos;s build dependable software together.</h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  I am focused on systems programming, backend engineering, and practical AI applications.
                  If your team is building thoughtful products and infrastructure, I would love to connect.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={`mailto:${resumeData.basics.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02]"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {linkedinUrl && (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </section>
            
            <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} {resumeData.basics.name}. Built with React, Vite, and Tailwind CSS.</p>
            </footer>
          </main>
        </>
      )}
    </div>
  );
}
