"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProductionSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black">
      {/* Background Smoke Effects */}
      <style>{`
        @keyframes smoke-float {
          0% { transform: translateY(100%) translateX(-10%) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          50% { transform: translateY(0%) translateX(10%) scale(1.6); opacity: 0.4; }
          80% { opacity: 0.2; }
          100% { transform: translateY(-100%) translateX(-5%) scale(2.2); opacity: 0; }
        }

        @keyframes volumetric-smoke {
          0% { transform: translateY(40%) translateX(-15%) rotate(0deg) scale(1); opacity: 0; }
          20% { opacity: 0.95; }
          50% { transform: translateY(-10%) translateX(15%) rotate(180deg) scale(1.6); opacity: 0.8; }
          80% { opacity: 0.4; }
          100% { transform: translateY(-60%) translateX(-10%) rotate(360deg) scale(2.2); opacity: 0; }
        }

        .smoke-particle {
          position: absolute;
          bottom: -20%;
          background: radial-gradient(circle, rgba(255, 0, 153, 0.4) 0%, transparent 70%);
          filter: blur(100px);
          border-radius: 50%;
          pointer-events: none;
        }

        .smoke-1 { left: 10%; width: 800px; height: 800px; animation: smoke-float 12s infinite linear; }
        .smoke-2 { left: 40%; width: 700px; height: 700px; animation: smoke-float 16s infinite linear 2s; }
        .smoke-3 { right: 10%; width: 900px; height: 900px; animation: smoke-float 14s infinite linear 5s; }

        .card-smoke-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 5;
        }

        .smoke-wisp {
          position: absolute;
          bottom: -50%;
          width: 140%;
          height: 140%;
          filter: blur(35px);
          mix-blend-mode: screen;
        }

        .wisp-1 {
          left: -20%;
          background: radial-gradient(circle at center, rgba(255, 0, 153, 0.85) 0%, transparent 60%);
          animation: volumetric-smoke 5s infinite linear;
        }

        .wisp-2 {
          right: -20%;
          background: radial-gradient(circle at center, rgba(153, 0, 255, 0.7) 0%, transparent 60%);
          animation: volumetric-smoke 7s infinite linear 1s;
        }

        .wisp-3 {
          left: 10%;
          background: radial-gradient(circle at center, rgba(255, 204, 233, 0.6) 0%, transparent 50%);
          animation: volumetric-smoke 4.5s infinite linear 2s;
        }

        .group:hover .card-smoke-container {
          filter: brightness(1.7) contrast(1.3);
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="smoke-particle smoke-1" />
        <div className="smoke-particle smoke-2" />
        <div className="smoke-particle smoke-3" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black rounded border border-primary/40 tracking-[0.2em] uppercase mb-4"
          >
            Studio Production
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter mb-4"
          >
            OUR <span className="text-primary text-glow-pink">PRODUCTION</span>
          </motion.h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Fiction Series Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative max-w-[420px] mx-auto w-full"
          >
            <Link href="/production/fiction">
              <div className="relative aspect-[2/3] rounded-3xl overflow-hidden border border-white/10 bg-black group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                {/* Image */}
                <Image
                  src="/production/fictionSeries.png"
                  fill
                  alt="Fiction Series"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                
                {/* Dynamic Card Smoke */}
                <div className="card-smoke-container">
                  <div className="smoke-wisp wisp-1" />
                  <div className="smoke-wisp wisp-2" />
                  <div className="smoke-wisp wisp-3" />
                </div>

                {/* Content */}
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2">Fiction Series </h3>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase">
                    View More <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Weekly TV Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative max-w-[420px] mx-auto w-full"
          >
            <Link href="/production/weekly">
              <div className="relative aspect-[2/3] rounded-3xl overflow-hidden border border-white/10 bg-black group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                {/* Image */}
                <Image
                  src="/production/WeeklyTv.png"
                  fill
                  alt="Weekly TV Programs "
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                
                {/* Dynamic Card Smoke */}
                <div className="card-smoke-container">
                  <div className="smoke-wisp wisp-1" />
                  <div className="smoke-wisp wisp-2" />
                  <div className="smoke-wisp wisp-3" />
                </div>

                {/* Content */}
                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2">Weekly TV Programs </h3>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase">
                    View More <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
