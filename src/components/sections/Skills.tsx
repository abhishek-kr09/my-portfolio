import React from 'react';
import { motion } from 'motion/react';
import resumeData from '../../data/resume.json';

export const Skills: React.FC = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-900/30">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Skills</h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-purple-500/30 transition-colors"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-sm font-medium text-slate-300 transition-colors hover:bg-purple-500/20 hover:text-purple-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
