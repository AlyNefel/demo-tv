"use client";

import Image from 'next/image';

const partnerLogos = [
  { src: "/partner/1.png", invert: false },
  { src: "/partner/2.png", invert: false },
  { src: "/partner/3.png", invert: false },
  { src: "/partner/4.png", invert: true },
  { src: "/partner/5.png", invert: true },
  { src: "/partner/6.png", invert: true },
  { src: "/partner/7.png", invert: false },
  { src: "/partner/8.png", invert: true },
];

const Partners = () => {
  return (
    <div className="w-full bg-black py-12 overflow-hidden border-y border-white/5 relative group/marquee">
      {/* Decorative gradients for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] whitespace-nowrap items-center">
        {/* Double the array for seamless infinite scroll */}
        {[...partnerLogos, ...partnerLogos].map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center mx-16 opacity-60 hover:opacity-100 hover:scale-125 transition-all duration-500 cursor-default"
          >
            <div className="relative h-16 w-40">
              <Image 
                src={logo.src} 
                alt={`Partner ${index + 1}`} 
                fill
                className={`object-contain mix-blend-screen transition-all duration-500 ${logo.invert ? 'invert hue-rotate-180' : ''}`} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
