'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollStackProps {
  children: React.ReactNode[];
  gap?: number;
}

export function ScrollStack({ children, gap = 20 }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <div ref={containerRef} className="relative">
      {children.map((child, index) => {
        const isLast = index === children.length - 1;
        const start = index / children.length;
        const end = (index + 1) / children.length;
        
        const opacity = useTransform(
          scrollYProgress,
          [start - 0.1, start, end, end + 0.1],
          [0, 1, 1, isLast ? 1 : 0.3]
        );
        
        const scale = useTransform(
          scrollYProgress,
          [start - 0.1, start, end, end + 0.1],
          [0.8, 1, 1, isLast ? 1 : 0.95]
        );
        
        const y = useTransform(
          scrollYProgress,
          [start, end],
          [0, -gap * index]
        );

        return (
          <motion.div
            key={index}
            style={{
              opacity,
              scale,
              y,
              position: index === 0 ? 'relative' : 'sticky',
              top: index === 0 ? 0 : gap * index,
              zIndex: children.length - index,
            }}
            className="mb-8"
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}

