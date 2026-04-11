import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 flex justify-center py-4 transition-all duration-300",
        isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
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
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <ul className="flex items-center justify-between rounded-full border border-white/10 bg-slate-900/90 p-2 backdrop-blur-xl shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.name} className="flex-1">
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "relative flex flex-col items-center justify-center py-2 text-[10px] font-medium transition-colors",
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
