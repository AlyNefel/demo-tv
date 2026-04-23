"use client";

import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let images: HTMLImageElement[] = [];
    const imageCount = 15; // Number of images to show at once
    const totalImageAssets = 38;

    // Particle class for the floating images and smoke
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      image: HTMLImageElement;
      rotation: number;
      rotationSpeed: number;
      pulse: number;
      pulseSpeed: number;

      constructor(canvasWidth: number, canvasHeight: number, image: HTMLImageElement) {
        this.image = image;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 150 + 100; // Larger for smoke effect
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.2 + 0.05;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.002;
        this.pulse = Math.random() * Math.PI;
        this.pulseSpeed = Math.random() * 0.01 + 0.005;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        this.pulse += this.pulseSpeed;

        if (this.x < -this.size) this.x = canvasWidth + this.size;
        if (this.x > canvasWidth + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvasHeight + this.size;
        if (this.y > canvasHeight + this.size) this.y = -this.size;
      }

      draw(context: CanvasRenderingContext2D) {
        const currentOpacity = this.opacity * (0.8 + Math.sin(this.pulse) * 0.2);
        
        context.save();
        context.globalAlpha = currentOpacity;
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        
        // Pink/Rose glow
        context.shadowBlur = 40;
        context.shadowColor = "rgba(255, 102, 204, 0.4)"; 

        context.drawImage(
          this.image, 
          -this.size / 2, 
          -this.size / 2, 
          this.size, 
          this.size
        );
        context.restore();
      }
    }

    let particles: Particle[] = [];

    const init = async () => {
      // Pick a diverse set of images from the canvas folder
      const ids = [1, 5, 10, 15, 20, 25, 30, 35, 3, 7, 12, 18, 22, 28, 33];
      const loadedImages = await Promise.all(
        ids.map(id => {
          return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.src = `/canvas/${id}.png`;
            img.onload = () => resolve(img);
          });
        })
      );

      images = loadedImages;
      resize();
      
      particles = images.map(img => new Particle(canvas.width, canvas.height, img));
      animate();
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Deep cinematic gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, '#0a0508');
      gradient.addColorStop(0.5, '#050203');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add a subtle vignette
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height / 2,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.8)');
      
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });
      
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    init();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
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
