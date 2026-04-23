import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowCarousel from "@/components/ShowCarousel";
import BrowseShows from "@/components/BrowseShows";
import Subsidiaries from "@/components/Subsidiaries";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import AboutUs from "@/components/AboutUs";
import WeeklyNews from "@/components/WeeklyNews";
import { shows } from "@/lib/tv-shows";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Beautiful HR Separator */}
        <div className="w-full flex justify-center py-8 bg-gradient-to-b from-black to-transparent">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent glow-pink" />
        </div>

        <div className="relative z-10 space-y-12 pb-20">
          <Partners />
          <AboutUs />
          <WeeklyNews />
          <Subsidiaries />
          <ShowCarousel title="Trending Now" shows={shows} />
          
          <ShowCarousel title="Originals" shows={[...shows].reverse()} />
          <Team />
          
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1593784991095-a205039470b6?q=80&w=2070&auto=format&fit=crop)` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-black mb-2 text-white italic tracking-tighter">THE FUTURE IS NEON</h3>
                  <p className="text-white/80 max-w-sm mb-4">Discover the next generation of cyberpunk storytelling.</p>
                  <button className="w-fit px-6 py-2 bg-primary text-primary-foreground font-bold rounded-full glow-pink transition-transform active:scale-95">Explore</button>
                </div>
              </div>
              
              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2037&auto=format&fit=crop)` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-black mb-2 text-white italic tracking-tighter">BEYOND REALITY</h3>
                  <p className="text-white/80 max-w-sm mb-4">Unravel the mysteries of the multiverse in our latest originals.</p>
                  <button className="w-fit px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all active:scale-95">Learn More</button>
                </div>
              </div>
            </div>
          </section>

          <ShowCarousel title="Top Rated" shows={shows.slice(0, 4)} />
          
          <ShowCarousel title="Recently Added" shows={shows.slice(2, 6)} />

          <BrowseShows />
        </div>
      </main>
      
      <footer className="border-t border-white/5 py-12 px-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center glow-pink" />
            <span className="text-xl font-heading font-bold tracking-tighter text-glow-pink">
              MONARCH
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Contact Us</a>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2026 MONARCH TV STUDIOS. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
