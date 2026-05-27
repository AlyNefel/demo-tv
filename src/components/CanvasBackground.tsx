"use client";

import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Deep cinematic gradient - drawn once, not in a loop
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, '#0a0508');
      gradient.addColorStop(0.5, '#050203');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle vignette
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height / 2,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.8)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Draw once on load
    draw();

    // Only redraw on resize, not every frame
    const handleResize = () => draw();
    window.addEventListener('resize', handleResize);

    // Pause when tab is hidden (saves battery/GPU on iPhone)
    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default CanvasBackground;
