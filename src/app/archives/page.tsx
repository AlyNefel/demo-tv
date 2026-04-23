"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import BrowseShows from "@/components/BrowseShows";

export default function ArchivesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-6 mb-12">
           <h1 className="text-5xl md:text-7xl font-heading font-black text-white italic tracking-tighter uppercase">
             Explore the <span className="text-primary">Archives</span>
           </h1>
           <div className="w-24 h-1 bg-primary rounded-full glow-pink mt-4" />
        </div>
        <BrowseShows />
      </main>
    </>
  );
}
