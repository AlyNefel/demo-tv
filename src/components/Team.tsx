"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    name: "Mokhtar Darmoul",
    role: "CEO & Founder",
    image: "/initialTeam/mokthar.png"
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

const initialTeamData = [
  { name: "COO Local", image: "/initialTeam/cooLocal.png" },
  { name: "COO Americas", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.46.39.png" },
  { name: "COO EMEA", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.46.46.png" },
  { name: "Head of Content Partnership & Acquisitions", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.46.55.png" },
  { name: "Head Of channels Strategy & Distribution", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.47.02.png" },
  { name: "CFO", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.47.10.png" },
  { name: "CMO", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.47.19.png" },
  { name: "CIO", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.47.25.png" },
  { name: "CHRO", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.47.32.png" },
  { name: "Head of Monarch TV Channel", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.47.39.png" },
  { name: "Head of Monarch TV crypto", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.47.48.png" },
  { name: "Head of Monarch TV novels", image: "/initialTeam/Capture d’écran 2026-05-07 à 16.47.55.png" },
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
      }, 5);
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
          transition={{ duration: 0.3, ease: "easeOut" }}
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

  const bioText = "Mokhtar Darmoul is the Founder and Chief Executive Officer of Monarch TV Group, an emerging influential media company poised to make a significant impact worldwide. Under his leadership, the company manages a premier portfolio of scientific news, sports, and entertainment assets. He is also pivotal in the upcoming launch of two new subsidiaries, Monarch TV Pictures and Monarch TV Records, which will further expand the group's reach and influence.  With over a decade of experience, Mr. Darmoul has built, operated, and advised in the Forex trading assets industry. He is recognized as a monetarist, holding a PhD and specializing in applied finance, asset volatility, and central bank monetary policies. His expertise includes understanding the effects of quantitative easing, target interest rates, and central bank tools on exchange rates and diverse financial assets.  In 2017, Mr. Darmoul was recognized as North Africa's most awarded forex advisory service provider, establishing a successful private FX advisory firm. Driven by a desire to elevate financial and market news coverage globally, he initiated a project to create a comprehensive international TV channel dedicated to helping professional digital assets traders manage their portfolios effectively.  Looking to the future, Mr. Darmoul is spearheading the establishment of Monarch TV Studios, with a strategic goal of becoming one of the top ten largest media groups in the world within the next five years.";

  const firstMember = teamMembers[0];

  return (
    <section id="leadership" ref={containerRef} className="py-24 relative overflow-hidden bg-black">

      {/* Smoke background */}
      <style>{`
        @keyframes smoke-drift-1 {
          0%   { transform: translateX(-6%) translateY(0%)   scale(1.08); }
          50%  { transform: translateX( 6%) translateY(-3%) scale(1.13); }
          100% { transform: translateX(-6%) translateY(0%)   scale(1.08); }
        }
        @keyframes smoke-drift-2 {
          0%   { transform: translateX( 5%) translateY(-2%) scale(1.1); }
          50%  { transform: translateX(-5%) translateY( 2%) scale(1.15); }
          100% { transform: translateX( 5%) translateY(-2%) scale(1.1); }
        }
        .smoke-layer-1 { animation: smoke-drift-1 14s ease-in-out infinite; }
        .smoke-layer-2 { animation: smoke-drift-2 18s ease-in-out infinite; }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Primary smoke layer */}
        <div
          className="smoke-layer-1 absolute inset-0 w-full h-full"
          style={{ filter: 'blur(6px)', opacity: 0.55 }}
        >
          <Image
            src="/canvas/smoke.png"
            fill
            alt=""
            className="object-cover"
            priority
          />
        </div>
        {/* Secondary smoke layer — offset phase */}
        <div
          className="smoke-layer-2 absolute inset-0 w-full h-full"
          style={{ filter: 'blur(10px)', opacity: 0.3, mixBlendMode: 'screen' }}
        >
          <Image
            src="/canvas/smoke.png"
            fill
            alt=""
            className="object-cover scale-x-[-1]"
          />
        </div>
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-black text-white italic tracking-tighter mb-4">
            MEET THE <span className="text-primary">TEAM</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center mb-32">
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
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
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

          <motion.div
            style={{ y: yDescParallax }}
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-3 bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/5 p-8 md:p-14 relative overflow-hidden"
          >
            <div className="relative z-10">
              {/* Name + role */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-6"
              >
                <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/40 text-primary text-[10px] font-black tracking-[0.3em] uppercase rounded-full mb-3">
                  {firstMember.role}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-black text-white italic tracking-tighter">
                  {firstMember.name}
                </h3>
                <div className="w-16 h-0.5 bg-primary mt-3 rounded-full glow-pink" />
              </motion.div>

              {/* Bio — typing effect */}
              <TypingEffect text={bioText} />
            </div>

            {/* Decorative pink glow */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          </motion.div>
        </div>

        {/* Initial Team Section */}
        <div className="mt-48 pt-24 border-t border-white/10 relative">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-6xl font-heading font-black text-white italic tracking-tighter uppercase mb-4">
              INITIAL <span className="text-primary">TEAM</span>
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-pink" />
          </div>

          <div className="space-y-24">
            {/* First two rows (6 images) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-20 max-w-5xl mx-auto">
              {initialTeamData.slice(0, 6).map((member, index) => (
                <div key={index} className="flex flex-col gap-6">
                  {/* Floating Name Label - Button Style (OUTSIDE) */}
                  <div className="z-20 w-full">
                    <span className="block px-3 py-2 bg-primary/20 backdrop-blur-md text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-primary border border-primary/40 rounded-full glow-pink text-center whitespace-normal leading-tight min-h-[44px] flex items-center justify-center">
                      {member.name}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-[2/3] rounded-3xl overflow-hidden border border-white/5 group hover:border-primary/40 transition-all duration-700 bg-white/[0.02] shadow-2xl"
                  >
                    <Image src={member.image} fill alt={member.name} className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Separator HR */}
            <hr className="border-t border-white/5 w-1/2 mx-auto" />

            {/* Last two rows (6 images) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-20 max-w-5xl mx-auto">
              {initialTeamData.slice(6, 12).map((member, index) => (
                <div key={index + 6} className="flex flex-col gap-6">
                  {/* Floating Name Label - Button Style (OUTSIDE) */}
                  <div className="z-20 w-full">
                    <span className="block px-3 py-2 bg-primary/20 backdrop-blur-md text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-primary border border-primary/40 rounded-full glow-pink text-center whitespace-normal leading-tight min-h-[44px] flex items-center justify-center">
                      {member.name}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-[2/3] rounded-3xl overflow-hidden border border-white/5 group hover:border-primary/40 transition-all duration-700 bg-white/[0.02] shadow-2xl"
                  >
                    <Image src={member.image} fill alt={member.name} className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Background atmosphere for Initial Team */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute -right-20 bottom-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Team;
