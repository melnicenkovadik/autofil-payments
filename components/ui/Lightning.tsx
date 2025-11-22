'use client';

import { useEffect, useRef } from 'react';

interface LightningProps {
  color?: string;
  opacity?: number;
  frequency?: number;
}

export function Lightning({ 
  color = 'rgba(168, 85, 247, 0.3)',
  opacity = 0.3,
  frequency = 3000
}: LightningProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawLightning = (x1: number, y1: number, x2: number, y2: number, displace: number) => {
      if (displace < 2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.stroke();
        return;
      }

      let mid_x = (x2 + x1) / 2;
      let mid_y = (y2 + y1) / 2;
      
      mid_x += (Math.random() - 0.5) * displace;
      mid_y += (Math.random() - 0.5) * displace;

      drawLightning(x1, y1, mid_x, mid_y, displace / 2);
      drawLightning(x2, y2, mid_x, mid_y, displace / 2);
    };

    const flash = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = opacity;

      const startX = Math.random() * canvas.width;
      const endX = Math.random() * canvas.width;
      const startY = 0;
      const endY = canvas.height;

      drawLightning(startX, startY, endX, endY, 100);

      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 150);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        flash();
      }
    }, frequency);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, opacity, frequency]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

