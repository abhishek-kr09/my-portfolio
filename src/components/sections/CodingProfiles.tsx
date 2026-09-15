import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Medal, Trophy } from 'lucide-react';
import resumeData from '../../data/resume.json';

export const CodingProfiles: React.FC = () => {
  const { codingProfiles } = resumeData;

  return (
    <section id="coding-profiles" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Proof of practice</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Coding Profiles</h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-linear-to-r from-cyan-400 to-blue-500" />
          <p className="mt-5 max-w-2xl text-slate-400">
            Explore my problem-solving practice, algorithmic thinking, and competitive programming progress.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Medal className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 transition-colors group-hover:text-cyan-300" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{profile.name}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-300">@{profile.handle}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{profile.focus}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-white">View profile <span className="ml-2 transition-transform group-hover:translate-x-1">-&gt;</span></span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-5 flex items-center gap-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5"
        >
          <Trophy className="h-7 w-7 shrink-0 text-amber-300" />
          <div>
            <p className="font-semibold text-white">CodeChef Starters 147</p>
            <p className="mt-1 text-sm text-slate-300">Ranked 6,453 in Division 4 with a score of 300.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
