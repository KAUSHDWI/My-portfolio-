import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, ACHIEVEMENTS } from '../constants';
import { CheckCircle2, Trophy, Code2, Database, Layout, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 50, damping: 15 } 
    }
  };

  const getIcon = (title: string) => {
    if (title.includes('Language')) return <Code2 size={20} className="text-pink-400" />;
    if (title.includes('Framework')) return <Layout size={20} className="text-cyan-400" />;
    if (title.includes('Backend')) return <Database size={20} className="text-green-400" />;
    return <Cpu size={20} className="text-purple-400" />;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Technical Skills & Achievements</motion.h2>
            <motion.div variants={itemVariants} className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS.map((category, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] group relative overflow-hidden"
                >
                   {/* Gloss shine */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none group-hover:bg-white/10 transition-colors"></div>

                  <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3 relative z-10">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:bg-white/10 transition-colors shadow-inner">
                      {getIcon(category.title)}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3 py-1 bg-white/5 text-cyan-100 text-sm rounded-lg font-medium border border-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all cursor-default hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements List */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700">
                <Trophy size={180} className="text-yellow-500 transform rotate-12 blur-sm" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                <div className="p-2 bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  <Trophy className="text-yellow-400" size={24} /> 
                </div>
                Key Achievements
              </h3>
              <ul className="space-y-6 relative z-10">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
                    className="flex items-start gap-4 text-slate-300 group/item p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" size={20} />
                    <span className="group-hover/item:text-white transition-colors">{ach.title}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
