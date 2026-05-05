"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import Link from 'next/link';

const newsCategories = [
  {
    title: "Capsule: Our Scientific Quarterly Magazine",
    desc: "Monarch TV Capsule Magazine, published quarterly in print and online, connects a global community of explorers, scientists, and enthusiasts. Featuring stunning photos and insightful articles, it shares remarkable discoveries, research, and adventures, inspiring and educating readers.",
    image: "/assets/Capsule our Scientific Quaterly Magazine.png", 
    link: null
  },
  {
    title: "The Carthaginians: Our American Football Franchise",
    desc: "Representing the strength and strategic brilliance of Carthage, our American Football franchise brings elite-level competition and community spirit to the global stage.",
    image: "/assets/The Carthaginians  our American Football Franchise.png",
    link: null
  }
];

const WeeklyNews = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      {/* Pink Smoke Animations */}
      <style>{`
        @keyframes smoke {
          0% { transform: translate(30%, 30%) scale(1); opacity: 0; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(30px); }
          100% { transform: translate(-50%, -60%) scale(2); opacity: 0; filter: blur(40px); }
        }
        .smoke-1 { animation: smoke 5s infinite ease-in-out; }
        .smoke-2 { animation: smoke 6s infinite ease-in-out 1.5s; }
        .smoke-3 { animation: smoke 5.5s infinite ease-in-out 2.5s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white italic tracking-tighter mb-4 uppercase">
              Our <span className="text-primary">Assets</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full glow-pink" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {newsCategories.map((category, i) => {
            const isLink = !!category.link;
            
            const cardContent = (
              <div className={`relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-primary/50 transition-colors duration-500 ${!category.image ? 'bg-primary/5 flex items-center justify-center' : ''}`}>
                {category.image ? (
                  <Image 
                    src={category.image} 
                    fill 
                    alt={category.title} 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                )}

                {/* Animated Intense Pink Smoke Effect Container (always visible, diagonal movement) */}
                <div className="absolute inset-0 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen z-10">
                  <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-primary/80 rounded-full smoke-1" />
                  <div className="absolute bottom-0 right-[20%] w-72 h-72 bg-pink-600/70 rounded-full smoke-2" />
                  <div className="absolute bottom-[10%] right-[40%] w-56 h-56 bg-rose-500/80 rounded-full smoke-3" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tighter">
                    {category.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-primary mb-3 glow-pink" />
                  <p className="text-sm text-white/70 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {category.desc}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                {isLink ? (
                  <Link href={category.link!} className="block w-full h-full">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Upcoming Assets Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <style>{`
            @keyframes infiniteGlow {
              0%, 100% { 
                box-shadow: 0 0 15px rgba(255,204,233,0.1);
                border-color: rgba(255,204,233,0.3);
                transform: scale(1);
              }
              50% { 
                box-shadow: 0 0 30px rgba(255,204,233,0.4);
                border-color: rgba(255,204,233,0.8);
                transform: scale(1.03);
              }
            }
            .animate-infinite-glow {
              animation: infiniteGlow 2s infinite ease-in-out;
            }
            @keyframes smoke-button {
              0% { transform: translateX(-100%) translateY(20%) scale(1); opacity: 0; }
              50% { opacity: 0.5; }
              100% { transform: translateX(100%) translateY(-20%) scale(1.5); opacity: 0; }
            }
            .smoke-btn-1 { animation: smoke-button 4s infinite linear; }
            .smoke-btn-2 { animation: smoke-button 5s infinite linear 1s; }
          `}</style>
          <Link href="/upcoming-assets">
            <button className="group relative px-10 py-4 bg-transparent border-2 rounded-full transition-all duration-500 hover:scale-105 active:scale-95 animate-infinite-glow overflow-hidden">
              {/* More Visible Pink Smoke Overlay Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-90 mix-blend-screen z-0">
                <div className="absolute top-0 left-0 w-48 h-48 bg-primary/90 rounded-full blur-3xl smoke-btn-1" />
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-pink-500/80 rounded-full blur-3xl smoke-btn-2" />
              </div>

              <span className="relative z-10 text-2xl font-nosifer text-primary text-glow-pink tracking-widest uppercase transition-colors duration-300 group-hover:text-white">
                Upcoming Assets
              </span>
              <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </Link>
        </motion.div>



      </div>
    </section>

  );
};

export default WeeklyNews;
