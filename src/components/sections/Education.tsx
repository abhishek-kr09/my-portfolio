import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import resumeData from '../../data/resume.json';

export const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Education</h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-linear-to-r from-blue-500 to-indigo-500" />
        </motion.div>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-blue-500/20 p-3 text-blue-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    <p className="mt-1 text-lg text-slate-300">{edu.degree}</p>
                    <p className="mt-2 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-300">
                      {edu.score}
                    </p>
                  </div>
                </div>
                <div className="text-slate-400 font-medium bg-slate-900/50 px-4 py-2 rounded-full border border-white/5 self-start md:self-auto">
                  {edu.dates}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
