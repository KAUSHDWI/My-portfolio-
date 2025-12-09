import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FolderGit2, Calendar, ArrowUpRight, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 50, damping: 20 } 
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none -z-10">
         <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={cardVariants} className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Featured Projects</motion.h2>
            <motion.div variants={cardVariants} className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 group shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:border-cyan-500/30 transition-all duration-500 flex flex-col relative z-0"
              >
                {/* Internal gradient spotlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-500"></div>

                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300 text-slate-300 shadow-inner">
                      <FolderGit2 size={28} />
                    </div>
                    <div className="flex items-center text-xs font-mono text-slate-400 bg-black/20 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                      <Calendar size={12} className="mr-2" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-indigo-400 transition-all duration-300 flex items-center justify-between">
                    {project.title}
                    <div className="bg-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 -translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 ease-out">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </h3>
                  
                  <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed border-b border-white/5 pb-6 group-hover:border-white/10 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-semibold text-cyan-200 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 backdrop-blur-md group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
