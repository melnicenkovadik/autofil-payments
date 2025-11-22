'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
}

export function PixelCard({ children, className = '' }: PixelCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
    gradient.addColorStop(0, 'rgba(168, 85, 247, 0.3)');
    gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.1)');
    gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleMouseLeave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsHovered(false);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <canvas
        ref={canvasRef}
        width={600}
        height={800}
        className="absolute inset-0 pointer-events-none w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      {children}
    </div>
  );
}

