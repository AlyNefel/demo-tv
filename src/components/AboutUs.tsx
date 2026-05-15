"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Stronger Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [-800, 800]);
  const y2 = useTransform(scrollYProgress, [0, 1], [600, -600]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-black flex items-center min-h-[80vh]">




      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div style={{ opacity }} className="space-y-8">
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black rounded border border-primary/40 tracking-[0.2em] uppercase">
              Monarch Intellectual Property
            </div>

            <h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-none tracking-tighter uppercase">
              OUR <br />
              <span className="text-primary italic text-glow-pink">ASSETS</span>
            </h2>

            <div className="w-24 h-1 bg-primary rounded-full glow-pink" />

            <p className="text-xl text-muted-foreground leading-relaxed">
              <strong className="text-white font-black">Capsule Magazine:</strong> Published quarterly in print and online, connecting a global community of explorers and scientists with stunning photography and insightful articles on remarkable discoveries.
            </p>

            <p className="text-lg text-white/60 leading-relaxed font-light">
              <strong className="text-white font-black">The Carthaginians:</strong> Representing the strength and strategic brilliance of Carthage, our American Football franchise brings elite-level competition and community spirit to the global stage.
            </p>

            <Link href="/our-assets">
              <button className="px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold tracking-widest uppercase transition-all duration-300 rounded-full glow-pink hover:scale-105">
                Explore Our Assets
              </button>
            </Link>
          </motion.div>

          {/* Parallax Image Grid - ABSOLUTE EDGE-TO-EDGE FILL WITH NO WHITE GAPS */}
          <div className="relative h-[600px] hidden lg:block">
            <motion.div
              style={{ y: y2 }}
              className="absolute top-10 left-0 w-[300px] h-[300px] rounded-3xl overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(255,204,233,0.4)] z-20 bg-black"
            >
              <img
                src="/assets/capsule.png"
                alt="Capsule Magazine"
                className="w-full h-full object-cover block"
              />
            </motion.div>

            <motion.div
              style={{ y: y1 }}
              className="absolute bottom-10 right-0 w-[350px] h-[350px] rounded-3xl overflow-hidden border-4 border-primary shadow-[0_0_60px_rgba(255,204,233,0.4)] z-10 bg-black"
            >
              <img
                src="/assets/carthagenna.png"
                alt="The Carthaginians"
                className="w-full h-full object-cover block"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
