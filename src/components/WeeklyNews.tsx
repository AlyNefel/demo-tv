"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const upcomingAssets = [
  {
    title: "Radio Astronomy Observatory",
    subtitle: "Tataouine-Tunisia",
    desc: "Located in the historic Ksar of Douiret, a designated INTERNATIONAL DARK SKY PARK, combining scientific exploration with sustainable tourism.",
    image: "/upcoming assets/Radio Astronomy Observatory.png", 
    year: "2027"
  },
  {
    title: "Souvenir Shops Chain",
    subtitle: "Global Airports",
    desc: "A global chain of duty-free shops at major airports worldwide featuring exclusive merchandise inspired by our documentaries and mascot 'Bruru'.",
    image: "/upcoming assets/Souvenir Shops  Chain.png",
    year: "2028"
  },
  {
    title: "Giant Aquarium",
    subtitle: "Nabeul-Tunisia",
    desc: "A state-of-the-art facility for advanced scientific research in oceanography and marine biology, doubling as a premier global tourist attraction.",
    image: "/upcoming assets/Giant Aquarium.png",
    year: "2028"
  }
];

const WeeklyNews = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      {/* Pink Smoke Animations */}
      <style>{`
        @keyframes smoke {
          0% { transform: translate(30%, 30%) scale(1); opacity: 0; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(30px); }
          100% { transform: translate(-50%, -60%) scale(2); opacity: 0; filter: blur(40px); }
        }
        .smoke-1 { animation: smoke 5s infinite ease-in-out; }
        .smoke-2 { animation: smoke 6s infinite ease-in-out 1.5s; }
        .smoke-3 { animation: smoke 5.5s infinite ease-in-out 2.5s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white italic tracking-tighter mb-4 uppercase">
              Upcoming <span className="text-primary italic text-glow-pink">Assets</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full glow-pink mx-auto md:mx-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {upcomingAssets.map((asset, i) => (
            <motion.div
              key={asset.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[2/3] rounded-3xl overflow-hidden mb-6 border-2 border-white/5 group-hover:border-primary/50 transition-all duration-500 shadow-2xl bg-black">
                <Image 
                  src={asset.image} 
                  fill 
                  alt={asset.title} 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />

                {/* Animated Intense Pink Smoke Effect */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none mix-blend-screen z-10">
                  <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-primary/80 rounded-full smoke-1" />
                  <div className="absolute bottom-0 right-[20%] w-72 h-72 bg-pink-600/70 rounded-full smoke-2" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Year Label */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 bg-primary/20 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-primary border border-primary/40 rounded-full glow-pink">
                    {asset.year}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-black text-white mb-1 tracking-tighter uppercase italic">
                    {asset.title}
                  </h3>
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">{asset.subtitle}</p>
                  <div className="h-0.5 w-8 bg-primary mb-4 glow-pink" />
                  <p className="text-sm text-white/70 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 font-light leading-relaxed">
                    {asset.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roadmap Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/upcoming-assets">
            <button className="group relative px-10 py-4 bg-transparent border-2 border-primary/30 rounded-full transition-all duration-500 hover:scale-105 hover:border-primary glow-pink-hover overflow-hidden">
              <span className="relative z-10 text-xl font-black text-white tracking-widest uppercase italic">
                View Full Roadmap
              </span>
              <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WeeklyNews;
