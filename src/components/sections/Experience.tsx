import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Briefcase, Calendar } from 'lucide-react';
import resumeData from '../../data/resume.json';
import { cn } from '../../lib/utils';

export const Experience: React.FC = () => {
  const { experience } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const renderHighlightedText = (text: string) => {
    const metricRegex = /(\d+(?:\.\d+)?%?|\d+\+|R-squared|RMSE)/gi;
    const parts = text.split(metricRegex);

    return parts.map((part, idx) => {
      if (part.match(metricRegex)) {
        return (
          <span key={`${part}-${idx}`} className="font-semibold text-blue-400">
            {part}
          </span>
        );
      }

      return <React.Fragment key={`${part}-${idx}`}>{part}</React.Fragment>;
    });
  };

  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Experience</h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-linear-to-r from-blue-500 to-indigo-500" />
        </motion.div>

        <div className="relative border-l border-white/10 pl-6 md:pl-8">
          {experience.map((job, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="mb-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-7.75 md:-left-9.75 top-1.5 h-4 w-4 rounded-full border-2 border-slate-950 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                
                <div 
                  className={cn(
                    "group cursor-pointer rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10",
                    isExpanded ? "border-blue-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" : ""
                  )}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {job.role}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-slate-400">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium text-slate-300">{job.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
                        <Calendar className="h-4 w-4" />
                        {job.dates}
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <ul className="space-y-4">
                            {job.bullets.map((bullet, i) => {
                              return (
                                <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/50" />
                                  <span>{renderHighlightedText(bullet)}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
