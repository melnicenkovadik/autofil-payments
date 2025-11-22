'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileCarouselProps {
  children: ReactNode[];
  className?: string;
}

export function MobileCarousel({ children, className = '' }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < children.length) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-full"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      
      {currentIndex < children.length - 1 && (
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-purple-500'
                : 'w-2 bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-sm text-slate-400">
        {currentIndex + 1} / {children.length}
      </div>
    </div>
  );
}

