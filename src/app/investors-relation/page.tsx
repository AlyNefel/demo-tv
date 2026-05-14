"use client";

import React, { useRef } from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Shield, Globe, Zap, BarChart2, Users, ChevronDown } from 'lucide-react';

const highlights = [
  {
    icon: Globe,
    title: "Global Audience",
    value: "3 Channels",
    desc: "Broadcasting across Worldwide markets through Monarch TV Channel, Crypto, and Novels networks.",
  },
  {
    icon: TrendingUp,
    title: "Growth Stage",
    value: "Later Seed",
    desc: "Currently finalizing the shareholder list and proceeding with the establishment of the group, including its subsidiaries and affiliated entities.",
  },
  {
    icon: Shield,
    title: "Fiction Production",
    value: "9+ Titles",
    desc: "An expanding portfolio of owned intellectual property in development and production, encompassing historical epics, science fiction, and thriller fiction series.",
  },
  {
    icon: BarChart2,
    title: "Revenue Streams",
    value: "Multi-Channel",
    desc: "Diversified across broadcasting rights, digital licensing, print media (Capsule), and sports (The Carthaginians).",
  },
  {
    icon: Zap,
    title: "Broadcast",
    value: "HD Output",
    desc: "All channels broadcast in HD and superior TV quality, positioning Monarch TV Channel, Monarch TV Crypto, and Monarch TV Novels at the premium end of the market.",
  },
  {
    icon: Users,
    title: "Team",
    value: "250+ Creatives",
    desc: "A premier team of C-level executives, vice presidents, editors, storytellers, directors, writers, producers, VFX artists, and production designers dedicated to achieving excellence.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Content is King",
    desc: "Our core investment thesis is straightforward: high-quality, proprietary intellectual property appreciates over time, with each scripted or unscripted production serving as a lasting asset that yields licensing, syndication, and merchandising revenue for decades to come.",
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
    title: "Global Vision",
    desc: "Our team is composed of international talents across all fields, including production, storytelling, graphic design, IT, marketing, advertising sales, monetization, and top-tier C-level executives. Together, from our headquarters in Tunisia and our global offices, we collaborate to create and broadcast innovative, high-quality content.",
  },
];

const SpinningBorderCard = ({ children, className = "", whileHover = { y: -5 }, innerClassName = "p-8" }: { children: React.ReactNode, className?: string, whileHover?: any, innerClassName?: string }) => {
  return (
    <motion.div 
      whileHover={whileHover}
      className={`spinning-border-container h-full ${className}`}
    >
      <div className={`spinning-border-inner flex flex-col h-full group ${innerClassName}`}>
        {children}
      </div>
    </motion.div>
  );
};

const ExpandableText = ({ text, limit = 180 }: { text: string, limit?: number }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isLongText = text.length > limit;

  if (!isLongText) return <p className="text-white/60 font-rosario leading-relaxed mb-4">{text}</p>;

  return (
    <div className="relative">
      <p className={`text-white/60 font-rosario leading-relaxed mb-4 transition-all duration-500 ${!isExpanded ? 'line-clamp-3' : ''}`}>
        {text}
      </p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-primary/70 hover:text-primary text-xs font-black uppercase tracking-widest transition-colors mb-6"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
        <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

const PartnershipCard = ({ icon: Icon, title, desc, tags, colSpan = 1 }: { icon: any, title: string, desc: string, tags?: string[], colSpan?: number }) => {
  return (
    <SpinningBorderCard className={colSpan === 2 ? 'lg:col-span-2' : ''}>
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-2xl font-black text-white italic mb-4 tracking-tighter">{title}</h3>
      
      <ExpandableText text={desc} />

      <div className="mt-auto flex flex-wrap gap-2">
        {tags?.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
    </SpinningBorderCard>
  );
};

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
            0% { transform: translate(0, 20px) scale(1); opacity: 0; filter: blur(40px); }
            33% { transform: translate(-10%, -10px) scale(1.3); opacity: 0.7; filter: blur(60px); }
            66% { transform: translate(5%, -40px) scale(1.6); opacity: 0.4; filter: blur(50px); }
            100% { transform: translate(-20%, -80px) scale(2); opacity: 0; filter: blur(80px); }
          }
          @keyframes smoke-hero-reverse {
            0% { transform: translate(0, -20px) scale(1); opacity: 0; filter: blur(40px); }
            50% { transform: translate(15%, 30px) scale(1.4); opacity: 0.6; filter: blur(70px); }
            100% { transform: translate(30%, 60px) scale(1.8); opacity: 0; filter: blur(60px); }
          }
          @keyframes float-y {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .smoke-h-1 { animation: smoke-hero 8s infinite ease-in-out; }
          .smoke-h-2 { animation: smoke-hero-reverse 10s infinite ease-in-out 1s; }
          .smoke-h-3 { animation: smoke-hero 12s infinite ease-in-out 2s; }
          .smoke-h-4 { animation: smoke-hero-reverse 9s infinite ease-in-out 3s; }
          .float-slow { animation: float-y 6s infinite ease-in-out; }
          
          .spinning-border-container {
            position: relative;
            padding: 1px;
            border-radius: 1.5rem;
            overflow: hidden;
          }
          .spinning-border-container::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(
              transparent,
              transparent,
              #ffcce9,
              transparent 30%
            );
            animation: rotate 4s linear infinite;
            z-index: 0;
          }
          .spinning-border-inner {
            position: relative;
            background: #000;
            border-radius: 1.5rem;
            z-index: 1;
            height: 100%;
          }
        `}</style>

        {/* Hero */}
        <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0 scale-105">
            <Image src="/investor/first-image.png" fill alt="Investors" className="object-cover opacity-60" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
          </motion.div>

          {/* Intense Animated Pink Smoke Overlay */}
          <div className="absolute inset-0 pointer-events-none mix-blend-screen z-0 overflow-hidden float-slow">
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
                Discover new horizons beyond the media market with Monarch TV Studios, where you can connect with your core targets and reach new audiences. Our diverse channels offer flexible options to showcase your story through topics that resonate with your brand, whether it's space science, archaeology, paleontology, oceanography, environment, anthropology, theology, or esotericism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <PartnershipCard 
                icon={Users}
                title="Editorial Partnerships"
                desc="If you represent an association or a university research laboratory involved in space science, archaeology, paleontology, oceanography, environmental studies, anthropology, theology, or esotericism, we invite you to become our partner. Together, we can create impactful content that highlights your expertise and research."
                tags={['Space Science', 'Archaeology', 'Theology']}
              />

              <PartnershipCard 
                icon={Globe}
                title="Global Organizations Partnerships"
                desc="Whether you are a private or government organization, a museum, a giant aquarium, an agency or a group working in space exploration, space engines, maritime industry, maritime sports, high-tech, health tech, space health, or located in global Silicon Valleys, we are here to serve as your strategic media partner. We also welcome groups in the mining or oil sectors, sports organizations, capital market managers, fintech firms, banks, sportswear brands, and American & Canadian football franchises seeking global exposure."
                tags={['High-Tech', 'Maritime', 'Mining']}
              />

              <PartnershipCard 
                icon={Zap}
                title="Co-Production"
                desc="Are you a studio, producer, or financier interested in co-producing high-level scripted or unscripted content? We offer collaboration opportunities to bring our projects to a broad international audience."
                tags={['Scripted', 'Unscripted', 'Global Distribution']}
              />

              <PartnershipCard 
                icon={TrendingUp}
                title="Investment & Growth"
                desc="If you are an investor, investment group, bank, or venture capital firm looking to invest in our group equities, upcoming projects, or sponsor our American football franchise, we would be delighted to have you onboard and explore mutually beneficial partnerships."
                colSpan={2}
              />

              <PartnershipCard 
                icon={BarChart2}
                title="Ads Services"
                desc="For companies seeking a media presence, we provide access to our world-renowned satellite and fast television channels. Reserve advertising slots in advance to promote your products or services to a global audience with maximum visibility."
              />
            </div>

            <div className="flex flex-col items-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white/60 font-rosario italic mb-8 text-center max-w-2xl"
              >
                Contact us today to discover how Monarch TV Studios can help integrate your brand, products, or services into our innovative initiatives and expand your reach worldwide.
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
                  <SpinningBorderCard
                    key={item.title}
                    innerClassName="p-8 group hover:bg-white/[0.03] transition-all duration-500"
                  >
                    <div className="flex items-start gap-6 h-full">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div className="flex-1 flex flex-col h-full">
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] block mb-1">{item.title}</span>
                        <div className="text-3xl font-heading font-black text-white italic tracking-tighter mb-3">{item.value}</div>
                        <div className="mt-auto">
                          <ExpandableText text={item.desc} limit={100} />
                        </div>
                      </div>
                    </div>
                  </SpinningBorderCard>
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
                <SpinningBorderCard
                  key={pillar.num}
                  innerClassName="p-8 group"
                >
                  <div className="flex gap-8 h-full">
                    <div className="flex-shrink-0">
                      <span className="text-5xl font-heading font-black text-primary/20 italic leading-none group-hover:text-primary/40 transition-colors">
                        {pillar.num}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col h-full">
                      <h3 className="text-2xl font-black text-white italic tracking-tighter mb-3 group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <div className="mt-auto">
                        <ExpandableText text={pillar.desc} limit={150} />
                      </div>
                    </div>
                  </div>
                </SpinningBorderCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — Contact */}
        <section className="py-32 px-6 bg-black relative overflow-hidden">

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
