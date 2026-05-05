"use client";

import React, { useRef } from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const assets = [
  {
    id: 1,
    title: "Radio Astronomy Observatory",
    year: "2027",
    subtitle: "Ksar of DOUIRET Tataouine-Tunisia",
    description: "The Radio Astronomy Observatory Project will be located in the historic Ksar of Douiret, Tataouine, in southern Tunisia. Designated as an INTERNATIONAL DARK SKY PARK, the site boasts exceptionally pristine skies ideal for astronomical observation and universe research. This innovative project will serve as a premier destination that seamlessly combines scientific exploration with tourism, offering visitors a unique opportunity to engage with the cosmos in a pristine, environmentally protected setting.",
    image: "/upcoming assets/Radio Astronomy Observatory.png",
    titleStyle: "outlined",
    layout: "left"
  },
  {
    id: 2,
    title: "Souvenir Shops Chain",
    year: "2028",
    subtitle: "Duty Free Airports-Global",
    description: "To promote our mascot \"Bruru,\" the abyssal fish, we are launching a global chain of duty-free souvenir shops at major airports worldwide. These shops will feature exclusive merchandise and gadgets inspired by our documentary channel, Monarch TV Channel. Visitors can explore a wide range of space-themed items like telescopes and cameras, archaeology-inspired souvenirs, and oceanography gadgets that highlight the wonders of the deep sea, space, and history, creating an engaging and educational experience for travelers.",
    image: "/upcoming assets/Souvenir Shops  Chain.png",
    titleStyle: "pink",
    layout: "right"
  },
  {
    id: 3,
    title: "Giant Aquarium",
    year: "2028",
    subtitle: "El Haouaria Nabeul-Tunisia",
    description: "With the support of our shareholders, partners, and sponsors, we are committed to establishing a state-of-the-art Giant Aquarium in Nabeul, North-East Tunisia, mirroring the renowned Atlanta Aquarium in Georgia, USA. This premier facility will serve as a hub for advanced scientific research in oceanography and marine biology, as well as a captivating tourist attraction. Additionally, it will enable us to produce a wide array of documentaries and scientific reality shows for our flagship channel, Monarch TV Channel, elevating our content offerings and reinforcing our position as a leader in educational and entertainment media.",
    image: "/upcoming assets/Giant Aquarium.png",
    titleStyle: "filled-outlined",
    layout: "left"
  }
];

const AssetCard = ({ asset, index }: { asset: typeof assets[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.55], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.55], [0.9, 1, 1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className={`flex flex-col ${asset.layout === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 py-32 px-6 md:px-20 min-h-[90vh] border-b border-white/5 last:border-0 sticky top-0 bg-black`}
    >
      {/* Taller, Clearer Image Section */}
      <div className="w-full lg:w-[38%] relative aspect-[4/5] rounded-3xl overflow-hidden group border border-white/10 shadow-2xl bg-white/5">
        <motion.div style={{ y }} className="absolute -inset-8">
          <Image 
            src={asset.image} 
            fill 
            alt={asset.title} 
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority={index === 0}
          />
        </motion.div>
        {/* Lighter Gradient for Clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        {/* Subtle Pink Smoke Overlay on Card Images too */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none mix-blend-screen z-10">
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-primary/40 rounded-full smoke-thumb-1" />
          <div className="absolute top-[20%] left-[10%] w-48 h-48 bg-pink-500/30 rounded-full smoke-thumb-2" />
        </div>
        <div className="absolute inset-0 border border-white/10 rounded-3xl" />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
           <span className="px-4 py-1 bg-primary/20 text-primary font-black rounded-full border border-primary/40 tracking-widest text-xs">
            {asset.year}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <h2 
          className={`text-4xl md:text-6xl font-archivo-black mb-4 uppercase tracking-tighter leading-none
            ${asset.titleStyle === 'outlined' ? 'text-transparent [-webkit-text-stroke:1px_white] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : ''}
            ${asset.titleStyle === 'pink' ? 'text-primary glow-pink' : ''}
            ${asset.titleStyle === 'filled-outlined' ? 'text-white [-webkit-text-stroke:1px_var(--primary)] drop-shadow-[0_0_15px_rgba(255,204,233,0.3)]' : ''}
          `}
        >
          {asset.title}
        </h2>

        <h3 className="text-xl md:text-2xl font-rosario font-bold text-white/90 mb-6 italic">
          {asset.subtitle}
        </h3>

        <div className="w-16 h-1 bg-primary rounded-full mb-8 glow-pink" />

        <p className="text-lg md:text-xl font-rosario text-white/70 leading-relaxed font-light">
          {asset.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function UpcomingAssets() {
  const scrollToAsset = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-black">
        <style>{`
          @keyframes smoke-thumb {
            0% { transform: translate(30%, 30%) scale(1); opacity: 0; filter: blur(20px); }
            50% { opacity: 0.8; filter: blur(30px); }
            100% { transform: translate(-50%, -60%) scale(2); opacity: 0; filter: blur(40px); }
          }
          .smoke-thumb-1 { animation: smoke-thumb 5s infinite ease-in-out; }
          .smoke-thumb-2 { animation: smoke-thumb 6s infinite ease-in-out 1.5s; }
          .smoke-thumb-3 { animation: smoke-thumb 5.5s infinite ease-in-out 2.5s; }
        `}</style>

        {/* Cinematic Header */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-9xl font-nosifer text-primary text-glow-pink tracking-tighter uppercase mb-6">
              FUTURE <span className="text-white">HORIZONS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic font-rosario mb-12">
              Exploring the intersection of science, tourism, and global heritage.
            </p>

            {/* Taller, Clearer Thumbnails */}
            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
              {assets.map((asset) => (
                <motion.div
                  key={asset.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToAsset(`asset-${asset.id}`)}
                  className="group relative w-48 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-primary/50 transition-all duration-500 shadow-2xl"
                >
                  <Image 
                    src={asset.image} 
                    fill 
                    alt={asset.title} 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Persistent Pink Smoke Effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen z-10">
                    <div className="absolute bottom-[-20%] right-[-20%] w-32 h-32 bg-primary/60 rounded-full smoke-thumb-1" />
                    <div className="absolute bottom-0 right-[10%] w-40 h-40 bg-pink-600/50 rounded-full smoke-thumb-2" />
                    <div className="absolute bottom-[10%] right-[30%] w-24 h-24 bg-rose-500/60 rounded-full smoke-thumb-3" />
                  </div>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center p-4 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs font-archivo-black text-white text-center leading-tight uppercase tracking-tighter drop-shadow-lg">
                      {asset.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Assets Section */}
        <div className="w-full">
          {assets.map((asset, index) => (
            <div key={asset.id} id={`asset-${asset.id}`}>
              <AssetCard asset={asset} index={index} />
            </div>
          ))}
        </div>
      </main>


      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center glow-pink" />
            <span className="text-xl font-heading font-bold tracking-tighter text-glow-pink">
              MONARCH
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground font-rosario">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
          
          <p className="text-xs text-muted-foreground font-rosario">
            © 2026 MONARCH TV STUDIOS. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
