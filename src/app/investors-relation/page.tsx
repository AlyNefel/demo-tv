"use client";

import React, { useRef } from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Shield, Globe, Zap, BarChart2, Users } from 'lucide-react';

const highlights = [
  {
    icon: Globe,
    title: "Global Reach",
    value: "3 Channels",
    desc: "Broadcasting across international markets through Monarch TV Channel, Crypto, and Novels networks.",
  },
  {
    icon: TrendingUp,
    title: "Growth Stage",
    value: "Series A",
    desc: "Currently in an active growth phase, scaling production capacity and expanding our content library.",
  },
  {
    icon: Shield,
    title: "IP Portfolio",
    value: "8+ Titles",
    desc: "A growing library of owned intellectual property spanning historical epics, sci-fi, and documentary formats.",
  },
  {
    icon: BarChart2,
    title: "Revenue Streams",
    value: "Multi-Channel",
    desc: "Diversified across broadcasting rights, digital licensing, print media (Capsule), and sports (The Carthaginians).",
  },
  {
    icon: Zap,
    title: "Production Rate",
    value: "4K Output",
    desc: "All productions delivered in 4K cinematic quality, positioning Monarch TV at the premium end of the market.",
  },
  {
    icon: Users,
    title: "Team",
    value: "50+ Creatives",
    desc: "A world-class team of directors, writers, VFX artists, and production designers committed to excellence.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Content is King",
    desc: "Our primary investment thesis is simple: premium, owned intellectual property appreciates in value. Every series we produce is a long-term asset that generates licensing, syndication, and merchandising revenue for decades.",
  },
  {
    num: "02",
    title: "Vertical Integration",
    desc: "Monarch TV Studios controls the entire value chain — from script development to broadcast. This eliminates third-party dependency, maximizes margin, and gives us full creative and commercial control.",
  },
  {
    num: "03",
    title: "Diversified Portfolio",
    desc: "Our assets span television, digital media, print publishing (Capsule Magazine), and professional sports (The Carthaginians). This diversification creates resilience across economic cycles.",
  },
  {
    num: "04",
    title: "Technology Edge",
    desc: "We are early adopters of AI-assisted production tools, virtual production stages, and blockchain content distribution. This gives us a significant cost and speed advantage over traditional broadcasters.",
  },
];

export default function InvestorsRelationPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black min-h-screen overflow-hidden">
        <style>{`
          @keyframes smoke-hero {
            0% { transform: translate(0, 0) scale(1); opacity: 0; filter: blur(40px); }
            33% { opacity: 0.7; filter: blur(60px); }
            66% { opacity: 0.4; filter: blur(50px); }
            100% { transform: translate(-30%, -20%) scale(2); opacity: 0; filter: blur(80px); }
          }
          @keyframes smoke-hero-reverse {
            0% { transform: translate(0, 0) scale(1); opacity: 0; filter: blur(40px); }
            50% { opacity: 0.6; filter: blur(70px); }
            100% { transform: translate(30%, 20%) scale(1.5); opacity: 0; filter: blur(60px); }
          }
          .smoke-h-1 { animation: smoke-hero 8s infinite ease-in-out; }
          .smoke-h-2 { animation: smoke-hero-reverse 10s infinite ease-in-out 1s; }
          .smoke-h-3 { animation: smoke-hero 12s infinite ease-in-out 2s; }
          .smoke-h-4 { animation: smoke-hero-reverse 9s infinite ease-in-out 3s; }
        `}</style>

        {/* Hero */}
        <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0 scale-105">
            <Image src="/investor/image.png" fill alt="Investors" className="object-cover opacity-60" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
          </motion.div>

          {/* Intense Animated Pink Smoke Overlay */}
          <div className="absolute inset-0 pointer-events-none mix-blend-screen z-0 overflow-hidden">
            <div className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] bg-primary/40 rounded-full smoke-h-1" />
            <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-pink-600/30 rounded-full smoke-h-2" />
            <div className="absolute bottom-[10%] left-[20%] w-[60%] h-[60%] bg-rose-500/20 rounded-full smoke-h-3" />
            <div className="absolute top-[30%] right-[10%] w-[50%] h-[50%] bg-primary/30 rounded-full smoke-h-4" />
          </div>

          {/* Animated grid overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,204,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,233,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
                Investor Relations
              </span>
              <h1 className="text-5xl md:text-8xl font-heading font-black text-white italic tracking-tighter leading-none mb-6">
                INVEST IN <br />
                <span className="text-primary text-glow-pink">THE FUTURE</span>
              </h1>
              <div className="w-32 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Monarch TV Studios is building the next great global entertainment brand. We invite visionary partners to join us at the forefront of cinematic television.
              </p>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Partnership Ecosystem — Magazine Style */}
        <section className="py-24 px-6 bg-black relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Ecosystem</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white italic tracking-tighter mb-4">
                PARTNERSHIP <span className="text-primary">HORIZONS</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
              <p className="text-xl text-white/60 max-w-3xl mx-auto font-rosario italic">
                Discover new horizons beyond the media market with Monarch TV Studios. We connect core targets with new audiences through topics that resonate with your brand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* Card 1: Academic & Research */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-black text-white italic mb-4 tracking-tighter">Research & Academia</h3>
                <p className="text-white/60 font-rosario leading-relaxed mb-6">
                  If you represent an association or a university research laboratory involved in space science, archaeology, or environmental studies, we invite you to become our partner. Together, we create impactful content highlighting your expertise.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {['Space Science', 'Archaeology', 'Theology'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* Card 2: Strategic Media Partner */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-black text-white italic mb-4 tracking-tighter">Global Organizations</h3>
                <p className="text-white/60 font-rosario leading-relaxed mb-6">
                  Whether you are a museum, an agency in space exploration, or a maritime industry group, we serve as your strategic media partner. From Silicon Valley to global capital markets, we expand your reach.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {['High-Tech', 'Maritime', 'Mining'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* Card 3: Co-Production */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Zap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-black text-white italic mb-4 tracking-tighter">Co-Production</h3>
                <p className="text-white/60 font-rosario leading-relaxed mb-6">
                  Are you a studio, producer, or financier interested in co-producing high-level scripted or unscripted content? Join us in bringing visionary projects to a broad international audience.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {['Scripted', 'Unscripted', 'Global Distribution'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* Card 4: Investment */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col group lg:col-span-2"
              >
                <div className="flex flex-col md:flex-row gap-8">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 flex-shrink-0">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white italic mb-4 tracking-tighter">Investment & Growth</h3>
                    <p className="text-white/60 font-rosario leading-relaxed mb-6">
                      For investors, venture capital firms, or banks looking to invest in our group equities, upcoming projects, or sponsor our American football franchise, we explore mutually beneficial partnerships that scale with our growth.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 5: Media Presence */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col group lg:col-span-1"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                  <BarChart2 className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-black text-white italic mb-4 tracking-tighter">Media Visibility</h3>
                <p className="text-white/60 font-rosario leading-relaxed mb-6">
                  Reserve advertising slots in our world-renowned satellite and FAST television channels to promote your services with maximum visibility.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col items-center">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white/60 font-rosario italic mb-8 text-center max-w-2xl"
              >
                Contact us today to discover how Monarch TV Studios can help integrate your brand into our innovative initiatives.
              </motion.p>
              <Link 
                href="/#contact"
                className="px-12 py-5 bg-primary text-black font-black uppercase tracking-[0.3em] rounded-full hover:scale-110 hover:shadow-[0_0_50px_rgba(255,204,233,0.6)] transition-all duration-500 active:scale-95 text-lg"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </section>

        {/* Investment Highlights Grid */}
        <section className="py-28 px-6 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <Image src="/canvas/36.png" fill alt="" className="object-cover" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading font-black text-white italic tracking-tighter mb-4">
                KEY <span className="text-primary">HIGHLIGHTS</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 hover:bg-white/[0.06] transition-all duration-500"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] block mb-1">{item.title}</span>
                        <div className="text-3xl font-heading font-black text-white italic tracking-tighter mb-3">{item.value}</div>
                        <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Investment Pillars */}
        <section className="py-24 px-6 bg-black/70 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading font-black text-white italic tracking-tighter mb-4">
                WHY <span className="text-primary">MONARCH</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group flex gap-8 p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-heading font-black text-primary/20 italic leading-none group-hover:text-primary/40 transition-colors">
                      {pillar.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white italic tracking-tighter mb-3 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — Contact */}
        <section className="py-32 px-6 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image src="/canvas/9.png" fill alt="" className="object-cover" />
          </div>
          {/* Pink glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black tracking-[0.3em] uppercase rounded mb-6">
                Get in Touch
              </span>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter mb-6 leading-none">
                LET&apos;S BUILD <br />
                <span className="text-primary">TOGETHER</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
              <p className="text-xl text-white/60 leading-relaxed mb-12">
                Whether you are a strategic partner, institutional investor, or an individual visionary, we want to hear from you. Join the Monarch story at the ground floor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="px-10 py-4 bg-primary text-black font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,204,233,0.5)] transition-all duration-300 active:scale-95"
                >
                  Contact Us
                </a>
                <a
                  href="/about-us"
                  className="px-10 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-[0.2em] rounded-full hover:border-primary hover:text-primary transition-all duration-300 active:scale-95"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}
