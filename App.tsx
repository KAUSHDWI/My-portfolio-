import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050912] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-white overflow-x-hidden relative">
      {/* Global Animated Background - More vibrant for glass effect */}
      <motion.div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-900/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-900/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 origin-left z-50 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />

      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 w-full bg-[#050912]/70 backdrop-blur-xl z-40 border-b border-white/5 transition-all duration-300 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 hover:opacity-80 transition-opacity">
            &lt;Kaushlendra /&gt;
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-all duration-300 relative py-1 group ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transform origin-left transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <motion.div 
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden bg-[#0a0f1c]/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
        >
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-center py-2 ${
                  activeSection === item.id ? 'text-cyan-400 font-semibold' : 'text-slate-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      <main className="relative z-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-[#050912]/80 backdrop-blur-md py-8 text-center text-slate-500 text-sm border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} Kaushlendra Kumar Dwivedi. All rights reserved.</p>
        
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
