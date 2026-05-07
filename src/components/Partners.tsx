"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partnerLogos = [
  { src: "/partner/2.png" },
  { src: "/partner/3.png" },
  { src: "/partner/4.png" },
  { src: "/partner/7.png" },
  { src: "/partner/8.png" },
  { src: "/partner/9.png" },
  { src: "/partner/10.png" },
  { src: "/partner/11.png" },
  { src: "/partner/12.png" },
  { src: "/partner/13.png" },
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
    <div className="w-full bg-black py-32 overflow-hidden border-y border-white/5 relative">
      {/* Cinematic Spotlight Background - Matching Reference Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-black to-transparent" />
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          20%, 100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .partner-item {
          opacity: 0.1;
          transition: opacity 0.8s ease;
          position: relative;
        }
        .partner-item.is-center {
          opacity: 1;
          z-index: 50;
        }

        /* Logo image styling */
        .partner-item .partner-img-container {
          position: relative;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          transform: scale(0.8);
          overflow: visible;
        }
        
        .partner-item.is-center .partner-img-container {
          transform: scale(2.5);
        }

        .partner-item .partner-img {
          transition: filter 1s ease;
          filter: grayscale(1) brightness(0.6);
        }

        .partner-item.is-center .partner-img {
          filter: grayscale(0) brightness(1.5) drop-shadow(0 0 30px rgba(255, 255, 255, 0.4));
        }

        /* Shine Effect Overlay */
        .partner-item .shine-overlay {
          position: absolute;
          inset: -100%;
          background: linear-gradient(
            to bottom right,
            transparent,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0),
            transparent
          );
          pointer-events: none;
          z-index: 15;
          animation: shine 4s infinite ease-in-out;
        }

        /* Moon Effect Light (Halo behind logo) */
        .partner-item .partner-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          translate: -50% -50%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle at center,
            rgba(255,255,255,0.4) 0%,
            rgba(255,255,255,0.05) 50%,
            transparent 80%
          );
          opacity: 0;
          transform: scale(0.4);
          transition: opacity 1s ease, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 0;
          filter: blur(40px);
        }
        
        .partner-item.is-center .partner-glow {
          opacity: 1;
          transform: scale(1.5);
          background: radial-gradient(circle at center,
            rgba(255,255,255,0.6) 0%,
            rgba(255,255,255,0.15) 50%,
            transparent 80%
          );
        }
      `}</style>

      <div
        ref={containerRef}
        className="flex w-fit animate-marquee whitespace-nowrap items-center"
      >
        {doubled.map((logo, index) => (
          <div
            key={index}
            className="partner-item flex items-center justify-center mx-[30vw] cursor-default"
          >
            {/* White radial spotlight background */}
            <div className="partner-glow" />

            <div className="partner-img-container relative h-16 w-40 z-10">
              <Image
                src={logo.src}
                alt={`Partner ${index + 1}`}
                fill
                className="partner-img object-contain"
              />
              {/* Shine streak moving across */}
              <div className="shine-overlay" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
