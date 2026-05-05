import React from 'react';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { weeklyPrograms } from '@/lib/weekly-programs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {weeklyPrograms.map((prog) => (
            <Dialog key={prog.id}>
              <DialogTrigger
                render={
                  <div 
                    className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,204,233,0.15)] cursor-pointer"
                  />
                }
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
                <div className="absolute inset-0 p-4 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
                  {/* Monarch TV – large branding label */}
                  <span
                    className="block leading-none drop-shadow-[0_0_10px_rgba(255,204,233,0.9)] text-primary"
                    style={{
                      fontFamily: prog.monarchFont,
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                      fontWeight: 900,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Monarch TV
                  </span>
                  {/* Show name – same font, smaller */}
                  <span
                    className="block leading-tight text-white drop-shadow-[0_0_8px_rgba(255,204,233,0.6)] mt-1"
                    style={{
                      fontFamily: prog.showFont,
                      fontSize: 'clamp(0.75rem, 1.8vw, 1rem)',
                      fontWeight: 400,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {prog.title}
                  </span>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-black/95 border-primary/20 text-white backdrop-blur-xl">
                <DialogHeader>
                  <DialogTitle
                    className="text-3xl font-black italic tracking-tighter uppercase text-primary mb-4"
                    style={{ fontFamily: prog.monarchFont }}
                  >
                    {prog.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-6">
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                    <Image 
                      src={`/weekly-news-tv-programs/${prog.img}`} 
                      fill 
                      alt={prog.title} 
                      className="object-cover"
                    />
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed font-medium">
                    {prog.description}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>
    </>
  );
}

