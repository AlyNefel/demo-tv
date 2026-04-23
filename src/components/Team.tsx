"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    name: "Mokhtar Darmoul",
    role: "Creative Director",
    image: "/canvas/8.png"
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Visual Effects",
    image: "/team/team-img-2.jpg"
  },
  {
    name: "Dr. Aris Vane",
    role: "Lead Narrative Designer",
    image: "/team/team-img-3.jpg"
  },
  {
    name: "Luna Vesper",
    role: "Cinematographer",
    image: "/team/team-img-4.jpg"
  }
];

const TypingEffect = ({ text }: { text: string }) => {
  const [displayedCount, setDisplayedCount] = React.useState(0);
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (isInView && displayedCount < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedCount((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [displayedCount, text, isInView]);

  return (
    <div ref={ref} className="font-sans font-medium text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed tracking-wide">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(12px)', y: 10, scale: 1.2 }}
          animate={i < displayedCount ? { opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={i < displayedCount ? "inline-block whitespace-pre" : "hidden"}
        >
          {char}
        </motion.span>
      ))}
      <span className="inline-block w-[2px] h-[1.2em] bg-primary ml-1 align-middle animate-[blink_1s_infinite] shadow-[0_0_10px_rgba(255,204,233,1)]" />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const yCardParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yDescParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const description = "At Monarch Studios, our mission is to redefine the visual landscape of modern television. We believe that every frame should be a masterpiece, and every story an odyssey. Our collective of visionary creators works tirelessly to merge cutting-edge technology with timeless narrative artistry, bringing the extraordinary to your screen every single day.";

  const firstMember = teamMembers[0];

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-black/50">
      {/* Background decoration with strong Parallax */}
      <motion.div 
        style={{ y: yParallax, scale: scaleParallax }} 
        className="absolute inset-0 opacity-15 pointer-events-none scale-125"
      >
        <Image src="/canvas/5.png" fill alt="" className="object-cover" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-black text-white italic tracking-tighter mb-4">
            MEET THE <span className="text-primary">TEAM</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          {/* First Member Card with Parallax */}
          <motion.div
            style={{ y: yCardParallax }}
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-1 group relative"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500 shadow-2xl">
              <Image 
                src={firstMember.image} 
                fill 
                alt={firstMember.name} 
                className="object-cover transition-transform duration-700 group-hover:scale-[2.8]" 
                style={{ objectPosition: '61% 56%', scale: '2.5' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-1 block">
                  {firstMember.role}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tighter italic">
                  {firstMember.name}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Fusionated Description Card with Parallax and Typing Effect */}
          <motion.div
            style={{ y: yDescParallax }}
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-3 min-h-[400px] flex items-center bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/5 p-8 md:p-16 relative overflow-hidden"
          >
            {/* Background texture for the description card */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image src="/canvas/22.png" fill alt="" className="object-cover mix-blend-overlay" />
            </div>
            
            <div className="relative z-10">
              <TypingEffect text={description} />
            </div>
            
            {/* Decorative pink glow */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
