"use client";

import React, { useRef } from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const channels = [
  {
    title: "MONARCH TV CHANNEL",
    description: "Monarch TV Channel, the group's flagship station, offers engaging documentaries and reality shows focused on space exploration, satellite and shuttle launches, space mining, and recent discoveries like VLA, as well as space tourism. It also features programs on oceanography, marine biology, and ocean conservation, highlighting the beauty and importance of our oceans. Through inspiring content, Monarch TV Channel aims to educate and entertain viewers about the universe, the depths of the oceans, and human history's mysteries.",
    date: "June 2026",
    image: "/Chanel Bouquet/monarch_tv_channe.png"
  },
  {
    title: "MONARCH TV CRYPTO",
    description: "Monarch TV Crypto is a premier financial channel dedicated to delivering in-depth business and market insights, real-time updates from leading stock exchanges, and expert analysis on financial assets trends, investment strategies, and emerging technologies. With live connections to global markets, it serves as an essential resource for investors, financial professionals, and viewers seeking comprehensive market intelligence, innovative investment opportunities, and engaging debates on renewable energy and cutting-edge technological advancements.",
    date: "August 2026",
    image: "/Chanel Bouquet/monarch-tv-crypto.png"
  },
  {
    title: "MONARCH TV NOVELS",
    description: "Monarch TV Novels is a hybrid channel dedicated to a diverse blend of fiction and pseudo-fiction series, entertainment, unconventional sports, music, and reality shows, offering a wide array of captivating stories across various genres. The channel is committed to delivering high-quality scripted and unscripted content that appeals to fans of dramatic, adventurous, and imaginative programming. Positioned as a premier source of fictional and entertainment storytelling within the group, Monarch TV Novels aims to engage audiences with compelling narratives and innovative entertainment experiences.",
    date: "September 2026",
    image: "/Chanel Bouquet/Monarch-tv-novels.png"
  }
];

function ChannelSection({ channel, index }: { channel: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div ref={ref} className="min-h-[80vh] w-full flex items-center justify-center relative overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Image with Parallax */}
        <div className="relative h-[50vh] lg:h-[70vh] w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,204,233,0.15)] group">
          <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
            <Image 
              src={channel.image} 
              fill 
              alt={channel.title} 
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Right: Content */}
        <motion.div style={{ opacity }} className="flex flex-col justify-center">
          <h2 className="text-5xl lg:text-7xl font-heading font-black text-white italic tracking-tighter mb-6 leading-none">
            {channel.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-primary">{channel.title.split(' ').slice(-1)}</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full glow-pink mb-8" />
          
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-10 font-medium whitespace-pre-wrap">
            {channel.description}
          </p>

          <div className="inline-block border border-primary/30 bg-primary/10 px-8 py-4 rounded-2xl self-start backdrop-blur-sm shadow-[0_0_20px_rgba(255,204,233,0.1)]">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">
              Launch Date
            </span>
            <div className="text-2xl font-bold text-white mt-1">
              {channel.date}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ChannelBouquetPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-black min-h-screen">
        {/* Header Section */}
        <div className="pt-40 pb-10 px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-heading font-black text-white italic tracking-tighter mb-6">
            CHANNEL <span className="text-primary">BOUQUET</span>
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse range of specialized networks, each crafted to deliver unparalleled entertainment experiences.
          </p>
        </div>

        {/* Channels List */}
        <div className="flex flex-col pb-32">
          {channels.map((channel, i) => (
            <ChannelSection key={i} channel={channel} index={i} />
          ))}
        </div>
      </main>
    </>
  );
}
