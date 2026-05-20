"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "@/components/Navbar";
import { Globe, MapPin, Compass, Navigation, Landmark, Radio, Tv } from 'lucide-react';

const audienceRegions = [
  { region: "Europe", detail: "Scandinavia, the Baltics, and the United Kingdom", icon: Globe },
  { region: "North America", detail: "USA and Canada", icon: MapPin },
  { region: "East Asia", detail: "Japan, South Korea, Southeast Asia, and East Asia", icon: Compass },
  { region: "Oceania", detail: "", icon: Navigation },
  { region: "Sub-Saharan Africa", detail: "", icon: Landmark }
];

const SpinningBorderCard = ({ children, className = "", whileHover = { y: -5 }, innerClassName = "p-8" }: { children: React.ReactNode, className?: string, whileHover?: any, innerClassName?: string }) => {
  return (
    <motion.div 
      whileHover={whileHover}
      className={`spinning-border-container h-full ${className}`}
    >
      <div className={`spinning-border-inner flex flex-col h-full group ${innerClassName}`}>
        {children}
      </div>
    </motion.div>
  );
};


export default function AudiencesPage() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Deep Parallax Layers
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]); // Deepest (image.png)
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);   // Middle (map.png)
  
  const mapScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="min-h-screen bg-black overflow-hidden relative">
        
        {/* Layer 1: Deepest Background (image.png) - FULL WIDTH */}
        <motion.div 
          style={{ y: layer1Y }}
          className="fixed inset-0 z-0 pointer-events-none"
        >
          <div className="relative w-full h-full opacity-30">
            <Image 
              src="/audience/image.png" 
              fill 
              alt="" 
              className="object-cover scale-125"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Layer 2: Middle Background (map.png) - FULL WIDTH */}
        <motion.div 
          style={{ y: layer2Y, scale: mapScale }}
          className="fixed inset-0 z-10 pointer-events-none"
        >
          <div className="relative w-full h-full opacity-50">
            <Image 
              src="/audience/map.png" 
              fill 
              alt="Global Distribution Map" 
              className="object-cover drop-shadow-[0_0_80px_rgba(255,204,233,0.4)]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </motion.div>

        {/* Cinematic Pink Glows */}
        <div className="fixed inset-0 z-15 pointer-events-none">
          <div className="absolute top-[-15%] right-[-10%] w-[1200px] h-[1200px] bg-primary/20 rounded-full blur-[180px] animate-pulse" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[1000px] h-[1000px] bg-pink-600/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }} />
        </div>

        <style>{`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .spinning-border-container {
            position: relative;
            padding: 3px;
            border-radius: 1.5rem;
            overflow: hidden;
            background: rgba(252, 194, 232, 0.15);
            transition: all 0.5s ease;
            box-shadow: 0 0 15px rgba(252, 194, 232, 0.15);
          }
          .spinning-border-container:hover {
            box-shadow: 0 0 30px rgba(252, 194, 232, 0.35);
          }
          .spinning-border-container::before {
            content: '';
            position: absolute;
            inset: -150%;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #fcc2e8 20%,
              transparent 40%,
              #fcc2e8 60%,
              transparent 80%,
              #fcc2e8 100%
            );
            animation: rotate 6s infinite linear;
            z-index: 0;
            opacity: 1;
            transition: opacity 0.5s ease;
          }
          .spinning-border-container:hover::before {
            animation: rotate 3s infinite linear;
          }
          .spinning-border-inner {
            position: relative;
            background: #050203;
            border-radius: calc(1.5rem - 3px);
            z-index: 1;
            height: 100%;
            overflow: hidden;
            border: 1px solid rgba(252, 194, 232, 0.25);
            transition: all 0.5s ease;
          }
          .spinning-border-container:hover .spinning-border-inner {
            background: #0d060a;
            border-color: rgba(252, 194, 232, 0.55);
            box-shadow: inset 0 0 20px rgba(252, 194, 232, 0.25);
          }
          .spinning-border-inner::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 60%;
            background: linear-gradient(to bottom, rgba(252, 194, 232, 0.08), transparent);
            pointer-events: none;
            z-index: 5;
          }
        `}</style>

        {/* Content Layers */}
        <div className="relative z-20">
          
          {/* Hero Content */}
          <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
            <motion.div
              style={{ opacity: heroOpacity }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="inline-block px-6 py-1.5 bg-primary/20 border border-primary/40 text-primary text-[13px] font-black tracking-[0.5em] uppercase rounded-full mb-10 glow-pink">
                Global Network
              </span>
              <h1 className="text-7xl md:text-[12rem] font-heading font-black text-white italic tracking-tighter uppercase leading-[0.75] mb-10">
                AUDIENCE <br />
                <span className="text-primary text-glow-pink">& REACH</span>
              </h1>
              <div className="w-56 h-2.5 bg-primary mx-auto rounded-full glow-pink shadow-[0_0_50px_rgba(255,204,233,1)]" />
            </motion.div>
          </section>
 
          {/* Distribution Details */}
          <section className="py-48 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                className="h-full"
              >
                <SpinningBorderCard innerClassName="p-14 justify-start h-full">
                  {/* Circular Icon block - Editorial Partnership style */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Radio className="text-primary animate-pulse" size={32} />
                  </div>
                  
                  <h3 className="text-primary font-black uppercase tracking-widest text-sm mb-4">MENA Region</h3>
                  <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-8 leading-tight group-hover:text-primary transition-colors">
                    SATELLITE <br /><span className="text-primary text-glow-pink">DISTRIBUTION</span>
                  </h2>
                  <p className="text-3xl text-white/70 font-rosario font-light italic leading-relaxed">
                    Eutelsat 7WA @ 7/8° West
                  </p>
                </SpinningBorderCard>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className="h-full"
              >
                <SpinningBorderCard innerClassName="p-14 justify-start h-full">
                  {/* Circular Icon block - Editorial Partnership style */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Tv className="text-primary" size={32} />
                  </div>
                  
                  <h3 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Worldwide Access</h3>
                  <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-8 leading-tight group-hover:text-primary transition-colors">
                    FAST <br /><span className="text-primary text-glow-pink">PLATFORMS</span>
                  </h2>
                  <p className="text-3xl text-white/70 font-rosario font-light italic leading-relaxed">
                    The Global FAST Platforms
                  </p>
                </SpinningBorderCard>
              </motion.div>
            </div>
          </section>
 
          {/* Regional Grid */}
          <section className="py-48 px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="flex-1">
                  <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white italic tracking-tighter uppercase leading-none break-words">
                    REGIONAL <br /><span className="text-primary text-glow-pink">COVERAGE</span>
                  </h2>
                </div>
                <div className="w-full md:w-1/3 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              </div>
 
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {audienceRegions.map((region, i) => {
                  const Icon = region.icon;
                  return (
                    <motion.div
                      key={region.region}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="h-full"
                    >
                      <SpinningBorderCard innerClassName="p-12 justify-start h-full">
                        {/* Circular Icon block - Editorial Partnership style */}
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <Icon className="text-primary" size={24} />
                        </div>
                        
                        <h3 className="text-2xl font-black text-white italic mb-4 tracking-tighter group-hover:text-primary transition-colors">
                          {region.region}
                        </h3>
                        
                        {region.detail ? (
                          <p className="text-white/60 font-rosario leading-relaxed font-light">
                            {region.detail}
                          </p>
                        ) : (
                          <p className="text-white/40 font-rosario leading-relaxed font-light italic">
                            Full digital and satellite broadcast streaming coverage.
                          </p>
                        )}
                      </SpinningBorderCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
