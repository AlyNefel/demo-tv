import React from 'react';
import Navbar from "@/components/Navbar";

export default function NovelsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-heading font-black text-white italic tracking-tighter mb-6">
          MONARCH TV <span className="text-primary">NOVELS</span>
        </h1>
        <div className="w-32 h-1 bg-primary mx-auto rounded-full glow-pink mb-8" />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Literary adaptations and serial dramas. Breathing life into the written word. Monarch Novels specializes in lavish, high-fidelity adaptations of bestselling literature.
        </p>
      </main>
    </>
  );
}
