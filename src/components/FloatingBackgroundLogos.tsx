"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingBackgroundLogos = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. M-Logo 1 - top right */}
      <motion.div
        animate={{
          x: [50, -150],
          y: [-50, 100],
          rotate: [0, 360],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute top-[10%] right-[10%] w-[220px] h-[220px] opacity-[0.25]"
      >
        <Image src="/m-logos/m-1.png" alt="Background Logo" fill className="object-contain" />
      </motion.div>

      {/* 2. M-Logo 2 - mid left */}
      <motion.div
        animate={{
          x: [-50, 200],
          y: [100, -100],
          rotate: [360, 0],
        }}
        transition={{ duration: 32, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute top-[35%] left-[5%] w-[200px] h-[200px] opacity-[0.22]"
      >
        <Image src="/m-logos/m-2.png" alt="Background Logo" fill className="object-contain" />
      </motion.div>

      {/* 3. Main Logo - center right */}
      <motion.div
        animate={{
          x: [100, -100],
          y: [-150, 150],
          rotate: [0, -45],
        }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute top-[50%] right-[5%] w-[350px] h-[350px] opacity-[0.18] blur-[0.5px]"
      >
        <Image src="/logo/logo.png" alt="Background Logo" fill className="object-contain" />
      </motion.div>

      {/* 4. M-Logo 3 - bottom left */}
      <motion.div
        animate={{
          x: [-100, 150],
          y: [50, -150],
          rotate: [0, -360],
        }}
        transition={{ duration: 28, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute top-[75%] left-[10%] w-[240px] h-[240px] opacity-[0.25]"
      >
        <Image src="/m-logos/image.png" alt="Background Logo" fill className="object-contain" />
      </motion.div>

      {/* 5. Modified Logo - bottom right */}
      <motion.div
        animate={{
          x: [150, -50],
          y: [100, -200],
          rotate: [15, -15],
        }}
        transition={{ duration: 35, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute top-[85%] right-[15%] w-[300px] h-[300px] opacity-[0.15]"
      >
        <Image src="/logo/logo-modified.png" alt="Background Logo" fill className="object-contain" />
      </motion.div>

      {/* Atmosphere */}
      <div className="absolute top-[40%] left-[25%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-[70%] right-[15%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[130px]" />
    </div>
  );
};

export default FloatingBackgroundLogos;
