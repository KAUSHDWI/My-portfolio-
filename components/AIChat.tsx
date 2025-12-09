import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, ChevronRight } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const SUGGESTED_QUESTIONS = [
  "What are your top skills?",
  "Tell me about the Chat App.",
  "What is your experience?",
  "How can I contact you?"
];

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Kaushlendra's personal AI. I can tell you all about his work, skills, and experience. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg = text.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    // Simulate a tiny delay for realism before API call
    setTimeout(async () => {
      const response = await sendMessageToGemini(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      setLoading(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend(input);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[450px] h-[600px] bg-slate-900/60 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.15)] z-50 flex flex-col overflow-hidden"
          >
            {/* Header with Glass Gradient */}
            <div className="relative bg-white/5 border-b border-white/10 p-5 flex justify-between items-center backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 pointer-events-none"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Bot size={20} className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-none">AI Assistant</h3>
                  <p className="text-cyan-200/70 text-xs mt-1 font-mono">Powered by Gemini</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent" ref={scrollRef}>
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg mt-auto ${msg.role === 'user' ? 'bg-indigo-500' : 'bg-cyan-600'}`}>
                      {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-md backdrop-blur-sm border ${
                        msg.role === 'user' 
                          ? 'bg-indigo-600/80 text-white rounded-br-none border-indigo-500/50' 
                          : 'bg-white/10 text-slate-100 rounded-bl-none border-white/10'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {loading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                   <div className="bg-white/5 border border-white/10 text-slate-200 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1.5 items-center ml-11">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                   </div>
                </motion.div>
              )}
            </div>

            {/* Suggested Questions */}
            {messages.length < 3 && !loading && (
               <div className="px-5 pb-2">
                  <p className="text-xs text-slate-400 mb-2 font-medium ml-1">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="text-xs bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-white/10 text-slate-300 hover:text-cyan-200 px-3 py-1.5 rounded-full transition-all duration-300"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
               </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10 backdrop-blur-md">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full bg-slate-900/50 text-white rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/10 placeholder-slate-500 transition-all"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={loading || !input.trim()}
                  className="absolute right-2 p-2 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg text-white hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-slate-500">AI responses may vary. Check the Resume for exact details.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-4 md:right-8 w-16 h-16 bg-transparent rounded-full z-50 group perspective-1000"
      >
        {/* Animated Button Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full animate-spin-slow blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center border-2 border-white/20 backdrop-blur-sm">
           <AnimatePresence mode="wait">
             {isOpen ? (
               <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                 <X size={32} className="text-white" />
               </motion.div>
             ) : (
               <motion.div key="chat" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className="relative">
                  <Sparkles size={20} className="absolute -top-3 -right-3 text-yellow-300 animate-pulse" />
                  <MessageCircle size={32} className="text-white" />
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </motion.button>
    </>
  );
};

export default AIChat;
