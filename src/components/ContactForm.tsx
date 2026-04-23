"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Phone } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/40">
      {/* Pink Smoke Effect for Contact Form */}
      <style>{`
        @keyframes smokeContact {
          0% { transform: translate(-20%, 20%) scale(1); opacity: 0; filter: blur(30px); }
          50% { opacity: 0.3; filter: blur(50px); }
          100% { transform: translate(20%, -20%) scale(1.5); opacity: 0; filter: blur(70px); }
        }
        .smoke-c-1 { animation: smokeContact 10s infinite ease-in-out; }
        .smoke-c-2 { animation: smokeContact 12s infinite ease-in-out 2s; }
      `}</style>
      
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-primary/20 rounded-full smoke-c-1" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full smoke-c-2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter mb-8 uppercase">
              HOW TO <span className="text-primary text-glow-pink">CONTACT US</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed font-medium">
              Have a question about the Monarch Universe? Want to collaborate or just say hello? Reach out and our team will get back to you shortly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email Us</span>
                  <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">contact@monarch-studios.tv</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Call Us</span>
                  <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">+1 (555) MONARCH</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl relative group"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] ml-1">Name</label>
                  <Input placeholder="Your Name" className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-primary/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] ml-1">Email</label>
                  <Input placeholder="Your Email" type="email" className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-primary/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] ml-1">Subject</label>
                <Input placeholder="Inquiry Type" className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-primary/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] ml-1">Message</label>
                <Textarea placeholder="Tell us more about your project..." className="bg-white/5 border-white/10 min-h-[150px] rounded-xl focus:border-primary/50 transition-all resize-none" />
              </div>
              <Button size="lg" className="w-full h-16 rounded-xl text-lg font-black gap-3 glow-pink hover:scale-[1.02] active:scale-[0.98] transition-all group/btn">
                SEND MESSAGE <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
