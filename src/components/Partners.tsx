"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partnerLogos = [
  { src: "/new-logos/image copy 2.png" },
  { src: "/new-logos/image copy 3.png" },
  { src: "/new-logos/image copy 4.png" },
  { src: "/new-logos/image copy 5.png" },
  { src: "/new-logos/image copy 6.png" },
  { src: "/new-logos/sg.png", padding: "0.7rem" },
  { src: "/new-logos/image copy 8.png" },
  { src: "/new-logos/log-removebg-preview.png" },
  { src: "/new-logos/image.png" },
];

const doubled = [...partnerLogos, ...partnerLogos];

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLDivElement>('.partner-item');
    const THRESHOLD = 150; // px from center to trigger zoom

    const tick = () => {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const dist = Math.abs(itemCenterX - centerX);

        if (dist < THRESHOLD) {
          item.classList.add('is-center');
        } else {
          item.classList.remove('is-center');
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="w-full bg-[#050505] py-10 overflow-hidden relative border-y border-white/10">
      {/* Brightened Cinematic Spotlight Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,204,233,0.15)_0%,transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]" />
        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      </div>

      <style>{`
        .partner-item {
          opacity: 1;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          perspective: 1000px;
        }
        
        .partner-item.is-center {
          z-index: 50;
          transform: scale(1.4);
        }

        /* Card Container - No border radius and without background */
        .partner-card {
          position: relative;
          width: 260px;
          height: 140px;
          border-radius: 1.5rem; /* Border radius */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent; /* Without background */
          border: 1px solid rgba(255, 255, 255, 0.15); /* Visible border */
        }

        .partner-item.is-center .partner-card {
          box-shadow: 0 0 40px rgba(255, 204, 233, 0.2);
          border: 1px solid rgba(255, 204, 233, 0.4); /* Highlighted border on center */
        }

        .partner-img {
          transition: all 0.8s ease;
          object-fit: contain;
          padding: 1rem;
        }

        .partner-item.is-center .partner-img {
          filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.3));
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white italic tracking-tighter mb-4 uppercase">
          OUR <span className="text-primary">PARTNERS</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-pink" />
      </div>

      <div
        ref={containerRef}
        className="flex w-fit animate-marquee whitespace-nowrap items-center py-6"
      >
        {doubled.map((logo, index) => (
          <div
            key={index}
            className="partner-item flex items-center justify-center mx-[10vw] cursor-default"
          >
            <div className="partner-card">
              <Image
                src={logo.src}
                alt={`Partner ${index + 1}`}
                fill
                className="partner-img"
                style={{ padding: logo.padding || '1rem' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
