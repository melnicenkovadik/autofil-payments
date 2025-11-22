'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Lightning } from './ui/Lightning';
import { useEffect, useState } from 'react';

export function Hero() {
  const [timeSaved, setTimeSaved] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSaved(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Lightning background effect */}
      <Lightning color="rgba(168, 85, 247, 0.4)" opacity={0.4} frequency={2000} />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-3 sm:mb-4 md:mb-6"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm text-center">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <span className="text-[10px] sm:text-xs md:text-sm text-purple-300 font-medium">AI-powered • Encrypted • Unlimited</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400"
        >
          Fill Forms in
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
            Seconds
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-4"
        >
          AI-powered autofill for Chrome. All data encrypted and stored locally in your browser. 
          Create unlimited profiles for any scenario. Lifetime access for just{' '}
          <span className="text-purple-400 font-semibold">$2</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center px-4"
        >
          <button
            onClick={() => {
              document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base"
          >
            Try Live Demo
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => {
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            Get Pro for $2
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 sm:mt-12 md:mt-16 text-xs sm:text-sm text-slate-400 px-4"
        >
          <p>No subscription • No cloud storage • AI-powered smart fill • 100% privacy</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4"
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              &lt;1s
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 mt-0.5 sm:mt-1 md:mt-2">Fill Time</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              ∞
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 mt-0.5 sm:mt-1 md:mt-2">Profiles</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              100%
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 mt-0.5 sm:mt-1 md:mt-2">Encrypted</div>
          </div>
        </motion.div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
}

