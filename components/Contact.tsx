import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm currently looking for new opportunities in Android and React Native development.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-200 group p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-md group-hover:bg-primary group-hover:text-white rounded-xl flex items-center justify-center text-primary border border-white/10 group-hover:border-primary/50 transition-all duration-300 shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Email</p>
                    <p className="group-hover:text-white transition font-medium">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-slate-200 group p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-md group-hover:bg-secondary group-hover:text-white rounded-xl flex items-center justify-center text-secondary border border-white/10 group-hover:border-secondary/50 transition-all duration-300 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Phone</p>
                    <p className="group-hover:text-white transition font-medium">{PERSONAL_INFO.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-200 p-4 rounded-2xl border border-transparent">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-green-400 border border-white/10 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Location</p>
                    <p className="font-medium">Greater Noida, India</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-inner" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input type="text" className="w-full bg-slate-900/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition backdrop-blur-sm" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-900/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition backdrop-blur-sm" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition resize-none backdrop-blur-sm" placeholder="Hello..." />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(6,182,212,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-cyan-600 hover:to-primary text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 border border-white/10"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;