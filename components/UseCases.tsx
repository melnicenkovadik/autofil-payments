'use client';

import { motion } from 'framer-motion';
import { Briefcase, ShoppingCart, FileText, UserPlus, GraduationCap, Globe2 } from 'lucide-react';
import { MobileCarousel } from './ui/MobileCarousel';

const useCases = [
  {
    icon: Briefcase,
    title: 'Job Applications',
    description: 'Fill job application forms instantly with your professional profile',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ShoppingCart,
    title: 'Online Shopping',
    description: 'Speed through checkout forms with your saved shipping & billing info',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileText,
    title: 'Business Forms',
    description: 'Complete client forms, invoices, and contracts in seconds',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: UserPlus,
    title: 'Sign-ups & Registrations',
    description: 'Breeze through account creation and registration forms',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: GraduationCap,
    title: 'Educational Forms',
    description: 'Apply to courses, scholarships, and programs effortlessly',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Globe2,
    title: 'Any Website',
    description: 'Works on any form, anywhere on the web - no exceptions',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function UseCases() {
  const UseCaseCard = ({ useCase, index }: { useCase: typeof useCases[0]; index: number }) => {
    const Icon = useCase.icon;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative h-full"
      >
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 overflow-hidden h-full">
          {/* Gradient background on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          
          <div className="relative z-10">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} p-3 sm:p-4 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <Icon className="w-full h-full text-white" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
              {useCase.title}
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {useCase.description}
            </p>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="min-h-0 md:min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Perfect For Every Scenario
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Create dedicated profiles for different use cases. Switch between them instantly.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <MobileCarousel>
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="px-4">
                <UseCaseCard useCase={useCase} index={index} />
              </div>
            ))}
          </MobileCarousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.title} useCase={useCase} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 mx-auto"
          >
            Get Started for $2
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

