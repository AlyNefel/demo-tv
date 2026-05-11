"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Radio Astronomy Observatory",
    subtitle: "Ksar of DOUIRET Tataouine-Tunisia",
    image: "/upcoming assets/Radio Astronomy Observatory.png",
    year: "2027"
  },
  {
    title: "Giant Aquarium",
    subtitle: "El Haouaria Nabeul-Tunisia",
    image: "/upcoming assets/Giant Aquarium.png",
    year: "2028"
  },
  {
    title: "Souvenir Shops Chain",
    subtitle: "Nationwide — Tunisia",
    image: "/upcoming assets/Souvenir Shops  Chain.png",
    year: "2029"
  }
];

const UpcomingProjects = () => {
  return (
    <section id="upcoming-projects" className="py-32 bg-black relative overflow-hidden">
      {/* Cinematic Pink Smoke */}
      <style>{`
        @keyframes smoke-float {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translate(-20%, -20%) scale(1.5); opacity: 0; }
        }
        .smoke-1 { animation: smoke-float 12s infinite ease-in-out; }
        .smoke-2 { animation: smoke-float 15s infinite ease-in-out 2s; }
      `}</style>
      
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] smoke-1" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[100px] smoke-2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
              Future Ventures
            </span>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white italic tracking-tighter uppercase leading-none">
              UPCOMING <br />
              <span className="text-primary text-glow-pink">PROJECTS</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/upcoming-assets" 
              className="group flex items-center gap-4 text-white hover:text-primary transition-colors font-black uppercase tracking-widest text-sm"
            >
              View Full Roadmap <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10"
            >
              <Image 
                src={project.image} 
                fill 
                alt={project.title} 
                unoptimized
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <span className="text-primary font-black text-sm tracking-widest uppercase mb-2 block">{project.year}</span>
                  <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 font-rosario text-sm italic">{project.subtitle}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                   <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
