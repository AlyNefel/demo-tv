"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Show, shows } from '@/lib/tv-shows';
import ShowCard from './ShowCard';
import { Loader2, Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const BrowseShows = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [visibleShows, setVisibleShows] = useState<Show[]>(shows.slice(0, 4));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const { ref, inView } = useInView();

  // Handle filtering
  const filteredShows = shows.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = activeTab === 'all' || show.genres.some(g => g.toLowerCase() === activeTab.toLowerCase());
    return matchesSearch && matchesGenre;
  });

  // Infinite scroll logic
  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      loadMore();
    }
  }, [inView]);

  const loadMore = () => {
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const nextBatch = filteredShows.slice(visibleShows.length, visibleShows.length + 4);
      if (nextBatch.length > 0) {
        setVisibleShows(prev => [...prev, ...nextBatch]);
      } else {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 800);
  };

  // Reset when filters change
  useEffect(() => {
    setVisibleShows(filteredShows.slice(0, 4));
    setHasMore(filteredShows.length > 4);
  }, [searchQuery, activeTab]);

  const genres = ['All', 'Sci-Fi', 'Fantasy', 'Action', 'Thriller', 'Drama'];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-12 relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 shadow-2xl mt-8">
      {/* Background decoration with strong Parallax */}
      <motion.div 
        style={{ y: yParallax }} 
        className="absolute inset-0 opacity-20 pointer-events-none scale-[1.5]"
      >
        <Image src="/canvas/20.png" fill alt="" className="object-cover opacity-50 mix-blend-screen" />
      </motion.div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-heading font-black mb-2 text-white italic tracking-tighter">
            EXPLORE THE <span className="text-primary">ARCHIVES</span>
          </h2>
          <p className="text-muted-foreground font-medium tracking-wide">Uncover the hidden stories of the Monarch Universe.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search library..." 
              className="pl-10 rounded-full border-white/10 bg-white/5 focus:border-primary/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="rounded-full gap-2 border-white/10">
            <SlidersHorizontal size={18} /> Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
        <TabsList className="bg-white/5 border border-white/10 rounded-full p-1">
          {genres.map(genre => (
            <TabsTrigger 
              key={genre} 
              value={genre.toLowerCase()}
              className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
            >
              {genre}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {visibleShows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>

      {hasMore && (
        <div ref={ref} className="flex justify-center py-12">
          {isLoading && <Loader2 className="animate-spin text-primary" size={32} />}
        </div>
      )}
      
      {!hasMore && visibleShows.length > 0 && (
        <p className="text-center py-12 text-muted-foreground italic">You've reached the end of our current library.</p>
      )}

      {visibleShows.length === 0 && (
        <div className="text-center py-24 bg-white/5 rounded-3xl border border-dashed border-white/10">
          <p className="text-xl text-muted-foreground">No shows found matching your criteria.</p>
          <Button 
            variant="link" 
            className="text-primary mt-2"
            onClick={() => {setSearchQuery(''); setActiveTab('all');}}
          >
            Clear all filters
          </Button>
        </div>
      )}
      </div>
    </section>
  );
};

export default BrowseShows;
