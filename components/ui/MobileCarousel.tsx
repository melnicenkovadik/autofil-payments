'use client';

import { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ReactNode } from 'react';

interface MobileCarouselProps {
  children: ReactNode[];
  className?: string;
}

export function MobileCarousel({ children, className = '' }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > 100) {
      if (offset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (offset < 0 && currentIndex < children.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {children.map((child, index) => (
          <div key={index} className="min-w-full">
            {child}
          </div>
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

