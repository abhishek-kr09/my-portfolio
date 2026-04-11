import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../../data/resume.json';

export const Hero: React.FC = () => {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 sm:px-6">
      <div className="z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm"
        >
          <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          {basics.name.split(' ').map((name, i) => (
            <span key={i} className={i === 1 ? "bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent" : ""}>
              {name}{i === 0 ? ' ' : ''}
            </span>
          ))}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-8 text-xl font-medium text-slate-300 sm:text-2xl"
        >
          {basics.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={scrollToExperience}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-medium text-slate-950 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-linear-to-r from-blue-100 to-indigo-100 opacity-0 transition-opacity group-hover:opacity-100"></span>
            <span className="relative flex items-center gap-2">
              View Experience
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </span>
          </button>
          
          <button
            onClick={() => window.print()}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <span className="relative flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-6 text-slate-400"
        >
          <a href={basics.links.find(l => l.name === 'GitHub')?.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={basics.links.find(l => l.name === 'LinkedIn')?.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-blue-400">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${basics.email}`} className="transition-colors hover:text-white">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-500/30 p-1"
        >
          <div className="h-2 w-1.5 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
