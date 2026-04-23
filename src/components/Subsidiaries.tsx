"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const subsidiaries = [
  {
    name: "Monarch TV Channel",
    icon: "/canvas/Monarch-tv-channel.png", 
    color: "text-white",
    desc: "The flagship broadcast network.",
    fullDesc: "Our premier network broadcasts the cornerstone of Monarch's original programming. From sweeping historical dramas to mind-bending sci-fi epics, the flagship channel is where legends are born and reality is redefined every evening."
  },
  {
    name: "Monarch TV Crypto",
    icon: "/canvas/Monarch-tv-crypto.png",
    color: "text-blue-300",
    desc: "Digital assets and blockchain television.",
    fullDesc: "Pioneering the intersection of narrative and decentralized finance. Monarch Crypto offers exclusive interactive series where viewers hold the keys to the story's outcome, featuring tokenized rewards and immutable digital storytelling."
  },
  {
    name: "Monarch TV Novels",
    icon: "/canvas/Monarch-tv-novel.png", 
    color: "text-primary",
    desc: "Literary adaptations and serial dramas.",
    fullDesc: "Breathing life into the written word. Monarch Novels specializes in lavish, high-fidelity adaptations of bestselling literature, turning beloved books into sprawling, multi-season cinematic masterpieces with uncompromising vision."
  }
];

const Subsidiaries = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <Image src="/canvas/35.png" fill alt="" className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-black text-white italic tracking-tighter mb-4">
            OUR <span className="text-primary">SUBSIDIARIES</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 mb-8 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}>
                 {/* Stylized Logo Frame */}
                 <div className="absolute inset-0 rounded-full border-2 border-white/5 group-hover:border-primary/50 transition-colors duration-500" />
                 <div className="absolute inset-4 rounded-full border border-white/10" />
                 
                 <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                       <Image src={sub.icon} fill alt={sub.name} className="object-contain drop-shadow-[0_0_20px_rgba(255,204,233,0.2)] group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-black text-white/20 italic group-hover:text-primary transition-colors">M</span>
                       </div>
                    </div>
                 </div>
              </div>
              
              <h3 className={`text-2xl font-black mb-3 tracking-tighter ${sub.color}`}>
                {sub.name}
              </h3>
              
              <AnimatePresence mode="wait">
                {expandedIndex === i ? (
                  <motion.p
                    key="full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-white/80 text-sm leading-relaxed"
                  >
                    {sub.fullDesc}
                    <button onClick={() => setExpandedIndex(null)} className="block mx-auto mt-2 text-primary hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Show Less</button>
                  </motion.p>
                ) : (
                  <motion.div
                    key="short"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-muted-foreground text-sm max-w-[200px] mb-2 mx-auto">
                      {sub.desc}
                    </p>
                    <button onClick={() => setExpandedIndex(i)} className="text-primary hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                      Read More
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
