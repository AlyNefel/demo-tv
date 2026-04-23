import React from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';

const programs = [
  { img: "image 1.png", title: "Alpha Chronicles" },
  { img: "image 2.png", title: "Time Warp" },
  { img: "image 3.png", title: "POD" },
  { img: "image 4.png", title: "Oceanquest" },
  { img: "image 5.png", title: "Rock'N Roll banga" },
  { img: "image 6.png", title: "Bones Echoes" },
  { img: "image 7 .png", title: "We do pips" },
  { img: "image 8.png", title: "Divers & Builders" },
  { img: "image 9.png", title: "Super charge" },
  { img: "image 10.png", title: "Mining Campus" },
  { img: "image 11.png", title: "Tush push" },
  { img: "image 12.png", title: "Tech Talk" }
];

export default function WeeklyNewsTVPrograms() {
  return (
    <>
      <Navbar />
      
      {/* Pink Smoke Animations */}
      <style>{`
        @keyframes smoke {
          0% { transform: translateY(20%) scale(1); opacity: 0; filter: blur(10px); }
          50% { opacity: 0.7; filter: blur(15px); }
          100% { transform: translateY(-40%) scale(1.5); opacity: 0; filter: blur(20px); }
        }
        .smoke-1 { animation: smoke 4s infinite ease-in-out; }
        .smoke-2 { animation: smoke 5s infinite ease-in-out 1.5s; }
        .smoke-3 { animation: smoke 4.5s infinite ease-in-out 2.5s; }
      `}</style>

      <main className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter mb-6 uppercase">
            Weekly News <span className="text-primary">TV Programs</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the latest from our unscripted reality, documentary, and live broadcast divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <div 
              key={i} 
              className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,204,233,0.15)]"
            >
              <Image 
                src={`/weekly-news-tv-programs/${prog.img}`} 
                fill 
                alt={prog.title} 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Animated Pink Smoke Effect Container (always visible) */}
              <div className="absolute inset-0 overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen">
                <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/60 rounded-full smoke-1" />
                <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-pink-500/50 rounded-full smoke-2" />
                <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-rose-400/60 rounded-full smoke-3" />
              </div>

              {/* Title Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <h3 className="text-2xl font-heading font-black text-white italic tracking-widest uppercase drop-shadow-[0_0_15px_rgba(255,204,233,0.8)]">
                  {prog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
