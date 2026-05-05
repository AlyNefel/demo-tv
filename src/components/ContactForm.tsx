"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Phone, Ghost } from 'lucide-react';
import Image from 'next/image';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // ...
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
      
      {/* Volumetric Pink Smoke System */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen z-0 overflow-hidden">
        {mounted && [...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ 
              x: Math.random() * 100 - 50 + '%', 
              y: '100%', 
              opacity: 0, 
              scale: 0.8,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: '-20%', 
              opacity: [0, 0.4, 0.6, 0.4, 0],
              scale: [0.8, 1.5, 2],
              rotate: [Math.random() * 360, (Math.random() * 360) + 180],
              x: [
                Math.random() * 100 - 50 + '%', 
                Math.random() * 100 - 50 + '%', 
                Math.random() * 100 - 50 + '%'
              ]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity, 
              delay: i * 3,
              ease: "linear"
            }}
            className="absolute w-[800px] h-[800px]"
          >
            <Image 
              src="/smoke.png" 
              fill 
              alt="Smoke" 
              sizes="100vw"
              className="object-contain opacity-40 blur-sm"
            />
          </motion.div>
        ))}
        {/* Ambient bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-primary/20 via-primary/5 to-transparent" />
      </div>

      {/* Dynamic SVG Chains */}
      <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none z-10 flex justify-between px-12 lg:px-32">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="chain-container flex flex-col items-center" style={{ animationDelay: `${i * 0.7}s` }}>
            {[...Array(12)].map((_, j) => (
              <svg key={j} width="24" height="36" viewBox="0 0 24 36" className="chain-link -mt-1">
                <path d="M12 0C18.6274 0 24 5.37258 24 12V24C24 30.6274 18.6274 36 12 36C5.37258 36 0 30.6274 0 24V12C0 5.37258 5.37258 0 12 0ZM12 6C8.68629 6 6 8.68629 6 12V24C6 27.3137 8.68629 30 12 30C15.3137 30 18 27.3137 18 24V12C18 8.68629 15.3137 6 12 6Z" />
              </svg>
            ))}
            {/* Hanging Hook or Weight */}
            <div className="w-6 h-6 rounded-full border-4 border-[#1a1a1a] shadow-[0_0_10px_rgba(0,0,0,0.9)]" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="text-center mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative inline-block"
          >
            <h2 className="text-7xl md:text-9xl font-creepster text-primary tracking-widest dripping-text">
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
                  <span className="text-xl font-medium text-white group-hover:text-primary transition-colors font-rosario">contact@monarch-studios.tv</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500 shadow-inner">
                  <Phone className="text-primary" size={28} />
                </div>
                <div>
                  <span className="block text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-1">Direct Signal</span>
                  <span className="text-xl font-medium text-white group-hover:text-primary transition-colors font-rosario">+1 (555) MONARCH</span>
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
                  <Input name="subject" required placeholder="Subject" className="bg-black/40 border-white/5 h-14 rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-all font-rosario" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] ml-2">The Message</label>
                  <Textarea name="message" required placeholder="Whisper your thoughts..." className="bg-black/40 border-white/5 min-h-[160px] rounded-xl focus:border-primary/40 focus:ring-primary/20 transition-all resize-none font-rosario" />
                </div>
                <Button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className="w-full h-16 rounded-xl text-lg font-black tracking-[0.4em] bg-black border border-primary/40 text-primary neon-button hover:bg-primary hover:text-black transition-all group"
                >
                  {status === 'loading' ? 'CAPTURING...' : 'SEND A MESSAGE'}
                  <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

