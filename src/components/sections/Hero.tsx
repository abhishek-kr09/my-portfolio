import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import resumeData from '../../data/resume.json';

export const Hero: React.FC = () => {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:pt-24">
      <div className="z-10 mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] border border-blue-400/20 bg-blue-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/15 bg-slate-900/80 p-2 shadow-2xl shadow-blue-950/40">
            <img
              src="/ak.jpg"
              alt="Portrait of Abhishek Kumar"
              className="aspect-16/10 w-full rounded-3xl object-cover object-top lg:aspect-4/5"
            />
            
          </div>
        </motion.div>

        <div className="flex max-w-3xl flex-col items-center text-center lg:items-start lg:text-left">
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
          className="mb-6 wrap-break-word text-4xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl"
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
          className="mb-8 max-w-xl text-lg font-medium leading-snug text-slate-300 sm:text-2xl"
        >
          {basics.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-lg"
        >
          {basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <button
            onClick={scrollToExperience}
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition-transform hover:scale-105 active:scale-95 sm:w-auto sm:px-8"
          >
            <span className="absolute inset-0 bg-linear-to-r from-blue-100 to-indigo-100 opacity-0 transition-opacity group-hover:opacity-100"></span>
            <span className="relative flex items-center gap-2">
              View Experience
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </span>
          </button>
          
          <a
            href="/Abhishek_Kumar_Resume.pdf"
            download="Abhishek_Kumar_Resume.pdf"
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 sm:w-auto sm:px-8"
          >
            <span className="relative flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400 lg:justify-start"
        >
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-400" />{basics.location}</span>
          <a href={`tel:${basics.phone}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
            <Phone className="h-4 w-4" />
            {basics.phone}
          </a>
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
      </div>

    </section>
  );
};
