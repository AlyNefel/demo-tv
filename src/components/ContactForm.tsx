"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Ghost } from 'lucide-react';
import Image from 'next/image';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black min-h-screen flex items-center">
      {/* Dynamic Cinematic Horror Styles */}
      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-1.5deg); }
          50% { transform: rotate(1.5deg); }
        }
        @keyframes smoke-organic {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0; filter: blur(50px); }
          25% { opacity: 0.4; }
          50% { transform: translate(15%, -10%) scale(1.4) rotate(180deg); opacity: 0.6; filter: blur(70px); }
          75% { opacity: 0.4; }
          100% { transform: translate(-10%, -20%) scale(2) rotate(360deg); opacity: 0; filter: blur(100px); }
        }
        @keyframes blood-drip {
          0% { height: 0; opacity: 0; transform: translateY(0); }
          10% { opacity: 1; }
          100% { height: 100px; opacity: 0; transform: translateY(50px); }
        }
        .blood-drop {
          position: absolute;
          width: 3px;
          background: #ffcce9;
          border-radius: 0 0 5px 5px;
          filter: blur(1px);
          box-shadow: 0 0 10px #ffcce9;
          animation: blood-drip linear infinite;
        }
        .chain-link {
          fill: #2a2a2a;
          filter: drop-shadow(0 0 5px rgba(0,0,0,0.8));
        }
        .chain-container {
          animation: sway 6s infinite ease-in-out;
          transform-origin: top center;
        }
        .dripping-text {
          text-shadow: 0 0 10px rgba(255, 204, 233, 0.5), 0 0 20px rgba(255, 204, 233, 0.3);
        }
        .smoke-layer {
          animation: smoke-organic 15s infinite ease-in-out;
          background: radial-gradient(circle, rgba(255,204,233,0.15) 0%, transparent 70%);
        }
      `}</style>
      


      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="text-center mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-creepster text-primary tracking-widest dripping-text uppercase">
              CONTACT
            </h2>
            {/* Blood Drops */}
            {mounted && [
              { left: '15%', delay: '0.2s', dur: '3s', width: '3px' },
              { left: '35%', delay: '1.2s', dur: '4.5s', width: '2px' },
              { left: '55%', delay: '0.8s', dur: '3.5s', width: '4px' },
              { left: '75%', delay: '2.2s', dur: '5s', width: '2px' },
              { left: '85%', delay: '1.5s', dur: '4s', width: '3px' },
            ].map((drop, idx) => (
              <div 
                key={idx} 
                className="blood-drop" 
                style={{ 
                  left: drop.left, 
                  animationDelay: drop.delay, 
                  animationDuration: drop.dur,
                  width: drop.width,
                  backgroundColor: '#ffcce9' 
                }} 
              />
            ))}
          </motion.div>
          <p className="mt-8 text-xl text-white/50 font-rosario italic">
            Enter the abyss. We see you...
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500 shadow-inner">
                  <Mail className="text-primary" size={28} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-1">Electronic Mail</span>
                  <span className="text-xl font-medium text-white group-hover:text-primary transition-colors font-rosario">business@monarchtvstudios.com</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-md">
              <p className="text-white/60 font-rosario italic leading-relaxed">
                &quot;The shadows have carried your words, and they will be answered… soon.&quot;
              </p>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="liquid-container p-10 rounded-[2rem] border border-white/10 relative overflow-hidden"
          >
            {/* Glossy Reflection Effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {status === 'success' ? (
              <div className="text-center py-20 space-y-6">
                <Ghost className="mx-auto text-primary animate-bounce" size={64} />
                <h3 className="text-3xl font-creepster text-primary">MESSAGE CAPTURED</h3>
                <p className="text-white/60 font-rosario">The abyss has received your soul. Expect a whisper soon.</p>
                <Button variant="outline" onClick={() => setStatus('idle')} className="mt-4 border-primary/40 text-primary hover:bg-primary/10">SEND ANOTHER</Button>
              </div>
            ) : (
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Identify Yourself</label>
                    <Input name="name" required placeholder="Your Name" className="bg-black/40 border-white/5 h-14 rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-all font-rosario" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Return Frequency</label>
                    <Input name="email" required type="email" placeholder="Your Email" className="bg-black/40 border-white/5 h-14 rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-all font-rosario" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">Nature of Inquiry</label>
                  <div className="relative group">
                    <select 
                      name="subject" 
                      required 
                      defaultValue=""
                      className="w-full bg-black/60 border border-white/10 h-14 rounded-xl px-6 focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all font-rosario text-white outline-none appearance-none cursor-pointer group-hover:border-primary/30"
                    >
                      <option value="" disabled className="bg-[#0a0a0a] text-white/40">Select Your Purpose</option>
                      <option value="Partnership" className="bg-[#0a0a0a]">Partnership</option>
                      <option value="Strategic Partnership" className="bg-[#0a0a0a]">Strategic Partnership</option>
                      <option value="Scripted Content Coproduction" className="bg-[#0a0a0a]">Scripted Content Coproduction</option>
                      <option value="Unscripted Content Coproduction" className="bg-[#0a0a0a]">Unscripted Content Coproduction</option>
                      <option value="Group Equities Investment" className="bg-[#0a0a0a]">Group Equities Investment</option>
                      <option value="Group Upcoming Projects Investment" className="bg-[#0a0a0a]">Group Upcoming Projects Investment</option>
                      <option value="Sponsoring our American Football Franchise" className="bg-[#0a0a0a]">Sponsoring our American Football Franchise</option>
                      <option value="Pre-book an ad slot on our upcoming channels" className="bg-[#0a0a0a]">Pre-book an ad slot on our upcoming channels</option>
                    </select>
                    {/* Custom Premium Arrow */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary group-hover:scale-110 transition-transform duration-300">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-primary/5 pointer-events-none transition-opacity duration-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">The Message</label>
                  <Textarea name="message" required placeholder="Whisper your thoughts..." className="bg-black/40 border-white/5 min-h-[160px] rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-all resize-none font-rosario" />
                </div>
                <Button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className="w-full h-14 sm:h-16 rounded-xl text-sm sm:text-lg font-black tracking-[0.2em] sm:tracking-[0.4em] bg-black border border-primary/40 text-primary neon-button hover:bg-primary hover:text-black transition-all group"
                >
                  {status === 'loading' ? 'CAPTURING...' : 'SEND A MESSAGE'}
                  <Send size={18} className="ml-2 sm:ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                {status === 'error' && (
                  <p className="text-center text-red-500 text-xs mt-2">The abyss is currently unreachable. Try again later.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
