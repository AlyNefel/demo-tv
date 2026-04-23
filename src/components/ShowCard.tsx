"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Play, Plus } from 'lucide-react';
import { Show } from '@/lib/tv-shows';
import { cn } from '@/lib/utils';

interface ShowCardProps {
  show: Show;
  className?: string;
  priority?: boolean;
}

const ShowCard = ({ show, className, priority }: ShowCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("group relative block rounded-xl overflow-hidden bg-muted aspect-[2/3]", className)}
    >
      <Link href={`/show/${show.id}`} className="block h-full">
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

        {/* Overlay Content (Only visible on hover or mobile?) */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={12} fill="currentColor" />
              <span className="text-xs font-bold text-white">{show.rating}</span>
            </div>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">{show.year}</span>
          </div>
          
          <h3 className="text-sm font-bold text-white mb-2 line-clamp-1">{show.title}</h3>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground glow-pink">
              <Play size={14} fill="currentColor" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Plus size={14} />
            </div>
          </div>
        </div>
      </Link>
      
      {/* Subtle indicator for genre or something */}
      <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none">
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
