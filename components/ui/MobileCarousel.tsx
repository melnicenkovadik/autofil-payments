'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface MobileCarouselProps {
  children: ReactNode[];
  className?: string;
}

export function MobileCarousel({ children, className = '' }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > 50) {
      if (offset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (offset < 0 && currentIndex < children.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  useEffect(() => {
    const controls = animate(x, -currentIndex * 100, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    });

    return controls.stop;
  }, [currentIndex, x]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        ref={containerRef}
        className="flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{
          x: useTransform(x, (value) => `${value}%`),
        }}
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            className="min-w-full"
            style={{
              pointerEvents: isDragging ? 'none' : 'auto',
            }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-purple-500'
                : 'w-2 bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

