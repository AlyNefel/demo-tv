import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowCarousel from "@/components/ShowCarousel";
import BrowseShows from "@/components/BrowseShows";

import Partners from "@/components/Partners";
import AboutUs from "@/components/AboutUs";
import WeeklyNews from "@/components/WeeklyNews";
import ProductionSection from "@/components/ProductionSection";
import FeaturedCards from "@/components/FeaturedCards";
import ContactForm from "@/components/ContactForm";
import Subsidiaries from "@/components/Subsidiaries";
import UpcomingProjects from "@/components/UpcomingProjects";
import FloatingBackgroundLogos from "@/components/FloatingBackgroundLogos";

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
      <FloatingBackgroundLogos />
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
          <ProductionSection />

          <Divider />
          <Subsidiaries />


          <Divider />
          <ContactForm />
        </div>
      </main>
    </>
  );
}
