"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import ShowCarousel from "@/components/ShowCarousel";
import { shows } from "@/lib/tv-shows";

export default function RecentlyAddedPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-6 mb-12">
           <h1 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter uppercase">
             Recently <span className="text-primary">Added</span>
           </h1>
           <div className="w-24 h-1 bg-primary rounded-full glow-pink mt-4" />
        </div>
        <ShowCarousel title="" shows={[...shows].reverse().slice(0, 8)} />
      </main>
    </>
  );
}
