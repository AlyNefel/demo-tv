import React from 'react';
import Navbar from '@/components/Navbar';

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-6xl font-heading font-black mb-12 tracking-tighter text-white">
          LATEST <span className="text-primary italic">NEWS</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">UPDATE</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2">April 23, 2026</p>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  Monarch Studios Announces New Slate of Original Series
                </h3>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  The upcoming year promises to be our biggest yet, with groundbreaking new shows exploring uncharted territories in sci-fi, fantasy, and beyond.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
