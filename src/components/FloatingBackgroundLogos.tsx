"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FloatingBackgroundLogos = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. M-Logo 1 - top right quadrant, slow orbital-like float */}
      <motion.div
        animate={{
          x: [0, -180, 150, 0],
          y: [0, 150, -80, 0],
          rotate: [0, 120, 240, 360],
        }}
        transition={{ 
          duration: 45, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-[12%] right-[8%] w-[250px] h-[250px] opacity-[0.16] blur-[2px]"
      >
        <Image src="/m-logos/m-1.png" alt="Background Logo" fill className="object-contain" />
      </motion.div>

      {/* 2. M-Logo 2 - mid-low left quadrant, deep space slow float */}
      <motion.div
        animate={{
          x: [0, 220, -120, 0],
          y: [0, -160, 180, 0],
          rotate: [0, -90, -270, -360],
        }}
        transition={{ 
          duration: 55, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2
        }}
        className="absolute top-[40%] left-[6%] w-[220px] h-[220px] opacity-[0.14] blur-[3px]"
      >
        <Image src="/m-logos/m-2.png" alt="Background Logo" fill className="object-contain" />
      </motion.div>

      {/* 3. M-Logo 3 - bottom right quadrant, sweeping slow float */}
      <motion.div
        animate={{
          x: [0, -250, 100, 0],
          y: [0, -100, 120, 0],
          rotate: [0, 45, 90, 0],
        }}
        transition={{ 
          duration: 50, 
          repeat: Infinity, 
          ease: "linear",
          delay: 4
        }}
        className="absolute top-[70%] right-[10%] w-[280px] h-[280px] opacity-[0.15] blur-[1px]"
      >
        <Image src="/m-logos/image.png" alt="Background Logo" fill className="object-contain" />
      </motion.div>

      {/* Space ambient lighting glows */}
      <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-primary/4 rounded-full blur-[160px] mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[140px] mix-blend-screen" />
    </div>
  );
};

export default FloatingBackgroundLogos;
