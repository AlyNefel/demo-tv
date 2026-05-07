"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const channels = [
  {
    name: "MONARCH TV CHANNEL",
    launch: "June 2026",
    desc: "Monarch TV Channel, the group's flagship station, offers engaging documentaries and reality shows focused on space exploration, satellite and shuttle launches, space mining, and recent discoveries like VLA, as well as space tourism. It also features programs on oceanography, marine biology, and ocean conservation, highlighting the beauty and importance of our oceans. Through inspiring content, Monarch TV Channel aims to educate and entertain viewers about the universe, the depths of the oceans, and human history's mysteries.",
    icon: "/Chanel Bouquet/monarch_tv_channe.png",
    color: "text-white"
  },
  {
    name: "MONARCH TV CRYPTO",
    launch: "August 2026",
    desc: "Monarch TV Crypto is a premier financial channel dedicated to delivering in-depth business and market insights, real-time updates from leading stock exchanges, and expert analysis on financial assets trends, investment strategies, and emerging technologies. With live connections to global markets, it serves as an essential resource for investors, financial professionals, and viewers seeking comprehensive market intelligence, innovative investment opportunities, and engaging debates on renewable energy and cutting-edge technological advancements.",
    icon: "/Chanel Bouquet/monarch-tv-crypto.png",
    color: "text-blue-300"
  },
  {
    name: "MONARCH TV NOVELS",
    launch: "September 2026",
    desc: "Monarch TV Novels is a hybrid channel dedicated to a diverse blend of fiction and pseudo-fiction series, entertainment, unconventional sports, music, and reality shows, offering a wide array of captivating stories across various genres. The channel is committed to delivering high-quality scripted and unscripted content that appeals to fans of dramatic, adventurous, and imaginative programming. Positioned as a premier source of fictional and entertainment storytelling within the group, Monarch TV Novels aims to engage audiences with compelling narratives and innovative entertainment experiences.",
    icon: "/Chanel Bouquet/Monarch-tv-novels.png",
    color: "text-primary"
  }
];

export default function ThreeSatellitesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black overflow-hidden">
        
        {/* Pink Smoke Animations */}
        <style>{`
          @keyframes smoke-float {
            0% { transform: translate(0, 0) scale(1); opacity: 0; }
            50% { opacity: 0.4; }
            100% { transform: translate(-10%, -10%) scale(1.3); opacity: 0; }
          }
          .smoke-pink { animation: smoke-float 8s infinite ease-in-out; }
          .smoke-pink-delayed { animation: smoke-float 10s infinite ease-in-out 2s; }
        `}</style>

        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src="/threeSatellites/background-hero-section.png" 
              fill 
              alt="Channel Bouquet Background" 
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          </motion.div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-8xl font-heading font-black text-white italic tracking-tighter uppercase mb-6 leading-none">
                THE THREE SATELLITE <br />
                & <span className="text-primary text-glow-pink">FAST TV CHANNELS</span> <br />
                BOUQUET
              </h1>
              <div className="w-32 h-1.5 bg-primary mx-auto rounded-full glow-pink mb-12" />
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-rosario font-light italic leading-relaxed">
                "Discover our diverse range of specialized networks, each crafted to deliver unparalleled entertainment experiences."
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>

        {/* Channels Content */}
        <section className="py-32 px-6 relative">
          {/* Animated Background Smoke */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] smoke-pink" />
            <div className="absolute bottom-[20%] left-[-10%] w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[120px] smoke-pink-delayed" />
          </div>

          <div className="max-w-7xl mx-auto space-y-40 relative z-10">
            {channels.map((channel, i) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
              >
                {/* Channel Card Container - Matching Fiction Cards Style */}
                <div className="w-full lg:w-1/2 relative group">
                   <div className="relative aspect-[2/3] max-w-[400px] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-muted transition-all duration-700 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                      {/* Base Image with scale crop */}
                      <Image 
                        src={channel.icon} 
                        fill 
                        alt={channel.name} 
                        className="object-cover scale-[1.2] transition-transform duration-700 group-hover:scale-[1.3]" 
                      />
                      
                      {/* Gradient Overlay matching ShowCard */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Smoke Effect Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/20 smoke-pink" />
                      </div>

                      {/* Launch Indicator (Top Left - Style matching genre label) */}
                      <div className="absolute top-6 left-6 z-20">
                        <span className="px-3 py-1 bg-primary/20 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/40 rounded">
                          Launch: {channel.launch.split(' ')[1]} {channel.launch.split(' ')[0]}
                        </span>
                      </div>
                   </div>

                   {/* External Glow Pulse */}
                   <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-0 ${i === 1 ? 'bg-blue-400' : 'bg-primary'}`} />
                </div>

                {/* Channel Details */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <h2 className={`text-4xl md:text-5xl font-black italic tracking-tighter ${channel.color} group-hover:text-glow-pink transition-all`}>
                      {channel.name}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full glow-pink" />
                  </div>

                  <p className="text-xl text-white/80 leading-relaxed font-rosario font-light italic">
                    {channel.desc}
                  </p>

                  <div className="pt-8 flex items-center gap-6">
                    <div className="px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm group-hover:border-primary/40 transition-colors">
                      <span className="block text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mb-2">Target Launch</span>
                      <span className="text-2xl font-black text-primary italic tracking-tight text-glow-pink">{channel.launch}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
