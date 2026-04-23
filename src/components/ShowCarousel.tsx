"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShowCard from './ShowCard';
import { Show } from '@/lib/tv-shows';

interface ShowCarouselProps {
  title: string;
  shows: Show[];
}

const ShowCarousel = ({ title, shows }: ShowCarouselProps) => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-heading font-bold tracking-tight text-white flex items-center gap-2">
          <span className="w-1.5 h-6 bg-primary rounded-full glow-pink" />
          {title}
        </h2>
        <div className="flex gap-2">
          {/* Custom navigation can go here if needed */}
        </div>
      </div>
      
      <div className="relative px-6 max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {shows.map((show) => (
              <CarouselItem key={show.id} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                <ShowCard show={show} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-background/80 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-4 bg-background/80 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </div>
  );
};

export default ShowCarousel;
