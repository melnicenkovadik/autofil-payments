'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TargetCursorProps {
  selector?: string;
  color?: string;
  size?: number;
}

export function TargetCursor({ 
  selector = 'button, a, [role="button"]', 
  color = 'rgb(168, 85, 247)',
  size = 20 
}: TargetCursorProps) {
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, x: 0, y: 0 });

  useEffect(() => {
    const updateDimensions = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest(selector) as HTMLElement;
      
      if (interactiveElement && interactiveElement !== hoveredElement) {
        setHoveredElement(interactiveElement);
        updateDimensions(interactiveElement);
      } else if (!interactiveElement && hoveredElement) {
        setHoveredElement(null);
      }
    };

    const handleScroll = () => {
      if (hoveredElement) {
        updateDimensions(hoveredElement);
      }
    };

    const handleResize = () => {
      if (hoveredElement) {
        updateDimensions(hoveredElement);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleResize);
    };
  }, [hoveredElement, selector]);

  return (
    <AnimatePresence>
      {hoveredElement && (
        <motion.div
          className="pointer-events-none fixed z-50 rounded-lg"
          style={{
            left: 0,
            top: 0,
            width: dimensions.width + size,
            height: dimensions.height + size,
            transform: `translate(${dimensions.x - size/2}px, ${dimensions.y - size/2}px)`,
            border: `2px solid ${color}`,
            boxShadow: `0 0 20px ${color}40, inset 0 0 20px ${color}20`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </AnimatePresence>
  );
}

