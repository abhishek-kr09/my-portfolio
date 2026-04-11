import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, ShieldCheck } from 'lucide-react';
import resumeData from '../../data/resume.json';

export const Achievements: React.FC = () => {
  const { achievements, certifications } = resumeData;

  const allItems = [
    ...achievements.map(a => ({ ...a, type: 'achievement' })),
    ...certifications.map(c => ({ ...c, type: 'certification' }))
  ];

  if (allItems.length === 0) return null;

  return (
    <section id="achievements" className="relative py-24 px-6 bg-slate-900/30">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Achievements & Certifications</h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-linear-to-r from-amber-500 to-orange-500" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {allItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-amber-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl transition-all group-hover:bg-amber-500/20" />
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {item.type === 'certification' ? <ShieldCheck className="h-6 w-6" /> : 
                   item.title.includes('300+') ? <Trophy className="h-6 w-6" /> : <Star className="h-6 w-6" />}
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.context.replace(item.title, '').trim() || item.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
