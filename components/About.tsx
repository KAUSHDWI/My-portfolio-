import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { type: "spring" as const, stiffness: 40, damping: 15 } 
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">About & Experience</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl relative hover:border-white/20 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              <p className="text-slate-200 text-lg leading-relaxed text-center relative z-10">
                {PERSONAL_INFO.about}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience Column */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-cyan-500/20 backdrop-blur-md rounded-xl text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] border border-cyan-500/20">
                   <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>
              <div className="space-y-8 border-l-2 border-white/10 pl-8 relative">
                {EXPERIENCE.map((exp, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative group">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 bg-[#0a0f1c] rounded-full border-4 border-cyan-500 group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-300"></span>
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] group-hover:-translate-y-2">
                      <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                      <p className="text-cyan-400 font-medium mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-300 text-sm">
                        {exp.points.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Column */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-500/20 backdrop-blur-md rounded-xl text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] border border-indigo-500/20">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-8 border-l-2 border-white/10 pl-8 relative">
                {EDUCATION.map((edu, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative group">
                     <span className="absolute -left-[41px] top-1 w-5 h-5 bg-[#0a0f1c] rounded-full border-4 border-indigo-500 group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.8)] transition-all duration-300"></span>
                     <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)] group-hover:-translate-y-2">
                      <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <p className="text-indigo-400 font-medium mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                        <Calendar size={14} />
                        <span>{edu.year}</span>
                      </div>
                      {edu.details && (
                        <p className="text-slate-300 text-sm italic">{edu.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
