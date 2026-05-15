"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partnerLogos = [
  { src: "/partner/2.png", scale: 3.2 },
  { src: "/partner/3.png", scale: 1.3 },
  { src: "/partner/4.png", scale: 1.3 },
  { src: "/partner/7.png", scale: 1.3 },
  { src: "/partner/9.png" },
  { src: "/partner/10.png" },
  { src: "/partner/11.png", scale: 1.3 },
  { src: "/partner/12.png" },
  { src: "/partner/13.png", scale: 1.6 },
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
        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-[#050505] to-transparent" />
      </div>

      <style>{`
        @keyframes border-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

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

        /* Card Container */
        .partner-card {
          position: relative;
          width: 220px;
          height: 120px;
          background: rgba(255, 204, 233, 0.1);
          backdrop-filter: blur(15px);
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(255, 204, 233, 0.3);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .partner-item.is-center .partner-card {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 204, 233, 0.5);
          box-shadow: 0 0 60px rgba(255, 204, 233, 0.3);
        }

        /* Static Glow Border */
        .spinning-border {
          position: absolute;
          inset: -3px;
          background: #f5f5f5;
          opacity: 0.9;
          box-shadow: 
            0 0 15px rgba(255, 255, 255, 0.3), 
            inset 0 0 10px rgba(255, 255, 255, 0.2);
          transition: all 0.8s ease;
        }
        
        .partner-item.is-center .spinning-border {
          box-shadow: 
            0 0 25px rgba(255, 255, 255, 0.5), 
            inset 0 0 15px rgba(255, 255, 255, 0.4);
          opacity: 1;
          background: #ffffff;
        }

        .card-inner::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent);
          pointer-events: none;
          z-index: 20;
        }

        .card-inner {
          position: absolute;
          inset: 2px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border-radius: calc(1.5rem - 2px);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .partner-img {
          transition: all 0.8s ease;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.1));
        }

        .partner-item.is-center .partner-img {
          filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.4));
          transform: scale(1.15);
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
              <div className="spinning-border" />
              <div className="card-inner">
                <div className="relative h-16 w-44">
                  <Image
                    src={logo.src}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="partner-img object-contain"
                    style={{ transform: logo.scale ? `scale(${logo.scale})` : 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
