"use client";

import React, { useRef } from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from "@/components/Footer";

const milestones = [
  { year: "2022", title: "The Vision", desc: "Monarch TV Studios was conceived by a group of visionary storytellers and technologists who believed that broadcast television could be elevated to a true cinematic art form." },
  { year: "2023", title: "The Foundation", desc: "We secured our first round of investment and assembled a world-class team of directors, writers, visual effects artists, and production designers." },
  { year: "2024", title: "Development", desc: "Our flagship fiction series went into full development. Simultaneously, our documentary division began production on our Weekly News TV programs." },
  { year: "2025", title: "Production", desc: "Principal photography began on Hannibal: The Dragon of Carthage and several other original productions. Our state-of-the-art studio facilities came online." },
  { year: "2026", title: "Launch", desc: "Monarch TV Studios officially launched its three network channels: Monarch TV Channel, Monarch TV Crypto, and Monarch TV Novels, broadcasting across the globe." },
];

const values = [
  { title: "Cinematic Vision", icon: "🎬", desc: "Every frame is crafted with the intent of a feature film. We never compromise on visual quality or narrative depth." },
  { title: "Global Stories", icon: "🌍", desc: "We tell stories from across the world, honoring diverse cultures and perspectives to build bridges between communities." },
  { title: "Innovation First", icon: "⚡", desc: "From AI-assisted visual effects to interactive storytelling, we are always exploring the cutting edge of media technology." },
  { title: "Human Truth", icon: "❤️", desc: "At the heart of every production is an authentic human experience. We believe great stories change how people see the world." },
];

export default function AboutUsPage() {
  const [isMascotOpened, setIsMascotOpened] = React.useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black min-h-screen overflow-hidden">

        {/* Hero */}
        <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
            <Image 
              src="/about/tv.png" 
              fill 
              alt="About Monarch" 
              className="object-cover blur-[3px]" 
            />
            {/* Intense Volumetric Pink Smoke System */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
              <div className="absolute -bottom-[10%] -left-[10%] w-[120%] h-[80%] bg-primary/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
              <div className="absolute top-[20%] -right-[20%] w-[100%] h-[100%] bg-pink-600/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-[20%] right-[10%] w-[80%] h-[60%] bg-rose-500/15 rounded-full blur-[100px] mix-blend-screen" />
            </div>
            {/* Smoke Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/25 to-black mix-blend-screen opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
          </motion.div>
          <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
                Our Story
              </span>
              <h1 className="text-6xl md:text-9xl font-heading font-black text-white italic tracking-tighter leading-none mb-6">
                ABOUT <span className="text-primary text-glow-pink">US</span>
              </h1>
              <div className="w-32 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
                We are Monarch TV Studios — a collective of dreamers, builders, and storytellers redefining what television can be.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-32 px-6 bg-black relative overflow-hidden">

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
              >
                <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/40 text-primary text-[10px] font-black tracking-[0.3em] uppercase rounded mb-6">
                  Our Mission
                </span>
                <h2 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter leading-none mb-8">
                  REDEFINING <br /><span className="text-primary">REALITY</span>
                </h2>
                <div className="w-24 h-1 bg-primary rounded-full glow-pink mb-8" />
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Monarch TV Studios was founded on a simple premise: television should not just be watched — it should be experienced. We blend cutting-edge visual effects with profound narrative design to create worlds that stay with you long after the screen goes dark.
                </p>
                <p className="text-lg text-white/50 leading-relaxed">
                  From the abyssal depths of the ocean to the neon-soaked streets of tomorrow, our original series push the boundaries of what is possible in serialized storytelling.
                </p>
              </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden border-2 border-primary/50 shadow-[0_0_60px_rgba(255,204,233,0.3)] bg-black">
                {/* Background Image (Revealed: OUR MASCOT) */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="/monster/hero-banner.png" 
                    fill 
                    alt="Our Mascot" 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* OUR MASCOT Label (Revealed) */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
                    <div className="px-6 py-2 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full shadow-[0_0_20px_rgba(255,204,233,0.4)]">
                      <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">OUR MASCOT</span>
                    </div>
                  </div>
                </div>

                {/* Sliding Curtain (Top: Monarch Vision) */}
                <motion.div 
                  className="absolute inset-0 z-20 overflow-hidden origin-left"
                  initial={{ x: 0 }}
                  animate={isMascotOpened ? { x: "-100%" } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 40, damping: 20 }}
                >
                  <Image 
                    src="/canvas/38.png" 
                    fill 
                    alt="Monarch Vision" 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setIsMascotOpened(true)}
                      className="px-8 py-3 bg-primary text-black font-black uppercase tracking-widest rounded-full hover:scale-110 transition-transform glow-pink z-30"
                    >
                      SLIDE LEFT
                    </button>
                  </div>
                </motion.div>
                
                {/* Celebration Confetti Effect (Stays in background) */}
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="absolute top-0 left-0 w-full h-full opacity-40 mix-blend-screen">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: ["-10%", "110%"],
                          x: [Math.random() * 100 + "%", (Math.random() * 100 - 10) + "%"],
                          rotate: [0, 360],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3 + Math.random() * 4,
                          repeat: Infinity,
                          delay: Math.random() * 5,
                          ease: "linear"
                        }}
                        className="absolute w-2 h-2 rounded-full"
                        style={{ backgroundColor: i % 2 === 0 ? '#ffcce9' : '#ffffff' }}
                      />
                    ))}
                  </div>
                </div>

                {isMascotOpened && (
                  <div className="absolute bottom-8 left-8 right-8 z-30 text-center">
                    <button 
                      onClick={() => setIsMascotOpened(false)}
                      className="text-primary/60 text-[10px] font-black uppercase tracking-[0.3em] hover:text-primary transition-colors"
                    >
                      [ Close Surprise ]
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 bg-black/60 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading font-black text-white italic tracking-tighter mb-4">
                OUR <span className="text-primary">VALUES</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 hover:bg-white/[0.06] transition-all duration-500 text-center"
                >
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-black text-white tracking-tighter mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 px-6 bg-black relative overflow-hidden">

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading font-black text-white italic tracking-tighter mb-4">
                OUR <span className="text-primary">JOURNEY</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="flex gap-8 items-start group"
                  >
                    <div className="relative flex-shrink-0 w-16 h-16 rounded-full border-2 border-primary/40 group-hover:border-primary bg-black flex items-center justify-center glow-pink transition-all duration-300 z-10">
                      <span className="text-xs font-black text-primary tracking-tighter">{m.year}</span>
                    </div>
                    <div className="pt-2 pb-4 flex-1">
                      <h3 className="text-2xl font-black text-white italic tracking-tighter mb-2 group-hover:text-primary transition-colors">{m.title}</h3>
                      <p className="text-white/60 leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
