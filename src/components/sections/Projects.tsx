import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import resumeData from '../../data/resume.json';

export const Projects: React.FC = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-linear-to-r from-emerald-500 to-teal-500" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md transition-all hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
            >
              <div className="p-6 sm:p-8 md:p-10">
                <div className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Project {index + 1}
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors sm:text-2xl">
                      {project.title}
                    </h3>
                    <div className="text-sm font-medium text-slate-400 mb-4">
                      {project.dates}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.split(', ').map((tech, i) => (
                        <span 
                          key={i} 
                          className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                        title={link.name}
                      >
                        {link.name.toLowerCase().includes('source') || link.name.toLowerCase().includes('github') ? (
                          <Github className="h-5 w-5" />
                        ) : (
                          <ExternalLink className="h-5 w-5" />
                        )}
                        <span>{link.name.toLowerCase().includes('source') || link.name.toLowerCase().includes('github') ? 'GitHub' : 'Live Demo'}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                      <Layers className="mt-1 h-5 w-5 shrink-0 text-emerald-500/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
