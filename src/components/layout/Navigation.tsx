import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Contact, FolderGit2, GraduationCap, House, Sparkles, Trophy } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Profiles', href: '#coding-profiles' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const mobileNavItems = [
  { name: 'Home', href: '#hero', icon: House },
  { name: 'Skills', href: '#skills', icon: Sparkles },
  { name: 'Work', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Awards', href: '#achievements', icon: Award },
  { name: 'Profiles', href: '#coding-profiles', icon: Trophy },
  { name: 'Study', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Contact },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      aria-label="Primary"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 flex justify-center py-4 transition-all duration-300",
        isScrolled ? "bg-slate-950/75 backdrop-blur-md shadow-[0_8px_30px_rgba(2,6,23,0.28)]" : "bg-transparent"
      )}
    >
      <ul className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  "relative block px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-md">
        <ul className="grid grid-cols-7 items-center rounded-2xl border border-white/10 bg-slate-900/90 p-1.5 backdrop-blur-xl shadow-2xl">
          {mobileNavItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    "relative flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[10px] font-medium transition-colors",
                    isActive ? "text-blue-400" : "text-slate-500 hover:text-slate-300"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobile-nav-pill"
                      className="absolute inset-0 rounded-full bg-blue-500/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};
