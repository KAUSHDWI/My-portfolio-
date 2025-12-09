import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Download, ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 20 }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 10 }
    }
  };

  const nameArray = PERSONAL_INFO.name.split('');
  const particles = Array.from({ length: 20 });

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-500/20 rounded-full blur-[1px]"
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0, scale: 0 }}
            animate={{ y: [null, Math.random() * -100 + "%"], opacity: [0, 0.5, 0], scale: [0, Math.random() * 2, 0] }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
            style={{ width: Math.random() * 10 + 5 + "px", height: Math.random() * 10 + 5 + "px" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div className="flex-1 text-center md:text-left order-2 md:order-1" style={{ y: yText, opacity }} variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="inline-block mb-4">
             <div className="px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                <span className="text-cyan-400 font-mono text-sm tracking-wide">Hello, I'm</span>
             </div>
          </motion.div>
          
          <motion.h1 variants={nameVariants} className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight perspective-1000 relative">
            {nameArray.map((char, index) => (
              <motion.span key={index} variants={letterVariants} className={`inline-block ${char === ' ' ? 'mr-4' : ''} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 cursor-default hover:scale-110`}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-indigo-400 font-light mb-6">
            {PERSONAL_INFO.title}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-slate-300 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed text-lg bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:border-white/20 transition-colors">
            Building functional and modern applications for Android and the web. Expert in <span className="text-cyan-400 font-bold glow-text">Kotlin</span> & <span className="text-indigo-400 font-bold glow-text">React Native</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:-translate-y-1 backdrop-blur-md border-t border-white/20 relative overflow-hidden group">
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white rounded-xl flex items-center justify-center gap-2 transition-all group backdrop-blur-md shadow-lg hover:shadow-cyan-500/20">
              <span>LinkedIn</span>
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center md:justify-start gap-6">
            {SOCIAL_LINKS.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-indigo-500 hover:border-transparent text-slate-400 hover:text-white transition-all transform hover:scale-125 hover:-translate-y-2 backdrop-blur-md shadow-lg hover:shadow-cyan-500/50">
                <link.icon size={24} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="flex-1 mt-8 md:mt-0 flex justify-center relative order-1 md:order-2" style={{ y: yImage, opacity }} initial={{ opacity: 0, scale: 0.8, rotateY: 30 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, delay: 0.2, type: "spring" }}>
           <div className="relative z-10 group perspective-1000">
             <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 via-purple-500 to-indigo-500 rounded-[3rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
             <div className="relative w-72 h-80 md:w-80 md:h-[28rem] bg-[#0f172a] rounded-[2.8rem] p-1.5 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out overflow-hidden transform-style-3d hover:scale-[1.02] border-2 border-white/10">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-900 relative">
                  <div className="absolute inset-0 bg-slate-800 animate-pulse -z-10" />
                  <img src="/me.jpg" alt={PERSONAL_INFO.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PERSONAL_INFO.name)}&background=0f172a&color=06b6d4&size=512`; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                </div>
             </div>
             <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.2, type: "spring", stiffness: 100 }} className="absolute -bottom-6 -right-4 md:-right-8 bg-white/10 backdrop-blur-2xl p-4 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-center gap-3 z-20 hover:scale-105 transition-transform cursor-default">
                <div className="relative">
                  <span className="absolute -inset-1 rounded-full bg-green-500/30 animate-ping"></span>
                  <div className="w-3 h-3 bg-green-500 rounded-full relative shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                </div>
                <div>
                  <p className="text-cyan-200 text-[10px] font-bold uppercase tracking-wider">Status</p>
                  <p className="text-white text-sm font-semibold">Open to Work</p>
                </div>
             </motion.div>
           </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hidden md:block cursor-pointer hover:text-cyan-400 transition-colors p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/5 hover:bg-white/10" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;