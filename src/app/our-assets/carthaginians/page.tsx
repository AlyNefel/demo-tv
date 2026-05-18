"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";

const pageData = {
  title: "The Carthaginians: Our American Football Franchise",
  desc: "our American football franchise under Monarch TV Studios, is set to make its debut in France, specifically in Poitiers, starting in Q3 2026. The team will be fully operational by the end of 2026, preparing to compete in the French championship under a partnership with the FFFA (French American Football Federation) and the new European League from 2027. To bolster this venture, we are currently negotiating a strategic alliance with several NFL and CFL franchises in the USA and Canada, who are expected to serve as sponsors and potential shareholders, ensuring a strong foundation for the franchise’s growth and success in the European football landscape.",
  image: "/assets/carthagenna.png",
};

export default function CarthaginiansPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-black relative overflow-hidden">
        {/* Pink Smoke Animations */}
        <style>{`
          @keyframes smoke-bg {
            0% { transform: translate(30%, 30%) scale(1); opacity: 0; filter: blur(40px); }
            50% { opacity: 0.3; filter: blur(60px); }
            100% { transform: translate(-50%, -60%) scale(2); opacity: 0; filter: blur(80px); }
          }
          .smoke-bg-1 { animation: smoke-bg 8s infinite ease-in-out; }
          .smoke-bg-2 { animation: smoke-bg 10s infinite ease-in-out 2s; }
        `}</style>

        {/* Ambient Background Smoke */}
        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen z-0">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full smoke-bg-1" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-pink-600/20 rounded-full smoke-bg-2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            {/* Header */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-white italic tracking-tight sm:tracking-tighter uppercase mb-6 leading-tight">
                THE <span className="text-primary">CARTHAGINIANS</span>
              </h1>
              <div className="w-32 h-1.5 bg-primary rounded-full glow-pink mx-auto md:mx-0" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
              >
                <Image
                  src={pageData.image}
                  fill
                  alt={pageData.title}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-black text-white tracking-tight uppercase italic">
                    Our American Football <span className="text-primary">Franchise</span>
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed font-rosario font-light">
                    Our American football franchise under Monarch TV Studios, is set to make its debut in France, specifically in Poitiers, starting in Q3 2026. The team will be fully operational by the end of 2026, preparing to compete in the French championship under a partnership with the FFFA (French American Football Federation) and the new European League from 2027. To bolster this venture, we are currently negotiating a strategic alliance with several NFL and CFL franchises in the USA and Canada, who are expected to serve as sponsors and potential shareholders, ensuring a strong foundation for the franchise’s growth and success in the European football landscape.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="block text-primary font-black text-2xl mb-1">FFFA
                    </span>
                    <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Competition</span>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="block text-primary font-black text-2xl mb-1">European
                    </span>
                    <span className="text-xs text-white/40 uppercase tracking-widest font-bold">New League</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
