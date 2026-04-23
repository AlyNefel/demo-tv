import React from 'react';
import Navbar from "@/components/Navbar";

export default function ChannelPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-heading font-black text-white italic tracking-tighter mb-6">
          MONARCH TV <span className="text-primary">CHANNEL</span>
        </h1>
        <div className="w-32 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The flagship broadcast network. Our premier network broadcasts the cornerstone of Monarch's original programming. From sweeping historical dramas to mind-bending sci-fi epics.
        </p>
      </main>
    </>
  );
}
