"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Play, Plus } from 'lucide-react';
import { Show } from '@/lib/tv-shows';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ShowCardProps {
  show: Show;
  className?: string;
  priority?: boolean;
}

const ShowCard = ({ show, className, priority }: ShowCardProps) => {
  const isProgram = show.genres.includes("TV Program") || show.genres.includes("Fiction Series");

  const CardInner = (
    <div className="relative h-full w-full">
      {/* Poster Image */}
      <div className="relative h-full w-full">
        <Image
          src={show.poster}
          alt={show.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-bold text-white">{show.rating}</span>
          </div>
          <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">{show.year}</span>
        </div>
        
        <div className="flex flex-col mb-2">
          {show.genres.includes("TV Program") && show.monarchFont ? (
            <>
              {/* Monarch TV branding – large, in card font */}
              <span
                className="block leading-none text-primary drop-shadow-[0_0_10px_rgba(255,204,233,0.9)]"
                style={{
                  fontFamily: show.monarchFont,
                  fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
                  fontWeight: 900,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Monarch TV
              </span>
              {/* Show name – same font, smaller */}
              <span
                className="block leading-tight text-white mt-0.5"
                style={{
                  fontFamily: show.showFont ?? show.monarchFont,
                  fontSize: 'clamp(0.65rem, 1.3vw, 0.85rem)',
                  fontWeight: 400,
                  letterSpacing: '0.03em',
                }}
              >
                {show.title}
              </span>
            </>
          ) : (
            <h3 className={cn("text-base text-white leading-tight", show.fontClass)}>
              {show.title}
            </h3>
          )}
          {show.titleSecondary && (
            <span className={cn("text-xs text-white/80 leading-tight", show.secondaryFontClass)}>
              {show.titleSecondary}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground glow-pink">
            <Play size={14} fill="currentColor" />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Plus size={14} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("group relative block rounded-xl overflow-hidden bg-muted aspect-[2/3]", className)}
    >
      {isProgram ? (
        <Dialog>
          <DialogTrigger
            render={<button className="w-full h-full text-left" />}
          >
            {CardInner}
          </DialogTrigger>
          <DialogContent className="bg-black/95 border-primary/20 text-white backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="mb-4">
                <div className="flex flex-col">
                  {show.genres.includes("TV Program") && show.monarchFont ? (
                    <>
                      <span
                        className="text-3xl italic tracking-tighter uppercase text-primary"
                        style={{ fontFamily: show.monarchFont, fontWeight: 900 }}
                      >
                        Monarch TV
                      </span>
                      <span
                        className="text-xl italic tracking-tighter uppercase text-primary/80"
                        style={{ fontFamily: show.showFont ?? show.monarchFont }}
                      >
                        {show.title}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={cn("text-3xl italic tracking-tighter uppercase text-primary", show.fontClass)}>
                        {show.title}
                      </span>
                      {show.titleSecondary && (
                        <span className={cn("text-xl italic tracking-tighter uppercase text-primary/80", show.secondaryFontClass)}>
                          {show.titleSecondary}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-6">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image 
                  src={show.banner} 
                  fill 
                  alt={show.title} 
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                {show.synopsis}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Link href={`/show/${show.id}`} className="block h-full">
          {CardInner}
        </Link>
      )}
      
      {/* Subtle indicator for genre */}
      <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none z-20">
        {show.genres.slice(0, 1).map(genre => (
          <span key={genre} className="px-2 py-0.5 bg-primary/20 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.2em] text-primary border border-primary/40 rounded">
            {genre}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ShowCard;
