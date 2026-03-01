"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function InteractiveTechBg() {
  const canvasRef = useRef(null);
  // Don't render on mobile — canvas animation is expensive on slow CPUs
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only run on desktop (lg breakpoint = 1024px)
    if (window.innerWidth < 1024) return;
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let particles = [];
    let mouse = { x: -9999, y: -9999 };
    let lastMouseMove = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMouseMove < 16) return;
      lastMouseMove = now;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const init = () => {
      particles = [];
      // Cap at 60 on desktop for smooth 60fps
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 60);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({ x, y, baseX: x, baseY: y, size: Math.random() * 2.5 + 1, density: Math.random() * 25 + 1 });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const len = particles.length;
      ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';

      for (let i = 0; i < len; i++) {
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;
        const maxDist = 180;

        if (distSq < maxDist * maxDist) {
          const distance = Math.sqrt(distSq);
          const force = (maxDist - distance) / maxDist;
          p.x -= (dx / distance) * force * p.density;
          p.y -= (dy / distance) * force * p.density;
        } else {
          if (p.x !== p.baseX) p.x -= (p.x - p.baseX) / 15;
          if (p.y !== p.baseY) p.y -= (p.y - p.baseY) / 15;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let a = 0; a < len; a++) {
        for (let b = a + 1; b < len; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 32400) {
            const opacity = (1 - Math.sqrt(distSq) / 180) * 0.4;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    const timeoutId = setTimeout(() => animate(), 300);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [show]);

  if (!show) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
      aria-hidden="true"
    />
  );
}
