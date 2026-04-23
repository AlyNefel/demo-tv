import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowCarousel from "@/components/ShowCarousel";
import BrowseShows from "@/components/BrowseShows";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import AboutUs from "@/components/AboutUs";
import WeeklyNews from "@/components/WeeklyNews";
import FeaturedCards from "@/components/FeaturedCards";
import ContactForm from "@/components/ContactForm";
import { shows } from "@/lib/tv-shows";

const Divider = () => (
  <div className="w-full flex justify-center py-28 relative z-20">
    <div className="w-[80%] max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_20px_rgba(255,204,233,0.5)]" />
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Beautiful HR Separator */}
        <div className="w-full flex justify-center py-8 bg-gradient-to-b from-black to-transparent relative z-20">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent glow-pink" />
        </div>

        <div className="relative z-10 pb-20">
          <Partners />
          
          <Divider />
          <AboutUs />
          
          <Divider />
          <WeeklyNews />
          
          <Divider />
          <ShowCarousel title="Trending Now" shows={shows} />
          
          <ShowCarousel title="Originals" shows={[...shows].reverse()} />
          
          <Divider />
          <Team />
          
          <Divider />
          <FeaturedCards />

          <Divider />
          <ContactForm />
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
