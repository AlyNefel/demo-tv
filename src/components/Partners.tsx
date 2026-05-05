"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partnerLogos = [
  { src: "/partner/2.png", invert: false },
  { src: "/partner/3.png", invert: false },
  { src: "/partner/4.png", invert: false },
  { src: "/partner/7.png", invert: false },
  { src: "/partner/8.png", invert: false },
  { src: "/partner/9.png", invert: false },
  { src: "/partner/10.png", invert: false },
  { src: "/partner/11.png", invert: false },
  { src: "/partner/12.png", invert: false },
  { src: "/partner/13.png", invert: false },
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
    <div className="w-full bg-black py-12 overflow-hidden border-y border-white/5 relative">
      {/* Edge fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <style>{`
        .partner-item {
          opacity: 0.45;
          transition: opacity 0.6s ease;
          position: relative;
        }
        .partner-item.is-center {
          opacity: 1;
          z-index: 20;
        }

        /* Logo image zoom */
        .partner-item .partner-img {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.5s ease;
          transform: scale(1);
          filter: drop-shadow(0 0 0px rgba(255,255,255,0));
        }
        .partner-item.is-center .partner-img {
          transform: scale(1.45);
          filter:
            drop-shadow(0 0 12px rgba(255, 255, 255, 1))
            drop-shadow(0 0 30px rgba(255, 255, 255, 0.6))
            drop-shadow(0 0 60px rgba(255, 255, 255, 0.3));
        }

        /* Radial white spotlight behind logo */
        .partner-item .partner-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          translate: -50% -50%;
          width: 200px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center,
            rgba(255,255,255,0.35) 0%,
            rgba(255,255,255,0.12) 40%,
            transparent 70%
          );
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }
        .partner-item.is-center .partner-glow {
          opacity: 1;
          transform: scale(1.5);
        }
      `}</style>

      <div
        ref={containerRef}
        className="flex w-fit animate-marquee whitespace-nowrap items-center"
      >
        {doubled.map((logo, index) => (
          <div
            key={index}
            className="partner-item flex items-center justify-center mx-16 cursor-default"
          >
            {/* White radial spotlight */}
            <div className="partner-glow" />

            <div className="relative h-16 w-40 z-10">
              <Image
                src={logo.src}
                alt={`Partner ${index + 1}`}
                fill
                className={`partner-img object-contain ${logo.invert ? 'invert hue-rotate-180' : ''}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;

