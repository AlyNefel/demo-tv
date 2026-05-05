import React from 'react';
import Navbar from "@/components/Navbar";
import ShowCard from "@/components/ShowCard";
import { fictionSeries } from '@/lib/fiction-series';

export default function FictionSeriesPage() {
  const fictionSeriesShows = fictionSeries.map(s => ({
    id: s.id,
    title: s.title,
    titleSecondary: s.titleSecondary,
    synopsis: s.description,
    rating: 9.5,
    year: s.year,
    genres: ["Fiction Series"],
    poster: `/Fiction Series Production/${s.img}`,
    banner: `/Fiction Series Production/${s.img}`,
    cast: [],
    trailer: "",
    fontClass: s.fontClass,
    secondaryFontClass: s.secondaryFontClass
  }));

  return (
    <>
      <Navbar />
      
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

      <main className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter mb-6 uppercase">
            Fiction <span className="text-primary text-glow-pink">Series</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Explore the lore, epic narratives, and production secrets of our narrative masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fictionSeriesShows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </main>
    </>
  );
}
