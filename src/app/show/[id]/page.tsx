import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Play, Plus, Star, Calendar, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { shows } from '@/lib/tv-shows';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const show = shows.find(s => s.id === id);
  
  if (!show) return { title: 'Show Not Found' };
  
  return {
    title: `${show.title} | MONARCH`,
    description: show.synopsis,
  };
}

export default async function ShowPage({ params }: Props) {
  const { id } = await params;
  const show = shows.find(s => s.id === id);

  if (!show) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section for Detail */}
        <div className="relative h-[70vh] w-full">
          <Image
            src={show.banner}
            alt={show.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex items-center px-6 max-w-7xl mx-auto">
            <div className="max-w-2xl mt-20">
              <Link href="/" className="flex items-center gap-2 text-primary mb-6 hover:translate-x-[-4px] transition-transform w-fit">
                <ChevronLeft size={20} /> Back to Home
              </Link>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold">{show.rating} Rating</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar size={16} />
                  <span>{show.year}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock size={16} />
                  <span>45m / ep</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tighter text-white">
                {show.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {show.genres.map(genre => (
                  <span key={genre} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white/80">
                    {genre}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold gap-2 glow-pink">
                  <Play className="fill-current" size={20} /> Watch Trailer
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-bold gap-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10">
                  <Plus size={20} /> My List
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Synopsis</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {show.synopsis}
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Trailer</h2>
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 glow-pink/10">
                <iframe
                  src={show.trailer}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  title={`${show.title} Trailer`}
                />
              </div>
            </section>
          </div>
          
          <div className="space-y-8">
            <section className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/5">
              <h2 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full" />
                Cast & Crew
              </h2>
              <ul className="space-y-4">
                {show.cast.map(person => (
                  <li key={person} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 border border-white/10" />
                    <div>
                      <p className="font-bold text-white">{person}</p>
                      <p className="text-xs text-muted-foreground">Actor</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <h2 className="text-xl font-bold mb-4 text-primary">Share This Show</h2>
              <p className="text-sm text-muted-foreground mb-4">Invite your friends to watch the latest episodes of {show.title}.</p>
              <Button variant="outline" className="w-full rounded-full border-primary/30 text-primary">Copy Link</Button>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
